// ---------- 1.1.4 ----------
const SVG_VLM = `<svg viewBox="0 0 640 230" role="img" aria-label="VLM subset of multimodal">
<rect x="10" y="10" width="620" height="210" rx="18" class="n" data-tip="Multimodal LLMs: обробляють кілька модальностей — text, images, sound, video. Ширше поняття."/>
<text x="28" y="38" font-weight="700">Multimodal LLMs</text><text x="28" y="60" class="lbl2">text · images · sound · video</text>
<rect x="250" y="60" width="350" height="140" rx="14" class="a" data-tip="Vision-language models — ПІДМНОЖИНА multimodal LLMs: інтегрують visual + textual info (image captioning, visual question answering, consistency text ↔ visual)."/>
<text x="268" y="90" font-weight="700">Vision-Language Models (VLM)</text>
<text x="268" y="114" class="lbl2">• image captioning</text><text x="268" y="136" class="lbl2">• visual question answering</text><text x="268" y="158" class="lbl2">• consistency text ↔ visual</text>
<circle cx="120" cy="140" r="34" class="n" data-tip="Інші модальності multimodal LLMs — напр. аудіо (sound), відео."/><text x="96" y="145" class="lbl2">audio…</text>
</svg>`;
C1.slides['1.1.4'] = [
  { id: 'mm', type: 'c', ref: '1.1.4', title: 'Multimodal LLMs — більше ніж текст',
    syl: '<b>Multimodal LLMs</b> extend the traditional transformer model to process <b>multiple data modalities, including text, images, sound, and video</b>. These models are trained on large and diverse datasets that enable them to <b>learn relationships between different types of data</b>.',
    ua: '«Модальність» — тип даних. Multimodal LLM приймає не лише текст, а й картинки, звук, відео, і розуміє зв’язки між ними: що на скриншоті відповідає фразі в user story.',
    ex: 'Ви прикладаєте скриншот сторінки оплати і текст AC: «Кнопка Pay неактивна, доки не прийнято умови». Модель аналізує обидва входи разом і помічає, що на скриншоті чекбокс не відмічений, а кнопка активна.',
    vis: V.flow([
      { t: '📝 Text', tip: 'User story, defect report, AC.' },
      { t: '🖼️ Images', tip: 'Screenshots, GUI wireframes.' },
      { t: '🔊 Sound', tip: 'Аудіо-модальність.' },
      { t: '🎬 Video', tip: 'Відео-модальність.' },
      { t: 'Multimodal LLM', s: 'relationships between data types', tip: 'Extends the traditional transformer model.' }
    ]),
    memo: '<b>Multi-MODAL = багато «органів чуття»</b>: читає, дивиться, слухає.',
    trap: 'Multimodal = <b>кілька типів даних</b>, а не «кілька мов» і не «кілька моделей одночасно».' },
  { id: 'mmtok', type: 'c', ref: '1.1.4', title: 'Як картинка потрапляє в transformer',
    syl: 'To handle various modalities, <b>tokenization is adapted for each data type</b> — for example, <b>images are converted into embeddings using vision-language models</b> before being processed in the transformer model.',
    ua: 'Transformer працює з векторами. Текст стає векторами через tokenization + embeddings; картинку окремо «перекладає» у вектори vision-language model. Далі все обробляється разом.',
    ex: 'Скриншот форми реєстрації + текст баг-репорту → обидва перетворюються на embeddings → модель порівнює, чи описаний у репорті елемент справді є на скриншоті.',
    vis: V.flow([
      { t: '🖼️ Screenshot', tip: 'Image input.' },
      { t: 'Vision-language model', s: 'image → embeddings', tip: 'Images are converted into embeddings using VLMs.' },
      { t: 'Transformer', s: '+ text embeddings', tip: 'Текстові токени → embeddings; далі спільна обробка.' },
      { t: 'Response', tip: 'Відповідь, що враховує і текст, і зображення.' }
    ]),
    memo: '<b>Кожній модальності — свій «перекладач» у вектори.</b>',
    trap: 'Tokenization <b>adapted for each data type</b> — не одна й та сама процедура для тексту й зображень. Зображення → embeddings через VLM.' },
  { id: 'vlm', type: 'c', ref: '1.1.4', title: 'Vision-Language Models — підмножина multimodal',
    syl: '<b>Vision-language models, a subset of multimodal LLMs</b>, specifically integrate visual and textual information to perform tasks such as <b>image captioning, visual question answering, and analyzing the consistency between textual and visual input</b>.',
    ua: 'VLM — вузька спеціалізація всередині multimodal: лише «картинка + текст». Три типові задачі: описати зображення, відповісти на питання про зображення, перевірити, чи збігаються текст і картинка.',
    ex: 'Visual question answering для QA: «Скільки полів має форма на скриншоті і чи всі позначені як обов’язкові?». Consistency check: «Чи відповідає цей скриншот кроку 3 з тест-кейсу?».',
    vis: V.raw(SVG_VLM),
    memo: '<b>VLM ⊂ Multimodal</b>: всі VLM — multimodal, але не всі multimodal — VLM (як «всі смартфони — телефони»).',
    trap: 'Sample Q5: правильна відповідь — <b>VLM є підмножиною multimodal LLMs</b>. Дистрактори: навпаки (multimodal ⊂ VLM), «interchangeable terms», «unrelated, only UI».' },
  { id: 'chk-114a', type: 'q', q: Q('c114-1', '1.1.4', 'vlm', 'Which of the following is a typical task of a vision-language model as described in the syllabus?', [
    ['Transcribing recorded audio from a usability session', 0, 'Аудіо — інша модальність; VLM інтегрують visual + textual.'],
    ['Analyzing the consistency between a defect report and a screenshot', 1, 'Analyzing the consistency between textual and visual input — одна з трьох задач VLM.'],
    ['Selecting features manually before model training', 0, 'Це classical ML.'],
    ['Executing GUI test scripts automatically in a browser', 0, 'Виконання скриптів — не задача VLM (і не key capability LLM, див. 1.2.1).']
  ]) },
  { id: 'mmtest', type: 'c', ref: '1.1.4', title: 'Multimodal LLM у тестуванні',
    syl: '…they can analyze visual elements of applications, such as <b>screenshots and GUI wireframes</b>, along with associated textual descriptions, such as <b>defect reports or user stories</b>. This capability allows testers to <b>identify discrepancies between expected results and actual visual elements</b> on a screenshot. In addition… can <b>generate rich, realistic test cases</b> that incorporate both textual data and visual cues, thereby <b>increasing overall coverage</b>.',
    ua: 'Дві користі: (1) знаходити розбіжності між тим, що очікується (текст), і тим, що реально на екрані (картинка); (2) генерувати тест-кейси, які враховують і текст, і візуальні підказки, — це підвищує покриття.',
    ex: 'Wireframe від дизайнера + user story → LLM пропонує кейси «перевірити порядок полів», «перевірити плейсхолдер у полі телефону», яких не було в тексті story, бо вони видні лише на макеті.',
    vis: V.ba(
      { t: 'Expected (text)', items: ['User story / AC', 'Defect report', 'Expected result у тест-кейсі'], tip: 'Textual descriptions.' },
      { t: 'Actual (visual)', items: ['Screenshot', 'GUI wireframe', 'Видимі елементи UI'], tip: 'Visual elements of applications.' }, '🔍'),
    memo: '<b>«Скрин + Текст = Розбіжності + Кейси»</b>.',
    trap: 'Силабус говорить про <b>increasing overall coverage</b> через тест-кейси з текстом і візуальними підказками — а не про «повну заміну ручного візуального тестування».' },
  { id: 'ho114', type: 'p', ho: 'HO-1.1.4 (H1)', title: 'Практика: промпт для multimodal LLM (текст + зображення)',
    task: '<p><b>Ситуація.</b> У вас є скриншот сторінки «Бронювання поїздки» і user story:</p><p><i>«As a passenger, I want to select the number of seats (1–8) and see the total price before paying. Acceptance criteria: AC1 seats selector allows 1–8; AC2 total price is shown next to the Pay button; AC3 Pay button is disabled until terms are accepted.»</i></p><p><b>Завдання.</b> 1) Напишіть промпт для multimodal LLM, який використовує <b>і текст, і зображення</b>. 2) Виконайте його в будь-якому multimodal-чатботі зі своїм скриншотом (будь-яка форма з вашого проєкту). 3) Перевірте відповідь проти скриншоту власними очима: що модель знайшла правильно, що пропустила або «вигадала»?</p>',
    model: 'Role: You are an experienced QA engineer reviewing a UI.\n\nInputs:\n1) The attached screenshot of the "Trip booking" page.\n2) User story + acceptance criteria:\n   AC1 seats selector allows 1–8\n   AC2 total price is shown next to the Pay button\n   AC3 Pay button is disabled until terms are accepted\n\nTask:\nCompare the screenshot with EACH acceptance criterion.\nFor every AC say: Met / Not met / Cannot be determined from the image,\nand describe the visual evidence.\nThen list any other visual discrepancies you notice\nand propose 5 test cases that use both the text and visual cues.\n\nOutput format: a table | AC | Verdict | Evidence on screenshot |,\nthen a numbered list of test cases.\nIf something is unreadable or not visible, say so — do not guess.',
    checklist: ['Промпт явно посилається на обидва входи: зображення і текст', 'Задача сформульована як порівняння expected (AC) з actual (скриншот)', 'Є «Cannot be determined» / заборона вгадувати', 'Задано формат відповіді (таблиця/список)', 'Я сам(а) перевірив(ла) відповідь моделі по скриншоту (plausible ≠ correct)', 'Записав(ла) переваги та труднощі: що модель побачила добре, що пропустила'],
    note: 'HO-1.1.4 — hands-on (H1), не екзаменується. Структуру промпту детально вивчатимемо в главі 2 — тут достатньо, щоб промпт поєднував текст і зображення. Фраза «do not guess» і таблиця — порада тренера.' },
  { id: 'sum-114', type: 's', title: 'Шпаргалка 1.1.4 · Multimodal & VLM (K2)',
    points: ['<b>Multimodal LLMs</b> розширюють transformer: <b>text, images, sound, video</b>; вчать <b>relationships between data types</b>.',
      '<b>Tokenization adapted for each data type</b>; images → embeddings через <b>VLM</b> → transformer.',
      '<b>VLM — subset of multimodal LLMs</b>: visual + textual; image captioning, visual question answering, consistency text ↔ visual.',
      'У тестуванні: screenshots / GUI wireframes + defect reports / user stories → <b>discrepancies expected vs actual</b>; rich test cases → <b>↑ coverage</b>.'],
    vis: V.raw(SVG_VLM) }
];

