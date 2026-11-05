// ===================== CHAPTER 2 =====================
chapters[2] = {
  examNote: '6 × K2 (1 бал) + 5 × K3 (2 бали) = 16 балів',
  sections: [
    { id: '2.1.1', short: 'Структура промпту', title: 'Structure of Prompts for GenAI in Software Testing', lo: 'GenAI-2.1.1', k: 'K2', examQ: 2, loText: 'Give examples of the structure of prompts used in generative AI for software testing' },
    { id: '2.1.2', short: 'Техніки промптингу', title: 'Core Prompting Techniques for Software Testing', lo: 'GenAI-2.1.2', k: 'K2', examQ: 1, loText: 'Differentiate core prompting techniques for software testing' },
    { id: '2.1.3', short: 'System vs User prompt', title: 'System Prompt and User Prompt', lo: 'GenAI-2.1.3', k: 'K2', examQ: 1, loText: 'Distinguish between system prompts and user prompts' },
    { id: '2.2.1', short: 'Test analysis', title: 'Test Analysis with Generative AI', lo: 'GenAI-2.2.1', k: 'K3', examQ: 1, loText: 'Apply generative AI to test analysis tasks' },
    { id: '2.2.2', short: 'Test design & implementation', title: 'Test Design and Test Implementation with Generative AI', lo: 'GenAI-2.2.2', k: 'K3', examQ: 1, loText: 'Apply generative AI to test design and test implementation tasks' },
    { id: '2.2.3', short: 'Automated regression', title: 'Automated Regression Testing with Generative AI', lo: 'GenAI-2.2.3', k: 'K3', examQ: 1, loText: 'Apply generative AI to automated regression testing' },
    { id: '2.2.4', short: 'Monitoring & control', title: 'Test Monitoring and Test Control with Generative AI', lo: 'GenAI-2.2.4', k: 'K3', examQ: 1, loText: 'Apply generative AI to test monitoring and control task' },
    { id: '2.2.5', short: 'Вибір техніки', title: 'Choosing Prompting Techniques for Software Testing', lo: 'GenAI-2.2.5', k: 'K3', examQ: 1, loText: 'Select and apply appropriate prompting techniques for a given context and test task' },
    { id: '2.3.1', short: 'Метрики', title: 'Metrics for Evaluating the Results of GenAI on Test Tasks', lo: 'GenAI-2.3.1', k: 'K2', examQ: 1, loText: 'Understand the metrics for evaluating the results of generative AI on test tasks' },
    { id: '2.3.2', short: 'Покращення промптів', title: 'Techniques for Evaluating and Iteratively Refining Prompts', lo: 'GenAI-2.3.2', k: 'K2', examQ: 1, loText: 'Give examples of techniques for evaluating and iteratively refining prompts' }
  ],
  slides: {}, quizzes: {}, final: [], sample: [], glossary: [], flashcards: []
};
const C2 = chapters[2];
function Q2(id, sec, slide, q, opts, x) {
  const s = C2.sections.find(z => z.id === sec);
  return Object.assign({ id, sec, lo: s.lo, k: s.k, slide, q, opts: opts.map(o => ({ t: o[0], ok: !!o[1], why: o[2] })) }, x || {});
}
const SIX = [
  { ic: '🎭', t: 'Role', s: 'хто відповідає', tip: 'Перспектива/персона моделі: tester, test manager, test automation engineer. Допомагає визначити відповідальність і тон.' },
  { ic: '🗺️', t: 'Context', s: 'фонова інформація', tip: 'Background: об’єкт тестування, функціональність, що тестуємо, релевантний контекст — щоб модель визначила test conditions.' },
  { ic: '🎯', t: 'Instruction', s: 'що зробити', tip: 'Директива: опис задачі та вимоги до неї. Clear, imperative, concise.' },
  { ic: '📦', t: 'Input data', s: 'з чим працювати', tip: 'User stories, acceptance criteria, screenshots, code, existing test cases або output examples. Детальні й структуровані дані → точніший результат.' },
  { ic: '🚧', t: 'Constraints', s: 'обмеження', tip: 'Обмеження або особливі умови: ЯК інструкцію застосувати до вхідних даних.' },
  { ic: '🧾', t: 'Output format', s: 'у якому вигляді', tip: 'Очікуваний формат, структура або характеристики відповіді.' }
];

