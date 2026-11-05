// ===================== CHAPTER 1 =====================
chapters[1] = {
  examNote: '1 × K1 + 6 × K2, усі по 1 балу',
  sections: [
    { id: '1.1.1', short: 'AI Spectrum', title: 'AI Spectrum: Symbolic AI, Classical ML, Deep Learning and GenAI', lo: 'GenAI-1.1.1', k: 'K1', examQ: 1, loText: 'Recall different types of AI: symbolic AI, classical machine learning, deep learning, and generative AI' },
    { id: '1.1.2', short: 'Basics of GenAI & LLMs', title: 'Basics of Generative AI and LLMs', lo: 'GenAI-1.1.2', k: 'K2', examQ: 2, loText: 'Explain the basics of generative AI and large language models (HO-1.1.2: tokenization)' },
    { id: '1.1.3', short: 'Foundation / Instruction / Reasoning', title: 'Foundation, Instruction-Tuned and Reasoning LLMs', lo: 'GenAI-1.1.3', k: 'K2', examQ: 1, loText: 'Distinguish between foundation, instruction-tuned and reasoning LLMs' },
    { id: '1.1.4', short: 'Multimodal & VLM', title: 'Multimodal LLMs and Vision-Language Models', lo: 'GenAI-1.1.4', k: 'K2', examQ: 1, loText: 'Appendix B: Summarize the basic principles of multimodal LLMs and vision-language models · Гл. 1: Write and execute a given prompt… using a multimodal LLM (HO-1.1.4)' },
    { id: '1.2.1', short: 'LLM capabilities', title: 'Key LLM Capabilities for Test Tasks', lo: 'GenAI-1.2.1', k: 'K2', examQ: 1, loText: 'Give examples of key LLM capabilities for test tasks' },
    { id: '1.2.2', short: 'Chatbots vs Apps', title: 'AI Chatbots and LLM-Powered Testing Applications', lo: 'GenAI-1.2.2', k: 'K2', examQ: 1, loText: 'Compare interaction models when using GenAI for software testing' }
  ],
  slides: {}, quizzes: {}, final: [], sample: [], glossary: [], flashcards: []
};
const C1 = chapters[1];
function Q(id, sec, slide, q, opts, x) {
  const s = C1.sections.find(z => z.id === sec);
  return Object.assign({ id, sec, lo: s.lo, k: s.k, slide, q, opts: opts.map(o => ({ t: o[0], ok: !!o[1], why: o[2] })) }, x || {});
}