// ---------- 1.2.1 ----------
const CAPS = [
  { ic: '📋', t: 'Requirements analysis', s: 'ambiguities, inconsistencies, missing info', tip: 'R — аналіз і покращення вимог та інших елементів test basis; генерує уточнювальні питання для стейкхолдерів.' },
  { ic: '🧪', t: 'Test case creation', s: 'test cases + test objectives', tip: 'C — тест-кейси та test objectives на основі вимог, user stories, будь-якого test basis.' },
  { ic: '🔮', t: 'Test oracle generation', s: 'expected results', tip: 'O — LLM допомагає генерувати очікувані результати.' },
  { ic: '🔢', t: 'Test data generation', s: 'datasets, boundaries, combinations', tip: 'D — датасети, граничні значення, комбінації.' },
  { ic: '🤖', t: 'Test automation support', s: 'scripts + improvements', tip: 'A — скрипти з опису тест-кейсу; покращення існуючих; підказка test techniques.' },
  { ic: '📊', t: 'Test result analysis', s: 'summaries, classify anomalies', tip: 'R — summaries; класифікація аномалій за severity і priority.' },
  { ic: '📄', t: 'Testware creation', s: 'plans, reports, defect reports', tip: 'T(W) — test plans, test reports, defect reports і їх оновлення.' }
];
C1.slides['1.2.1'] = [
  { id: 'caps', type: 'c', ref: '1.2 / 1.2.1', title: 'Що LLM вміє для тестувальника: загальна картина',
    syl: 'LLMs excel at <b>processing natural language and code, generating coherent text and code, answering questions, summarizing information, translating languages, and analyzing images</b> in a multimodal context… LLMs can interpret requirements, specifications, screenshots, code, test cases, and defect reports…',
    ua: 'LLM розуміє те, з чим ми працюємо щодня: вимоги, специфікації, скриншоти, код, тест-кейси, баг-репорти. Звідси сім ключових capabilities у тестуванні — по всьому test process.',
    ex: 'Один день QA: зранку розібрати неоднозначну user story, в обід згенерувати тестові дані, після обіду оновити Playwright-скрипт, увечері — зробити summary нічного регресу. Для кожного кроку є capability зі списку.',
    vis: V.cards(CAPS),
    memo: '<b>R-COD-ART</b>: <b>R</b>equirements · test <b>C</b>ases · <b>O</b>racle · <b>D</b>ata · <b>A</b>utomation · <b>R</b>esults · <b>T</b>estware. «Код-арт» для тестувальника.',
    trap: 'Питання «Select TWO key capabilities»: правильні — зі списку R-COD-ART. Дистрактори: «execute all tests without human intervention», «perform exploratory testing», «generate complete application code for deployment».' },
  { id: 'req', type: 'c', ref: '1.2.1', title: 'Requirements analysis and improvement',
    syl: 'LLMs can help analyze requirements, and other elements of the test basis, by <b>identifying ambiguities, inconsistencies, or missing information</b>. They can <b>generate meaningful questions</b> to help clarify requirements during discussions with stakeholders.',
    ua: 'LLM — як прискіпливий колега на рев’ю вимог: шукає розмиті слова, суперечності й пропуски та формулює питання до PO/аналітика.',
    ex: 'User story: «Водій має швидко отримати сповіщення про нове замовлення». LLM: «“Швидко” — це скільки секунд? Що, якщо водій офлайн? Push чи SMS? Що з повторними сповіщеннями?» — готові питання на refinement.',
    vis: V.cards([
      { ic: '🌫️', t: 'Ambiguities', s: '«швидко», «зручно»', tip: 'Неоднозначні формулювання.' },
      { ic: '⚔️', t: 'Inconsistencies', s: 'AC суперечать одне одному', tip: 'Суперечності в test basis.' },
      { ic: '🕳️', t: 'Missing info', s: 'не описано офлайн-режим', tip: 'Пропущена інформація.' },
      { ic: '❓', t: 'Questions', s: 'для стейкхолдерів', tip: 'Meaningful questions для уточнення вимог.' }
    ]),
    memo: '<b>«Туман, Конфлікт, Діра → Питання»</b>.',
    trap: 'Аналізувати можна не лише вимоги, а й <b>інші елементи test basis</b>. LLM <b>допомагає</b> (can help) — рішення приймають люди зі стейкхолдерами.' },
  { id: 'tcoracle', type: 'c', ref: '1.2.1', title: 'Test case creation support і test oracle generation',
    syl: '<b>Test case creation support</b>: LLMs can help generate test cases and suggest <b>test objectives</b> based on system requirements, user stories or any other elements of the test basis. <b>Test oracle generation</b>: LLMs can help generate <b>expected results</b>.',
    ua: 'Дві суміжні можливості: (1) згенерувати тест-кейси і запропонувати цілі тестування; (2) згенерувати expected results, тобто test oracle (термін з CTFL — джерело очікуваного результату).',
    ex: 'API <code>POST /trips</code> зі специфікацією OpenAPI → LLM пропонує кейси (валідні, невалідні, авторизація) і для кожного — очікуваний статус-код і тіло відповіді. Ви звіряєте expected results зі специфікацією — plausible ≠ correct.',
    vis: V.flow([
      { t: 'Test basis', s: 'requirements, user stories', tip: 'Будь-які елементи test basis.' },
      { t: 'Test objectives', tip: 'LLM може запропонувати цілі тестування.' },
      { t: 'Test cases', tip: 'Test case creation support.' },
      { t: 'Expected results', s: 'test oracle', tip: 'Test oracle generation — генерація очікуваних результатів.' }
    ]),
    memo: '<b>Oracle = «Оракул каже, що має статися»</b> → expected result.',
    trap: '«Test oracle generation» = <b>expected results</b>, а не «виконання тестів» і не «прогноз дефектів». Не плутайте з test data generation.' },
  { id: 'chk-121a', type: 'q', q: Q('c121-1', '1.2.1', 'tcoracle', 'In the syllabus, what does "test oracle generation" by an LLM refer to?', [
    ['Generating expected results', 1, 'Дослівно: «LLMs can help generate expected results».'],
    ['Predicting which modules will contain defects', 0, 'Predicting software problems — приклад classical ML (1.1.1).'],
    ['Executing test cases and recording the outcome', 0, 'LLM не виконують тести самостійно — це не key capability.'],
    ['Creating boundary values and data combinations', 0, 'Це test data generation.']
  ]) },
  { id: 'data', type: 'c', ref: '1.2.1', title: 'Test data generation',
    syl: '<b>Test data generation</b>: LLMs can generate <b>datasets, set boundary values, and create different combinations</b> of test data.',
    ua: 'LLM швидко робить таблиці тестових даних: межові значення, комбінації параметрів, реалістичні (синтетичні) записи.',
    ex: 'Знижка для дітей до 6 років → LLM пропонує межі 0, 5, 6, 7 і невалідні −1, «abc», порожнє поле; плюс комбінації «вік × тип квитка × спосіб оплати». Ви перевіряєте, чи межі правильні за специфікацією (пояснення тренера).',
    vis: V.tokens(['age = -1', 'age = 0', 'age = 5', 'age = 6', 'age = 7', 'age = 120', 'age = ""', 'age = "abc"'], 'Приклад від тренера: boundary values + невалідні значення, які LLM може згенерувати для правила «до 6 років — безкоштовно».'),
    memo: '<b>Data = «Датасет, Межі, Комбінації» (ДМК)</b>.',
    trap: 'Sample Q6 (e) — правильна capability: «Creating diverse test data with various combinations and boundary values».' },
  { id: 'auto', type: 'c', ref: '1.2.1', title: 'Test automation support і test result analysis',
    syl: '<b>Test automation support</b>: LLMs can help <b>generate test scripts from test case description and improve existing test scripts</b> by suggesting changes and identifying appropriate test techniques. <b>Test result analysis</b>: LLMs can help analyze test results by <b>creating summaries and classifying anomalies based on severity and priority</b>.',
    ua: 'Автоматизація: з текстового тест-кейсу — у скрипт; або рев’ю існуючого скрипту з порадами. Аналіз результатів: коротке summary прогону і сортування аномалій за severity / priority.',
    ex: 'Ви даєте ручний кейс «логін з невалідним паролем» → LLM пише чернетку Playwright-тесту. Потім даєте JUnit/HTML-звіт на 400 тестів → LLM групує 12 падінь і пропонує severity/priority. Запускаєте і вирішуєте все одно ви.',
    vis: V.ba(
      { t: '🤖 Test automation support', items: ['Test case description → test script', 'Improve existing scripts', 'Identify appropriate test techniques'], tip: 'Допомога в автоматизації — не автономне виконання.' },
      { t: '📊 Test result analysis', items: ['Summaries of results', 'Classify anomalies', 'by severity & priority'], tip: 'Аналіз результатів тестування.' }, '+'),
    memo: '<b>«Пише скрипт — читає звіт»</b>, але не натискає Run замість вас.',
    trap: 'Sample Q6 (c): «Automating the execution of all test scripts without human intervention» — <b>не</b> key capability. LLM <b>supports</b> automation, а не виконує все без людини.' },
  { id: 'chk-121b', type: 'q', q: Q('c121-2', '1.2.1', 'auto', 'Which TWO of the following are key LLM capabilities for test tasks described in the syllabus?', [
    ['Classifying anomalies in test results based on severity and priority', 1, 'Test result analysis.'],
    ['Replacing stakeholders in deciding requirement priorities', 0, 'LLM генерує питання для стейкхолдерів, а не замінює їх.'],
    ['Generating test scripts from test case descriptions', 1, 'Test automation support.'],
    ['Guaranteeing that generated expected results are correct', 0, 'Plausible ≠ correct; гарантій немає.'],
    ['Running exploratory test sessions without a tester', 0, 'Exploratory testing вимагає людської креативності (rationale Sample Q6).']
  ], { multi: 2 }) },
  { id: 'testware', type: 'c', ref: '1.2.1', title: 'Testware creation — і чого LLM НЕ робить',
    syl: '<b>Testware creation</b>: LLMs can help create various documents, including <b>test plans, test reports and defect reports</b>, and <b>keep them updated</b> as the project evolves. These capabilities demonstrate how LLMs can impact various aspects of software testing <b>through the whole test process</b>.',
    ua: 'LLM допомагає писати і підтримувати актуальними документи тестування. Разом сім capabilities покривають увесь test process. А от «зробити все замість людини» в цьому списку немає.',
    ex: 'Після спринту: LLM оновлює test summary report за свіжими цифрами і переформулює сирі нотатки в акуратний баг-репорт (steps, expected, actual). Ви перевіряєте факти.',
    vis: V.compare(['✅ Key capabilities (1.2.1)', '❌ Не key capability (rationale Sample Q6)'], [
      { c: ['Identifying ambiguities in requirements', 'Generating complete application code for deployment'], tip: 'Sample Q6 b — не key capability у тестових задачах.' },
      { c: ['Creating test data with combinations & boundaries', 'Automating execution of ALL test scripts without human intervention'], tip: 'Sample Q6 c — LLM підтримує, але не виконує скрипти без людського нагляду.' },
      { c: ['Generating test scripts, summarizing results', 'Performing (manual) exploratory testing'], tip: 'Sample Q6 d — exploratory testing вимагає людської креативності, досвіду, рішень.' }
    ]),
    memo: '<b>LLM — «помічник», а не «замінник»</b>: усі дієслова в силабусі — <i>can help, support, suggest</i>.',
    trap: 'Обережно з абсолютами: «all», «without human intervention», «complete», «guarantee». Майже завжди — неправильний варіант.' },
  { id: 'sum-121', type: 's', title: 'Шпаргалка 1.2.1 · Key LLM capabilities (K2)',
    points: ['LLM інтерпретують requirements, specifications, screenshots, code, test cases, defect reports.',
      '<b>R-COD-ART</b>: Requirements analysis · test Cases · Oracle (expected results) · Data (datasets, boundaries, combinations) · Automation support · Results analysis (summaries, severity/priority) · Testware (plans, reports, defect reports).',
      'Діють <b>через увесь test process</b>.',
      'НЕ key capabilities: повна автономна автоматизація без людини, exploratory testing замість людини, повний код застосунку для deployment.'],
    vis: V.cards(CAPS) }
];

