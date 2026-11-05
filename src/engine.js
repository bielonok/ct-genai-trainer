// ===== helpers & visual builders (used by chapter data) =====
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const COURSE = {
  name: 'ISTQB® CT-GenAI v1.1',
  exam: { questions: 40, points: 46, pass: 30, minutes: 60, extMinutes: 75 },
  chapters: [
    { id: 1, title: 'Introduction to Generative AI for Software Testing', ua: 'Вступ до GenAI для тестування ПЗ', minutes: 100, examQ: 7, examPts: 7, color: '#7c5cff' },
    { id: 2, title: 'Prompt Engineering for Effective Software Testing', ua: 'Промпт-інжиніринг для тестування', minutes: 365, examQ: 11, examPts: 16, color: '#0d9488' },
    { id: 3, title: 'Managing Risks of Generative AI in Software Testing', ua: 'Керування ризиками GenAI', minutes: 160, examQ: 10, examPts: 11, color: '#ea580c' },
    { id: 4, title: 'LLM-Powered Test Infrastructure for Software Testing', ua: 'Тестова інфраструктура на базі LLM', minutes: 110, examQ: 5, examPts: 5, color: '#2563eb' },
    { id: 5, title: 'Deploying and Integrating Generative AI in Test Organizations', ua: 'Впровадження GenAI у тестових організаціях', minutes: 80, examQ: 7, examPts: 7, color: '#db2777' }
  ]
};
const chapters = {};

const V = {
  tip(t) { return t ? ` data-tip="${esc(t)}" tabindex="0"` : ''; },
  wrap(inner) { return `<div class="vis">${inner}<div class="vis-detail">👆 Натисніть або наведіть на елемент схеми, щоб побачити деталі</div></div>`; },
  flow(items) {
    return V.wrap(`<div class="v-flow">${items.map((it, i) => (i ? '<div class="v-arrow">→</div>' : '') +
      `<div class="v-box"${V.tip(it.tip)}><b>${it.t}</b>${it.s ? `<small>${it.s}</small>` : ''}</div>`).join('')}</div>`);
  },
  stack(items) {
    return V.wrap(`<div class="v-stack">${items.map((it, i) =>
      `<div class="v-step" style="margin-left:${i * 6}%"${V.tip(it.tip)}><b>${it.t}</b>${it.s ? `<small>${it.s}</small>` : ''}</div>`).join('')}</div>`);
  },
  cards(items) {
    return V.wrap(`<div class="v-cards">${items.map(it =>
      `<div class="v-card"${V.tip(it.tip)}>${it.ic ? `<div class="ic">${it.ic}</div>` : ''}<b>${it.t}</b>${it.s ? `<small>${it.s}</small>` : ''}</div>`).join('')}</div>`);
  },
  compare(head, rows) {
    return V.wrap(`<div class="tablewrap"><table class="v-cmp"><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(r =>
      `<tr${V.tip(r.tip)}>${r.c.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`);
  },
  ba(a, b, arrow) {
    const side = s => `<div class="side"${V.tip(s.tip)}><h4>${s.t}</h4><ul>${s.items.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
    return V.wrap(`<div class="v-ba">${side(a)}<div class="v-arrow">${arrow || '⇄'}</div>${side(b)}</div>`);
  },
  tokens(list, note) {
    return V.wrap(`<div class="v-tokens">${list.map((t, i) => `<span${V.tip('Токен #' + (i + 1) + ': «' + t.replace(/·/g, ' ') + '»')}>${esc(t)}</span>`).join('')}</div>${note ? `<div class="small muted" style="margin-top:8px">${note}</div>` : ''}`);
  },
  raw(html) { return V.wrap(html); }
};