// ---------- 2.1.1 ----------
C2.slides['2.1.1'] = [
  { id: 'six', type: 'c', ref: '2.1 / 2.1.1', title: 'Шість компонентів структурованого промпту',
    syl: 'A structured prompt for software testing typically includes <b>six components</b>: <b>role, context, instruction, input data, constraints</b> and <b>output format</b>… Each of these components contributes to the <b>clarity and precision</b> of a prompt that effectively communicates requirements and expectations to LLMs.',
    ua: 'Промпт для тестової задачі — це не «одне речення», а маленьке ТЗ із шести блоків. Кожен блок відповідає на своє питання: хто, де, що, з чим, у яких межах, у якому вигляді.',
    ex: 'Порівняйте «напиши тест-кейси для бронювання» і промпт, де вказано: роль тест-аналітика, систему (бекофіс перевізника), задачу (кейси для скасування), user story + AC, обмеження (лише негативні, без UI), формат (таблиця ID/кроки/expected). Друге дає придатний результат з першої спроби.',
    vis: V.cards(SIX),
    memo: '<b>Хто? Де? Що? З чим? У яких межах? Як віддати?</b> → Role · Context · Instruction · Input data · Constraints · Output format.',
    trap: 'Компонентів рівно <b>шість</b>. «Examples», «persona», «tone» — не окремі компоненти: приклади входять в <b>input data</b> (output examples), персона — у <b>role</b>.' },
  { id: 'role-ctx', type: 'c', ref: '2.1.1', title: 'Role і Context',
    syl: '<b>Role</b>: defines the perspective or persona that the GenAI model should take… such as acting as a tester, test manager, or test automation engineer. <b>Context</b>: provides the <b>background information</b> that the GenAI model needs to determine the test conditions. This includes details about the test object, the specific functionality to be tested, and any relevant contextual information.',
    ua: 'Role каже моделі, «ким бути» — від цього залежать тон і глибина відповіді. Context — це фон: яка система, яка фіча, що важливо знати. Context ≠ дані для обробки.',
    ex: '<i>Role:</i> «You are a senior test analyst for a transport booking back office». <i>Context:</i> «The system lets dispatchers register trips; drivers confirm them in a mobile app; payment is handled by a third-party gateway».',
    vis: V.ba(
      { t: '🎭 Role', items: ['tester / test manager / automation engineer', 'визначає відповідальність', 'задає тон і підхід'], tip: 'Перспектива або персона.' },
      { t: '🗺️ Context', items: ['test object', 'функціональність, що тестується', 'релевантний фон'], tip: 'Background information для визначення test conditions.' }, '+'),
    memo: '<b>Role — «костюм»</b>, <b>Context — «декорації»</b>. Актор у костюмі на правильній сцені грає краще.',
    trap: 'Sample Q8: перелік <b>конкретних джерел даних</b> (звіти, логи, бенчмарки) — це <b>input data</b>, а не context. Context — фонова інформація про систему.' },
  { id: 'instr-input', type: 'c', ref: '2.1.1', title: 'Instruction і Input data',
    syl: '<b>Instruction</b>: directives… that outline the specific task to be performed. <b>Clear, imperative and concise</b> instructions include a task description and any relevant requirements for the task. <b>Input data</b>: any information needed to perform the task, such as <b>user stories, acceptance criteria, screenshots, code, existing test cases or output examples</b>. Providing detailed and structured input data helps the LLM to generate more accurate and context-aware results.',
    ua: 'Instruction — одне чітке дієслово-наказ: «Generate…», «Identify…», «Prioritize…». Input data — все, що модель має опрацювати, включно з прикладами бажаного результату.',
    ex: '<i>Instruction:</i> «Identify ambiguities and missing information in the user story below». <i>Input data:</i> текст user story, три AC і скриншот форми.',
    vis: V.flow([
      { t: '🎯 Instruction', s: 'Generate / Identify / Prioritize…', tip: 'Imperative, clear, concise: опис задачі + вимоги.' },
      { t: '📦 Input data', s: 'stories, AC, screenshots, code, test cases, examples', tip: 'Детальні та структуровані дані → точніший результат.' },
      { t: 'LLM', tip: 'Обробляє input data згідно з instruction.' }
    ]),
    memo: '<b>Instruction — дієслово, Input data — іменник</b>: «що зробити» vs «з чим».',
    trap: '<b>Output examples</b> (приклади результату) у силабусі віднесені до <b>input data</b>. Не плутайте з output format.' },
  { id: 'chk-211a', type: 'q', q: Q2('c211-1', '2.1.1', 'role-ctx', 'In a structured prompt, a line reads: "The application is a B2B trip management back office used by dispatchers; payments are processed by an external gateway." Which component is this MOST LIKELY?', [
    ['Context', 1, 'Фонова інформація про об’єкт тестування — context.'],
    ['Input data', 0, 'Input data — те, що модель обробляє (stories, AC, логи…), а не опис системи.'],
    ['Role', 0, 'Role — персона моделі (tester, test manager…).'],
    ['Constraints', 0, 'Constraints обмежують, ЯК застосувати інструкцію; тут немає обмежень.']
  ]) },
  { id: 'constr-out', type: 'c', ref: '2.1.1', title: 'Constraints і Output format',
    syl: '<b>Constraints</b>: outline any restrictions or special considerations that the LLM should adhere to. Constraints help to specify <b>how instructions should be applied to input data</b>. <b>Output format</b>: output specifications denote the <b>expected format, structure or characteristics</b> of the response.',
    ua: 'Constraints — «правила гри»: що виключити, на чому сфокусуватися, яких меж триматися. Output format — «упаковка»: таблиця, JSON, Gherkin, кількість пунктів.',
    ex: '<i>Constraints:</i> «Only negative scenarios; exclude cosmetic UI issues; use the business terms from the glossary». <i>Output format:</i> «Markdown table: ID | Precondition | Steps | Expected result».',
    vis: V.compare(['Фраза в промпті', 'Компонент', 'Чому'], [
      { c: ['«Exclude cosmetic issues»', '🚧 Constraints', 'обмежує, як обробляти дані'], tip: 'Приклад constraints з rationale Sample Q9.' },
      { c: ['«Focus only on API, not UI»', '🚧 Constraints', 'особлива умова виконання'], tip: 'Restriction / special consideration.' },
      { c: ['«Provide a markdown table with columns ID, severity…»', '🧾 Output format', 'як подати результат'], tip: 'Sample Q9 — правильна відповідь: output format.' },
      { c: ['«Answer in Gherkin Given-When-Then»', '🧾 Output format', 'структура відповіді'], tip: 'Формат/структура відповіді.' }
    ]),
    memo: '<b>Constraints = «як НЕ можна / на що зважати»</b>, <b>Output format = «як віддати»</b>.',
    trap: 'Sample Q9: «must be provided in a markdown table…» звучить як обов’язкова умова, але це <b>output format</b>. Слово «must» ще не робить фразу constraint.' },
  { id: 'full', type: 'c', ref: '2.1.1', title: 'Повний промпт: шість компонентів разом',
    syl: 'These components form the basic structure of the prompt. This structure should be <b>combined with the implementation of prompting techniques</b> (see Section 2.1.2), depending on the task to be performed and the LLM to be used.',
    ua: 'Шість компонентів — це скелет. Поверх нього накладаються техніки (prompt chaining, few-shot, meta prompting) — залежно від задачі й моделі.',
    ex: 'Промпт для аналізу user story бронювання (натискайте на рядки таблиці):',
    vis: V.compare(['Компонент', 'Текст у промпті'], [
      { c: ['🎭 Role', 'Act as a senior test analyst.'], tip: 'Персона.' },
      { c: ['🗺️ Context', 'We test the booking module of a trip management back office.'], tip: 'Фон про test object.' },
      { c: ['🎯 Instruction', 'Generate test conditions for the user story and its acceptance criteria.'], tip: 'Що зробити.' },
      { c: ['📦 Input data', '&lt;user story&gt; + &lt;AC1–AC4&gt; + one example test condition'], tip: 'Дані + приклад результату (output example).' },
      { c: ['🚧 Constraints', 'Cover each AC at least once; use business terms; no UI layout checks.'], tip: 'Як застосувати інструкцію.' },
      { c: ['🧾 Output format', 'Table: ID | AC ref | Test condition | Priority'], tip: 'Структура відповіді.' }
    ]),
    memo: 'Скелет (6 компонентів) + м’язи (техніки 2.1.2) = робочий промпт.',
    trap: 'Структура не замінює техніку і навпаки: силабус каже <b>combine</b>. Вибір залежить від <b>задачі і моделі</b>.' },
  { id: 'chk-211b', type: 'q', q: Q2('c211-2', '2.1.1', 'constr-out', 'A prompt for defect analysis contains: "Ignore spelling mistakes and focus only on functional inconsistencies." Which component is this MOST LIKELY?', [
    ['Output format', 0, 'Нічого не сказано про формат чи структуру відповіді.'],
    ['Constraints', 1, 'Обмеження / особлива умова застосування інструкції до даних.'],
    ['Instruction', 0, 'Задача (знайти дефекти) задана окремо; тут — межі її виконання.'],
    ['Context', 0, 'Це не фонова інформація про систему.']
  ]) },
  { id: 'sum-211', type: 's', title: 'Шпаргалка 2.1.1 · Структура промпту (K2)',
    points: ['Шість компонентів: <b>Role · Context · Instruction · Input data · Constraints · Output format</b>.',
      '<b>Context</b> = фон про test object; <b>Input data</b> = що обробляти (stories, AC, screenshots, code, test cases, <b>output examples</b>).',
      '<b>Instruction</b> — clear, imperative, concise.',
      '<b>Constraints</b> — як застосувати інструкцію до даних; <b>Output format</b> — формат/структура відповіді (таблиця, колонки…).',
      'Структуру поєднують із техніками промптингу залежно від задачі й LLM.'],
    vis: V.cards(SIX) }
];

