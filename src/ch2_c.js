// ---------- 2.3.1 ----------
const METRICS = [
  { c: ['<b>Accuracy</b>', 'загальна правильність vs expert-written test cases, requirements або стандарти', 'наскільки кейси покривають усі задані вимоги'], tip: 'Accuracy — overall correctness against expert-written test cases, requirements, or other standards.' },
  { c: ['<b>Precision</b>', 'правильність щодо конкретної цілі', 'наскільки кейси правильно ідентифікують аномалії'], tip: 'Precision — correctness with respect to a specific objective.' },
  { c: ['<b>Recall</b>', 'здатність знайти ВСІ релевантні випадки в наборі даних', 'чи покривають кейси валідні й невалідні partitions класу даних'], tip: 'Recall — identify all relevant instances within a dataset.' },
  { c: ['<b>Relevance & contextual fit</b>', 'чи застосовний вивід у цьому контексті', 'узгодженість з test basis і доменними вимогами'], tip: 'Applicable and appropriate for a given context.' },
  { c: ['<b>Diversity</b>', 'широкий спектр входів і сценаріїв, без повторів', 'різні поведінки користувачів, edge cases'], tip: 'Wide range of inputs and scenarios, avoiding repetition.' },
  { c: ['<b>Execution success rate</b>', 'частка артефактів, що виконуються «як є»', 'скільки скриптів запускаються без синтаксичних помилок і проблем формату'], tip: 'Proportion of generated test artefacts executed successfully as is in the test environment.' },
  { c: ['<b>Time efficiency</b>', 'зекономлений час vs ручна робота', 'час AI на генерацію vs час людини'], tip: 'Time saved compared to manual test efforts.' }
];
C2.slides['2.3.1'] = [
  { id: 'why231', type: 'c', ref: '2.3 / 2.3.1', title: 'Навіщо метрики для результатів GenAI',
    syl: 'Evaluating the performance of GenAI in software testing requires a <b>clear set of metrics</b> to assess the <b>quality, relevance, and effectiveness</b> of the generated outputs… These metrics, whether <b>general or task-specific</b>, help optimize LLM prompting… testers may perform <b>manual reviews or automate them</b> e.g. by comparing the LLM output against a <b>predefined reference</b>. Given the <b>non-deterministic nature</b> of GenAI, the metrics must be based on <b>statistically relevant data</b>.',
    ua: '«Мені здається, стало краще» — не метрика. Потрібні вимірювані показники: загальні (7 штук) і специфічні для задачі. Міряють вручну або автоматично (порівняння з еталоном). І через non-determinism — на достатній вибірці запусків.',
    ex: 'Ви порівнюєте два промпти для генерації API-тестів: кожен запускаєте 10 разів, рахуєте, скільки скриптів запустилося без помилок і скільки вимог покрито, — а не робите висновок з одного вдалого запуску.',
    vis: V.flow([
      { t: 'GenAI output', tip: 'Тест-кейси, скрипти, дані, звіти.' },
      { t: 'Metrics', s: 'general + task-specific', tip: 'Quality, relevance, effectiveness.' },
      { t: 'Manual review / auto vs reference', tip: 'Два способи оцінки.' },
      { t: 'Statistically relevant data', tip: 'Через non-deterministic nature — кілька запусків, достатня вибірка.' }
    ]),
    memo: '<b>Один запуск — анекдот, десять запусків — статистика.</b>',
    trap: 'Фраза для іспиту: через non-determinism метрики мають базуватися на <b>statistically relevant data</b>. І оцінювати можна <b>і вручну, і автоматично</b>.' },
  { id: 'seven', type: 'c', ref: '2.3.1', title: 'Сім загальних метрик',
    syl: 'Several metrics can be used to evaluate the quality and efficiency of GenAI results on a test task: <b>Accuracy · Precision · Recall · Relevance and Contextual Fit · Diversity · Execution Success Rate · Time Efficiency</b>… In addition to these general metrics, <b>task-specific metrics</b> can be tailored…',
    ua: 'Сім метрик — по рядку на кожну (натискайте). Кожна відповідає на своє питання: правильно? влучно? все знайдено? доречно? різноманітно? запускається? швидше?',
    ex: 'Для згенерованих Playwright-тестів: execution success rate (скільки запускається одразу), accuracy (чи покриті AC), diversity (чи є негативні й граничні сценарії), time efficiency (2 хв проти 2 год вручну).',
    vis: V.compare(['Метрика', 'Що вимірює', 'Приклад з силабусу'], METRICS),
    memo: '<b>«Правильно — Влучно — Повно — Доречно — Різноманітно — Запускається — Швидко»</b>.',
    trap: 'Пари, які плутають: <b>accuracy</b> (vs еталон/вимоги загалом) ↔ <b>precision</b> (щодо конкретної цілі); <b>recall</b> (знайти всі релевантні) ↔ <b>diversity</b> (різні сценарії, без повторів).' },
  { id: 'chk-231a', type: 'q', q: Q2('c231-1', '2.3.1', 'seven', 'A team records 6 hours to write 40 test cases manually versus 1 hour with an LLM. Which metric does this measurement represent?', [
    ['Accuracy', 0, 'Правильність vs еталон — не час.'],
    ['Execution success rate', 0, 'Частка артефактів, що запускаються.'],
    ['Diversity', 0, 'Різноманітність сценаріїв.'],
    ['Time efficiency', 1, 'Час AI vs час людини (2.3.1).']
  ]) },
  { id: 'pairs', type: 'c', ref: '2.3.1', title: 'Метрики під задачу: як обирати',
    syl: 'Accuracy example: the degree to which the generated test cases <b>cover all specified requirements</b>. Precision example: …<b>correctly identify anomalies</b>. Recall example: …cover <b>valid and invalid equivalence partitions</b> of a data class. Diversity example: …cover <b>various user behaviors</b> and… explore <b>edge cases</b>. Relevance example: …consistent with the <b>test basis</b> and integrate the <b>domain-specific requirements</b>.',
    ua: 'Під кожну ціль — своя метрика. Хочете, щоб нічого не пропустили з класів еквівалентності — recall. Щоб було багато різних сценаріїв і edge cases — diversity. Щоб скрипти одразу запускались — execution success rate.',
    ex: 'Sample Q17: LLM генерує сценарії взаємодії, API-скрипти і синтетичні дані для edge cases → найкраща комбінація: <b>diversity</b> (різні сценарії й edge cases) + <b>execution success rate</b> (чи працюють API-скрипти).',
    vis: V.compare(['Ціль оцінки', 'Метрика'], [
      { c: ['Чи покрито всі вимоги?', 'Accuracy'] },
      { c: ['Чи правильно знайдено аномалії?', 'Precision'] },
      { c: ['Чи охоплено всі валідні/невалідні класи?', 'Recall'] },
      { c: ['Чи відповідає домену й test basis?', 'Relevance & contextual fit'] },
      { c: ['Чи різні поведінки та edge cases?', 'Diversity'] },
      { c: ['Чи запускаються скрипти?', 'Execution success rate'] },
      { c: ['Чи швидше за людину?', 'Time efficiency'] }
    ]),
    memo: 'Скрипти → <b>execution</b>. Edge cases → <b>diversity</b>. Класи еквівалентності → <b>recall</b>.',
    trap: 'Sample Q17: варіанти з time efficiency або лише relevance «пропускають» ключові аспекти. Обирайте метрики, що <b>прямо відповідають типам артефактів</b> у сценарії.' },
  { id: 'chk-231b', type: 'q', q: Q2('c231-2', '2.3.1', 'pairs', 'A tester checks whether LLM-generated test cases cover both valid and invalid equivalence partitions of an input field. Which metric does this correspond to in the syllabus?', [
    ['Precision', 0, 'Precision — правильність щодо конкретної цілі (напр. ідентифікація аномалій).'],
    ['Recall', 1, 'Приклад recall у силабусі — покриття valid і invalid equivalence partitions.'],
    ['Relevance and contextual fit', 0, 'Relevance — відповідність контексту/test basis.'],
    ['Execution success rate', 0, 'Стосується виконуваності артефактів.']
  ]) },
  { id: 'sum-231', type: 's', title: 'Шпаргалка 2.3.1 · Метрики (K2)',
    points: ['Сім загальних: <b>accuracy, precision, recall, relevance & contextual fit, diversity, execution success rate, time efficiency</b> + task-specific.',
      'Accuracy — vs еталон/вимоги; precision — щодо конкретної цілі; recall — усі релевантні випадки (valid/invalid partitions).',
      'Diversity — різні поведінки, edge cases; execution success rate — запускається «як є»; time efficiency — vs ручна робота.',
      'Оцінка: manual review або автоматично vs predefined reference.',
      'Non-determinism → <b>statistically relevant data</b>.'],
    vis: V.compare(['Метрика', 'Питання'], [{ c: ['Accuracy', 'правильно?'] }, { c: ['Precision', 'влучно?'] }, { c: ['Recall', 'все знайдено?'] }, { c: ['Diversity', 'різноманітно?'] }, { c: ['Execution', 'запускається?'] }]) }
];

