// ===== storage =====
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const GKEY = 'ctgenai:global';
const CKEY = n => 'ctgenai:ch' + n;
let G = Object.assign({ xp: 0, streak: 0, lastDay: null, badges: [], theme: null, cur: 1 }, LS.get(GKEY, {}));
const CS = {};
function blankCh() { return { seen: {}, deckDone: {}, quizBest: {}, finalBest: null, finalPass: false, sampleBest: null, mistakes: {}, cards: {}, practice: {}, xpq: {} }; }
function ch(n) { n = n || cur(); if (!CS[n]) CS[n] = Object.assign(blankCh(), LS.get(CKEY(n), {})); return CS[n]; }
function save(n) { G.ts = Date.now(); LS.set(GKEY, G); n = n || cur(); if (CS[n]) LS.set(CKEY(n), CS[n]); if (typeof Cloud !== 'undefined') Cloud.schedule(); }
function cur() { return chapters[G.cur] ? G.cur : 1; }
function D() { return chapters[cur()]; }

// ===== utils =====
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
function h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
function today(off) { const d = new Date(); d.setDate(d.getDate() + (off || 0)); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
function toast(msg) { const t = h(`<div class="toast">${msg}</div>`); $('#toasts').appendChild(t); setTimeout(() => t.remove(), 2900); }
function modal(html, buttons) {
  const bg = h(`<div class="modal-bg"><div class="card modal fade">${html}<div class="row" style="margin-top:16px;justify-content:flex-end"></div></div></div>`);
  const row = $('.row', bg);
  buttons.forEach(b => { const el = h(`<button class="btn ${b.cls || ''}">${b.t}</button>`); el.onclick = () => { bg.remove(); b.fn && b.fn(); }; row.appendChild(el); });
  bg.addEventListener('click', e => { if (e.target === bg) bg.remove(); });
  document.body.appendChild(bg); $('button', row) && $$('button', row).pop().focus();
}
function kchip(k) { return `<span class="chip ${k.toLowerCase()}">${k}</span>`; }
function secById(id) { return D().sections.find(s => s.id === id); }

// ===== gamification =====
const BADGES = [
  { id: 'first', e: '👣', t: 'Перший крок', d: 'Переглянути перший слайд' },
  { id: 'deck', e: '📚', t: 'Колоду пройдено', d: 'Переглянути всі слайди одного розділу' },
  { id: 'quiz100', e: '🎯', t: 'Снайпер', d: 'Квіз розділу на 100%' },
  { id: 'allquiz', e: '🧩', t: 'Усі квізи ≥65%', d: 'Кожен квіз глави пройдено на 65%+' },
  { id: 'sample', e: '📝', t: 'Sample Exam', d: 'Офіційні питання глави ≥65%' },
  { id: 'final', e: '⏱️', t: 'Підсумковий PASS', d: 'Підсумковий тест глави ≥65%' },
  { id: 'cards', e: '🃏', t: 'Картковий маг', d: '20 карток у статусі «Знаю»' },
  { id: 'streak3', e: '🔥', t: 'Streak 3', d: '3 дні поспіль' },
  { id: 'fixer', e: '🛠️', t: 'Над помилками', d: 'Виправити 10 помилок' },
  { id: 'chapter', e: '🏆', t: 'Главу пройдено', d: 'Усі слайди + усі квізи ≥65% + підсумковий PASS' }
];
function bkey(id, n) { return id === 'streak3' ? id : id + ':ch' + (n || cur()); }
function hasBadge(id) { return G.badges.includes(bkey(id)); }
function award(id) {
  const k = bkey(id); if (G.badges.includes(k)) return;
  G.badges.push(k); const b = BADGES.find(x => x.id === id);
  toast(`${b.e} Бейдж: ${b.t}`); addXP(25, true);
}
function addXP(n, silent) { G.xp += n; touchDay(); save(); updateTop(); if (!silent) toast(`+${n} XP`); }
function touchDay() {
  const t = today(); if (G.lastDay === t) return;
  G.streak = G.lastDay === today(-1) ? G.streak + 1 : 1; G.lastDay = t;
  if (G.streak >= 3 && !G.badges.includes('streak3')) { G.badges.push('streak3'); toast('🔥 Бейдж: Streak 3'); }
}
function checkChapterBadges() {
  const s = ch(), d = D();
  const allSeen = d.sections.every(sec => (s.seen[sec.id] || []).length >= d.slides[sec.id].length);
  const allQuiz = d.sections.every(sec => (s.quizBest[sec.id] || 0) >= 65);
  if (allQuiz) award('allquiz');
  if (allSeen && allQuiz && s.finalPass) award('chapter');
}
function updateTop() {
  $('#xp').textContent = G.xp; $('#streak').textContent = G.lastDay === today() || G.lastDay === today(-1) ? G.streak : 0;
  $('#bcount').textContent = G.badges.length;
}
function recordAnswer(q, correct, mode) {
  const s = ch();
  if (!correct) { const m = s.mistakes[q.id] || { n: 0 }; m.n++; m.mode = mode; m.ts = Date.now(); s.mistakes[q.id] = m; }
  else if (s.mistakes[q.id]) { delete s.mistakes[q.id]; s.fixed = (s.fixed || 0) + 1; if (s.fixed >= 10) award('fixer'); }
  if (correct && !s.xpq[q.id]) { s.xpq[q.id] = 1; G.xp += 10; }
  touchDay(); save(); updateTop();
}

// ===== question index =====
let QIDX = null;
function qIndex() {
  if (QIDX && QIDX.ch === cur()) return QIDX.map;
  const d = D(), map = {};
  d.sections.forEach(sec => d.slides[sec.id].forEach(sl => { if (sl.type === 'q') { sl.q.sec = sl.q.sec || sec.id; map[sl.q.id] = Object.assign({ src: 'Перевірка у слайдах' }, sl.q); } }));
  Object.keys(d.quizzes).forEach(k => d.quizzes[k].forEach(q => { q.sec = q.sec || k; map[q.id] = Object.assign({ src: 'Квіз ' + k }, q); }));
  (d.final || []).forEach(q => map[q.id] = Object.assign({ src: 'Підсумковий тест' }, q));
  (d.sample || []).forEach(q => map[q.id] = Object.assign({ src: 'Sample Exam' }, q));
  QIDX = { ch: cur(), map }; return map;
}
function slideIndex(sec, slideId) { const arr = D().slides[sec] || []; const i = arr.findIndex(s => s.id === slideId); return i < 0 ? 0 : i; }

// ===== question component =====
let KEY = null; // current keyboard handler
function questionEl(q, o) {
  o = o || {};
  const need = q.multi || 1;
  const order = q.fixed ? q.opts.map((_, i) => i) : shuffle(q.opts.map((_, i) => i));
  const sec = secById(q.sec) || {};
  const el = h(`<div class="q fade">
    <div class="row small"><span class="chip acc">${q.lo}</span>${kchip(q.k)}<span class="chip">розділ ${q.sec}</span>${q.num ? `<span class="chip">Sample Q${q.num}</span>` : ''}${need > 1 ? '<span class="chip k3">Select TWO</span>' : ''}<span class="spacer"></span>${o.counter || ''}</div>
    <div class="stem">${q.q}</div>
    <div class="opts"></div>
    <div class="actions row" style="margin-top:8px"></div>
    <div class="after"></div></div>`);
  const box = $('.opts', el), sel = new Set();
  let done = false;
  const L = 'abcde';
  order.forEach((oi, pos) => {
    const op = q.opts[oi];
    const b = h(`<button class="opt" data-oi="${oi}"><span class="L">${L[pos]}</span><span class="tx">${op.t}<span class="why" hidden></span></span></button>`);
    b.onclick = () => { if (done || o.exam && o.locked) return; pick(oi); };
    box.appendChild(b);
  });
  const act = $('.actions', el);
  let checkBtn = null;
  if (need > 1 && !o.exam) {
    checkBtn = h(`<button class="btn primary" disabled>Перевірити <span class="kbd">Enter</span></button>`);
    checkBtn.onclick = () => finalize(); act.appendChild(checkBtn);
  }
  function paint() { $$('.opt', box).forEach(b => b.classList.toggle('sel', sel.has(+b.dataset.oi))); if (checkBtn) checkBtn.disabled = sel.size !== need; }
  function pick(oi) {
    if (sel.has(oi)) sel.delete(oi); else { if (need === 1) sel.clear(); else if (sel.size >= need) return; sel.add(oi); }
    paint();
    if (o.exam) { o.onSelect && o.onSelect([...sel]); return; }
    if (need === 1) finalize();
  }
  function finalize(silent) {
    if (done) return; done = true;
    const okSet = q.opts.map((x, i) => x.ok ? i : -1).filter(i => i >= 0);
    const correct = okSet.length === sel.size && okSet.every(i => sel.has(i));
    $$('.opt', box).forEach(b => {
      const oi = +b.dataset.oi, op = q.opts[oi]; b.disabled = true;
      if (op.ok) b.classList.add('correct'); else if (sel.has(oi)) b.classList.add('wrong');
      const w = $('.why', b); if (op.why) { w.innerHTML = (op.ok ? '<b>✓ Правильно.</b> ' : '<b>✗</b> ') + op.why; w.hidden = false; }
    });
    if (checkBtn) checkBtn.remove();
    const after = $('.after', el);
    after.appendChild(h(`<div class="verdict ${correct ? 'ok' : 'bad'}">${correct ? '✅ Правильно!' : (sel.size ? '❌ Неправильно' : '⏳ Немає відповіді')} — правильна відповідь: ${order.map((oi, p) => q.opts[oi].ok ? L[p] : '').join('')}</div>`));
    if (q.official) after.appendChild(h(`<div class="expl"><h4>Official rationale (ISTQB, EN)</h4>${q.official}</div>`));
    if (q.ua) after.appendChild(h(`<div class="expl"><h4>💡 Пояснення тренера</h4>${q.ua}</div>`));
    if (q.exp) after.appendChild(h(`<div class="expl"><h4>Розбір</h4>${q.exp}</div>`));
    const ref = h(`<div class="loref">📍 <b>${q.lo}</b> ${kchip(q.k)} <span class="muted">${sec.id || ''} ${sec.title || ''}</span> <button class="btn ghost small">До слайда →</button></div>`);
    $('button', ref).onclick = () => goSlide(q.sec, q.slide);
    after.appendChild(ref);
    if (!silent && o.onDone) o.onDone(correct, [...sel]);
  }
  if (o.preset) { o.preset.forEach(i => sel.add(i)); paint(); finalize(true); }
  el._key = e => {
    if (done) { if (e.key === 'Enter' && o.onNext) { e.preventDefault(); o.onNext(); } return false; }
    const k = e.key.toLowerCase(); let pos = -1;
    if (/^[1-5]$/.test(k)) pos = +k - 1; else if (/^[a-e]$/.test(k)) pos = L.indexOf(k);
    if (pos >= 0 && pos < order.length) { e.preventDefault(); pick(order[pos]); return true; }
    if (e.key === 'Enter' && checkBtn && !checkBtn.disabled) { e.preventDefault(); finalize(); return true; }
    return false;
  };
  el._finalize = finalize; el._sel = sel;
  return el;
}

// ===== views =====
const VIEWS = [
  ['home', '🏠 Дашборд'], ['learn', '📖 Вчити'], ['quiz', '❓ Квіз'], ['final', '⏱️ Підсумковий тест'],
  ['cards', '🃏 Флеш-картки'], ['review', '🛠️ Робота над помилками'], ['glossary', '🔤 Глосарій']
];
let view = 'home', timerId = null;
const learn = { sec: null, idx: 0 };
function go(v) { if (location.hash !== '#' + v) location.hash = v; else render(); }
function goSlide(sec, slideId) { learn.sec = sec; learn.idx = slideIndex(sec, slideId); go('learn'); }
function render() {
  const v = (location.hash || '#home').slice(1);
  view = VIEWS.some(x => x[0] === v) ? v : 'home';
  if (timerId && view !== 'final') { clearInterval(timerId); timerId = null; exam = null; }
  KEY = null;
  $$('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.v === view));
  const app = $('#app'); app.innerHTML = '';
  ({ home: vHome, learn: vLearn, quiz: vQuiz, final: vFinal, cards: vCards, review: vReview, glossary: vGlossary })[view](app);
  window.scrollTo({ top: 0 });
}

// ---- dashboard
function secProgress(sec) { const s = ch(); return pct((s.seen[sec.id] || []).length, D().slides[sec.id].length); }
function vHome(app) {
  const d = D(), s = ch(), c = COURSE.chapters.find(x => x.id === cur());
  const totalSlides = d.sections.reduce((a, sec) => a + d.slides[sec.id].length, 0);
  const seenSlides = d.sections.reduce((a, sec) => a + (s.seen[sec.id] || []).length, 0);
  const qb = d.sections.map(sec => s.quizBest[sec.id] || 0);
  const chPct = Math.round((pct(seenSlides, totalSlides) + qb.reduce((a, b) => a + b, 0) / qb.length + (s.finalPass ? 100 : (s.finalBest || 0))) / 3);
  const e = COURSE.exam;
  app.appendChild(h(`<div class="fade">
    <h1>Підготовка до ISTQB® CT-GenAI v1.1</h1>
    <p class="muted">Іспит: <b>${e.questions} питань</b>, <b>${e.points} балів</b>, прохідний бал <b>${e.pass} (65%)</b>, <b>${e.minutes} хв</b> (+25% = ${e.extMinutes} хв для іспиту не рідною мовою). K3-питання коштують 2 бали.</p>
  </div>`));
  const grid = h(`<div class="grid g5"></div>`);
  COURSE.chapters.forEach(cc => {
    const open = !!chapters[cc.id];
    const card = h(`<div class="card chcard ${open ? '' : 'locked'}" style="--c:${cc.color}">
      <div class="num">ГЛАВА ${cc.id} ${open ? '' : '· 🔒 скоро'}</div>
      <div class="ttl">${cc.title}</div>
      <div class="small muted">${cc.ua}</div>
      <div class="spacer"></div>
      <div class="small"><b>${cc.examQ}</b> пит. · <b>${cc.examPts}</b> балів · ${pct(cc.examPts, e.points)}% іспиту</div>
      ${open ? `<div class="bar"><i style="width:${cc.id === cur() ? chPct : 0}%;background:${cc.color}"></i></div>` : ''}
    </div>`);
    if (open) { card.style.cursor = 'pointer'; card.onclick = () => { G.cur = cc.id; save(); applyChapter(); render(); }; }
    grid.appendChild(card);
  });
  app.appendChild(grid);

  const map = h(`<div class="card fade" style="margin-top:18px">
    <div class="row"><div class="ring" style="--p:${chPct}"><span>${chPct}%</span></div>
      <div><h2 style="margin:0">Глава ${c.id}: ${c.title}</h2>
      <div class="muted small">${c.minutes} хв навчання за силабусом · на іспиті ${c.examQ} питань (${c.examPts} балів ≈ ${pct(c.examPts, e.points)}%) · ${d.examNote || ''}</div></div></div>
    <div class="tablewrap" style="margin-top:12px"><table class="t"><tr><th>Розділ</th><th>Learning Objective</th><th>K</th><th>Пит. на іспиті</th><th>Слайди</th><th>Квіз (кращий)</th><th></th></tr></table></div>
    <div class="row" style="margin-top:12px"><span class="small muted">Підсумковий тест: <b>${s.finalBest == null ? '—' : s.finalBest + '%'}</b> ${s.finalPass ? '<span class="chip" style="background:var(--okbg);color:var(--ok)">PASS</span>' : ''} · Sample Exam: <b>${s.sampleBest == null ? '—' : s.sampleBest + '%'}</b> · Помилок у роботі: <b>${Object.keys(s.mistakes).length}</b></span></div>
  </div>`);
  const tb = $('table', map);
  d.sections.forEach(sec => {
    const sp = secProgress(sec), qbv = s.quizBest[sec.id];
    const tr = h(`<table><tr>
      <td><b>${sec.id}</b><div class="small muted">${sec.title}</div></td>
      <td><span class="chip acc">${sec.lo}</span><div class="small muted">${sec.loText}</div></td>
      <td>${kchip(sec.k)}</td><td>${sec.examQ}</td>
      <td style="min-width:110px"><div class="small">${sp}%</div><div class="bar"><i style="width:${sp}%"></i></div></td>
      <td style="min-width:110px"><div class="small">${qbv == null ? '—' : qbv + '%'}</div><div class="bar ${qbv >= 65 ? 'ok' : qbv != null ? 'bad' : ''}"><i style="width:${qbv || 0}%"></i></div></td>
      <td><div class="row" style="gap:6px;flex-wrap:nowrap"><button class="btn small" data-a="l">Вчити</button><button class="btn small" data-a="q">Квіз</button></div></td></tr></table>`).querySelector('tr');
    $('[data-a=l]', tr).onclick = () => { learn.sec = sec.id; learn.idx = 0; go('learn'); };
    $('[data-a=q]', tr).onclick = () => { quiz = null; quizPick = sec.id; go('quiz'); };
    tb.querySelector('tbody').appendChild(tr);
  });
  app.appendChild(map);

  const bd = h(`<div class="card fade" style="margin-top:18px"><div class="row"><h2 style="margin:0">Досягнення</h2><span class="spacer"></span><span class="pill">⚡ ${G.xp} XP</span><span class="pill">🔥 streak ${$('#streak').textContent}</span></div>
    <div class="badge-grid" style="margin-top:12px"></div>
    <hr class="sep"><div class="row"><span class="small muted">${Cloud.be ? '☁️ Прогрес синхронізується між пристроями.' : Cloud.state === 'login' ? '🔑 Увійдіть (кнопка вгорі), щоб синхронізувати прогрес між пристроями.' : '💾 Прогрес зберігається в цьому браузері.'}</span><button class="btn small ghost" id="xferBtn">Експорт / імпорт</button><span></span><span class="spacer"></span><button class="btn danger small" id="resetBtn">Скинути прогрес</button></div></div>`);
  BADGES.forEach(b => $('.badge-grid', bd).appendChild(h(`<div class="bdg ${G.badges.includes(bkey(b.id)) ? 'got' : ''}" title="${esc(b.d)}"><div class="e">${b.e}</div><b>${b.t}</b><div>${b.d}</div></div>`)));
  $('#xferBtn', bd).onclick = transferModal;
  $('#resetBtn', bd).onclick = () => modal('<h3>Скинути прогрес?</h3><p class="muted">Що саме скинути? Дію не можна скасувати.</p>', [
    { t: 'Скасувати' },
    { t: 'Лише главу ' + cur(), cls: 'danger', fn: () => { LS.del(CKEY(cur())); delete CS[cur()]; G.badges = G.badges.filter(b => !b.endsWith(':ch' + cur())); save(); toast('Прогрес глави скинуто'); render(); updateTop(); } },
    { t: 'Усе', cls: 'primary', fn: () => { COURSE.chapters.forEach(c => { LS.del(CKEY(c.id)); delete CS[c.id]; }); const th = G.theme; G = { xp: 0, streak: 0, lastDay: null, badges: [], theme: th, cur: 1 }; save(); toast('Увесь прогрес скинуто'); updateTop(); render(); } }
  ]);
  app.appendChild(bd);
}

// ---- learn
function blk(cls, label, html, own) { return `<div class="blk ${cls}"><div class="lbl">${label}${own ? ' <span class="own">💡 тренер</span>' : ''}</div>${html}</div>`; }
function vLearn(app) {
  const d = D();
  const nav = h(`<div class="secnav"></div>`);
  d.sections.forEach(sec => {
    const b = h(`<button class="${learn.sec === sec.id ? 'on' : ''}">${sec.id} · ${sec.short} <span class="muted small">${secProgress(sec)}%</span></button>`);
    b.onclick = () => { learn.sec = sec.id; learn.idx = 0; render(); };
    nav.appendChild(b);
  });
  app.appendChild(h(`<h1 class="fade">Режим «Вчити»</h1>`));
  app.appendChild(nav);
  if (!learn.sec) {
    const g = h(`<div class="grid g3 fade"></div>`);
    d.sections.forEach(sec => {
      const c = h(`<div class="card" style="cursor:pointer"><div class="row"><span class="chip acc">${sec.lo}</span>${kchip(sec.k)}</div><h3>${sec.id} ${sec.title}</h3><div class="small muted">${d.slides[sec.id].length} слайдів · ${secProgress(sec)}% переглянуто</div><div class="bar" style="margin-top:8px"><i style="width:${secProgress(sec)}%"></i></div></div>`);
      c.onclick = () => { learn.sec = sec.id; learn.idx = 0; render(); };
      g.appendChild(c);
    });
    app.appendChild(g);
    app.appendChild(h(`<p class="small muted" style="margin-top:14px">Керування: <span class="kbd">←</span> <span class="kbd">→</span> — гортати слайди, <span class="kbd">1-4</span>/<span class="kbd">A-D</span> — вибрати відповідь.</p>`));
    return;
  }
  const holder = h(`<div></div>`); app.appendChild(holder);
  drawSlide(holder);
}
function drawSlide(holder) {
  const d = D(), sec = secById(learn.sec), arr = d.slides[sec.id], s = ch();
  learn.idx = Math.max(0, Math.min(arr.length - 1, learn.idx));
  const sl = arr[learn.idx];
  const seen = s.seen[sec.id] = s.seen[sec.id] || [];
  if (!seen.includes(learn.idx)) {
    seen.push(learn.idx); G.xp += 2; award('first');
    if (seen.length >= arr.length && !s.deckDone[sec.id]) { s.deckDone[sec.id] = 1; G.xp += 50; toast('📚 Колоду ' + sec.id + ' завершено! +50 XP'); award('deck'); checkChapterBadges(); }
    touchDay(); save(); updateTop();
  }
  holder.innerHTML = '';
  const head = h(`<div class="deck-head"><span class="chip acc">${sec.lo}</span>${kchip(sec.k)}<b>${sec.id} ${sec.title}</b><span class="spacer"></span><span class="small muted">Слайд ${learn.idx + 1} / ${arr.length}</span></div>`);
  holder.appendChild(head);
  const card = h(`<div class="card slide fade"></div>`);
  if (sl.type === 'c') {
    card.innerHTML = `<div class="row small muted">${sl.ref ? '§ ' + sl.ref : ''}</div><h2>${sl.title}</h2><div class="blocks">
      ${blk('syl full', '📘 Із силабусу (EN) · ' + (sl.ref || sec.id), `<div class="en">${sl.syl}</div>`)}
      ${blk('', '🗣 Простими словами', sl.ua, true)}
      ${blk('', '🧪 Приклад з життя тестувальника', sl.ex, true)}
      <div class="full"><div class="lbl small muted" style="font-weight:800;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">🧩 Схема</div>${sl.vis}</div>
      ${blk('memo', '🧠 Як запам\'ятати', sl.memo, true)}
      ${blk('trap', '⚠️ Пастка на іспиті', sl.trap, true)}
    </div>`;
  } else if (sl.type === 'q') {
    card.innerHTML = `<h2>⚡ Швидка перевірка</h2><p class="muted small">Закріпимо попередні слайди. Відповідь зараховується в XP і в «Роботу над помилками».</p>`;
    const qe = questionEl(sl.q, { onDone: (ok) => recordAnswer(sl.q, ok, 'check'), onNext: () => move(1) });
    card.appendChild(qe);
  } else if (sl.type === 'p') {
    const st = s.practice[sl.id] || {};
    card.innerHTML = `<div class="row"><span class="chip k3">Практика · ${sl.ho}</span><span class="chip">hands-on · не екзаменується</span></div><h2>${sl.title}</h2>
      <div class="blk syl">${sl.task}</div>
      <h3>Ваша відповідь / промпт</h3><textarea placeholder="Напишіть тут свою відповідь або промпт…">${esc(st.text || '')}</textarea>
      <div class="row" style="margin-top:8px"><button class="btn primary" data-a="show">Показати еталон і чек-лист</button><span class="small muted">Текст зберігається автоматично.</span></div>
      <div class="pans" ${st.shown ? '' : 'hidden'}><h3>Еталон <span class="own">💡 тренер</span></h3><div class="model">${sl.model}</div>
      <h3>Чек-лист самоперевірки</h3><div class="check-list">${sl.checklist.map((c, i) => `<label><input type="checkbox" data-i="${i}" ${(st.checks || [])[i] ? 'checked' : ''}> <span>${c}</span></label>`).join('')}</div>
      ${sl.note ? `<div class="expl">${sl.note}</div>` : ''}</div>`;
    const ta = $('textarea', card);
    ta.oninput = () => { const p = s.practice[sl.id] = s.practice[sl.id] || {}; p.text = ta.value; save(); };
    ta.addEventListener('keydown', e => e.stopPropagation());
    $('[data-a=show]', card).onclick = () => { const p = s.practice[sl.id] = s.practice[sl.id] || {}; if (!p.shown) { p.shown = 1; addXP(20); } save(); $('.pans', card).hidden = false; };
    $$('input[type=checkbox]', card).forEach(cb => cb.onchange = () => { const p = s.practice[sl.id] = s.practice[sl.id] || {}; p.checks = p.checks || []; p.checks[+cb.dataset.i] = cb.checked; save(); });
  } else if (sl.type === 's') {
    card.innerHTML = `<div class="row"><span class="chip acc">Шпаргалка розділу</span></div><h2>${sl.title || 'Шпаргалка ' + sec.id}</h2>
      <div class="blocks"><div class="blk cheat"><div class="lbl">Головне</div><ul>${sl.points.map(p => `<li>${p}</li>`).join('')}</ul></div><div>${sl.vis}</div></div>
      <div class="row" style="margin-top:14px"><button class="btn primary" data-a="quiz">Пройти квіз ${sec.id} →</button><button class="btn" data-a="next">Наступний розділ</button></div>`;
    $('[data-a=quiz]', card).onclick = () => { quiz = null; quizPick = sec.id; go('quiz'); };
    $('[data-a=next]', card).onclick = () => { const i = d.sections.indexOf(sec); if (d.sections[i + 1]) { learn.sec = d.sections[i + 1].id; learn.idx = 0; render(); } else go('final'); };
  }
  holder.appendChild(card);
  wireVis(card);
  const dots = h(`<div class="dots"></div>`);
  arr.forEach((x, i) => { const dt = h(`<i class="${i === learn.idx ? 'cur' : ''} ${seen.includes(i) ? 'seen' : ''} ${x.type === 'q' || x.type === 'p' ? 'qd' : ''}" title="${i + 1}"></i>`); dt.onclick = () => { learn.idx = i; drawSlide(holder); }; dots.appendChild(dt); });
  const foot = h(`<div class="deck-foot"><button class="btn" ${learn.idx === 0 ? 'disabled' : ''} data-a="p">← Назад</button><span class="spacer"></span><button class="btn primary" ${learn.idx === arr.length - 1 ? 'disabled' : ''} data-a="n">Далі →</button></div>`);
  $('[data-a=p]', foot).onclick = () => move(-1);
  $('[data-a=n]', foot).onclick = () => move(1);
  holder.appendChild(dots); holder.appendChild(foot);
  function move(dx) { const n = learn.idx + dx; if (n < 0 || n >= arr.length) return; learn.idx = n; drawSlide(holder); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  let KEYQ = sl.type === 'q' ? $('.q', card) : null;
  KEY = e => {
    if (KEYQ && KEYQ._key && KEYQ._key(e)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
  };
}
function wireVis(root) {
  $$('.vis', root).forEach(v => {
    const det = $('.vis-detail', v);
    $$('[data-tip]', v).forEach(el => {
      const show = () => { $$('[data-tip].act', v).forEach(x => x.classList.remove('act')); el.classList.add('act'); det.innerHTML = '🔎 ' + esc(el.getAttribute('data-tip')); det.classList.add('on'); };
      el.addEventListener('click', show); el.addEventListener('mouseenter', show); el.addEventListener('focus', show);
    });
  });
}

// ---- quiz
let quiz = null, quizPick = null;
function vQuiz(app) {
  const d = D(), s = ch();
  if (quizPick) { startQuiz(quizPick, d.quizzes[quizPick], false); quizPick = null; }
  if (!quiz) {
    app.appendChild(h(`<div class="fade"><h1>Квіз по розділу</h1><p class="muted">Питання в стилі ISTQB англійською (як на іспиті), розбір кожного варіанта — українською. Варіанти перемішуються щоразу.</p></div>`));
    const g = h(`<div class="grid g3"></div>`);
    d.sections.forEach(sec => {
      const qs = d.quizzes[sec.id], b = s.quizBest[sec.id];
      const ks = {}; qs.forEach(q => ks[q.k] = (ks[q.k] || 0) + 1);
      const c = h(`<div class="card"><div class="row"><span class="chip acc">${sec.lo}</span>${kchip(sec.k)}</div><h3>${sec.id} ${sec.title}</h3>
        <div class="small muted">${qs.length} питань · ${Object.entries(ks).map(([k, n]) => k + ': ' + n).join(', ')} · ${qs.filter(q => q.multi).length} × «Select TWO»</div>
        <div class="small" style="margin:8px 0 4px">Кращий результат: <b>${b == null ? '—' : b + '%'}</b></div><div class="bar ${b >= 65 ? 'ok' : b != null ? 'bad' : ''}"><i style="width:${b || 0}%"></i></div>
        <button class="btn primary" style="margin-top:12px">Почати</button></div>`);
      $('button', c).onclick = () => { startQuiz(sec.id, qs, false); render(); };
      g.appendChild(c);
    });
    app.appendChild(g); return;
  }
  drawQuiz(app);
}
function startQuiz(sec, list, retry, title) { quiz = { sec, list: shuffle(list), i: 0, res: [], retry, title: title || ('Квіз ' + sec), mode: retry === 'review' ? 'review' : 'quiz' }; }
function drawQuiz(app) {
  const qz = quiz;
  if (qz.i >= qz.list.length) return quizSummary(app);
  const q = qz.list[qz.i];
  app.appendChild(h(`<div class="row fade"><h1 style="margin:0">${qz.title}${qz.retry ? ' · повтор помилок' : ''}</h1><span class="spacer"></span><button class="btn ghost" id="qexit">✕ Вийти</button></div>`));
  $('#qexit').onclick = () => { quiz = null; render(); };
  app.appendChild(h(`<div class="bar" style="margin:12px 0"><i style="width:${pct(qz.i, qz.list.length)}%"></i></div>`));
  const next = () => { qz.i++; const a = $('#app'); a.innerHTML = ''; drawQuiz(a); window.scrollTo({ top: 0 }); };
  const nextBtn = h(`<button class="btn primary" disabled style="margin-top:12px">${qz.i === qz.list.length - 1 ? 'Результат' : 'Далі'} → <span class="kbd">Enter</span></button>`);
  const qe = questionEl(q, { counter: `<span class="small muted">${qz.i + 1} / ${qz.list.length}</span>`, onDone: (ok) => { qz.res.push({ q, ok }); recordAnswer(q, ok, qz.mode); nextBtn.disabled = false; nextBtn.focus(); }, onNext: next });
  nextBtn.onclick = next;
  app.appendChild(qe); app.appendChild(nextBtn);
  KEY = e => { qe._key(e); };
}
function quizSummary(app) {
  const qz = quiz, s = ch(), ok = qz.res.filter(r => r.ok).length, p = pct(ok, qz.res.length);
  if (!qz.retry && qz.mode === 'quiz' && !qz.saved) {
    qz.saved = 1; const prev = s.quizBest[qz.sec];
    if (prev == null || p > prev) s.quizBest[qz.sec] = p;
    if (p === 100) award('quiz100');
    addXP(20); checkChapterBadges(); save();
  }
  if (qz.mode === 'sample' && !qz.saved) {
    qz.saved = 1; if (s.sampleBest == null || p > s.sampleBest) s.sampleBest = p;
    if (p >= 65) award('sample'); addXP(20); save();
  }
  const wrong = qz.res.filter(r => !r.ok);
  const c = h(`<div class="card fade"><h1>Результат: ${qz.title}</h1><div class="result-big ${p >= 65 ? 'pass' : 'fail'}">${ok} / ${qz.res.length} · ${p}%</div>
    <p class="muted">${p >= 65 ? 'Добре! Поріг 65% пройдено.' : 'Нижче 65% — перегляньте слайди розділу і повторіть помилки.'}</p>
    <h3>Помилки (${wrong.length})</h3><div class="wl"></div>
    <div class="row" style="margin-top:14px"><button class="btn primary" data-a="r" ${wrong.length ? '' : 'disabled'}>Повторити тільки помилки</button><button class="btn" data-a="a">Пройти ще раз</button><button class="btn ghost" data-a="b">До списку квізів</button></div></div>`);
  const wl = $('.wl', c);
  if (!wrong.length) wl.innerHTML = '<p class="muted">Помилок немає 🎉</p>';
  wrong.forEach(r => { const it = h(`<div class="gl-item"><div>${r.q.q}</div><div class="row small" style="margin-top:4px"><span class="chip acc">${r.q.lo}</span>${kchip(r.q.k)}<button class="btn ghost small">До слайда →</button></div></div>`); $('button', it).onclick = () => goSlide(r.q.sec, r.q.slide); wl.appendChild(it); });
  $('[data-a=r]', c).onclick = () => { const l = wrong.map(r => r.q); quiz = { sec: qz.sec, list: shuffle(l), i: 0, res: [], retry: true, title: qz.title, mode: qz.mode }; render(); };
  $('[data-a=a]', c).onclick = () => { const all = qz.mode === 'quiz' && !qz.retry ? qz.list : qz.list; quiz = { sec: qz.sec, list: shuffle(all), i: 0, res: [], retry: qz.retry, title: qz.title, mode: qz.mode }; render(); };
  $('[data-a=b]', c).onclick = () => { quiz = null; render(); };
  app.appendChild(c);
}

// ---- final + sample
let exam = null, finalTab = 'final';
function vFinal(app) {
  const d = D(), s = ch();
  if (exam && exam.done) return examResult(app);
  if (exam) return drawExam(app);
  app.appendChild(h(`<div class="fade"><h1>Підсумковий тест · Глава ${cur()}</h1></div>`));
  const tabs = h(`<div class="secnav"><button data-t="final">⏱️ Підсумковий тест (${d.final.length})</button><button data-t="sample">📝 Official Sample Exam v1.1 (${d.sample.length})</button></div>`);
  $$('button', tabs).forEach(b => { b.classList.toggle('on', b.dataset.t === finalTab); b.onclick = () => { finalTab = b.dataset.t; render(); }; });
  app.appendChild(tabs);
  if (finalTab === 'final') {
    const n = d.final.length, base = Math.round(n * 1.5), ext = Math.round(n * 1.5 * 1.25 * 10) / 10;
    const bySec = {}; d.final.forEach(q => bySec[q.sec] = (bySec[q.sec] || 0) + 1);
    const c = h(`<div class="card fade"><h2 style="margin-top:0">Режим іспиту</h2>
      <p>${n} нових питань по всіх розділах глави (не повторюють квізи). Відповіді та розбір — після завершення, як на реальному іспиті. Поріг: <b>65%</b>.</p>
      <p class="small muted">Розподіл: ${Object.entries(bySec).map(([k, v]) => k + ' — ' + v).join(' · ')}</p>
      <p class="small muted">Кращий результат: <b>${s.finalBest == null ? '—' : s.finalBest + '%'}</b> ${s.finalPass ? '(PASS)' : ''}</p>
      <div class="row"><button class="btn primary" data-m="${base}">Старт · ${base} хв (1,5 хв/пит.)</button><button class="btn" data-m="${ext}">Старт · ${String(ext).replace('.', ',')} хв (+25%, не рідна мова)</button></div></div>`);
    $$('[data-m]', c).forEach(b => b.onclick = () => { startExam(+b.dataset.m); render(); });
    app.appendChild(c);
  } else {
    const c = h(`<div class="card fade"><h2 style="margin-top:0">Офіційні питання Sample Exam A v1.1 до глави 1</h2>
      <p>Питання ${d.sample.map(q => 'Q' + q.num).join(', ')} з офіційного Sample Exam (у справжньому іспиті питання перемішані, тут — за LO). Після кожної відповіді: офіційний rationale ISTQB (EN) і пояснення тренера українською. Варіанти <b>не</b> перемішуються, бо rationale посилається на літери.</p>
      <p class="small muted">Кращий результат: <b>${s.sampleBest == null ? '—' : s.sampleBest + '%'}</b></p>
      <button class="btn primary">Почати</button></div>`);
    $('button', c).onclick = () => { quiz = { sec: 'sample', list: d.sample.slice(), i: 0, res: [], retry: false, title: 'Sample Exam v1.1 · Глава ' + cur(), mode: 'sample' }; go('quiz'); };
    app.appendChild(c);
  }
}
function startExam(min) {
  exam = { list: shuffle(D().final), ans: {}, flags: {}, i: 0, end: Date.now() + min * 60000, min, done: false };
  timerId = setInterval(tick, 1000);
}
function tick() {
  if (!exam || exam.done) return;
  const left = Math.max(0, exam.end - Date.now()), t = $('#timer');
  if (t) { const m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000); t.textContent = `${m}:${String(s).padStart(2, '0')}`; t.classList.toggle('low', left < 120000); }
  if (left <= 0) { finishExam(); toast('⏰ Час вийшов'); }
}
function drawExam(app) {
  const ex = exam, q = ex.list[ex.i];
  const top = h(`<div class="row fade"><h1 style="margin:0">Підсумковий тест</h1><span class="spacer"></span><span class="timer" id="timer">--:--</span><button class="btn primary" id="finish">Завершити</button></div>`);
  app.appendChild(top);
  const qn = h(`<div class="qnav"></div>`);
  ex.list.forEach((x, i) => { const b = h(`<button class="${i === ex.i ? 'cur' : ''} ${ex.ans[x.id] && ex.ans[x.id].length ? 'ans' : ''} ${ex.flags[x.id] ? 'flag' : ''}">${i + 1}</button>`); b.onclick = () => { ex.i = i; redraw(); }; qn.appendChild(b); });
  app.appendChild(qn);
  const qe = questionEl(q, { exam: true, counter: `<span class="small muted">${ex.i + 1} / ${ex.list.length}</span>`, onSelect: sel => { ex.ans[q.id] = sel; const b = $$('.qnav button')[ex.i]; b && b.classList.toggle('ans', sel.length > 0); } });
  (ex.ans[q.id] || []).forEach(i => qe._sel.add(i));
  $$('.opt', qe).forEach(b => b.classList.toggle('sel', qe._sel.has(+b.dataset.oi)));
  app.appendChild(qe);
  const nav = h(`<div class="row" style="margin-top:12px"><button class="btn" data-a="p" ${ex.i === 0 ? 'disabled' : ''}>← Назад</button><button class="btn ghost" data-a="f">${ex.flags[q.id] ? '🚩 Зняти позначку' : '🚩 Позначити'}</button><span class="spacer"></span><button class="btn primary" data-a="n" ${ex.i === ex.list.length - 1 ? 'disabled' : ''}>Далі →</button></div>`);
  $('[data-a=p]', nav).onclick = () => { ex.i--; redraw(); };
  $('[data-a=n]', nav).onclick = () => { ex.i++; redraw(); };
  $('[data-a=f]', nav).onclick = () => { ex.flags[q.id] = !ex.flags[q.id]; redraw(); };
  app.appendChild(nav);
  app.appendChild(h(`<p class="small muted">Порада: на питання «Select TWO» треба вибрати рівно два варіанти. <span class="kbd">←</span><span class="kbd">→</span> — навігація, <span class="kbd">1-4</span> — вибір.</p>`));
  $('#finish').onclick = () => {
    const un = ex.list.filter(x => !(ex.ans[x.id] || []).length).length;
    modal(`<h3>Завершити тест?</h3><p class="muted">${un ? 'Без відповіді: ' + un + ' пит.' : 'На всі питання є відповіді.'}</p>`, [{ t: 'Продовжити' }, { t: 'Завершити', cls: 'primary', fn: finishExam }]);
  };
  tick();
  function redraw() { const a = $('#app'); a.innerHTML = ''; drawExam(a); }
  KEY = e => {
    if (qe._key(e)) return;
    if (e.key === 'ArrowRight' && ex.i < ex.list.length - 1) { ex.i++; redraw(); }
    else if (e.key === 'ArrowLeft' && ex.i > 0) { ex.i--; redraw(); }
  };
}
function isCorrect(q, sel) { const ok = q.opts.map((o, i) => o.ok ? i : -1).filter(i => i >= 0); return !!sel && ok.length === sel.length && ok.every(i => sel.includes(i)); }
function finishExam() {
  if (!exam || exam.done) return;
  clearInterval(timerId); timerId = null; exam.done = true;
  const s = ch(); let ok = 0;
  exam.list.forEach(q => { const c = isCorrect(q, exam.ans[q.id]); if (c) ok++; recordAnswer(q, c, 'final'); });
  const p = pct(ok, exam.list.length); exam.score = { ok, p };
  if (s.finalBest == null || p > s.finalBest) s.finalBest = p;
  if (p >= 65) { if (!s.finalPass) { s.finalPass = true; addXP(100); } award('final'); }
  save(); checkChapterBadges();
  if (view === 'final') render(); else go('final');
}
function examResult(app) {
  const ex = exam, d = D(), p = ex.score.p, pass = p >= 65;
  const secs = {}; ex.list.forEach(q => { const r = secs[q.sec] = secs[q.sec] || { n: 0, ok: 0 }; r.n++; if (isCorrect(q, ex.ans[q.id])) r.ok++; });
  const weak = d.sections.filter(sc => secs[sc.id] && pct(secs[sc.id].ok, secs[sc.id].n) < 65);
  const c = h(`<div class="card fade"><h1>Результат підсумкового тесту</h1>
    <div class="row"><div class="result-big ${pass ? 'pass' : 'fail'}">${pass ? 'PASS' : 'FAIL'}</div><div><div style="font-size:1.4rem;font-weight:800">${ex.score.ok} / ${ex.list.length} · ${p}%</div><div class="muted small">Поріг 65% · ліміт ${String(ex.min).replace('.', ',')} хв</div></div></div>
    <h3>Розбивка по розділах</h3><div class="sb"></div>
    <h3>Рекомендації</h3><div class="rec"></div>
    <div class="row" style="margin-top:14px"><button class="btn primary" data-a="again">Пройти ще раз</button><button class="btn" data-a="rev">Робота над помилками</button></div></div>`);
  const sb = $('.sb', c);
  d.sections.forEach(sc => { const r = secs[sc.id]; if (!r) return; const pp = pct(r.ok, r.n); sb.appendChild(h(`<div style="margin:8px 0"><div class="row small"><b>${sc.id}</b> ${sc.short}<span class="spacer"></span>${r.ok}/${r.n} · ${pp}%</div><div class="bar ${pp >= 65 ? 'ok' : 'bad'}"><i style="width:${pp}%"></i></div></div>`)); });
  const rec = $('.rec', c);
  if (!weak.length) rec.innerHTML = `<p>Усі розділи ≥65%. ${pass ? 'Перейдіть до офіційних питань Sample Exam або повторіть флеш-картки.' : ''}</p>`;
  weak.forEach(sc => { const it = h(`<div class="row" style="margin:6px 0">📖 Перечитай розділ <b>${sc.id} ${sc.title}</b> (${sc.lo}) і пройди квіз ще раз <button class="btn small">Відкрити слайди</button></div>`); $('button', it).onclick = () => { exam = null; learn.sec = sc.id; learn.idx = 0; go('learn'); }; rec.appendChild(it); });
  $('[data-a=again]', c).onclick = () => { exam = null; render(); };
  $('[data-a=rev]', c).onclick = () => { exam = null; go('review'); };
  app.appendChild(c);
  app.appendChild(h(`<h2>Розбір усіх питань</h2>`));
  ex.list.forEach((q, i) => app.appendChild(questionEl(q, { preset: ex.ans[q.id] || [], counter: `<span class="small muted">#${i + 1}</span>` })));
  wireVis(app);
}

// ---- flashcards
let fcCur = null;
function cardWeight(box) { return box >= 3 ? 1 : box === 2 ? 3 : 6; }
function pickCard(list, s) {
  const pool = list.filter(c => list.length < 2 || c.id !== (fcCur && fcCur.id));
  const tot = pool.reduce((a, c) => a + cardWeight((s.cards[c.id] || {}).box || 0), 0);
  let r = Math.random() * tot;
  for (const c of pool) { r -= cardWeight((s.cards[c.id] || {}).box || 0); if (r <= 0) return c; }
  return pool[0];
}
function vCards(app) {
  const d = D(), s = ch(), list = d.flashcards;
  const known = list.filter(c => ((s.cards[c.id] || {}).box || 0) >= 2).length;
  app.appendChild(h(`<div class="fade"><h1>Флеш-картки</h1><p class="muted">Лицьова сторона — термін (EN), зворот — визначення (EN) і просте пояснення (UA). Невивчені картки з'являються частіше.</p>
    <div class="row small"><span>Вивчено: <b>${known}</b> / ${list.length}</span><div class="bar" style="flex:1;max-width:300px"><i style="width:${pct(known, list.length)}%"></i></div></div></div>`));
  if (!fcCur || !list.includes(fcCur)) fcCur = pickCard(list, s);
  const c = fcCur, st = s.cards[c.id] || {};
  const w = h(`<div class="fc-wrap fade" style="margin-top:16px"><div class="fc"><div class="front"><div class="small muted">${c.sec} · ${c.kind || 'term'}</div><div class="term">${c.term}</div><div class="small muted" style="margin-top:14px">Клік або <span class="kbd">Пробіл</span> — перевернути</div></div>
    <div class="back"><div class="small muted">${c.term} · розділ ${c.sec}</div><div class="en">${c.en}</div><div>${c.ua}</div></div></div>
    <div class="row" style="justify-content:center;margin-top:14px"><button class="btn danger" data-a="r">↺ Повторити <span class="kbd">←</span></button><button class="btn primary" data-a="k">✓ Знаю <span class="kbd">→</span></button></div>
    <p class="small muted" style="text-align:center">Рівень картки: ${'●'.repeat(st.box || 0)}${'○'.repeat(3 - Math.min(3, st.box || 0))}</p></div>`);
  const fc = $('.fc', w);
  fc.onclick = () => fc.classList.toggle('flip');
  const grade = k => {
    const cs = s.cards[c.id] = s.cards[c.id] || { box: 0 };
    if (k) { cs.box = Math.min(3, (cs.box || 0) + 1); if (!cs.xp) { cs.xp = 1; G.xp += 3; } } else cs.box = 0;
    if (list.filter(x => ((s.cards[x.id] || {}).box || 0) >= 2).length >= Math.min(20, list.length)) award('cards');
    touchDay(); save(); updateTop(); fcCur = pickCard(list, s); render();
  };
  $('[data-a=r]', w).onclick = () => grade(false);
  $('[data-a=k]', w).onclick = () => grade(true);
  app.appendChild(w);
  KEY = e => {
    if (e.key === ' ') { e.preventDefault(); fc.classList.toggle('flip'); }
    else if (e.key === 'ArrowRight') grade(true);
    else if (e.key === 'ArrowLeft') grade(false);
  };
}

// ---- review
function vReview(app) {
  const s = ch(), idx = qIndex(), d = D();
  const ids = Object.keys(s.mistakes).filter(id => idx[id]);
  app.appendChild(h(`<div class="fade"><h1>Робота над помилками</h1><p class="muted">Сюди потрапляють неправильні відповіді з усіх режимів. Правильна відповідь на питання прибирає його зі списку.</p></div>`));
  if (!ids.length) { app.appendChild(h(`<div class="card empty">Помилок немає. Пройдіть квіз або підсумковий тест — і тут з'являться слабкі місця.</div>`)); return; }
  const bySec = {}; ids.forEach(id => { const q = idx[id]; (bySec[q.sec] = bySec[q.sec] || []).push(q); });
  const max = Math.max(...Object.values(bySec).map(a => a.length));
  const w = h(`<div class="card fade"><h2 style="margin-top:0">Слабкі розділи</h2><div class="ws"></div><div class="row" style="margin-top:12px"><button class="btn primary" id="allm">Пройти всі помилки (${ids.length})</button></div></div>`);
  d.sections.filter(sc => bySec[sc.id]).sort((a, b) => bySec[b.id].length - bySec[a.id].length).forEach(sc => {
    const n = bySec[sc.id].length;
    const r = h(`<div style="margin:8px 0"><div class="row small"><b>${sc.id}</b> ${sc.short}<span class="spacer"></span>${n} пом.<button class="btn small ghost" data-a="s">Слайди →</button><button class="btn small" data-a="q">Повторити</button></div><div class="bar bad"><i style="width:${pct(n, max)}%"></i></div></div>`);
    $('[data-a=s]', r).onclick = () => { learn.sec = sc.id; learn.idx = 0; go('learn'); };
    $('[data-a=q]', r).onclick = () => { startQuiz(sc.id, bySec[sc.id], 'review', 'Помилки ' + sc.id); go('quiz'); };
    $('.ws', w).appendChild(r);
  });
  $('#allm', w).onclick = () => { startQuiz('mix', ids.map(id => idx[id]), 'review', 'Усі помилки'); go('quiz'); };
  app.appendChild(w);
  app.appendChild(h(`<h2>Список помилок</h2>`));
  ids.sort((a, b) => s.mistakes[b].ts - s.mistakes[a].ts).forEach(id => {
    const q = idx[id], m = s.mistakes[id];
    const it = h(`<div class="card" style="margin:8px 0"><div class="row small"><span class="chip acc">${q.lo}</span>${kchip(q.k)}<span class="chip">${q.src}</span><span class="chip">помилок: ${m.n}</span></div><div style="margin:8px 0">${q.q}</div>
      <div class="row"><button class="btn small" data-a="t">Розібрати знову</button><button class="btn small ghost" data-a="s">До слайда →</button></div><div class="ins"></div></div>`);
    $('[data-a=s]', it).onclick = () => goSlide(q.sec, q.slide);
    $('[data-a=t]', it).onclick = e => { e.target.disabled = true; $('.ins', it).appendChild(questionEl(q, { onDone: ok => { recordAnswer(q, ok, 'review'); } })); };
    app.appendChild(it);
  });
}

// ---- glossary
let glQ = '';
function vGlossary(app) {
  app.appendChild(h(`<div class="fade"><h1>Глосарій</h1><p class="muted">Терміни з силабусу (визначення — з Appendix D або тексту розділу). Пошук по всіх відкритих главах.</p></div>`));
  const inp = h(`<input class="search" placeholder="Пошук: token, embedding, chatbot, контекст…" value="${esc(glQ)}">`);
  app.appendChild(inp);
  const list = h(`<div class="card" style="margin-top:12px"></div>`); app.appendChild(list);
  const all = [];
  COURSE.chapters.forEach(c => { if (chapters[c.id]) chapters[c.id].glossary.forEach(g => all.push(Object.assign({ ch: c.id }, g))); });
  all.sort((a, b) => a.term.localeCompare(b.term));
  const draw = () => {
    const q = glQ.trim().toLowerCase();
    const f = all.filter(g => !q || (g.term + ' ' + g.en + ' ' + g.ua).toLowerCase().includes(q));
    list.innerHTML = f.length ? '' : '<div class="empty">Нічого не знайдено</div>';
    f.forEach(g => list.appendChild(h(`<div class="gl-item"><div class="row"><b>${g.term}</b><span class="chip">гл. ${g.ch} · ${g.sec}</span>${g.src ? `<span class="small muted">${g.src}</span>` : ''}</div><div class="en">${g.en}</div><div class="small">${g.ua}</div></div>`)));
  };
  inp.oninput = () => { glQ = inp.value; draw(); };
  inp.addEventListener('keydown', e => e.stopPropagation());
  draw(); setTimeout(() => inp.focus(), 0);
}


// ===== cloud sync =====
// Backends: Supabase (standalone PWA, window.SB_CONFIG) · Claude artifact db · local only
function withTimeout(p, ms) { return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej({ code: 'timeout' }), ms))]); }
const SBKEY = 'ctgenai:sb';
const SB = {
  cfg: (window.SB_CONFIG && window.SB_CONFIG.url && !/YOUR-/.test(window.SB_CONFIG.url + window.SB_CONFIG.anonKey)) ? window.SB_CONFIG : null,
  sess: LS.get(SBKEY, null),
  hdr(extra) { const h = { apikey: this.cfg.anonKey, 'Content-Type': 'application/json' }; if (this.sess) h.Authorization = 'Bearer ' + this.sess.access_token; return Object.assign(h, extra || {}); },
  async api(path, opt) {
    const r = await fetch(this.cfg.url.replace(/\/$/, '') + path, opt);
    const txt = await r.text(); let j = null; try { j = txt ? JSON.parse(txt) : null; } catch (e) {}
    if (!r.ok) throw { code: r.status === 401 || r.status === 403 ? 'auth' : 'http', status: r.status, message: (j && (j.msg || j.message || j.error_description || j.error)) || txt };
    return j;
  },
  store(j, user) {
    this.sess = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + (+j.expires_in || 3600) * 1000, user: { id: (user || j.user).id, email: (user || j.user).email } };
    LS.set(SBKEY, this.sess);
  },
  logout() { this.sess = null; LS.del(SBKEY); },
  async signIn(email, password) {
    const j = await this.api('/auth/v1/token?grant_type=password', { method: 'POST', headers: { apikey: this.cfg.anonKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    this.store(j);
  },
  async signUp(email, password) {
    const j = await this.api('/auth/v1/signup?redirect_to=' + encodeURIComponent(location.origin + location.pathname), { method: 'POST', headers: { apikey: this.cfg.anonKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    if (j && j.access_token) { this.store(j); return 'in'; }
    return 'confirm'; // email confirmation is on in Supabase
  },
  async sendCode(email) {
    const redirect = encodeURIComponent(location.origin + location.pathname);
    await this.api('/auth/v1/otp?redirect_to=' + redirect, { method: 'POST', headers: this.hdr(), body: JSON.stringify({ email, create_user: true }) });
  },
  async verify(email, token) {
    const j = await this.api('/auth/v1/verify', { method: 'POST', headers: { apikey: this.cfg.anonKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'email', email, token }) });
    this.store(j);
  },
  async fromHash() { // magic-link redirect: #access_token=…&refresh_token=…&expires_in=…
    const h = location.hash; if (!/access_token=/.test(h)) return false;
    const q = new URLSearchParams(h.slice(1));
    history.replaceState(null, '', location.pathname + '#home');
    const tmp = { access_token: q.get('access_token'), refresh_token: q.get('refresh_token'), expires_in: q.get('expires_in') };
    this.sess = { access_token: tmp.access_token };
    const u = await this.api('/auth/v1/user', { headers: this.hdr() });
    this.store(tmp, u); return true;
  },
  async refresh() {
    const j = await this.api('/auth/v1/token?grant_type=refresh_token', { method: 'POST', headers: { apikey: this.cfg.anonKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: this.sess.refresh_token }) });
    this.store(j);
  },
  async ensure() {
    if (!this.sess) throw { code: 'login' };
    if (Date.now() > this.sess.expires_at - 60000) {
      try { await this.refresh(); } catch (e) { if (e.code === 'auth' || e.status === 400) { this.logout(); throw { code: 'login' }; } throw e; }
    }
  },
  async call(fn) { await this.ensure(); try { return await fn(); } catch (e) { if (e.code === 'auth') { await this.refresh().catch(() => { this.logout(); throw { code: 'login' }; }); return fn(); } throw e; } },
  backend() {
    const me = this;
    return {
      async get() { const rows = await me.call(() => me.api('/rest/v1/progress?select=data,ts&user_id=eq.' + me.sess.user.id, { headers: me.hdr() })); return rows && rows[0] ? rows[0].data : null; },
      async set(d) { await me.call(() => me.api('/rest/v1/progress?on_conflict=user_id', { method: 'POST', headers: me.hdr({ Prefer: 'resolution=merge-duplicates,return=minimal' }), body: JSON.stringify({ user_id: me.sess.user.id, data: d, ts: d.ts }) })); }
    };
  }
};
const Cloud = {
  be: null, kind: 'local', ready: false, busy: false, dirty: false, t: null, state: 'local', msg: '', startTs: G.ts || 0,
  LABEL: { local: '💾 Локально', sync: '⏳ Синхронізація…', ok: '☁️ Синхронізовано', err: '⚠️ Немає зв’язку', login: '🔑 Увійти' },
  setState(st, msg) { this.state = st; this.msg = msg || ''; const el = $('#sync'); if (el) { el.textContent = this.LABEL[st]; el.title = this.msg; } },
  snapshot() {
    const chs = {};
    COURSE.chapters.forEach(c => { const v = CS[c.id] || LS.get(CKEY(c.id), null); if (v) chs[c.id] = v; });
    return JSON.parse(JSON.stringify({ v: 1, ts: G.ts || 0, g: G, ch: chs }));
  },
  apply(d) {
    const th = G.theme;
    G = Object.assign({ xp: 0, streak: 0, lastDay: null, badges: [], theme: th, cur: 1 }, d.g || {});
    G.ts = d.ts; LS.set(GKEY, G);
    Object.keys(CS).forEach(k => delete CS[k]);
    COURSE.chapters.forEach(c => { if (d.ch && d.ch[c.id]) LS.set(CKEY(c.id), d.ch[c.id]); else LS.del(CKEY(c.id)); });
    QIDX = null; quiz = null; applyTheme(); applyChapter(); updateTop();
    if (!exam) render();
  },
  async init() {
    if (SB.cfg) {
      this.kind = 'supabase';
      try { await SB.fromHash(); } catch (e) { toast('Не вдалося увійти за посиланням — спробуйте код з листа'); }
      if (!SB.sess) return this.setState('login', 'Увійдіть (email + пароль), щоб синхронізувати прогрес між пристроями.');
      this.be = SB.backend(); return this.pull(true);
    }
    const c = window.claude;
    if (!c || typeof c.use !== 'function') return this.setState('local', 'Прогрес зберігається лише в цьому браузері.');
    this.setState('sync', 'Підключення до хмари…');
    try {
      const [db, user] = await Promise.all([c.use('db'), c.use('user')]);
      const id = user ? await user.id() : null;
      if (!db || !id) return this.setState('local', 'Хмарне збереження недоступне в цьому перегляді (потрібен вхід у claude.ai). Прогрес — лише в цьому браузері.');
      const ref = db.doc('data/users/' + id + '/progress');
      this.kind = 'claude';
      this.be = { get: async () => { const s = await ref.get(); return s.exists ? s.data() : null; }, set: d => ref.set(d) };
      await this.pull(true);
    } catch (e) { this.setState('err', 'Не вдалося підключитися до хмари (' + (e && e.code || 'error') + '). Прогрес зберігається локально.'); }
  },
  okMsg() { return this.kind === 'supabase' ? 'Прогрес збережено в хмарі (' + (SB.sess ? SB.sess.user.email : '') + ')' : 'Прогрес збережено у вашому акаунті claude.ai'; },
  fail(e) {
    if (e && e.code === 'login') { this.be = null; this.ready = false; return this.setState('login', 'Сесія завершилась — увійдіть знову.'); }
    if (e && e.code === 'revoked') this.be = null;
    this.setState('err', e && e.code === 'timeout' ? 'Хмара не відповідає. Прогрес зберігається локально, синхронізую пізніше.' : 'Помилка синхронізації (' + ((e && (e.message || e.code)) || 'error') + ').');
  },
  async pull(first) {
    if (!this.be) return;
    this.setState('sync');
    try {
      const raw = await withTimeout(this.be.get(), 10000);
      const r = raw ? JSON.parse(JSON.stringify(raw)) : null;
      const base = first ? this.startTs : (G.ts || 0);
      this.ready = true;
      if (r && (r.ts || 0) > base) { this.apply(r); if (first) toast('☁️ Прогрес завантажено з хмари'); this.setState('ok', this.okMsg()); }
      else if (!r || (r.ts || 0) < (G.ts || 0)) { this.dirty = true; await this.flush(); }
      else this.setState('ok', this.okMsg());
    } catch (e) { this.fail(e); }
  },
  schedule() { if (!this.be || !this.ready) return; this.dirty = true; clearTimeout(this.t); this.t = setTimeout(() => this.flush(), 1500); },
  async flush() {
    if (!this.be || this.busy || !this.dirty) return;
    this.busy = true; this.dirty = false; this.setState('sync');
    try { await withTimeout(this.be.set(this.snapshot()), 15000); this.setState('ok', this.okMsg()); }
    catch (e) {
      const code = e && e.code;
      if (code === 'login' || code === 'revoked' || code === 'invalid_argument' || code === 'quota_exceeded' || (code === 'http' && e.status < 500)) this.fail(e);
      else { this.dirty = true; this.setState('err', 'Немає зв’язку — повторю спробу.'); setTimeout(() => { this.busy = false; this.flush(); }, 4000 + Math.random() * 3000); this.busy = true; return; }
    }
    this.busy = false;
    if (this.dirty && this.state !== 'err') this.flush();
  }
};
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') { if (Cloud.ready && !Cloud.busy && !Cloud.dirty) Cloud.pull(false); }
  else if (Cloud.dirty) { clearTimeout(Cloud.t); Cloud.flush(); }
});
window.addEventListener('online', () => { if (Cloud.be && Cloud.dirty) { Cloud.busy = false; Cloud.flush(); } });

function loginModal() {
  const bg = h(`<div class="modal-bg"><div class="card modal fade"><h3>🔑 Вхід</h3>
    <p class="small muted">Увійдіть, щоб прогрес був однаковим на телефоні й комп’ютері. Перший раз натисніть «Створити акаунт».</p>
    <input class="search em" type="email" placeholder="Email" autocomplete="email" value="${esc(LS.get('ctgenai:lastEmail', ''))}">
    <input class="search pw" type="password" placeholder="Пароль (мін. 6 символів)" autocomplete="current-password" style="margin-top:8px">
    <div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn ghost" data-a="x">Скасувати</button><button class="btn" data-a="up">Створити акаунт</button><button class="btn primary" data-a="in">Увійти</button></div>
    <div class="small err" style="margin-top:8px"></div></div></div>`);
  const err = $('.err', bg), em = $('.em', bg), pw = $('.pw', bg);
  const msg = (t, ok) => { err.textContent = t; err.style.color = ok ? 'var(--ok)' : 'var(--bad)'; };
  $$('input', bg).forEach(i => i.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); $('[data-a=in]', bg).click(); } }));
  $('[data-a=x]', bg).onclick = () => bg.remove();
  const done = async () => { bg.remove(); toast('✅ Ви увійшли'); Cloud.be = SB.backend(); Cloud.startTs = G.ts || 0; await Cloud.pull(true); render(); };
  const check = () => {
    const v = em.value.trim(), p = pw.value;
    if (!/^\S+@\S+\.\S+$/.test(v)) { msg('Перевірте email'); return null; }
    if (p.length < 6) { msg('Пароль — щонайменше 6 символів'); return null; }
    LS.set('ctgenai:lastEmail', v); return [v, p];
  };
  const run = async (btn, fn) => { const c = check(); if (!c) return; msg(''); $$('button', bg).forEach(b => b.disabled = true); try { await fn(c[0], c[1]); } catch (x) {
      const m = (x.message || x.code || 'помилка') + '';
      msg(/invalid login/i.test(m) ? 'Невірний email або пароль' : /already registered|already exists/i.test(m) ? 'Такий акаунт уже є — натисніть «Увійти»' : /not confirmed/i.test(m) ? 'Підтвердіть email за посиланням із листа, потім увійдіть' : /signups not allowed|disabled/i.test(m) ? 'Реєстрацію вимкнено в налаштуваннях Supabase' : 'Помилка: ' + m);
    } $$('button', bg).forEach(b => b.disabled = false); };
  $('[data-a=in]', bg).onclick = e => run(e.target, async (v, p) => { await SB.signIn(v, p); await done(); });
  $('[data-a=up]', bg).onclick = e => run(e.target, async (v, p) => {
    const r = await SB.signUp(v, p);
    if (r === 'in') await done(); else msg('Акаунт створено. Відкрийте лист від Supabase і підтвердіть email, потім натисніть «Увійти».', true);
  });
  bg.addEventListener('click', e => { if (e.target === bg) bg.remove(); });
  document.body.appendChild(bg); setTimeout(() => (em.value ? pw : em).focus(), 0);
}
function transferModal() {
  const data = JSON.stringify(Cloud.snapshot());
  const bg = h(`<div class="modal-bg"><div class="card modal fade" style="max-width:560px"><h3>Експорт / імпорт прогресу</h3>
    <p class="small muted">Скопіюйте текст, щоб перенести прогрес в іншу версію тренажера (наприклад, із claude.ai у власний застосунок). Щоб імпортувати — вставте текст і натисніть «Імпортувати»: поточний прогрес буде замінено.</p>
    <textarea spellcheck="false" style="min-height:160px;font-family:var(--mono);font-size:.75rem"></textarea>
    <div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn" data-a="x">Закрити</button><button class="btn" data-a="cp">📋 Копіювати</button><button class="btn primary" data-a="im">Імпортувати</button></div>
    <div class="small msg" style="margin-top:8px"></div></div></div>`);
  const ta = $('textarea', bg), msg = $('.msg', bg); ta.value = data;
  ta.addEventListener('keydown', e => e.stopPropagation());
  $('[data-a=x]', bg).onclick = () => bg.remove();
  $('[data-a=cp]', bg).onclick = async () => { try { await navigator.clipboard.writeText(ta.value); msg.textContent = '✅ Скопійовано'; } catch (e) { ta.select(); msg.textContent = 'Виділіть текст і скопіюйте вручну (Ctrl/Cmd + C).'; } };
  $('[data-a=im]', bg).onclick = () => {
    let d; try { d = JSON.parse(ta.value); } catch (e) { msg.textContent = '❌ Це не схоже на експорт тренажера'; return; }
    if (!d || typeof d !== 'object' || !d.g || !d.ch) { msg.textContent = '❌ Це не схоже на експорт тренажера'; return; }
    d.ts = Date.now(); Cloud.apply(d); save(); bg.remove(); toast('✅ Прогрес імпортовано');
  };
  bg.addEventListener('click', e => { if (e.target === bg) bg.remove(); });
  document.body.appendChild(bg);
}
function syncInfo() {
  if (Cloud.state === 'login') return loginModal();
  const btns = [{ t: 'Закрити' }, { t: 'Експорт / імпорт', fn: transferModal }];
  if (Cloud.kind === 'supabase' && SB.sess) btns.splice(1, 0, { t: 'Вийти', cls: 'danger', fn: () => { SB.logout(); Cloud.be = null; Cloud.ready = false; Cloud.setState('login', 'Ви вийшли. Прогрес на цьому пристрої залишився локально.'); render(); } });
  if (Cloud.be) btns.push({ t: 'Синхронізувати зараз', cls: 'primary', fn: () => { if (Cloud.dirty) { Cloud.busy = false; Cloud.flush(); } else Cloud.pull(false); } });
  const note = Cloud.kind === 'supabase' ? 'Прогрес синхронізується через ваш акаунт на всіх пристроях.' : 'За посиланням у claude.ai прогрес зберігається у вашому акаунті claude.ai. Скачаний файл зберігає прогрес лише локально.';
  modal(`<h3>${Cloud.LABEL[Cloud.state]}</h3><p>${esc(Cloud.msg || '')}</p><p class="small muted">${note}</p>`, btns);
}