// ---------- 1.1.1 ----------
const SVG_AI = `<svg viewBox="0 0 640 300" role="img" aria-label="AI spectrum">
<rect x="10" y="10" width="620" height="280" rx="18" class="n" data-tip="Artificial Intelligence — широка галузь, що охоплює різні технології зі своїм способом розв'язувати задачі (у силабусі — 4 типи, інші поза scope)."/>
<text x="26" y="36" font-weight="700">Artificial Intelligence (AI)</text>
<rect x="30" y="60" width="172" height="130" rx="14" class="a" data-tip="Symbolic AI: rule-based system, знання як symbols + logical rules. НЕ навчається на даних — тому стоїть окремо від ML."/>
<text x="46" y="92" font-weight="700">Symbolic AI</text><text x="46" y="114" class="lbl2">правила + символи</text><text x="46" y="134" class="lbl2">IF … THEN …</text>
<rect x="220" y="48" width="400" height="232" rx="14" class="n" data-tip="Classical ML: data-driven; потрібні data preparation, feature selection (людиною) і model training. Напр. defect categorization."/>
<text x="236" y="74" font-weight="700">Machine Learning (classical ML)</text>
<rect x="244" y="88" width="362" height="180" rx="14" class="n" data-tip="Deep learning: neural networks самі вивчають features з великих складних даних (зображення, відео, аудіо, текст)."/>
<text x="260" y="114" font-weight="700">Deep Learning</text><text x="372" y="114" class="lbl2">neural networks</text>
<rect x="268" y="128" width="324" height="128" rx="14" class="a" data-tip="Generative AI: використовує deep learning, щоб СТВОРЮВАТИ новий контент (text, images, code), імітуючи патерни training data."/>
<text x="284" y="156" font-weight="700">Generative AI</text><text x="284" y="178" class="lbl2">створює новий контент</text>
<rect x="420" y="190" width="156" height="50" rx="10" class="n" data-tip="LLM — GenAI-модель, попередньо навчена на великих текстових датасетах (детально — розділ 1.1.2)."/>
<text x="478" y="221" font-weight="700">LLMs</text>
</svg>`;
C1.slides['1.1.1'] = [
  { id: 'ai-map', type: 'c', ref: '1.1.1', title: 'AI — це не одна технологія, а спектр',
    syl: 'Artificial Intelligence (AI) is a broad field that encompasses different types of technologies, each with its own unique way of solving problems, such as <b>symbolic AI, classical machine learning, deep learning, and GenAI</b>.',
    ua: 'AI — «парасолька». Під нею живуть різні підходи: одні працюють за правилами, інші вчаться на даних. Для іспиту треба знати чотири: <b>Symbolic AI → Classical ML → Deep Learning → Generative AI</b>. Кожен наступний (крім symbolic) спирається на попередній: GenAI — це частина deep learning, а deep learning — частина ML.',
    ex: 'Ваш стек на проєкті може містити все одразу: валідатор тарифів на жорстких правилах (symbolic), модель, що позначає дублікати баг-репортів (classical ML), розпізнавання тексту на скриншоті (deep learning) і чат-асистента, що пише тест-кейси (GenAI).',
    vis: V.raw(SVG_AI),
    memo: '<b>«Сам Мудро Глибоко Генерує»</b> — S·M·D·G: <b>S</b>ymbolic → <b>M</b>L → <b>D</b>eep learning → <b>G</b>enAI. Матрьошка: GenAI ⊂ DL ⊂ ML ⊂ AI, а Symbolic AI стоїть поруч.',
    trap: 'Symbolic AI — це AI, але <b>не</b> machine learning: він не навчається на даних. Інші технології AI існують, але «outside the scope of this syllabus» — на іспиті лише ці чотири.' },
  { id: 'symbolic', type: 'c', ref: '1.1.1', title: 'Symbolic AI — правила і символи',
    syl: 'Symbolic AI uses a <b>rule-based system</b> to mimic human decision-making. Essentially, symbolic AI represents knowledge using <b>symbols and logical rules</b>.',
    ua: 'Людина-експерт заздалегідь записує знання у вигляді правил «ЯКЩО … ТО …». Система нічого не «вчить» — вона просто застосовує правила. Поведінка прозора і передбачувана, але нові ситуації без правила вона не опрацює.',
    ex: 'Рушій бізнес-правил для бронювання поїздок: «ЯКЩО пасажиру менше 6 років → квиток безкоштовний; ЯКЩО багаж > 20 кг → доплата». Ви тестуєте його класичною decision table testing з CTFL — кожне правило = стовпець таблиці.',
    vis: V.flow([
      { t: 'Facts', s: 'age = 5, bag = 23 kg', tip: 'Вхідні факти (symbols), які система отримує.' },
      { t: 'Rules', s: 'IF age < 6 THEN free', tip: 'Логічні правила, записані людиною. Саме тут «знання» системи.' },
      { t: 'Inference', s: 'застосувати правила', tip: 'Механізм просто перебирає правила — жодного навчання на даних.' },
      { t: 'Decision', s: 'free ticket + surcharge', tip: 'Результат імітує рішення людини-експерта.' }
    ]),
    memo: 'Symbolic = <b>«Символи + Силогізми»</b>. Уявіть шахового арбітра з товстою книгою правил: він нічого не вчить, лише звіряється з книгою.',
    trap: 'Ключові слова в питанні: <i>rule-based, symbols, logical rules, mimic human decision-making</i> → Symbolic AI. Якщо бачите <i>data-driven, training, features</i> — це вже ML, не symbolic.' },
  { id: 'classical', type: 'c', ref: '1.1.1', title: 'Classical Machine Learning — дані + ручні features',
    syl: 'Classical machine learning is a <b>data-driven approach</b> that requires <b>data preparation, feature selection and model training</b>, and can be used for tasks such as <b>defect categorization and predicting software problems</b>.',
    ua: 'Модель сама знаходить залежності в даних, але людина має підготувати дані й вирішити, <b>які ознаки (features)</b> важливі. Feature — це вимірюваний атрибут вхідних даних, напр. «кількість змінених рядків».',
    ex: 'Команда хоче передбачати, які модулі найімовірніше містять дефекти. Ви збираєте історію: кількість комітів, розмір змін, кількість минулих багів у модулі (це features) → тренуєте модель → вона підказує, куди спрямувати регрес.',
    vis: V.flow([
      { t: '1. Data preparation', s: 'зібрати й очистити', tip: 'Історія дефектів, комітів, тестових прогонів — очищення, розмітка.' },
      { t: '2. Feature selection', s: 'людина обирає ознаки', tip: 'Ключова відмінність від DL: features визначає людина (напр. lines changed, # past defects).' },
      { t: '3. Model training', s: 'навчання на даних', tip: 'Алгоритм вчиться на підготовлених даних.' },
      { t: '4. Prediction', s: 'defect categorization', tip: 'Приклади з силабусу: defect categorization, predicting software problems.' }
    ]),
    memo: 'Classical ML = <b>«ПОТ»</b>: <b>П</b>ідготовка даних → <b>О</b>знаки (features) → <b>Т</b>ренування. Без поту людини не буде features.',
    trap: 'Пастка «feature selection»: у classical ML features обирає людина, у deep learning вони вивчаються <b>automatically</b>. Приклади задач силабусу — defect categorization і predicting software problems — належать саме classical ML.' },
  { id: 'chk-111a', type: 'q', q: Q('c111-1', '1.1.1', 'classical', 'A tool predicts which modules are likely to contain defects. Engineers first cleaned historical data and manually chose attributes such as "number of commits" and "lines changed" before training the model. Which type of AI is this?', [
    ['Symbolic AI', 0, 'Symbolic AI не тренується на даних — він застосовує записані людиною правила.'],
    ['Classical machine learning', 1, 'Data preparation + ручний feature selection + model training — точне визначення classical ML; передбачення проблем ПЗ — приклад із силабусу.'],
    ['Deep learning', 0, 'Deep learning вивчає features автоматично; тут features обирали вручну.'],
    ['Generative AI', 0, 'GenAI створює новий контент; тут модель класифікує/передбачає.']
  ]) },
  { id: 'deep', type: 'c', ref: '1.1.1', title: 'Deep Learning — нейромережі самі знаходять features',
    syl: 'Deep learning uses machine learning structures called <b>neural networks</b> to <b>automatically learn features</b> from data… can find patterns in very large and complex datasets, such as images, video, audio, or text, without the need for users to manually define features, though in practice, it may <b>still require human involvement</b> in tasks such as data annotation, model tuning, or result validation.',
    ua: 'Нейромережа отримує «сирі» дані (пікселі, звук, текст) і сама розуміє, на що дивитися. Тому DL справляється з величезними та складними даними. Але люди не зникають: хтось розмічає дані, налаштовує модель і перевіряє результати.',
    ex: 'Модель, яка дивиться на тисячі скриншотів і сама вчиться відрізняти «зламаний layout» від нормального. Ніхто не писав їй правило «кнопка не має виходити за межі контейнера» — вона знайшла ознаки сама. Але QA все одно розмічав приклади й валідував результати.',
    vis: V.compare(['', 'Classical ML', 'Deep Learning'], [
      { c: ['Хто визначає features', 'Людина (feature selection)', 'Мережа — <b>automatically</b>'], tip: 'Головна відмінність для іспиту.' },
      { c: ['Структура', 'Різні ML-алгоритми', '<b>Neural networks</b>'], tip: 'Deep learning — це ML з багатошаровими нейромережами (Appendix D).' },
      { c: ['Дані', 'Підготовлені, структуровані', 'Very large & complex: images, video, audio, text'], tip: 'DL знаходить патерни у великих складних датасетах.' },
      { c: ['Роль людини', 'Велика: data prep, features', 'Все ще є: annotation, tuning, validation'], tip: 'Пастка: DL НЕ означає «зовсім без людей».' }
    ]),
    memo: '<b>Deep = Deeper layers</b>: чим глибше мережа, тим більше вона «бачить» сама. Але навіть глибоководному водолазу потрібна команда на палубі (annotation, tuning, validation).',
    trap: 'Неправильні варіанти часто кажуть «deep learning requires no human involvement». Силабус: <i>may still require human involvement</i>. Також не плутайте: neural networks — це <b>deep learning</b>, а не symbolic AI.' },
  { id: 'genai', type: 'c', ref: '1.1.1', title: 'Generative AI — створює новий контент без додаткового навчання',
    syl: 'Generative AI uses <b>deep learning techniques to create new content</b> (text, images, code) by learning and mimicking patterns from its training data… The key advantage of using GenAI for software testing is that it uses <b>pre-trained models</b> that can be applied directly to test tasks <b>without the need for an additional training phase</b>, although this does come with some risks (see Section 3.1).',
    ua: 'GenAI не просто класифікує, а <b>генерує</b>: текст, код, зображення. Головний плюс для тестувальника: модель вже навчена — ви одразу пишете промпт і отримуєте результат, без власного датасету і тренування. Мінус — ризики (галюцинації тощо, глава 3).',
    ex: 'Порівняйте: щоб classical ML класифікував баг-репорти, треба тижні збирати та розмічати дані. Щоб LLM згенерувала 15 тест-кейсів для API <code>POST /bookings</code>, достатньо вставити специфікацію в промпт — і перевірити результат.',
    vis: V.ba(
      { t: 'Classical ML для тестів', items: ['Зібрати дані', 'Підготувати й обрати features', 'Натренувати модель', 'Лише потім — використовувати'], tip: 'Потрібна окрема фаза навчання під вашу задачу.' },
      { t: 'GenAI для тестів', items: ['Pre-trained model вже готова', 'Промпт → результат одразу', '<b>Без</b> additional training phase', 'Але: ризики (Section 3.1)'], tip: 'Key advantage з силабусу: застосування напряму до test tasks.' }, '→'),
    memo: '<b>GenAI = «Готове + Генерує»</b>: pre-trained (готове) і створює нове (генерує).',
    trap: 'Типовий дистрактор: «GenAI requires an additional training phase before it can be used for test tasks» — навпаки. Але й «GenAI has no risks» — теж хибно: силабус одразу згадує ризики.' },
  { id: 'chk-111b', type: 'q', q: Q('c111-2', '1.1.1', 'genai', 'According to the syllabus, what is the KEY advantage of using generative AI for software testing?', [
    ['It applies symbolic rules that make its outputs fully deterministic', 0, 'Це радше про symbolic AI; LLM — non-deterministic (1.1.2).'],
    ['It uses pre-trained models that need no additional training phase', 1, 'Дослівно key advantage з 1.1.1 (з приміткою про ризики, Section 3.1).'],
    ['It removes the need for data annotation, model tuning and result validation', 0, 'Перевірка результату потрібна завжди; ця фраза перекручує текст про deep learning.'],
    ['It requires testers to manually select features before each use', 0, 'Manual feature selection — ознака classical ML.']
  ]) },
  { id: 'sum-111', type: 's', title: 'Шпаргалка 1.1.1 · AI Spectrum (K1)',
    points: ['<b>Symbolic AI</b> — rule-based system; knowledge = symbols + logical rules; імітує рішення людини; не вчиться на даних.',
      '<b>Classical ML</b> — data-driven: data preparation → <b>feature selection</b> → model training. Приклади: defect categorization, predicting software problems.',
      '<b>Deep learning</b> — neural networks <b>automatically</b> learn features; великі складні дані; люди все ще потрібні (annotation, tuning, validation).',
      '<b>GenAI</b> — deep learning, що <b>створює новий контент</b> (text, images, code).',
      'Key advantage GenAI: <b>pre-trained</b> → застосовується напряму, <b>без additional training phase</b> (але з ризиками).'],
    vis: V.stack([{ t: 'Symbolic AI', s: 'правила', tip: 'Rules & symbols' }, { t: 'Classical ML', s: 'дані + ручні features', tip: 'Feature selection людиною' }, { t: 'Deep Learning', s: 'нейромережі, авто-features', tip: 'Neural networks' }, { t: 'Generative AI', s: 'створює новий контент', tip: 'Pre-trained, без додаткового тренування' }]) }
];