// ---------- 2.3.2 ----------
C2.slides['2.3.2'] = [
  { id: 'five', type: 'c', ref: '2.3.2', title: 'П’ять технік оцінки та покращення промптів',
    syl: '• <b>Iterative prompt modification</b>: start with a base prompt and iteratively modify it based on actual results, gradually adding more context or adjusting wording… • <b>A/B testing of prompts</b>: create multiple versions… evaluate which version produces better results based on <b>predefined metrics</b>. • <b>Output analysis</b>: examine AI-generated output for <b>inaccuracies or inconsistencies</b>, e.g. with respect to test basis. Understanding the types of errors… • <b>Integrate user feedback</b>: gather input from testers about the <b>usefulness and clarity</b>… e.g. level of detail. • <b>Adjust prompt length and specificity</b>: sometimes adding more context can improve… in other cases <b>shorter prompts may yield better generalization</b>.',
    ua: 'Промпт — теж «код», його тестують і рефакторять. П’ять інструментів: поступово міняти; порівнювати версії за метриками; розбирати помилки у виводі; збирати відгуки колег; гратися довжиною й деталізацією.',
    ex: 'Промпт генерує кейси без негативних сценаріїв → output analysis показує патерн → додаєте constraint → A/B: версія B дає на 40% більше edge cases за метрикою diversity → колеги кажуть «забагато кроків» → user feedback → скорочуєте.',
    vis: V.cards([
      { ic: '🔁', t: 'Iterative modification', tip: 'База → поступові зміни за реальними результатами (контекст, терміни).' },
      { ic: '🆎', t: 'A/B testing', tip: 'Кілька версій промпту, порівняння за predefined metrics.' },
      { ic: '🔬', t: 'Output analysis', tip: 'Аналіз помилок і неузгодженостей у виводі (напр. vs test basis) → розуміння типів помилок.' },
      { ic: '🗣️', t: 'User feedback', tip: 'Відгуки тестувальників про корисність і зрозумілість (напр. рівень деталізації).' },
      { ic: '📏', t: 'Length & specificity', tip: 'Більше контексту іноді краще; коротші промпти іноді краще узагальнюють.' }
    ]),
    memo: '<b>«Міняй — Порівнюй — Розбирай — Питай — Довжину крути»</b>.',
    trap: 'Довший промпт ≠ завжди кращий: силабус прямо каже, що <b>shorter prompts may yield better generalization</b>.' },
  { id: 'which232', type: 'c', ref: '2.3.2', title: 'Яку техніку обрати під ситуацію',
    syl: 'Output analysis: …Understanding the <b>types of errors and inconsistencies</b> can help refine prompts to <b>avoid similar defects</b> in future iterations. A/B testing: helps determine which prompt <b>phrasing or structure</b> produces the most accurate and relevant results.',
    ua: 'Питання «ЧОМУ модель помиляється?» → output analysis. «ЯКА з версій краща?» → A/B testing. «Чи зручно це людям?» → user feedback. «Як поступово дійти до хорошого?» → iterative modification.',
    ex: 'Sample Q18: LLM систематично генерує кейси з неправильними expected results, що суперечать вимогам. Щоб зрозуміти <b>чому</b> і не повторювати — <b>output analysis</b>. A/B порівнює версії, але не діагностує причину.',
    vis: V.compare(['Питання команди', 'Техніка'], [
      { c: ['Чому вивід систематично хибний?', '🔬 Output analysis'], tip: 'Sample Q18.' },
      { c: ['Яка з двох версій промпту краща за метриками?', '🆎 A/B testing'] },
      { c: ['Чи корисні й зрозумілі кейси для команди?', '🗣️ User feedback'] },
      { c: ['Як крок за кроком дійти до якісного промпту?', '🔁 Iterative modification'] },
      { c: ['Чи не забагато/замало контексту?', '📏 Length & specificity'] }
    ]),
    memo: '<b>Чому? → аналіз виводу. Яка краща? → A/B. Чи зручно? → фідбек.</b>',
    trap: 'A/B testing — <b>порівняння версій</b>, а не діагностика причин помилок (rationale Sample Q18).' },
  { id: 'chk-232a', type: 'q', q: Q2('c232-1', '2.3.2', 'which232', 'A team has two prompt versions for generating API test cases and wants to know which one yields better results according to predefined metrics. Which technique should they use?', [
    ['Output analysis', 0, 'Output analysis шукає типи помилок у виводі; тут треба порівняти версії.'],
    ['A/B testing of prompts', 1, 'Кілька версій + порівняння за predefined metrics.'],
    ['Integrating user feedback', 0, 'Відгуки людей — інше джерело, не порівняння за метриками.'],
    ['Adjusting prompt length', 0, 'Це зміна промпту, а не спосіб визначити кращу версію.']
  ]) },
  { id: 'team232', type: 'c', ref: '2.3.2', title: 'Командна практика: бібліотеки промптів',
    syl: 'Test teams can organize <b>prompt evaluation and optimization sessions</b> to ensure continuous improvement… <b>Sharing practices</b> across the test team or test organization not only helps <b>standardize prompt techniques and maintain consistent quality</b> but also promotes a <b>culture of learning and iterative improvement</b>… e.g. by <b>sharing prompt libraries</b>.',
    ua: 'Найкращі промпти не мають жити в чиємусь блокноті. Команда регулярно оцінює й покращує промпти та тримає спільну бібліотеку — так якість стабільна, а помилки не повторюються.',
    ex: 'У Confluence-просторі QA — сторінка «Prompt library»: перевірені промпти для аналізу story, генерації API-тестів, аналізу звіту регресу; у кожного — версія, метрики, автор, дата останнього A/B.',
    vis: V.flow([
      { t: 'Evaluation sessions', tip: 'Регулярні сесії оцінки та оптимізації.' },
      { t: 'Shared practices', s: 'prompt libraries', tip: 'Обмін практиками в команді/організації.' },
      { t: 'Standard + consistent quality', tip: 'Стандартизація технік.' },
      { t: 'Learning culture', tip: 'Колективний досвід, менше повторних помилок.' }
    ]),
    memo: '<b>Промпт-бібліотека = «тест-кейси для промптів»</b>, спільні для всіх.',
    trap: 'Мета обміну — <b>стандартизація, стабільна якість і культура навчання</b>, а не «щоб AI сам навчався на бібліотеці».' },
  { id: 'chk-232b', type: 'q', q: Q2('c232-2', '2.3.2', 'five', 'Testers report that LLM-generated test cases are correct but far too detailed to be practical. Which refinement technique uses this input MOST directly?', [
    ['A/B testing of prompts', 0, 'Можна потім, але вхід тут — думка людей, а не порівняння версій.'],
    ['Integrating user feedback', 1, 'Відгуки тестувальників про корисність і рівень деталізації.'],
    ['Output analysis', 0, 'Output analysis шукає помилки й неузгодженості; тут вивід правильний.'],
    ['Execution success rate', 0, 'Це метрика (2.3.1), а не техніка покращення промптів.']
  ]) },
  { id: 'sum-232', type: 's', title: 'Шпаргалка 2.3.2 · Покращення промптів (K2)',
    points: ['<b>Iterative modification</b> — від базового промпту поступово (контекст, терміни).',
      '<b>A/B testing</b> — кілька версій, порівняння за predefined metrics.',
      '<b>Output analysis</b> — типи помилок у виводі (vs test basis) → чому і як не повторювати.',
      '<b>User feedback</b> — корисність і зрозумілість для тестувальників (рівень деталізації).',
      '<b>Length & specificity</b> — іноді більше контексту краще, іноді коротше краще узагальнює. Командні сесії + <b>prompt libraries</b>.'],
    vis: V.cards([{ ic: '🔁', t: 'Iterate', tip: '' }, { ic: '🆎', t: 'A/B', tip: '' }, { ic: '🔬', t: 'Output', tip: '' }, { ic: '🗣️', t: 'Feedback', tip: '' }, { ic: '📏', t: 'Length', tip: '' }]) }
];