// ===== init =====
function applyTheme() {
  const t = G.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
}
function applyChapter() {
  const c = COURSE.chapters.find(x => x.id === cur()), r = document.documentElement.style;
  r.setProperty('--accent', c.color); r.setProperty('--accent-soft', hexA(c.color, .13)); r.setProperty('--accent-mid', hexA(c.color, .32));
  $('#chLabel').textContent = 'Глава ' + c.id; QIDX = null;
}
function init() {
  const tabs = $('#tabs');
  VIEWS.forEach(([v, t]) => { const b = h(`<button data-v="${v}">${t}</button>`); b.onclick = () => { if (v === 'quiz') quiz = null; go(v); }; tabs.appendChild(b); });
  $('#themeBtn').onclick = () => { G.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; save(); applyTheme(); };
  document.addEventListener('keydown', e => {
    if (e.target.matches && e.target.matches('input,textarea')) return;
    if (document.querySelector('.modal-bg')) { if (e.key === 'Escape') $('.modal-bg').remove(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    KEY && KEY(e);
  });
  window.addEventListener('hashchange', render);
  $('#sync').onclick = syncInfo;
  applyTheme(); applyChapter(); updateTop(); render();
  Cloud.setState('local', 'Перевіряю хмарне збереження…');
  setTimeout(() => Cloud.init(), 0);
}
init();