// ---------- 1.1.2 ----------
const SVG_EMB = `<svg viewBox="0 0 640 260" role="img" aria-label="embedding space">
<rect x="10" y="10" width="620" height="240" rx="14" class="n"/>
<line x1="40" y1="225" x2="610" y2="225" class="ln"/><line x1="40" y1="225" x2="40" y2="30" class="ln"/>
<text x="470" y="244" class="lbl2">високовимірний простір (спрощено до 2D)</text>
<ellipse cx="170" cy="90" rx="105" ry="48" class="a" data-tip="Кластер значення «дефект»: bug, defect, failure — близькі вектори, бо схожі значення/контекст."/>
<circle cx="120" cy="80" r="6" class="acc"/><text x="132" y="85">bug</text>
<circle cx="185" cy="70" r="6" class="acc"/><text x="197" y="75">defect</text>
<circle cx="160" cy="112" r="6" class="acc"/><text x="172" y="117">failure</text>
<ellipse cx="420" cy="150" rx="120" ry="45" class="a" data-tip="Кластер «вхід у систему»: login, sign in, authenticate — різне написання, але близьке значення."/>
<circle cx="360" cy="140" r="6" class="acc"/><text x="372" y="145">login</text>
<circle cx="430" cy="168" r="6" class="acc"/><text x="442" y="173">sign in</text>
<circle cx="470" cy="128" r="6" class="acc"/><text x="482" y="133">authenticate</text>
<circle cx="560" cy="52" r="7" class="n" data-tip="«invoice» далеко від обох кластерів: інше значення → вектор далеко."/><text x="510" y="80">invoice</text>
</svg>`;
const SVG_CTX = `<svg viewBox="0 0 640 250" role="img" aria-label="context window">
${[0,1,2,3,4,5,6,7,8].map(i => `<rect x="${20 + i*67}" y="70" width="60" height="70" rx="8" class="${i < 4 ? 'n' : 'a'}" opacity="${i < 4 ? .45 : 1}" data-tip="${i < 4 ? 'Ці токени вже ЗА межами context window — модель їх не враховує («забуває»), навіть якщо там була важлива деталь.' : 'Токени всередині context window — модель «бачить» їх при генерації відповіді.'}"/><text x="${32 + i*67}" y="110" class="lbl2">${['INFO','INFO','ERROR','WARN','INFO','INFO','DEBUG','INFO','ERROR'][i]}</text>`).join('')}
<rect x="284" y="56" width="340" height="98" rx="12" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" class="acc" style="stroke:var(--accent);fill:none" data-tip="Context window — кількість попереднього тексту в ТОКЕНАХ, яку модель може врахувати. Більше вікно → краща зв'язність довгих текстів (напр. великих логів), але більша обчислювальна складність і час."/>
<text x="400" y="45" font-weight="700">context window</text>
<text x="40" y="45" class="lbl2">← «забуті» токени</text>
<text x="20" y="180" class="lbl2">Якщо перший ERROR випав із вікна, LLM може помилитися</text><text x="20" y="200" class="lbl2">з першопричиною.</text>
<text x="20" y="228" class="lbl2">Більше вікно → більше контексту, але ↑ складність і час.</text>
</svg>`;
C1.slides['1.1.2'] = [
  { id: 'llm', type: 'c', ref: '1.1 / 1.1.2', title: 'GenAI і LLM: що це таке',
    syl: 'Generative AI is a branch of AI that uses <b>large, pre-trained models</b> to generate human-like output, such as text, images, or code. LLMs are GenAI models that are <b>pre-trained on large textual datasets</b>… Based on the <b>generative pre-trained transformer</b> deep learning model, LLMs are trained on very large datasets, including books, articles, and websites.',
    ua: 'LLM — це GenAI-модель для тексту. Її «нагодували» величезною кількістю книжок, статей і сайтів, тому вона вміє розуміти контекст і відповідати на промпти. Архітектурна основа — <b>GPT = Generative Pre-trained Transformer</b>: генерує (G), навчена заздалегідь (P), побудована на transformer (T).',
    ex: 'Ви вставляєте user story «Як пасажир, я хочу скасувати бронювання до 24 год до відправлення» і просите тест-кейси. LLM не «знає» вашу систему — вона спирається на патерни з навчальних даних і на те, що ви дали в промпті.',
    vis: V.flow([
      { t: 'Training data', s: 'books, articles, websites', tip: 'Very large datasets — джерело «знань» моделі.' },
      { t: 'Pre-training', s: 'GPT', tip: 'Generative pre-trained transformer — deep learning модель, на якій базуються LLM.' },
      { t: 'Prompt', s: 'ваш запит + контекст', tip: 'Модель визначає контекст і генерує релевантну відповідь на промпт.' },
      { t: 'Output', s: 'text · code', tip: 'Human-like output. Пам’ятайте: plausible ≠ correct.' }
    ]),
    memo: '<b>G-P-T = «Генерує, Підготовлена, Трансформер»</b>.',
    trap: 'GPT — це тип моделі/архітектури (generative pre-trained transformer), а не лише назва конкретного продукту. LLM навчені саме на <b>текстових</b> даних (books, articles, websites).' },
  { id: 'slm', type: 'c', ref: '1.1.2', title: 'LLM vs SLM',
    syl: '<b>Small language models (SLMs)</b> are compact models with <b>fewer parameters</b> compared to large language models, designed to provide <b>lightweight and focused</b> GenAI solutions.',
    ua: 'SLM — «компактна» модель. Менше параметрів → легша, дешевша, швидша, і зазвичай заточена під конкретну задачу. Appendix D: SLM <i>intentionally designed and trained to be small</i> — баланс між ефективністю і розумінням мови для конкретних задач.',
    ex: 'Невелика модель, яка лише класифікує рядки CI-логів на «infra / test / product issue», може бути SLM, бо задача вузька. А розгорнутий аналіз вимог із запитаннями до стейкхолдерів — територія великої LLM.',
    vis: V.compare(['', 'LLM', 'SLM'], [
      { c: ['Розмір', 'Large — багато параметрів', 'Compact — <b>fewer parameters</b>'], tip: 'Ключова відмінність з силабусу — кількість параметрів.' },
      { c: ['Призначення', 'Широкий спектр задач', '<b>Lightweight & focused</b> рішення'], tip: 'SLM — для легких, сфокусованих рішень.' },
      { c: ['Дизайн', 'Загального призначення', 'Intentionally small, task-specific (Appendix D)'], tip: 'Appendix D: баланс efficiency та task-specific understanding.' }
    ]),
    memo: '<b>SLM = S·L·F</b>: <b>S</b>mall (fewer parameters), <b>L</b>ightweight, <b>F</b>ocused. Як мультитул проти повного набору інструментів.',
    trap: 'SLM — не «зламана LLM» і не «модель без навчання». Відмінність — <b>fewer parameters</b> і фокус. Не підміняйте на «trained on less diverse data» — такого в силабусі немає.' },
  { id: 'token', type: 'c', ref: '1.1.2', title: 'Tokenization — текст на «цеглинки»',
    syl: '<b>Tokenization</b> in language models is the process of breaking down text into smaller units called <b>tokens</b>. Tokens can be as small as a <b>character</b> or as large as a <b>sub-word or word</b>. When an LLM processes a sentence, it first tokenizes the input so that each token can be understood individually, while maintaining the overall context.',
    ua: 'Модель не читає літери, як людина. Спершу текст ріжеться на токени: це може бути символ, частина слова або ціле слово. Саме токени модель потім перетворює на числа. Tokenization і embeddings разом переводять мову в числову форму.',
    ex: 'Рядок з баг-репорту <code>Expected: HTTP 200 OK, got 500</code> перетворюється на набір токенів. Довгі stack trace, UUID і base64 «з’їдають» багато токенів — це важливо, коли вставляєте логи в промпт (див. практику HO-1.1.2).',
    vis: V.tokens(['Expected', ':', '·HTTP', '·200', '·OK', ',', '·got', '·500', '·Internal', 'Server', 'Error'], 'Ілюстрація від тренера: реальний поділ залежить від конкретного tokenizer. «·» — пробіл, що часто входить у токен. Натисніть на токен.'),
    memo: '<b>Токен = цеглинка LEGO</b>: з тексту спершу роблять цеглинки (tokenization), потім кожній дають «координати» (embeddings).',
    trap: 'Sample Q3: «converts tokens into high-dimensional vectors» — це <b>embeddings</b>, не tokenization. «Predicts the next token» — це inference. Tokenization = лише <b>розбиття тексту на одиниці</b>.' },
  { id: 'emb', type: 'c', ref: '1.1.2', title: 'Embeddings — значення як координати',
    syl: '<b>Embeddings</b> are numerical representations of tokens that encode their <b>semantic, syntactic, and contextual relationships</b>… Each token is transformed into a <b>vector in a high-dimensional space</b>… Tokens with similar meanings or contextual roles have embeddings that are <b>positioned closely together</b> in this space.',
    ua: 'Кожен токен отримує «адресу» — довгий вектор чисел. Слова зі схожим значенням живуть поруч. Завдяки цьому LLM розуміє, що «bug» і «defect» — про одне, і утримує контекст.',
    ex: 'Ви шукаєте дублікати баг-репортів: «Login button does nothing» і «Cannot sign in, click has no effect». Слова різні, але значення близьке — їх embeddings будуть поруч. (Детальніше про vector databases і RAG — глава 4.)',
    vis: V.raw(SVG_EMB),
    memo: '<b>Embedding = GPS-координати значення</b>. Близько на карті = близько за змістом.',
    trap: 'Близькість embeddings = схожість <b>значення / контекстної ролі</b>, а не схожість написання. Порядок: спочатку tokenization, потім embeddings.' },
  { id: 'chk-112a', type: 'q', q: Q('c112-1', '1.1.2', 'emb', 'Which statement BEST describes embeddings in LLMs?', [
    ['They split input text into characters, sub-words or words', 0, 'Це tokenization.'],
    ['They are token vectors that place similar meanings close together', 1, 'Саме так у 1.1.2: vector у high-dimensional space, схожі значення — поруч.'],
    ['They limit how many tokens the model can consider at once', 0, 'Це context window.'],
    ['They are hyperparameters that make outputs non-deterministic', 0, 'Non-determinism пов’язаний з probabilistic inference та hyperparameter settings, а не з embeddings.']
  ]) },
  { id: 'transformer', type: 'c', ref: '1.1.2', title: 'Transformer і передбачення наступного токена',
    syl: 'LLMs utilize a neural network architecture known as the <b>transformer model</b>. Transformer models excel in language tasks by processing the context of extensive text sequences and <b>learning how tokens relate to each other</b>. During <b>inference</b>, LLMs <b>predict the next token</b> in a sequence, leveraging these learned relationships…',
    ua: 'Transformer — «двигун» LLM. Він дивиться на всю послідовність токенів і розуміє, як вони пов’язані (Appendix D: <i>self-attention</i>, що ловить залежності на великій відстані). Коли модель відповідає (inference), вона щоразу вгадує <b>наступний токен</b>, дописує його і повторює.',
    ex: 'Промпт «Generate a negative test case for login with…» → модель дописує відповідь токен за токеном. Тому відповідь може «звернути не туди» посеред тексту: кожен крок — імовірнісний вибір.',
    vis: V.flow([
      { t: 'Text', s: 'prompt', tip: 'Вхідний текст.' },
      { t: 'Tokenization', s: 'tokens', tip: 'Розбиття на токени.' },
      { t: 'Embeddings', s: 'vectors', tip: 'Токени → числові вектори.' },
      { t: 'Transformer', s: 'self-attention', tip: 'Вивчає, як токени пов’язані між собою, на довгих послідовностях.' },
      { t: 'Next token', s: '↺ повтор', tip: 'Inference: передбачити наступний токен, додати його, повторити.' }
    ]),
    memo: '<b>«Т-Е-Т-Н»</b>: Токени → Ембединги → Трансформер → Наступний токен. Як автодоповнення в телефоні, тільки дуже розумне.',
    trap: 'На етапі <b>inference</b> LLM <b>predicts the next token</b> — це не «пошук правильної відповіді в базі». Transformer — це <b>neural network architecture</b> (deep learning), не rule-based система.' },
  { id: 'plausible', type: 'c', ref: '1.1.2', title: 'Plausible is not necessarily correct',
    syl: 'The transformer model can be used to generate new text that is <b>statistically plausible</b>, based on training data and the prompt. <b>But plausible is not necessarily correct.</b>',
    ua: 'LLM генерує те, що <b>звучить правдоподібно</b> з погляду статистики, а не те, що гарантовано правильно. Тому кожен згенерований тест-кейс, expected result чи скрипт треба перевіряти.',
    ex: 'LLM пише expected result: «Відображається повідомлення <i>Invalid password</i>». Звучить логічно, але в специфікації — «<i>Wrong email or password</i>» (з міркувань безпеки). Якщо не звірити з test basis, отримаєте хибний тест.',
    vis: V.ba(
      { t: 'Plausible (LLM)', items: ['Граматично гладко', 'Схоже на типові тест-кейси', 'Відповідає статистиці training data'], tip: 'Statistically plausible — на основі training data і prompt.' },
      { t: 'Correct (реальність)', items: ['Відповідає test basis', 'Узгоджено з вимогами/ACs', 'Перевірено людиною'], tip: 'Правильність треба перевіряти — силабус прямо попереджає.' }, '≠'),
    memo: '<b>«Звучить ≠ Є»</b>. Впевнений тон LLM — не доказ.',
    trap: 'Дистрактор: «Because LLMs are trained on very large datasets, their outputs are correct». Правильна думка: outputs <b>plausible</b>, але не обов’язково <b>correct</b> (зв’язок із галюцинаціями — глава 3).' },
  { id: 'nondet', type: 'c', ref: '1.1.2', title: 'Non-deterministic behavior',
    syl: 'LLMs exhibit <b>non-deterministic behavior</b> primarily due to the <b>probabilistic nature of their inference mechanisms and hyperparameter settings</b>. This inherent randomness can lead to <b>variations in outputs even when the same input is provided multiple times</b>.',
    ua: 'Той самий промпт двічі → дві різні відповіді. Причина — модель обирає наступний токен імовірнісно, а налаштування (hyperparameters, напр. temperature — глава 2) впливають на «рандомність».',
    ex: 'Ви генеруєте Playwright-тест у CI двічі — і отримуєте різні селектори та різну кількість кроків. Тому згенерований код рев’юять і фіксують у репозиторії, а не генерують «на льоту» в кожному прогоні (порада тренера).',
    vis: V.flow([
      { t: 'Same prompt', s: '×3', tip: 'Однаковий вхід.' },
      { t: 'Probabilistic inference', s: '+ hyperparameters', tip: 'Дві причини з силабусу: імовірнісний механізм inference і hyperparameter settings.' },
      { t: 'Output A / B / C', s: 'різні відповіді', tip: 'Variations in outputs — навіть при однаковому input.' }
    ]),
    memo: '<b>LLM = кубик із словником</b>: щоразу кидає «зважений кубик» для наступного токена.',
    trap: 'Причина non-determinism — <b>probabilistic inference + hyperparameter settings</b>. Не «модель довчається після кожного запиту» і не «нестабільна мережа».' },
  { id: 'ctx', type: 'c', ref: '1.1.2', title: 'Context window — скільки модель «бачить»',
    syl: 'The <b>context window</b> refers to the amount of preceding text, <b>measured in tokens</b>, that the model can consider when generating responses. A larger context window allows the model to maintain coherence over longer passages, for example when <b>analyzing large test logs</b>. However, increasing the number of tokens… also <b>increases the computational complexity and processing time</b>.',
    ua: 'Це «робоча пам’ять» моделі в токенах. Те, що не вмістилось, модель не враховує. Більше вікно — краще для довгих логів і документів, але повільніше і «дорожче» обчислювально.',
    ex: 'Ви вставили 40 000 рядків логу регресу. Перша помилка, з якої все почалося, — на самому початку. Якщо вона вийшла за межі вікна, LLM назве першопричиною наслідок, а не причину (Sample Q2: модель «discard earlier information»).',
    vis: V.raw(SVG_CTX),
    memo: '<b>Вікно у потязі</b>: бачиш лише те, що зараз у вікні; більше вікно — більше бачиш, але потяг важчий і повільніший.',
    trap: 'Міряється в <b>tokens</b> (не в символах/сторінках). Більше вікно ≠ безкоштовно: ↑ computational complexity і processing time. Context window не відповідає за «хронологію» чи «cross-document referencing» (дистрактори Sample Q2).' },
  { id: 'ho112', type: 'p', ho: 'HO-1.1.2 (H1)', title: 'Практика: tokenization і token count для логу',
    task: '<p><b>Ситуація.</b> Нічний регрес упав. Лог: ~2 500 рядків, у середньому ~12 токенів на рядок. Ви хочете попросити LLM знайти першопричину. Припустимо, context window вашої моделі — 8 000 токенів (цифра навчальна), а промпт з інструкціями займає ~500 токенів, і на відповідь треба залишити ~1 000.</p><p><b>Завдання.</b> 1) Оцініть, чи вміститься лог. 2) Що станеться, якщо вставити все як є? 3) Опишіть, як підготувати вхідні дані. 4) (за бажанням) Візьміть будь-який tokenizer і порівняйте кількість токенів у рядку англійського логу та того самого тексту українською, у UUID і в stack trace.</p>',
    model: '1) 2 500 × 12 ≈ 30 000 токенів.\n   Доступно для даних: 8 000 − 500 (промпт) − 1 000 (відповідь) ≈ 6 500.\n   30 000 > 6 500 → НЕ вміщується (~у 4,6 раза більше).\n\n2) Частина тексту вийде за межі context window — модель її не врахує.\n   Ризик: перша помилка (причина) загубиться, LLM опише наслідки.\n   Великі обсяги також ↑ час обробки та обчислювальну складність.\n\n3) Підготовка:\n   • залишити ERROR/WARN + N рядків контексту навколо;\n   • прибрати дублікати однакових stack trace (лишити 1 + лічильник);\n   • скоротити довгі ID/base64/timestamps;\n   • розбити на частини (chunks) і аналізувати послідовно,\n     або спершу попросити summary кожної частини;\n   • перевірити токени ще раз перед відправкою.',
    checklist: ['Порахував(ла) токени, а не рядки чи символи', 'Врахував(ла) місце під промпт і під відповідь', 'Пояснив(ла), що текст поза context window модель не враховує', 'Запропонував(ла) скорочення/фільтрацію/розбиття вхідних даних', 'Згадав(ла) компроміс: більше токенів → більше часу й обчислень'],
    note: 'HO-1.1.2 — hands-on objective (H1). Hands-on не входять в іспит, але допомагають зрозуміти LO GenAI-1.1.2. Конкретні числа в задачі — навчальні, не з силабусу.' },
  { id: 'chk-112b', type: 'q', q: Q('c112-2', '1.1.2', 'nondet', 'A tester sends exactly the same prompt to an LLM three times and receives three different sets of test cases. What is the MOST likely explanation according to the syllabus?', [
    ['The model retrains itself after each request', 0, 'LLM не довчається на кожному запиті; це не причина з силабусу.'],
    ['The probabilistic nature of inference and the hyperparameter settings', 1, 'Дослівно причини non-deterministic behavior у 1.1.2.'],
    ['The context window was too large for the prompt', 0, 'Context window обмежує обсяг тексту, а не спричиняє варіативність.'],
    ['Tokenization produces different tokens for the same text each time', 0, 'Немає такого твердження в силабусі; tokenization — розбиття тексту, а не джерело випадковості.']
  ]) },
  { id: 'sum-112', type: 's', title: 'Шпаргалка 1.1.2 · Basics of GenAI & LLMs (K2)',
    points: ['LLM — GenAI на базі <b>generative pre-trained transformer</b>; навчені на very large datasets (books, articles, websites). <b>SLM</b> — fewer parameters, lightweight & focused.',
      '<b>Tokenization</b> — текст → tokens (character / sub-word / word). <b>Embeddings</b> — tokens → vectors; схожі значення поруч.',
      '<b>Transformer</b> вивчає зв’язки між токенами; на <b>inference</b> — predict the next token.',
      'Output — <b>statistically plausible</b>, але <b>plausible ≠ correct</b>.',
      '<b>Non-deterministic</b>: probabilistic inference + hyperparameter settings. <b>Context window</b> — у токенах; більше → coherence, але ↑ складність і час.'],
    vis: V.flow([{ t: 'Tokens', tip: 'Tokenization' }, { t: 'Embeddings', tip: 'Vectors' }, { t: 'Transformer', tip: 'Relationships between tokens' }, { t: 'Next token', tip: 'Inference' }]) }
];