// ---------- 1.2.2 ----------
C1.slides['1.2.2'] = [
  { id: 'two', type: 'c', ref: '1.2 / 1.2.2', title: 'Два способи працювати з LLM',
    syl: 'Test professionals in all roles can leverage GenAI in <b>two complementary ways</b>: through <b>GenAI chatbots</b> that provide instant responses to queries, and through <b>LLM-powered applications integrated into test tools</b>… they differ in <b>functionality, flexibility, and integration approaches</b>.',
    ua: 'Перший шлях — розмова з чатботом (ви пишете — він відповідає). Другий — LLM, вбудована в тестові інструменти через API. Вони не конкурують, а доповнюють одне одного.',
    ex: 'Чатбот: ви вручну питаєте «які edge cases для імпорту CSV?». LLM-powered app: плагін у вашій TMS автоматично генерує чернетки тест-кейсів для кожної нової story в Jira.',
    vis: V.ba(
      { t: '💬 AI chatbot', items: ['Tester ↔ conversational UI', 'Instant responses', 'Ad hoc tasks'], tip: 'User-friendly conversational interface — пряма комунікація з LLM.' },
      { t: '🔌 LLM-powered testing app', items: ['Test tool → API → LLM', 'Well-defined, often automated tasks', 'Customization & scalability'], tip: 'Інтеграція можливостей LLM через API.' }, '⇄'),
    memo: '<b>Чат = «спитати». Апка = «вбудувати».</b>',
    trap: 'Слово <b>complementary</b>: це не «або-або» і не «чатбот застарів». Різниця: functionality, flexibility, integration approaches.' },
  { id: 'chatbot', type: 'c', ref: '1.2.2', title: 'AI chatbots',
    syl: 'AI Chatbots provide a <b>user-friendly, conversational interface</b>… Through techniques such as <b>prompt chaining</b>, testers can iteratively refine outputs, making chatbots particularly effective for <b>routine tasks, exploratory testing, and even onboarding new testers</b>… beneficial in scenarios requiring <b>fast feedback, clarification of test concepts, or dynamic exploration of requirements</b>… accessible even to <b>non-technical stakeholders</b>.',
    ua: 'Чатбот — для швидких діалогів. Можна уточнювати крок за кроком (prompt chaining: вихід одного промпту → вхід наступного). Підходить для рутини, як помічник в exploratory testing, для онбордингу новачків; ним можуть користуватися й нетехнічні люди.',
    ex: 'Новачок у команді питає чатбот: «Що таке pairwise testing і як застосувати до форми пошуку поїздок?» → отримує пояснення → «А тепер згенеруй комбінації» → «Прибери нереалістичні». Це prompt chaining.',
    vis: V.cards([
      { ic: '⚡', t: 'Fast feedback', tip: 'Сценарії, що потребують швидкого зворотного зв’язку.' },
      { ic: '🧭', t: 'Exploratory testing', s: 'як підтримка', tip: 'Chatbots effective for exploratory testing — як помічник тестувальника.' },
      { ic: '🎓', t: 'Onboarding', tip: 'Швидкий доступ до знань і практик тестування.' },
      { ic: '🔁', t: 'Prompt chaining', tip: 'Ітеративне уточнення відповідей: output одного промпту → input іншого.' },
      { ic: '👥', t: 'Non-technical stakeholders', tip: 'Інтуїтивний інтерфейс розширює коло користувачів.' }
    ]),
    memo: '<b>Чатбот = «ШОК»</b>: <b>Ш</b>видкий фідбек, <b>О</b>нбординг, <b>К</b>онцепти (уточнення) — плюс жива розвідка вимог і тест-кейсів. 🍫',
    trap: 'Здається суперечністю: чатботи «effective for exploratory testing» (1.2.2), але LLM <b>не може performing exploratory testing</b> замість людини (Sample Q6). Розгадка: чатбот <b>допомагає тестувальнику</b>, який досліджує.' },
  { id: 'apps', type: 'c', ref: '1.2.2', title: 'LLM-powered testing applications',
    syl: '…involve the <b>integration of LLM capabilities via APIs</b> to perform <b>well-defined and often automated testing tasks</b>. These applications offer <b>greater customization and scalability</b>, allowing organizations and tool vendors to embed generative AI into existing test frameworks… automation of repetitive or complex tasks, such as <b>test case generation, defect analysis, or test data synthesis</b>. In more advanced implementations, organizations can create <b>AI agents</b> specifically designed to perform certain testing roles (see Chapter 4).',
    ua: 'LLM підключають через API до ваших інструментів: тест-фреймворку, TMS, CI. Задача чітко визначена і часто автоматизована, тому рішення можна налаштувати й масштабувати. Найпросунутіший варіант — AI agents під конкретні тестові ролі (глава 4).',
    ex: 'CI-пайплайн після кожного нічного прогону викликає LLM через API: класифікує падіння, пише коментар у Jira і генерує синтетичні дані для наступного прогону. Без діалогу — повторювана, чітко визначена задача.',
    vis: V.flow([
      { t: 'Test tool / CI', tip: 'Існуючі test frameworks та інструменти.' },
      { t: 'API', tip: 'Integration of LLM capabilities via APIs.' },
      { t: 'LLM', tip: 'Виконує well-defined task.' },
      { t: 'Automated output', s: 'cases · defect analysis · data', tip: 'Приклади з силабусу: test case generation, defect analysis, test data synthesis.' },
      { t: 'AI agents', s: 'advanced', tip: 'Агенти для певних тестових ролей — Chapter 4.' }
    ]),
    memo: '<b>App = «API + Автоматизація + Агенти»</b> (три «А»).',
    trap: 'Key words: <i>via APIs, well-defined, automated, customization, scalability, embed into existing test frameworks</i>. Якщо питання про «ad hoc, conversational» — це чатбот.' },
  { id: 'chk-122a', type: 'q', q: Q('c122-1', '1.2.2', 'apps', 'A tool vendor embeds an LLM via an API into its test management tool so that draft test cases are automatically generated for every new user story. Which interaction model is this?', [
    ['AI chatbot, because the LLM generates natural language', 0, 'Природна мова є в обох моделях; тут немає діалогу — задача автоматизована й інтегрована.'],
    ['LLM-powered testing application', 1, 'Інтеграція через API у test tool, well-defined automated task, customization/scalability.'],
    ['Symbolic AI system', 0, 'LLM — не rule-based система.'],
    ['Multimodal vision-language model', 0, 'Немає візуального входу; це не модель взаємодії.']
  ]) },
  { id: 'cmp', type: 'c', ref: '1.2.2', title: 'Порівняння: chatbot vs LLM-powered app',
    syl: 'AI chatbots and LLM-powered testing applications can both assist testers, though they <b>differ in functionality, flexibility, and integration approaches</b>.',
    ua: 'Офіційне формулювання з Sample Q7: <b>chatbots — conversational interfaces для ad hoc test tasks</b>; <b>LLM-powered apps — customized solutions для specific test tasks</b>.',
    ex: 'Одна і та сама задача «згенерувати тестові дані» може бути і тим, і іншим: разово в чаті (ad hoc) або щоночі в пайплайні через API (specific, automated, scalable).',
    vis: V.compare(['Критерій', 'AI chatbot', 'LLM-powered testing app'], [
      { c: ['Інтерфейс', 'Conversational, natural language', 'Integration via <b>APIs</b>'], tip: 'Integration approaches.' },
      { c: ['Тип задач', '<b>Ad hoc</b>, routine, exploration', '<b>Well-defined</b>, often <b>automated</b>, specific'], tip: 'Functionality.' },
      { c: ['Гнучкість', 'Iterative refinement (prompt chaining)', '<b>Customization & scalability</b>'], tip: 'Flexibility.' },
      { c: ['Користувачі', 'Усі, включно з non-technical', 'Організації, tool vendors'], tip: 'Хто зазвичай використовує.' },
      { c: ['Типові приклади', 'Fast feedback, onboarding, clarification', 'Test case generation, defect analysis, test data synthesis, AI agents'], tip: 'Приклади з силабусу.' }
    ]),
    memo: '<b>Ad hoc ↔ Chat; Specific ↔ App</b>. «Чат — для “а що, якщо?”, апка — для “щоразу робити X”».',
    trap: 'Sample Q7 дистрактори міняють сторони місцями («chatbots suited for specific tasks, apps for ad hoc») або кажуть «identical without configuration differences». Слідкуйте, до якої сторони приписане «ad hoc».' },
  { id: 'pe', type: 'c', ref: '1.2.2', title: 'Спільне для обох: prompt engineering',
    syl: 'Regardless of how the tester interacts with LLMs — whether through chatbots or integrated LLM-powered applications — successful implementation of generative AI in testing <b>requires strong prompt engineering</b> (see Chapter 2). <b>Carefully designed prompts and clear, specific instructions</b> are essential to improve the likelihood that LLM-generated outputs are <b>accurate, relevant, and aligned with testing objectives</b>.',
    ua: 'Хоч чат, хоч інтеграція — якість результату залежить від промпту. У застосунку промпт просто «захований» у коді чи конфігурації, але він так само має бути продуманий.',
    ex: 'Ваш CI-скрипт надсилає в LLM промпт «analyze failures». Результат розмитий. Після уточнення (роль, вхідні дані, формат JSON, критерії severity) — стабільні корисні звіти. Це і є prompt engineering (детально — глава 2).',
    vis: V.flow([
      { t: 'Chatbot', tip: 'Промпт пише тестувальник у чаті.' },
      { t: '+', tip: '' },
      { t: 'LLM-powered app', tip: 'Промпт закладений в інтеграцію.' },
      { t: '= Prompt engineering', s: 'accurate · relevant · aligned', tip: 'Потрібен в обох випадках (Chapter 2).' }
    ]),
    memo: '<b>«Сміття на вході — сміття на виході»</b>, незалежно від інтерфейсу.',
    trap: '«LLM-powered applications do not need prompt engineering because they are integrated» — хибно. Силабус: <b>regardless</b> of interaction model.' },
  { id: 'chk-122b', type: 'q', q: Q('c122-2', '1.2.2', 'chatbot', 'In which situation is an AI chatbot MOST appropriate according to the syllabus?', [
    ['Embedding defect analysis into an existing test framework for every nightly run', 0, 'Інтеграція у фреймворк + повторюваність = LLM-powered application.'],
    ['Helping a new tester quickly clarify test concepts during onboarding', 1, 'Onboarding і clarification of test concepts — типові сценарії для chatbots.'],
    ['Scaling test data synthesis across many teams via APIs', 0, 'Scalability via APIs — LLM-powered applications.'],
    ['Creating AI agents that perform specific testing roles', 0, 'AI agents — advanced implementation LLM-powered applications (глава 4).']
  ]) },
  { id: 'sum-122', type: 's', title: 'Шпаргалка 1.2.2 · Interaction models (K2)',
    points: ['Два <b>complementary</b> способи: <b>AI chatbots</b> і <b>LLM-powered testing applications</b>; різняться functionality, flexibility, integration.',
      '<b>Chatbots</b>: conversational UI, immediate responses, <b>prompt chaining</b>; routine tasks, exploratory testing (як підтримка), onboarding; fast feedback; доступні non-technical stakeholders.',
      '<b>Apps</b>: LLM via <b>APIs</b>; well-defined, often automated tasks; <b>customization & scalability</b>; test case generation, defect analysis, test data synthesis; <b>AI agents</b> (гл. 4).',
      'Sample Q7: chatbots — <b>ad hoc</b>; apps — <b>customized solutions for specific test tasks</b>.',
      'Обидва вимагають <b>strong prompt engineering</b>.'],
    vis: V.compare(['', 'Chatbot', 'App'], [{ c: ['Як', 'розмова', 'API'] }, { c: ['Що', 'ad hoc', 'specific / automated'] }, { c: ['Сила', 'швидкість, доступність', 'customization, scalability'] }]) }
];