// ---------- 2.1.2 ----------
C2.slides['2.1.2'] = [
  { id: 'three', type: 'c', ref: '2.1 / 2.1.2', title: 'Три основні техніки промптингу',
    syl: 'Among these, <b>three core prompting techniques</b> are commonly used for test tasks with GenAI in conjunction with the 6-component prompt structure: <b>prompt chaining, few-shot prompting, and meta prompting</b>.',
    ua: 'Технік у світі багато, але для іспиту — три основні. Кожна вирішує свою проблему: складність (chaining), шаблонність (few-shot), невизначеність «як написати промпт» (meta).',
    ex: 'Аналіз великої user story — chaining. Сто однотипних Gherkin-сценаріїв — few-shot. Нова задача, а ви не знаєте, з чого почати промпт, — meta prompting.',
    vis: V.cards([
      { ic: '⛓️', t: 'Prompt chaining', s: 'задача → кроки з перевіркою', tip: 'Розбиває задачу на проміжні кроки (кілька промптів); кожен результат перевіряють і уточнюють.' },
      { ic: '🧩', t: 'Few-shot prompting', s: 'кілька прикладів у промпті', tip: 'Приклади в промпті задають бажану поведінку та формат.' },
      { ic: '🪞', t: 'Meta prompting', s: 'LLM пише/покращує промпт', tip: 'LLM генерує або вдосконалює власні промпти; тестувальник оцінює.' }
    ]),
    memo: '<b>Ланцюг · Приклади · Дзеркало</b> — chaining, few-shot, meta.',
    trap: 'Ці техніки використовують <b>разом зі структурою з 6 компонентів</b>, а не замість неї.' },
  { id: 'chaining', type: 'c', ref: '2.1.2', title: 'Prompt chaining',
    syl: 'Prompt chaining involves <b>breaking a task into a series of intermediate steps (multiple prompts)</b>. The result of each step is <b>manually or automatically checked and refined</b> before proceeding to the next step. This approach leads to <b>greater accuracy</b> as each response informs the next prompt… particularly useful… where tasks are complicated and require decomposition into subtasks and systematic checking of intermediate LLM outputs. It also allows for <b>dynamic interactions</b>.',
    ua: 'Складну задачу ріжемо на кроки. Після кожного кроку — перевірка (людиною або автоматично) і виправлення. Наступний крок отримує вже «чистий» результат попереднього.',
    ex: 'Крок 1: «Знайди неоднозначності в story» → ви виправляєте. Крок 2: «Оціни тестованість AC» → виправляєте. Крок 3: «Перевір повноту AC» (так побудовано HO-2.2.1b).',
    vis: V.flow([
      { t: 'Prompt 1', s: 'ambiguities', tip: 'Перший підзадача.' },
      { t: '✔ check', tip: 'Результат перевіряють і уточнюють вручну або автоматично.' },
      { t: 'Prompt 2', s: 'testability', tip: 'Отримує перевірений результат кроку 1.' },
      { t: '✔ check', tip: 'Знову перевірка.' },
      { t: 'Prompt 3', s: 'completeness', tip: 'Фінальний крок.' }
    ]),
    memo: '<b>Chaining = конвеєр із ВТК</b> після кожного верстата.',
    trap: 'Ключ — <b>кілька промптів + перевірка кожного проміжного результату</b>. Не плутайте з «довгим промптом з кількома пунктами» — це один промпт, не chaining.' },
  { id: 'fewshot', type: 'c', ref: '2.1.2', title: 'Zero-shot, one-shot, few-shot',
    syl: 'Few-shot prompting involves providing the LLM with <b>examples</b> in the prompt. While <b>zero-shot</b> prompting (no example) relies on the model\'s pre-existing knowledge…, <b>one-shot</b> prompting provides one example… Few-shot prompts contain <b>more than one example</b> (a few)… helps guide the model by providing a clear reference and ensuring that results are <b>consistent</b> and in line with expectations.',
    ua: 'Різниця — лише в кількості прикладів у промпті: 0, 1 або кілька. Приклади показують «ось так треба», і модель повторює патерн стабільно.',
    ex: 'Дали 3 пари «user story → Gherkin-сценарій» і четверту story без сценарію → модель пише сценарій у тому самому стилі, з тими ж назвами кроків.',
    vis: V.compare(['Техніка', 'Прикладів', 'На що спирається'], [
      { c: ['Zero-shot', '0', 'pre-existing knowledge моделі'], tip: 'Немає прикладів.' },
      { c: ['One-shot', '1', 'один приклад очікуваного результату'], tip: 'Рівно один приклад.' },
      { c: ['Few-shot', '> 1 (кілька)', 'кілька прикладів → стабільний патерн'], tip: 'Найкраще, коли приклади можуть проілюструвати потрібну поведінку.' }
    ]),
    memo: '<b>Shot = приклад</b>. Zero / One / Few — просто рахуємо приклади.',
    trap: 'One-shot ≠ few-shot: <b>few = більше одного</b>. «Приклади» — ознака few-shot, а не prompt chaining (дистрактор Sample Q10 a).' },
  { id: 'chk-212a', type: 'q', q: Q2('c212-1', '2.1.2', 'fewshot', 'A prompt contains exactly one sample user story with its expected Gherkin scenario, followed by a new user story to convert. Which technique is this?', [
    ['Zero-shot prompting', 0, 'Zero-shot — без прикладів.'],
    ['One-shot prompting', 1, 'Рівно один приклад очікуваного результату.'],
    ['Few-shot prompting', 0, 'Few-shot — більше одного прикладу.'],
    ['Meta prompting', 0, 'Meta prompting — LLM генерує/покращує промпт.']
  ]) },
  { id: 'meta', type: 'c', ref: '2.1.2', title: 'Meta prompting і «pairing» з AI',
    syl: 'Meta prompting leverages the AI\'s ability to <b>generate or refine its own prompts</b>. In an iterative cycle, the LLM can generate prompts that can be <b>evaluated and refined by the tester</b>… especially beneficial when <b>efficiency and prompt optimization</b> are critical, as it reduces the manual effort… if the tester is <b>unsure how to craft an effective prompt</b>, they can collaborate with the LLM to co-create it. This reflects a form of <b>pairing</b> with the GenAI tool…',
    ua: 'Замість писати промпт самому, ви просите LLM написати (або покращити) промпт під вашу задачу, оцінюєте його, уточнюєте — і так кілька кіл. Це як парне програмування, тільки пара — AI.',
    ex: '«Мені треба промпт, щоб LLM генерувала негативні API-тести за OpenAPI-специфікацією. Задай мені уточнювальні питання і запропонуй структурований промпт із 6 компонентів». Потім — «посиль constraints щодо авторизації».',
    vis: V.flow([
      { t: 'Тестувальник', s: 'ціль + задача', tip: 'Загальний опис цілі.' },
      { t: 'LLM', s: 'генерує промпт', tip: 'Використовує свої «знання» про оптимальні промпти.' },
      { t: 'Тестувальник', s: 'оцінює, уточнює', tip: 'Evaluated and refined by the tester.' },
      { t: '↺ ітерація', tip: 'Iterative cycle до якісного промпту.' }
    ]),
    memo: '<b>Meta = промпт про промпт</b>. «Допоможи мені написати промпт для…»',
    trap: 'Sample Q10: meta prompting — LLM <b>сама</b> генерує/покращує промпти; варіанти «refines prompts manually» або «relies on tester-defined prompts» — хибні.' },
  { id: 'combo', type: 'c', ref: '2.1.2 / 2.2.5', title: 'Техніки можна поєднувати',
    syl: 'These prompting techniques <b>can be used effectively in combination</b> to improve LLM outcomes (see section 2.2.5)… For example, meta prompting can be used to create an initial prompt. This generated prompt may contain examples that must be adapted and can be enhanced (few-shot prompting). Finally, it can be useful to divide the task into smaller subtasks to enable validation of the intermediate steps (prompt chaining).',
    ua: 'Немає правила «одна задача — одна техніка». Типова комбінація: meta створює чернетку промпту → додаємо приклади (few-shot) → ріжемо на кроки з перевіркою (chaining).',
    ex: 'Генерація E2E-сценаріїв для оформлення поїздки: LLM пише промпт (meta) → ви вставляєте 2 еталонні сценарії (few-shot) → запускаєте окремо «генерація», «перевірка покриття AC», «доопрацювання» (chaining).',
    vis: V.flow([
      { t: '🪞 Meta', s: 'початковий промпт', tip: 'LLM допомагає створити промпт.' },
      { t: '🧩 Few-shot', s: 'адаптовані приклади', tip: 'Приклади в промпті покращують стабільність.' },
      { t: '⛓️ Chaining', s: 'підзадачі з валідацією', tip: 'Перевірка проміжних кроків.' }
    ]),
    memo: '<b>Мета → Приклади → Ланцюг</b> (М-П-Л) — порядок із прикладу силабусу.',
    trap: 'Дистрактори «техніки взаємовиключні» або «завжди використовуйте лише одну» — хибні.' },
  { id: 'chk-212b', type: 'q', q: Q2('c212-2', '2.1.2', 'meta', 'A tester is unsure how to phrase a prompt for test report analysis and asks the LLM to draft a prompt, then reviews and improves it with the LLM over several iterations. Which technique is this?', [
    ['Prompt chaining', 0, 'Chaining — розбиття самої тестової задачі на кроки з перевіркою.'],
    ['Few-shot prompting', 0, 'Приклади результату не надаються.'],
    ['Meta prompting', 1, 'LLM генерує/покращує промпт; тестувальник оцінює — «pairing».'],
    ['Zero-shot prompting', 0, 'Zero-shot — пряма задача без прикладів, не створення промпту.']
  ]) },
  { id: 'sum-212', type: 's', title: 'Шпаргалка 2.1.2 · Техніки промптингу (K2)',
    points: ['<b>Prompt chaining</b>: задача → проміжні кроки (кілька промптів); кожен результат перевіряють/уточнюють → вища точність; для складних задач.',
      '<b>Zero / one / few-shot</b>: 0 / 1 / кілька прикладів; few-shot дає стабільний, очікуваний результат.',
      '<b>Meta prompting</b>: LLM генерує або покращує промпти, тестувальник оцінює; ефективність, менше ручної роботи, «pairing».',
      'Техніки поєднуються між собою і зі структурою з 6 компонентів.'],
    vis: V.compare(['Техніка', 'Суть'], [{ c: ['Chaining', 'кроки + перевірка'] }, { c: ['Few-shot', 'кілька прикладів'] }, { c: ['Meta', 'LLM пише промпт'] }]) }
];