// ---------- 1.1.3 ----------
C1.slides['1.1.3'] = [
  { id: 'stages', type: 'c', ref: '1.1.3', title: 'Три категорії LLM — три етапи навчання',
    syl: 'Large Language Models are developed through <b>progressively specialized training stages</b>… These stages give rise to three main categories: <b>foundation LLMs, instruction-tuned LLMs, and reasoning LLMs</b>.',
    ua: 'Це не три різні «види» моделей з нуля, а <b>сходинки</b>: беремо foundation → дотреновуємо слухатися інструкцій → дотреновуємо міркувати багатокроково. Кожна наступна будується на попередній.',
    ex: 'Аналогія тренера: новий тестувальник після університету (foundation — багато знає загалом) → пройшов онбординг і пише кейси за шаблоном команди (instruction-tuned) → став сеньйором, який аналізує тренди дефектів і планує регрес (reasoning).',
    vis: V.stack([
      { t: '1 · Foundation LLM', s: 'general-purpose, vast & diverse data', tip: 'Загального призначення, навчені на великих різноманітних даних; зазвичай потребують адаптації під задачу. Synonym: Base LLM.' },
      { t: '2 · Instruction-tuned LLM', s: 'fine-tuned on prompt ↔ expected response', tip: 'Похідні від foundation; краще слідують інструкціям людини.' },
      { t: '3 · Reasoning LLM', s: 'logical inference, multi-step, chain-of-thought', tip: 'Розширюють instruction-tuned; для high-cognitive-load задач.' }
    ]),
    memo: '<b>«Ф-І-Р»: Фундамент → Інструкції → Роздуми</b>. Як будинок: фундамент, потім меблі «за інструкцією», потім архітектор, що думає.',
    trap: 'Порядок важливий: instruction-tuned <b>derived from foundation</b>; reasoning <b>extend instruction-tuned</b>. Не навпаки.' },
  { id: 'foundation', type: 'c', ref: '1.1.3', title: 'Foundation LLMs (Base LLM)',
    syl: '<b>Foundation LLMs</b>: general-purpose models trained on <b>vast and diverse datasets</b> comprising text, code, images, and other modalities… While powerful and flexible, foundation models <b>typically require further adaptation</b> to meet specific task requirements.',
    ua: 'Універсал-ерудит: знає багато про все, вміє продовжувати текст (Appendix D: <i>predicting the next word based on learned linguistic patterns</i>; синонім — <b>Base LLM</b>). Але «з коробки» погано заточений під вашу конкретну задачу.',
    ex: 'Якщо дати base-моделі «Test case 1: Verify that the user can log in», вона охоче <b>продовжить</b> текст ще десятком схожих рядків, але не обов’язково виконає ваше прохання «поверни 5 негативних кейсів у таблиці» (пояснення тренера).',
    vis: V.cards([
      { ic: '🌍', t: 'General-purpose', s: 'NLP, computer vision, speech…', tip: 'Підтримують різні задачі в різних доменах.' },
      { ic: '📚', t: 'Vast & diverse data', s: 'text, code, images…', tip: 'Широке pretraining.' },
      { ic: '🔧', t: 'Needs adaptation', s: 'для конкретних задач', tip: 'Typically require further adaptation to meet specific task requirements.' }
    ]),
    memo: '<b>Foundation = фундамент без стін</b>: міцний, але жити ще не можна.',
    trap: 'Sample Q4 (i): «Foundation LLMs excel at generating test cases from high-level requirements without structured input» — <b>хибно</b>. Вони потужні, але без адаптації/структурованого входу не «excel».' },
  { id: 'instruct', type: 'c', ref: '1.1.3', title: 'Instruction-tuned LLMs',
    syl: '<b>Instruction-tuned LLMs</b>: Derived from foundation models… <b>fine-tuned using datasets that pair prompts with expected responses</b>… enhances their alignment with human instructions… optimizing for <b>task adherence, instruction following, and response coherence</b>.',
    ua: 'Модель дотренували на парах «промпт → правильна відповідь». Тепер вона <b>слухається</b>: тримає формат, шаблон, стиль, синтаксис. Appendix D: часто ще й <i>reinforced by feedback</i>. Їх іноді називають <b>non-reasoning</b> моделями.',
    ex: '«Згенеруй тест-кейси для фічі скасування бронювання строго у Gherkin (Given/When/Then)» або «поверни JSON з полями id, steps, expected». Це ідеальна задача для instruction-tuned: чітка інструкція і формат.',
    vis: V.flow([
      { t: 'Foundation LLM', tip: 'Стартова точка.' },
      { t: 'Fine-tuning', s: 'prompt ↔ expected response', tip: 'Датасети з пар «промпт — очікувана відповідь».' },
      { t: 'Instruction-tuned', s: 'task adherence · instruction following · coherence', tip: 'Три цілі оптимізації з силабусу.' }
    ]),
    memo: '<b>Instruction-tuned = «Сказано — зроблено»</b>. Вірний виконавець, що тримає формат.',
    trap: 'Sample Q4: instruction-tuned <b>excel at Gherkin-syntax test cases</b> (правильно), але <b>не</b> «autonomously prioritize test execution based on real-time feedback» — це вимагає reasoning.' },
  { id: 'chk-113a', type: 'q', q: Q('c113-1', '1.1.3', 'instruct', 'How are instruction-tuned LLMs created according to the syllabus?', [
    ['By training a new model from scratch on code repositories only', 0, 'Вони derived from foundation models, а не з нуля.'],
    ['By fine-tuning foundation models on datasets that pair prompts with expected responses', 1, 'Саме так у 1.1.3.'],
    ['By extending reasoning LLMs with chain-of-thought training', 0, 'Навпаки: reasoning LLMs розширюють instruction-tuned.'],
    ['By converting images into embeddings with vision-language models', 0, 'Це про multimodal LLMs (1.1.4).']
  ]) },
  { id: 'reasoning', type: 'c', ref: '1.1.3', title: 'Reasoning LLMs',
    syl: '<b>Reasoning LLMs</b>: extend instruction-tuned models by emphasizing structured cognitive abilities such as <b>logical inference, multi-step problem-solving, and chain-of-thought reasoning</b>… better suited for <b>high-cognitive-load tasks</b>, including those in technical domains.',
    ua: 'Це instruction-tuned модель, яку ще навчили <b>міркувати кроками</b>: робити проміжні висновки, синтезувати складну інформацію. Корисна, коли задача вимагає аналізу, а не просто форматування.',
    ex: 'Ви даєте 150 баг-репортів за квартал і просите: «Знайди тренди, згрупуй за компонентами й першопричинами і запропонуй, куди посилити регрес». Синтез кількох джерел + пріоритизація = reasoning LLM (так і в Sample Q4 iv).',
    vis: V.flow([
      { t: 'Step 1', s: 'зібрати факти', tip: 'Multi-step problem-solving.' },
      { t: 'Step 2', s: 'проміжні висновки', tip: 'Intermediate reasoning steps / chain-of-thought.' },
      { t: 'Step 3', s: 'синтез', tip: 'Synthesis of complex information.' },
      { t: 'Result', s: 'тренди + пріоритети', tip: 'High-cognitive-load task.' }
    ]),
    memo: '<b>Reasoning = «Розкладає на кроки»</b>: як детектив, що веде записник міркувань.',
    trap: 'Sample Q4 (ii): «Reasoning LLMs excel at creating test scripts that strictly follow predefined templates» — <b>хибно</b>: жорстке слідування шаблону — сильна сторона instruction-tuned.' },
  { id: 'choose', type: 'c', ref: '1.1.3', title: 'Яку модель обрати для тестової задачі?',
    syl: 'In the context of GenAI applications for software testing, both <b>instruction-tuned (sometimes referred to as non-reasoning)</b> and reasoning LLMs are utilized. <b>The selection depends on the complexity and reasoning demands</b> of the specific testing task at hand.',
    ua: 'У тестуванні використовують і instruction-tuned, і reasoning. Правило вибору одне: наскільки складна задача і скільки міркувань вона вимагає. Простий формат — instruction-tuned; аналіз і синтез — reasoning.',
    ex: 'Перетворити 20 ручних кейсів у шаблон TestRail → instruction-tuned. Проаналізувати падіння flaky-тестів за місяць і припустити першопричини → reasoning.',
    vis: V.compare(['Тестова задача', 'Краще підходить', 'Чому'], [
      { c: ['Кейси в Gherkin / за шаблоном', 'Instruction-tuned', 'Instruction following, формат'], tip: 'Sample Q4 (v) — правильне твердження.' },
      { c: ['Тренди з defect reports, пріоритизація', 'Reasoning', 'Синтез і логічний висновок'], tip: 'Sample Q4 (iv) — правильне твердження.' },
      { c: ['Загальна генерація без адаптації', 'Foundation', 'Потребує адаптації'], tip: 'Sample Q4 (i) — хибно стверджувати, що вони «excel» без структурованого входу.' }
    ]),
    memo: '<b>Формат → Instruction. Думати → Reasoning.</b>',
    trap: '«Always use reasoning LLMs because they are the most advanced» — хибно. Вибір <b>залежить від складності і reasoning demands задачі</b>. «Non-reasoning» = синонім instruction-tuned у силабусі.' },
  { id: 'chk-113b', type: 'q', q: Q('c113-2', '1.1.3', 'choose', 'A test team needs to convert 300 existing manual test cases into a strict company template with fixed fields. Which type of LLM is MOST suitable?', [
    ['A foundation LLM without any adaptation', 0, 'Foundation моделям зазвичай потрібна адаптація під конкретні вимоги задачі.'],
    ['An instruction-tuned LLM', 1, 'Задача — task adherence і instruction following (шаблон), низькі reasoning demands.'],
    ['A reasoning LLM, because templates require chain-of-thought', 0, 'Жорсткий шаблон — не high-cognitive-load задача; Sample Q4 (ii) прямо це спростовує.'],
    ['A vision-language model', 0, 'Немає візуального входу; VLM — про text + images.']
  ]) },
  { id: 'sum-113', type: 's', title: 'Шпаргалка 1.1.3 · Foundation / Instruction-tuned / Reasoning (K2)',
    points: ['Три категорії з <b>progressively specialized training stages</b>.',
      '<b>Foundation (Base)</b> — general-purpose, vast & diverse data (text, code, images…), <b>require further adaptation</b>.',
      '<b>Instruction-tuned (non-reasoning)</b> — derived from foundation, fine-tuned на prompt ↔ expected response; <b>task adherence, instruction following, response coherence</b>.',
      '<b>Reasoning</b> — extend instruction-tuned; <b>logical inference, multi-step, chain-of-thought</b>; high-cognitive-load.',
      'У тестуванні використовують instruction-tuned і reasoning; вибір — за <b>complexity & reasoning demands</b>.'],
    vis: V.stack([{ t: 'Foundation', s: 'знає багато, потребує адаптації', tip: 'Base LLM' }, { t: 'Instruction-tuned', s: 'тримає формат і інструкції', tip: 'Gherkin, шаблони, JSON' }, { t: 'Reasoning', s: 'міркує кроками', tip: 'Тренди дефектів, пріоритизація' }]) }
];