// ---------- 2.1.3 ----------
C2.slides['2.1.3'] = [
  { id: 'sys', type: 'c', ref: '2.1.3', title: 'System prompt — «конституція» розмови',
    syl: 'The system prompt is typically defined by the developer or tester, to guide the overall behavior of the LLM, and is <b>not visible or editable by the chatbot\'s user</b> in most interfaces. A system prompt acts as a predefined command set that defines the LLM\'s <b>behavior, personality, and operational parameters</b>… The system prompt sets the rules for the <b>entire conversation</b>. It may contain parts of a structured prompt such as the <b>role, context and constraints</b>. The system prompt <b>stays constant</b> throughout the interaction session…',
    ua: 'System prompt задають один раз (розробник чи тестувальник) — і він діє на всю розмову: хто модель, яким тоном говорить, чого не робить. Користувач чатбота зазвичай його не бачить і не змінює.',
    ex: 'Внутрішній QA-асистент команди: «You are a testing assistant for the trip management platform. Use ISTQB terminology. Never invent API fields that are not in the provided spec. Answer concisely». Тестувальники далі просто пишуть свої запити.',
    vis: V.cards([
      { ic: '👤', t: 'Хто задає', s: 'developer / tester', tip: 'Typically defined by the developer or tester.' },
      { ic: '🙈', t: 'Видимість', s: 'прихований від користувача', tip: 'Not visible or editable by the chatbot’s user in most interfaces.' },
      { ic: '📌', t: 'Тривалість', s: 'константа на всю сесію', tip: 'Stays constant throughout the interaction session.' },
      { ic: '⚙️', t: 'Зміст', s: 'behavior, personality, operational parameters', tip: 'Може містити role, context, constraints; напр. формальний тон, стислість, доменні правила.' }
    ]),
    memo: '<b>System = Сталий, Схований, Спільний для всієї розмови</b> (три «С»).',
    trap: 'Sample Q11: функція system prompt — <b>framework for LLM behavior for the entire conversation</b>. Не «змінюється з кожною взаємодією» і не «містить видимий ввід користувача».' },
  { id: 'user', type: 'c', ref: '2.1.3', title: 'User prompt і як вони працюють разом',
    syl: 'The user prompt… represents the <b>actual input or question</b> from the chatbot\'s user. It <b>changes with each interaction</b>… Unlike the system prompt, user prompts are <b>directly visible</b> and form the immediate context for each response… Typical usage involves setting the system prompt once at the start of the conversation, then sending successive user prompts… The LLM generates responses by <b>considering both</b> the unchanging system prompt and the current user prompt together.',
    ua: 'User prompt — те, що ви пишете в чат кожного разу. Відповідь моделі = system prompt (незмінний) + поточний user prompt.',
    ex: 'System prompt асистента незмінний, а ви по черзі пишете: «Згенеруй кейси для скасування поїздки», «Тепер лише для водія», «Переведи в Gherkin».',
    vis: V.compare(['', 'System prompt', 'User prompt'], [
      { c: ['Хто пише', 'developer / tester', 'користувач чатбота'], tip: 'Різні автори.' },
      { c: ['Коли', 'один раз на початку', 'кожна взаємодія'], tip: 'Set once vs successive prompts.' },
      { c: ['Змінюється?', 'ні — константа', 'так — щоразу новий'], tip: 'Ключова відмінність.' },
      { c: ['Видимість', 'зазвичай прихований', 'видимий'], tip: 'Not visible vs directly visible.' },
      { c: ['Роль', 'правила для всієї розмови', 'конкретне питання/задача'], tip: 'Framework vs immediate context.' }
    ]),
    memo: '<b>System — правила гри, User — хід у грі.</b>',
    trap: 'LLM враховує <b>обидва</b> промпти разом. Дистрактор «user prompt перекриває system prompt» або «system prompt застосовується лише до першої відповіді» — хибні.' },
  { id: 'chk-213a', type: 'q', q: Q2('c213-1', '2.1.3', 'user', 'Which statement CORRECTLY describes a user prompt?', [
    ['It defines operational parameters for the entire session', 0, 'Це system prompt.'],
    ['It changes with each interaction and is visible to the user', 1, 'User prompt — змінний і видимий (2.1.3).'],
    ['It is hidden from the user and stays constant', 0, 'Це характеристики system prompt.'],
    ['It replaces the system prompt for the next response', 0, 'LLM враховує обидва промпти разом.']
  ]) },
  { id: 'good', type: 'c', ref: '2.1.3', title: 'Якими мають бути обидва промпти',
    syl: 'For effective implementation, system prompts should be <b>clear and specific about the LLM\'s role and possible constraints</b>. It may also contain context and general instructions, e.g. regarding the expected output. User prompts must be <b>focused and well-structured</b>, including <b>explicit instructions</b> as well as additional relevant context and output format instructions.',
    ua: 'System prompt — чітка роль і обмеження (можна загальний контекст і вимоги до виводу). User prompt — сфокусований запит із явною інструкцією, потрібним контекстом і форматом.',
    ex: 'Погано: system prompt «Be helpful» + user prompt «тести?». Добре: system — роль QA-асистента, ISTQB-терміни, заборона вигадувати; user — «Згенеруй 5 негативних кейсів для AC2, таблицею».',
    vis: V.ba(
      { t: 'System prompt', items: ['clear & specific', 'role + constraints', 'може: context, загальні інструкції про output'], tip: 'Рекомендації для system prompt.' },
      { t: 'User prompt', items: ['focused, well-structured', 'explicit instructions', '+ релевантний context і output format'], tip: 'Рекомендації для user prompt.' }, '+'),
    memo: 'System — «<b>хто і в яких межах</b>», User — «<b>що саме зараз і в якому вигляді</b>».',
    trap: 'System prompt «may contain parts of a structured prompt such as the role, context and constraints» — тобто 6 компонентів можна розподілити між system і user prompt.' },
  { id: 'sum-213', type: 's', title: 'Шпаргалка 2.1.3 · System vs User prompt (K2)',
    points: ['<b>System prompt</b>: задає developer/tester; зазвичай прихований і нередагований для користувача; константа на всю сесію; behavior, personality, operational parameters; може містити role, context, constraints.',
      '<b>User prompt</b>: реальний ввід користувача; змінюється щоразу; видимий; immediate context відповіді.',
      'LLM відповідає з урахуванням <b>обох</b> одночасно.',
      'System — clear & specific (role, constraints); User — focused, structured, explicit instructions + context + output format.'],
    vis: V.compare(['', 'System', 'User'], [{ c: ['Змінюється', 'ні', 'так'] }, { c: ['Видимий', 'ні', 'так'] }, { c: ['Охоплення', 'вся розмова', 'одна взаємодія'] }]) }
];
