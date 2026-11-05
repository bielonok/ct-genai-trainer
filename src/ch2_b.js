// ---------- 2.2.1 ----------
const K3TAG = 'K3 · сценарні питання';
C2.slides['2.2.1'] = [
  { id: 'apply', type: 'c', ref: '2.2 / 2.2.1', title: 'Test analysis з GenAI: входи і виходи',
    syl: 'Applying prompt engineering techniques… enables GenAI to support test tasks such as test analysis, test design, test automation, test case prioritization, defect detection, coverage analysis, and test monitoring and test control… <b>High-quality input is crucial</b>. GenAI can support test analysis tasks by <b>generating and prioritizing test conditions, identifying defects in the test basis and providing coverage analysis</b>. The input data includes requirements, user stories, technical specifications, GUI wireframes… The output consists of typical test analysis work products, such as <b>prioritized test conditions (e.g., acceptance criteria)</b>.',
    ua: 'На етапі аналізу ми відповідаємо на питання «що тестувати». GenAI бере test basis (вимоги, stories, специфікації, вайрфрейми) і допомагає отримати пріоритезовані test conditions — наприклад, acceptance criteria.',
    ex: 'Ви даєте LLM нову story «Диспетчер може перенести поїздку на інший день» + вайрфрейм форми → отримуєте список test conditions з пріоритетами і зауваження до неясних місць у story.',
    vis: V.flow([
      { t: 'Test basis', s: 'requirements, stories, specs, wireframes', tip: 'Input data для test analysis.' },
      { t: 'GenAI + prompt', s: 'structured + techniques', tip: 'Якість входу прямо впливає на точність виходу.' },
      { t: 'Prioritized test conditions', s: 'напр. acceptance criteria', tip: 'Типовий work product test analysis.' }
    ]),
    memo: '<b>Аналіз = «ЩО тестувати»</b> → test conditions; дизайн (2.2.2) = «ЯК тестувати» → test cases.',
    trap: 'Output test analysis — <b>test conditions</b> (наприклад AC), а не test cases чи скрипти. Тест-кейси — вже test design (2.2.2).' },
  { id: 'tasks221', type: 'c', ref: '2.2.1', title: 'П’ять задач test analysis, які підтримує GenAI',
    syl: '• <b>Identify potential defects in the test basis</b> (inconsistencies, ambiguities, incomplete information)… • <b>Generating test conditions</b>… break them down into measurable, testable statements… • <b>Prioritize test conditions based on risk level</b>: with information on the risk likelihood and risk impact… regulatory compliance, user-facing features (e.g., login or payment), historical defect data… • <b>Support coverage analysis</b>: mapping requirements and user stories to test conditions… • <b>Suggest test techniques</b> (e.g., boundary value analysis, equivalence partitioning)…',
    ua: 'Запам’ятайте п’ять дій: знайти дефекти в базисі, згенерувати умови, пріоритезувати за ризиком, перевірити покриття, підказати техніки тест-дизайну.',
    ex: 'Для story оплати поїздки: LLM помічає, що не описано поведінку при відмові банку (дефект базису), пропонує умови для кожного AC, ставить «payment» у високий пріоритет (user-facing + історія багів), будує матрицю AC ↔ умови і радить BVA для суми.',
    vis: V.cards([
      { ic: '🐞', t: 'Defects in test basis', s: 'ambiguity, inconsistency, gaps', tip: 'Порівняння схожих патернів вимог, знання з минулих defect reports.' },
      { ic: '🧪', t: 'Generate test conditions', s: 'measurable, testable', tip: 'NLP: інтерпретує вимоги й розбиває на перевірювані твердження.' },
      { ic: '⚖️', t: 'Prioritize by risk', s: 'likelihood × impact', tip: 'Regulatory compliance, user-facing features (login, payment), historical defect data.' },
      { ic: '🗺️', t: 'Coverage analysis', s: 'requirements ↔ conditions', tip: 'Чи покриті всі аспекти test basis; особливо корисно для складних вимог.' },
      { ic: '🛠️', t: 'Suggest test techniques', s: 'BVA, EP…', tip: 'За типом вимоги чи story.' }
    ]),
    memo: '<b>«Дефект — Умова — Ризик — Покриття — Техніка»</b> (Д-У-Р-П-Т).',
    trap: 'Для пріоритизації LLM потрібна <b>інформація про ризики</b> (likelihood, impact). Без неї «пріоритети» — здогадка. І завжди: <b>quality of inputs directly impacts accuracy and precision</b>.' },
  { id: 'chain221', type: 'c', ref: '2.2.1', title: 'Prompt chaining для аналізу story (HO-2.2.1b)',
    syl: 'Practice prompt chaining to analyze a given user story and refine acceptance criteria, first by <b>identifying ambiguities</b>, then by <b>evaluating testability</b>, and finally by <b>evaluating completeness</b>… At each step, the results provided by the LLM are <b>manually verified and corrected</b>… the next stage uses a clean result from the previous stage.',
    ua: 'Еталонний ланцюг для аналізу: неоднозначності → тестованість → повнота, з людською перевіркою між кроками. Але порядок і набір кроків підбирають під ціль: якщо вимоги вже відрев’ювлено, крок пошуку дефектів можна пропустити.',
    ex: 'Sample Q12 (2 бали): вимоги стабільні й уже перевірені на дефекти; ціль — умови → пріоритети → прогалини покриття. Правильний ланцюг: (1) згенерувати умови, (2) пріоритезувати їх з контекстом ризиків, (3) перевірити покриття вимог.',
    vis: V.flow([
      { t: '1. Generate', s: 'test conditions', tip: 'Із вимог.' },
      { t: '✔', tip: 'Людина перевіряє.' },
      { t: '2. Prioritize', s: 'risk context', tip: 'Передати контекст ризиків.' },
      { t: '✔', tip: 'Людина перевіряє.' },
      { t: '3. Coverage', s: 'all aspects covered?', tip: 'Coverage analysis.' }
    ]),
    memo: 'Ланцюг будують <b>під ціль</b>, а не «за шаблоном»: кожен крок — одна підзадача, між кроками — ✔.',
    trap: 'Sample Q12 дистрактори: «все одним промптом» (це не chaining) і «додати пошук дефектів», хоча вимоги вже відрев’ювлені — зайвий крок.' },
  { id: 'chk-221a', type: 'q', q: Q2('c221-1', '2.2.1', 'tasks221', 'A tester provides an LLM with user stories and asks it to map each story to the generated test conditions and list any story aspects without a matching condition. Which test analysis task is this?', [
    ['Prioritizing test conditions based on risk level', 0, 'Пріоритети тут не визначаються.'],
    ['Supporting coverage analysis', 1, 'Mapping stories → test conditions + пошук непокритих аспектів = coverage analysis.'],
    ['Identifying defects in the test basis', 0, 'Шукають не дефекти вимог, а прогалини покриття умовами.'],
    ['Suggesting test techniques for conditions', 0, 'Техніки тест-дизайну не пропонуються.']
  ]) },
  { id: 'mm221', type: 'c', ref: '2.2.1', title: 'Мультимодальний промпт: AC з вайрфрейму (HO-2.2.1a)',
    syl: 'Practice writing structured prompts using <b>multimodal input (text and image)</b>. The goal is to generate high quality (i.e. <b>well-formed, clear and complete</b>) acceptance criteria from a user story and a <b>GUI wireframe</b>. Other text elements can be added to provide context, such as <b>constraints on input fields or business rules</b>… The results… are compared to assess the impact of different formulations of the structured prompt.',
    ua: 'Story + картинка вайрфрейму + бізнес-правила → структурований промпт → AC. Потім змінюєте формулювання компонентів і дивитеся, як змінюється якість результату.',
    ex: 'Вайрфрейм форми «Нова поїздка» (поля дата, маршрут, кількість місць 1–8) + правило «не можна створити поїздку в минулому» → LLM пропонує AC, включно з межами 1 і 8 та забороною минулих дат.',
    vis: V.flow([
      { t: '📝 User story', tip: 'Текстовий input.' },
      { t: '🖼️ GUI wireframe', tip: 'Image input.' },
      { t: '📏 Field constraints / business rules', tip: 'Додатковий текстовий контекст.' },
      { t: '→ AC', s: 'well-formed, clear, complete', tip: 'Критерії якості AC з HO-2.2.1a.' }
    ]),
    memo: '<b>Текст + Картинка + Правила = Якісні AC</b>.',
    trap: 'Якість AC за силабусом: <b>well-formed, clear and complete</b>. І знову: якість входу визначає якість виходу.' },
  { id: 'p221', type: 'p', ho: 'GenAI-2.2.1 · HO-2.2.1b', tag: K3TAG, title: 'Практика: ланцюг промптів для аналізу user story',
    task: '<p><b>User story:</b> <i>«As a dispatcher, I want to reschedule a confirmed trip so that passengers are informed about the new date.» AC1: The new date must be in the future. AC2: Passengers receive a notification quickly. AC3: The driver must be reassigned if unavailable.</i></p><p><b>Завдання:</b> напишіть <b>ланцюг із 3 промптів</b> (структурованих: role, context, instruction, input data, constraints, output format) для аналізу цієї story: неоднозначності → тестованість → повнота. Вкажіть, що ви перевіряєте вручну між кроками.</p>',
    model: 'PROMPT 1 — ambiguities\nRole: Senior test analyst. Context: trip management back office (dispatchers, drivers, passengers).\nInstruction: Identify ambiguities, inconsistencies and missing information in the user story and AC.\nInput data: <story + AC1–AC3>\nConstraints: Quote the exact phrase for each finding; do not propose test cases yet.\nOutput format: Table | # | Phrase | Problem | Question for PO |\n→ ✔ Я перевіряю: «quickly» (скільки?), «unavailable» (хто визначає?), канал сповіщення. Відповіді PO дописую в story.\n\nPROMPT 2 — testability\nInstruction: For each (clarified) AC, assess whether it is testable; rewrite non-testable AC into measurable statements.\nInput data: <clarified story + AC>\nOutput format: | AC | Testable? | Rewritten AC |\n→ ✔ Перевіряю, що переписані AC відповідають бізнес-правилам, а не вигадкам моделі.\n\nPROMPT 3 — completeness\nInstruction: Identify missing AC (negative paths, edge cases, roles) for this story.\nConstraints: Only within the story scope; mark each suggestion as "proposal".\nOutput format: numbered list with rationale.\n→ ✔ Узгоджую фінальний список AC з PO.',
    checklist: ['Три окремі промпти, кожен — одна підзадача', 'Кожен промпт має структуру (role, context, instruction, input data, constraints, output format)', 'Між кроками — явна людська перевірка/виправлення', 'Наступний крок використовує ПЕРЕВІРЕНИЙ результат попереднього', 'Помічено неоднозначні слова (quickly, unavailable)', 'Результат — покращені, тестовані AC (test conditions), а не тест-кейси'],
    note: 'Еталон — приклад тренера; формулювання можуть бути іншими. Головне — логіка chaining + human verification.' },
  { id: 'sum-221', type: 's', title: 'Шпаргалка 2.2.1 · Test analysis (K3)',
    points: ['Input: requirements, user stories, specs, GUI wireframes. Output: <b>prioritized test conditions</b> (напр. AC).',
      'П’ять задач: <b>defects in test basis · generate test conditions · prioritize by risk · coverage analysis · suggest test techniques</b>.',
      'Пріоритизація потребує даних про ризик: likelihood, impact; compliance, user-facing (login, payment), історія дефектів.',
      'Chaining для аналізу: ambiguities → testability → completeness, з людською перевіркою; кроки — під ціль задачі.',
      '<b>Якість входу</b> прямо визначає точність результату.'],
    vis: V.flow([{ t: 'Test basis', tip: 'Input' }, { t: 'GenAI', tip: 'Prompt + technique' }, { t: 'Test conditions', tip: 'Output' }]) }
];

// ---------- 2.2.2 ----------
C2.slides['2.2.2'] = [
  { id: 'design', type: 'c', ref: '2.2.2', title: 'Test design і test implementation з GenAI',
    syl: '…test design involves the elaboration and refinement of test conditions, which are then translated into <b>test cases and other testware</b>. Test implementation entails the creation or acquisition of the necessary testware… Both <b>manual tests and automated test scripts</b> can be created, prioritized, and arranged within a test execution schedule with the support of GenAI… creation and evaluation of various testware, including <b>test cases, test data, test scripts, and test environments</b>.',
    ua: 'Після аналізу (що тестувати) — дизайн (як: тест-кейси) і реалізація (усе потрібне для запуску: дані, скрипти, середовища, розклад). GenAI допомагає і з ручними, і з автоматизованими тестами.',
    ex: 'З пріоритезованих умов для «перенесення поїздки» LLM робить тест-кейси, синтетичних пасажирів, Playwright-скрипти для двох ключових кейсів і пропонує порядок виконання з урахуванням залежностей.',
    vis: V.flow([
      { t: 'Test conditions', tip: 'Результат test analysis.' },
      { t: 'Test design', s: 'test cases', tip: 'Elaboration and refinement of test conditions → test cases.' },
      { t: 'Test implementation', s: 'data · scripts · environments · schedule', tip: 'Створення/придбання testware для виконання.' }
    ]),
    memo: '<b>Аналіз — ЩО, Дизайн — ЯК, Реалізація — ЧИМ</b>.',
    trap: 'Test environments теж згадані серед testware, з якими допомагає GenAI в 2.2.2.' },
  { id: 'tcgen', type: 'c', ref: '2.2.2', title: 'Test case generation і test data synthesis',
    syl: '<b>Test case generation</b>: …create draft test cases based on functional and non-functional requirements… suggest <b>test preconditions and inputs, expected results, and coverage criteria</b>… from basic functional verification to complex end-to-end testing. <b>Test data synthesis</b>: GenAI can create representative, <b>data privacy-preserving synthetic test data</b> that resembles production data, covering extreme situations and varied test conditions… for functional and non-functional testing… without exposing sensitive information.',
    ua: 'LLM пише чернетки кейсів (передумови, входи, очікування, критерії покриття) і генерує синтетичні дані, схожі на прод, але без реальних персональних даних.',
    ex: 'Замість копіювати з проду реальних пасажирів (ПІБ, телефони) — LLM генерує 500 вигаданих записів з реалістичними іменами, довгими прізвищами, телефонами різних країн і крайніми випадками (100 місць у бронюванні, поїздка через північ).',
    vis: V.ba(
      { t: '🧪 Test case generation', items: ['preconditions + inputs', 'expected results', 'coverage criteria', 'від функціональних до E2E'], tip: 'Draft test cases з functional і non-functional вимог.' },
      { t: '🔢 Test data synthesis', items: ['схожі на production', 'privacy-preserving', 'extreme situations', 'functional + non-functional'], tip: 'Без розкриття чутливих даних.' }, '+'),
    memo: '<b>Кейси — «чернетки»</b>, <b>дані — «двійники проду без секретів»</b>.',
    trap: 'Згенеровані кейси — <b>draft</b>. Синтетичні дані — <b>privacy-preserving</b>: перевага саме в тому, що не розкривають чутливу інформацію.' },
  { id: 'scripts', type: 'c', ref: '2.2.2', title: 'Скрипти і розклад виконання',
    syl: '<b>Automated test script generation</b>: GenAI can generate <b>manual test procedures and automated test scripts from structured test cases</b>, interpreting test steps and translating them into code compatible with various test automation frameworks… can be updated or extended based on new requirements. <b>Test execution scheduling and prioritization</b>: GenAI can analyze test cases and their <b>interdependencies</b>, optimizing test execution schedules based on <b>priority, associated risks, resource availability and test objectives</b>.',
    ua: 'Зі структурованого кейсу — ручна процедура або код під ваш фреймворк. А ще LLM може скласти розклад прогону, враховуючи залежності між тестами, пріоритети, ризики і ресурси.',
    ex: 'Кейс у таблиці «Логін водія з простроченим документом» → Playwright-тест на TS. Для регресу на 300 кейсів — розклад: спочатку створення поїздок (від них залежать інші), потім платежі (високий ризик), UI-косметика — в кінці.',
    vis: V.flow([
      { t: 'Structured test cases', tip: 'Вхід для генерації скриптів.' },
      { t: 'Manual procedures / automated scripts', s: 'під ваш фреймворк', tip: 'Інтерпретує кроки й перекладає в код.' },
      { t: 'Execution schedule', s: 'priority · risk · resources · dependencies', tip: 'Оптимізація розкладу виконання.' }
    ]),
    memo: 'Розклад = <b>«ПРРЗ»</b>: Пріоритет, Ризик, Ресурси, Залежності (+ test objectives).',
    trap: 'Скрипти генеруються <b>зі структурованих тест-кейсів</b>. Розклад враховує й <b>interdependencies</b> тестів — часта деталь у сценаріях.' },
  { id: 'chk-222a', type: 'q', q: Q2('c222-1', '2.2.2', 'tcgen', 'A team needs realistic passenger records, including invalid and extreme values, for functional tests, without using real personal data. Which GenAI capability from the syllabus BEST fits?', [
    ['Automated test script generation', 0, 'Скрипти не вирішують проблему даних.'],
    ['Test data synthesis', 1, 'Privacy-preserving synthetic data, схожі на production, з extreme situations.'],
    ['Test execution scheduling', 0, 'Розклад не створює даних.'],
    ['Coverage analysis', 0, 'Це test analysis, не дані.']
  ]) },
  { id: 'ho222', type: 'c', ref: '2.2.2', title: 'Три патерни з hands-on 2.2.2',
    syl: '<b>HO-2.2.2a</b>: functional test cases from user stories using <b>prompt chaining, structured prompts and meta prompting</b> — generate test cases in a specific output format → verify completeness with a <b>coverage table</b> per acceptance criterion → meta-prompt for end-to-end procedures. <b>HO-2.2.2b</b>: <b>few-shot prompting</b> to generate <b>Gherkin</b> test cases — select n examples (user story, test conditions, given-when-then test cases)… if inaccurate, refine prompt or examples. <b>HO-2.2.2c</b>: <b>prompt chaining</b> to prioritize test cases considering priorities and <b>dependencies</b>; results <b>manually verified</b> to detect errors in the LLM\'s reasoning.',
    ua: 'Три готові «рецепти»: кейси з покриттям (chaining + structured + meta), Gherkin (few-shot з прикладами), пріоритизація з залежностями (chaining + ручна перевірка міркувань моделі).',
    ex: 'Sample Q13 (2 бали): найкращий промпт для Gherkin — той, що <b>містить приклади</b> (few-shot), явно вимагає <b>Given-When-Then</b> і <b>відповідність AC</b>. Варіанти без прикладів або з розмитим «rely on best practices» — гірші.',
    vis: V.compare(['Задача', 'Техніка', 'Ключовий момент'], [
      { c: ['Функціональні кейси з story', 'Chaining + structured + meta', 'Таблиця покриття AC; meta для E2E'], tip: 'HO-2.2.2a.' },
      { c: ['Gherkin-кейси', 'Few-shot', 'n прикладів story → conditions → GWT'], tip: 'HO-2.2.2b; Sample Q13.' },
      { c: ['Пріоритизація suite', 'Chaining', 'Пріоритети + залежності; ручна перевірка'], tip: 'HO-2.2.2c: multi-criteria reasoning.' }
    ]),
    memo: '<b>Gherkin → приклади. Покриття → таблиця. Пріоритети → перевір міркування.</b>',
    trap: 'У Gherkin-задачі «найкращий промпт» = приклади + GWT-синтаксис + узгодження з AC. Розмиті constraints типу «best practices» — ознака слабкого варіанту.' },
  { id: 'chk-222b', type: 'q', q: Q2('c222-2', '2.2.2', 'ho222', 'A tester asks an LLM to prioritize a regression suite where several test cases depend on others. According to the syllabus, what should the tester do with the LLM result?', [
    ['Accept it, since prioritization is a deterministic task', 0, 'LLM — non-deterministic; міркування можуть бути хибними.'],
    ['Manually verify it to detect errors in the LLM’s reasoning', 1, 'HO-2.2.2c: results should be manually verified to detect errors in reasoning.'],
    ['Convert it into Gherkin to validate its syntax', 0, 'Gherkin не перевіряє коректність пріоритетів.'],
    ['Rerun it with zero-shot until the order stops changing', 0, 'Стабільність порядку ≠ правильність міркувань.']
  ]) },
  { id: 'p222', type: 'p', ho: 'GenAI-2.2.2 · HO-2.2.2b', tag: K3TAG, title: 'Практика: few-shot промпт для Gherkin',
    task: '<p><b>Нова story:</b> <i>«As a passenger, I want to cancel my booking up to 24 hours before departure so that I get a full refund.» AC: Cancellation ≥ 24h before departure → full refund; &lt; 24h → no refund; cancelled booking frees the seats.</i></p><p><b>Завдання:</b> напишіть структурований <b>few-shot</b> промпт для генерації Gherkin-сценаріїв. Включіть 2 короткі приклади (story → test conditions → сценарій) і всі 6 компонентів.</p>',
    model: 'Role: Test analyst experienced in BDD and Gherkin.\nContext: Passenger booking module of a trip management platform.\nInstruction: Generate Gherkin scenarios for the new user story, following the examples.\nInput data:\n  Example 1 — Story: "As a passenger, I want to book a seat…"\n    Conditions: seat available; no seats left\n    Scenario: Booking a seat when seats are available\n      Given a trip with 3 free seats\n      When the passenger books 1 seat\n      Then the booking is confirmed and 2 seats remain\n  Example 2 — Story: "As a passenger, I want to change my seat count…"\n    Conditions: increase within limit; exceed limit\n    Scenario: …\n  New story: <cancellation story + 3 AC>\nConstraints: Use strict Given-When-Then; one scenario per test condition; cover every AC, incl. the 24h boundary (exactly 24h, 23h59m); no UI details.\nOutput format: .feature text, Feature + Scenario titles like in the examples; then a table AC → scenarios.',
    checklist: ['Є ≥ 2 приклади (few-shot), кожен: story → conditions → сценарій', 'Явна вимога Given-When-Then', 'Явна вимога покрити кожен AC', 'Згадано межу 24 години (boundary)', 'Задано output format (як у прикладах + таблиця покриття)', 'Усі 6 компонентів присутні'],
    note: 'Логіка відповідає Sample Q13: приклади + GWT + alignment with AC = найкращий промпт.' },
  { id: 'sum-222', type: 's', title: 'Шпаргалка 2.2.2 · Test design & implementation (K3)',
    points: ['Testware: <b>test cases, test data, test scripts, test environments</b>; manual і automated; розклад виконання.',
      '<b>Test case generation</b>: preconditions, inputs, expected results, coverage criteria; від функціональних до E2E (draft).',
      '<b>Test data synthesis</b>: synthetic, privacy-preserving, схожі на prod, extreme situations.',
      '<b>Script generation</b> зі структурованих кейсів; <b>scheduling</b> за priority, risk, resources, dependencies, objectives.',
      'Патерни: chaining + coverage table + meta (E2E); <b>few-shot для Gherkin</b>; chaining + ручна перевірка для пріоритизації.'],
    vis: V.flow([{ t: 'Conditions', tip: '' }, { t: 'Test cases', tip: '' }, { t: 'Data · Scripts · Schedule', tip: '' }]) }
];

// ---------- 2.2.3 ----------
C2.slides['2.2.3'] = [
  { id: 'regr', type: 'c', ref: '2.2.3', title: 'Чому регрес — ідеальне місце для GenAI',
    syl: 'As each new iteration or release is completed, the number of regression test cases… often increases, making them ideal candidates for automation, particularly in <b>CI/CD pipelines</b>… GenAI can streamline this process by assisting in the <b>creation, maintenance, and optimization</b> of automated regression test suites. By dynamically adapting to codebase changes and performing <b>impact analysis</b>, GenAI can identify which areas of the software are most likely to be affected by recent modifications…',
    ua: 'Регрес росте з кожним релізом і часто запускається в CI/CD. GenAI допомагає створювати, підтримувати й оптимізувати автотести, а також визначати, що зачепили останні зміни.',
    ex: 'PR змінює модуль тарифів → LLM аналізує диф і підказує: зачеплено розрахунок вартості та звіти бухгалтерії; запускати спершу ці 40 тестів, а не весь регрес на 2 години.',
    vis: V.flow([
      { t: 'Code change', tip: 'Нова ітерація / реліз.' },
      { t: 'Impact analysis', s: 'GenAI', tip: 'Які області найімовірніше зачеплені.' },
      { t: 'Targeted regression', s: 'CI/CD', tip: 'Зусилля — туди, де найбільше потрібно.' }
    ]),
    memo: '<b>Створити · Підтримувати · Оптимізувати</b> — три дієслова GenAI для регресу.',
    trap: 'Impact analysis — про <b>визначення зачеплених областей за змінами коду</b>, а не про «виконати всі тести швидше».' },
  { id: 'act223', type: 'c', ref: '2.2.3', title: 'П’ять активностей регресу з GenAI',
    syl: '• <b>Keyword-driven automation</b>: map pre-defined keywords to specific test cases, generate test scripts… • <b>Impact analysis and test optimization</b>: analyze code changes to identify high-risk areas… • <b>Self-healing and adaptive tests</b>: automatically adjust test scripts to handle minor UI or API changes… • <b>Automated test reporting and insights</b>: detailed, timely test reports… dashboards… predictive insights… • <b>Enhanced defect reporting and root cause analysis</b>: compilation of comprehensive defect reports with test logs, screenshots, and test environment data… However, the testers must be aware that <b>GenAI can make mistakes</b>. The generated output must therefore be <b>carefully checked, depending on the associated risk</b>.',
    ua: 'П’ять напрямів: keyword-driven скрипти, impact analysis, self-healing, автозвіти, кращі баг-репорти з RCA. Але все, що згенеровано, перевіряють — тим ретельніше, чим вищий ризик.',
    ex: 'Кнопку «Зберегти» перейменували на «Підтвердити» → self-healing-тест сам оновив локатор, а не впав 120 разів. Нічний прогін → LLM зібрав баг-репорт: лог, скриншот, версія середовища, гіпотеза причини.',
    vis: V.cards([
      { ic: '🔑', t: 'Keyword-driven', tip: 'Ключові слова = типові кроки; LLM мапить їх на кейси і генерує скрипти.' },
      { ic: '🎯', t: 'Impact analysis', tip: 'Аналіз змін коду → high-risk areas → цільовий регрес.' },
      { ic: '🩹', t: 'Self-healing', tip: 'Автоматичне підлаштування скриптів до дрібних змін UI або API.' },
      { ic: '📊', t: 'Reporting & insights', tip: 'Детальні звіти, дашборди, тренди, predictive insights.' },
      { ic: '🔍', t: 'Defect reports & RCA', tip: 'Повні баг-репорти з логами, скриншотами, даними середовища.' }
    ]),
    memo: '<b>«Ключ — Вплив — Лікування — Звіт — Причина»</b> (К-В-Л-З-П).',
    trap: 'Self-healing — для <b>minor</b> змін UI/API. І обов’язкова фраза силабусу: GenAI can make mistakes → перевірка <b>depending on the associated risk</b> (глава 3).' },
  { id: 'guiapi', type: 'c', ref: '2.2.3', title: 'GUI vs API регресія',
    syl: 'GUI tests frequently become unstable due to recurrent changes to the user interface. GenAI can automatically adapt test scripts to handle changes like <b>dynamic locators and modified interactions</b>… API regression tests face challenges such as <b>changing request/response formats, endpoints, and authentication</b>. GenAI can adapt test scripts automatically to evolving API specifications and <b>generate diverse test data</b>…',
    ua: 'У GUI ламаються локатори та взаємодії; в API — формати, ендпоінти, авторизація. GenAI адаптує скрипти в обох випадках, а для API ще й генерує різноманітні дані.',
    ex: 'GUI: data-testid змінився після редизайну → скрипт оновлено. API: v2 перейменувала поле <code>tripDate</code> → <code>departureAt</code> і додала OAuth → LLM оновив запити й схеми валідації.',
    vis: V.compare(['', 'GUI regression', 'API regression'], [
      { c: ['Типова проблема', 'часті зміни UI → нестабільні тести', 'зміни форматів, ендпоінтів, auth'], tip: 'Challenges.' },
      { c: ['Що робить GenAI', 'адаптує dynamic locators та interactions', 'адаптує скрипти до нових специфікацій'], tip: 'Solutions.' },
      { c: ['Додатково', '—', 'генерує diverse test data'], tip: 'Підтримка покриття.' }
    ]),
    memo: '<b>GUI — «де кнопка?»</b>, <b>API — «який контракт?»</b>.',
    trap: 'Не плутайте: <b>dynamic locators</b> — проблема GUI; <b>authentication / endpoints</b> — API.' },
  { id: 'chk-223a', type: 'q', q: Q2('c223-1', '2.2.3', 'act223', 'After a provider renamed two response fields, many API regression scripts fail although the business logic is unchanged. Which GenAI activity BEST addresses this?', [
    ['Impact analysis and test optimization', 0, 'Визначає зачеплені області, але не виправляє скрипти.'],
    ['Self-healing and adaptive tests', 1, 'Автоматичне підлаштування скриптів до дрібних змін UI/API.'],
    ['Enhanced defect reporting and RCA', 0, 'Дефекту продукту немає.'],
    ['Keyword-driven test script generation', 0, 'Не вирішує нестабільність після зміни API.']
  ]) },
  { id: 'ho223', type: 'c', ref: '2.2.3', title: 'Keyword-driven few-shot і аналіз звіту регресу',
    syl: '<b>HO-2.2.3a</b>: few-shot prompting to create and manage keyword-driven test scripts — documentation for a <b>keyword library</b>, generating initial test scripts, having AI validate them, expanding coverage; debugging support using <b>system prompts to create an AI assistant</b> that can check and correct test scripts. <b>HO-2.2.3b</b>: structured prompts for regression test report analysis — analysis of results and <b>comparison with the test specification</b> → <b>clustering of similar defects</b> → maintenance of a <b>known anomalies list</b> → <b>cross-checking</b> of findings; each step linked to the next in a single LLM conversation.',
    ua: 'Два рецепти. (1) Keyword-driven: бібліотека ключових слів як приклади → скрипти → AI-валідація → розширення; плюс system prompt для асистента-«дебагера». (2) Аналіз звіту: порівняти з специфікацією → кластеризувати → known anomalies → перехресна перевірка.',
    ex: 'Sample Q14 (2 бали): найкраще покращення промпту для аналізу результатів — розширити <b>instruction</b> кроками: розділити expected і actual, кластеризувати проблеми, підсвітити розбіжності. Покращення лише role чи «Given-When-Then» у constraints — не по суті.',
    vis: V.flow([
      { t: 'Results vs specification', s: 'expected ↔ actual', tip: 'Порівняння з test specification.' },
      { t: 'Cluster similar defects', tip: 'Менше дублювання, краща пріоритизація.' },
      { t: 'Known anomalies list', tip: 'Підтримка списку відомих аномалій.' },
      { t: 'Cross-check findings', tip: 'Перехресна перевірка висновків.' }
    ]),
    memo: '<b>«Порівняй — Згрупуй — Звір із відомим — Перевір»</b>.',
    trap: 'Gherkin «Given-When-Then» — для тест-кейсів, а не для аналізу звітів (дистрактор Sample Q14 d). Покращення лише role рідко найкраще: силабус наголошує на чітких інструкціях і кроках.' },
  { id: 'chk-223b', type: 'q', q: Q2('c223-2', '2.2.3', 'ho223', 'A team wants an AI assistant that checks and corrects keyword-driven test scripts consistently across many chat sessions. Which approach from the syllabus fits BEST?', [
    ['Define a system prompt describing the assistant’s role and rules', 1, 'HO-2.2.3a: debugging support using system prompts to create an AI assistant.'],
    ['Use zero-shot prompts without any keyword documentation', 0, 'Без документації бібліотеки ключових слів якість падає; HO використовує few-shot.'],
    ['Ask the LLM to rewrite the scripts in Gherkin syntax', 0, 'Gherkin не вирішує задачу перевірки keyword-driven скриптів.'],
    ['Rely on the user prompt alone to set behavior each time', 0, 'Сталі правила для всієї сесії задає system prompt.']
  ]) },
  { id: 'p223', type: 'p', ho: 'GenAI-2.2.3 · HO-2.2.3b', tag: K3TAG, title: 'Практика: покращіть промпт аналізу регресу',
    task: '<p><b>Чернетка промпту:</b></p><div class="model">Role: Act as a tester.\nContext: Nightly regression run.\nInstruction: Look at the results.\nInput data: attached JUnit XML.\nConstraints: Be brief.\nOutput format: Text.</div><p><b>Завдання:</b> перепишіть промпт за 6 компонентами так, щоб результат був придатний для команди: розбіжності з специфікацією, кластери схожих падінь, звірка з known anomalies, висновки для пріоритизації.</p>',
    model: 'Role: Test analyst responsible for regression test report analysis.\nContext: Nightly regression of the trip management platform (UI + API suites), release 4.12; known anomalies list attached.\nInstruction:\n  1) Compare actual results with the test specification; separate expected vs actual for each failure.\n  2) Cluster similar failures (same error / component / root symptom).\n  3) Cross-check each cluster against the known anomalies list; mark NEW vs KNOWN.\n  4) Highlight discrepancies that need attention first.\nInput data: <JUnit XML>, <test specification>, <known anomalies list>.\nConstraints: Do not guess root causes without evidence from logs; mark uncertainty explicitly; ignore skipped tests.\nOutput format: Table | Cluster | Tests | Expected vs actual | Known/New | Suggested priority | + 3-sentence summary for the team lead.',
    checklist: ['Role конкретна (аналіз звітів регресу)', 'Context: який прогін/реліз, що додано', 'Instruction розкладена на кроки: expected vs actual → кластери → known anomalies → розбіжності', 'Input data включає специфікацію і known anomalies list', 'Constraints обмежують вигадування причин', 'Output format: таблиця + коротке резюме'],
    note: 'Логіка відповідає HO-2.2.3b і Sample Q14 (розширити instruction структурованими кроками).' },
  { id: 'sum-223', type: 's', title: 'Шпаргалка 2.2.3 · Automated regression (K3)',
    points: ['Регрес росте → автоматизація в CI/CD; GenAI: <b>creation, maintenance, optimization</b> + <b>impact analysis</b>.',
      'Активності: <b>keyword-driven · impact analysis · self-healing · reporting & insights · defect reports & RCA</b>.',
      'GUI: dynamic locators, interactions. API: formats, endpoints, authentication + diverse test data.',
      'Few-shot для keyword-driven; system prompt для асистента-дебагера; аналіз звіту: vs specification → cluster → known anomalies → cross-check.',
      'GenAI can make mistakes → перевірка <b>залежно від ризику</b>.'],
    vis: V.cards([{ ic: '🔑', t: 'Keyword', tip: '' }, { ic: '🎯', t: 'Impact', tip: '' }, { ic: '🩹', t: 'Self-heal', tip: '' }, { ic: '📊', t: 'Report', tip: '' }, { ic: '🔍', t: 'RCA', tip: '' }]) }
];

// ---------- 2.2.4 ----------
C2.slides['2.2.4'] = [
  { id: 'mon', type: 'c', ref: '2.2.4', title: 'Test monitoring і test control з GenAI',
    syl: 'Test monitoring tasks require the retrieval of <b>large quantities of (sometimes unstructured) data</b>, which are often already available in test management tools… • <b>Test monitoring and metrics analysis</b>: automation of test monitoring, analysis of trends to <b>predict potential risks</b> and alert teams of any <b>deviations from the plan</b>. • <b>Test control</b>: insights for <b>reprioritizing tests, adjusting test schedules, and reallocating resources</b>. • <b>Test completion insights and continuous learning</b>: test completion reports, successes and <b>lessons learned</b>. • <b>Enhanced test metrics visualization and reporting</b>: <b>dynamic dashboards and natural language summaries</b>…',
    ua: 'Даних для моніторингу багато і вони розкидані по тест-менеджмент тулах. GenAI зводить їх у метрики, ловить відхилення від плану, підказує, як скоригувати план, і пише зрозумілі підсумки для стейкхолдерів.',
    ex: 'Середина спринту: LLM бачить, що 30% кейсів платіжного модуля ще не виконано, а дефекти там ростуть → алерт «ризик зриву», пропозиція перенести двох тестувальників і відкласти косметичні UI-тести.',
    vis: V.cards([
      { ic: '📈', t: 'Monitoring & metrics', s: 'тренди, ризики, відхилення', tip: 'Автоматизація моніторингу, прогноз ризиків, алерти про відхилення від плану.' },
      { ic: '🎛️', t: 'Test control', s: 'перепріоритизація, розклад, ресурси', tip: 'Insights для коригування.' },
      { ic: '🏁', t: 'Completion & learning', s: 'completion reports, lessons learned', tip: 'Покращення майбутніх процесів.' },
      { ic: '🖥️', t: 'Visualization & reporting', s: 'dashboards + NL summaries', tip: 'Метрики, зрозумілі всім стейкхолдерам.' }
    ]),
    memo: '<b>Бачу (monitoring) → Кермую (control) → Підсумовую (completion) → Показую (visualization)</b>.',
    trap: 'Test <b>control</b> = дії: reprioritize, adjust schedules, reallocate resources. Test <b>monitoring</b> = спостереження: метрики, тренди, відхилення.' },
  { id: 'ho224', type: 'c', ref: '2.2.4', title: 'Від сирих даних до рішень (HO-2.2.4)',
    syl: 'Starting from test data extracted from test tools, an LLM processes it to generate key metrics like <b>test progress, defect trends, or coverage</b>, highlighting potential risks. These AI-generated metrics may then be displayed on a dashboard and <b>summarized in natural language</b> for easy understanding by all stakeholders.',
    ua: 'Ланцюжок: дані з тулів → LLM рахує прогрес, тренди дефектів, покриття й підсвічує ризики → дашборд + пояснення звичайною мовою для всіх стейкхолдерів.',
    ex: 'Sample Q15 (2 бали): найкраще покращення промпту для метрик — розширити <b>output format</b> plain-language summary, що інтерпретує метрики й пропонує next steps. Це прямо робить метрики actionable і зрозумілими.',
    vis: V.flow([
      { t: 'Test data', s: 'з test tools', tip: 'Часто неструктуровані.' },
      { t: 'LLM', s: 'progress · defect trends · coverage', tip: 'Ключові метрики + потенційні ризики.' },
      { t: 'Dashboard', tip: 'Візуалізація.' },
      { t: 'NL summary', s: 'для стейкхолдерів', tip: 'Пояснення + наступні кроки.' }
    ]),
    memo: '<b>Цифри без пояснення — не рішення.</b> Додайте до формату «що це означає і що робити».',
    trap: 'Sample Q15: варіант «повторити constraint про зрозумілість іншими словами» не додає нічого нового; «додати аналіз ризиків з impact і priority» відволікає від мети. Найкраще — <b>summary + next steps</b> в output format.' },
  { id: 'chk-224a', type: 'q', q: Q2('c224-1', '2.2.4', 'mon', 'Mid-release, an LLM detects that defect inflow in the payment module exceeds the plan and proposes moving two testers there and postponing low-risk tests. Which task does the proposal belong to?', [
    ['Test monitoring and metrics analysis', 0, 'Виявлення відхилення — моніторинг, але пропозиція дій — це вже control.'],
    ['Test control', 1, 'Reprioritizing tests, adjusting schedules, reallocating resources.'],
    ['Test completion insights', 0, 'Completion — підсумки після завершення.'],
    ['Test metrics visualization', 0, 'Візуалізація не пропонує перерозподіл ресурсів.']
  ]) },
  { id: 'p224', type: 'p', ho: 'GenAI-2.2.4', tag: K3TAG, title: 'Практика: промпт для метрик моніторингу',
    task: '<p>У вас експорт з TMS (CSV): статуси кейсів по днях, дефекти з severity і компонентом, покриття вимог. Стейкхолдери: PO і менеджер релізу (нетехнічні).</p><p><b>Завдання:</b> напишіть структурований промпт, щоб LLM підготувала <b>actionable</b> метрики моніторингу: прогрес, тренди дефектів, покриття, відхилення від плану — і щоб результат був зрозумілий нетехнічним людям.</p>',
    model: 'Role: Test manager preparing a status update for release stakeholders.\nContext: Release 4.12, planned test end: Friday; plan = 95% executed, 0 open critical defects.\nInstruction: From the data, calculate test progress (executed/passed/failed vs plan), defect trends per component and severity (last 7 days), and requirements coverage. Identify deviations from the plan and the top risks.\nInput data: <tms_export.csv>, <test plan targets>.\nConstraints: Use only the provided data; state assumptions; no technical jargon in the summary.\nOutput format:\n  1) Metrics table (metric | value | target | status 🟢🟡🔴)\n  2) Data for a dashboard (one chart per metric)\n  3) Plain-language summary (≤ 5 sentences) that interprets the metrics and lists next steps for the stakeholders.',
    checklist: ['Названо конкретні метрики: прогрес, тренди дефектів, покриття', 'Є план/цілі для порівняння (відхилення)', 'Constraints: лише надані дані, без жаргону', 'Output format містить plain-language summary з next steps (Sample Q15)', 'Є табличний/дашбордний формат'],
    note: 'Логіка відповідає HO-2.2.4 і Sample Q15.' },
  { id: 'sum-224', type: 's', title: 'Шпаргалка 2.2.4 · Monitoring & control (K3)',
    points: ['Дані: великі, часто неструктуровані, з test management tools.',
      '<b>Monitoring & metrics</b>: тренди, прогноз ризиків, алерти про відхилення від плану.',
      '<b>Control</b>: reprioritize tests, adjust schedules, reallocate resources.',
      '<b>Completion</b>: completion reports, successes, lessons learned. <b>Visualization</b>: dashboards + NL summaries.',
      'Найкращий формат для стейкхолдерів: метрики + <b>plain-language summary з next steps</b>.'],
    vis: V.flow([{ t: 'Data', tip: '' }, { t: 'Metrics', tip: '' }, { t: 'Dashboard', tip: '' }, { t: 'Summary + next steps', tip: '' }]) }
];

// ---------- 2.2.5 ----------
C2.slides['2.2.5'] = [
  { id: 'table225', type: 'c', ref: '2.2.5', title: 'Таблиця вибору техніки (з силабусу)',
    syl: '<b>Prompt chaining</b> — complex tasks requiring <b>precision with human verification at each step</b>; useful for test analysis, test design and test automation. <b>Few-shot prompting</b> — <b>repetitive or specific/constrained output format</b> tasks; e.g. Gherkin style test cases, keyword-driven testing or test reporting with a specific output format. <b>Meta prompting</b> — <b>flexible, dynamic tasks, useful for crafting prompts for new tasks</b>; general description of the objective guides the LLM in creating the prompt; useful for complex tasks such as test report analysis and anomaly detection.',
    ua: 'Вибір за характером задачі: потрібна точність і перевірка кожного кроку → chaining; повторюваний шаблон або суворий формат → few-shot; нова, гнучка задача, промпт ще треба придумати → meta.',
    ex: 'Аналіз складної story з перевіркою — chaining. 200 однотипних keyword-driven скриптів — few-shot. «Хочу вперше аналізувати логи на аномалії, не знаю як сформулювати» — meta.',
    vis: V.compare(['Техніка', 'Коли', 'Приклади'], [
      { c: ['⛓️ Prompt chaining', 'складно + точність + human verification на кожному кроці', 'test analysis, test design, test automation'], tip: 'Breaks tasks into smaller steps.' },
      { c: ['🧩 Few-shot', 'повторювано або суворий формат виводу', 'Gherkin, keyword-driven, звіти за шаблоном'], tip: 'Examples for repetitive generation with a specific pattern.' },
      { c: ['🪞 Meta prompting', 'гнучкі/динамічні задачі; новий промпт', 'test report analysis, anomaly detection'], tip: 'General description of the objective → LLM creates the prompt.' }
    ]),
    memo: '<b>Точність → Ланцюг. Шаблон → Приклади. Новизна → Мета.</b>',
    trap: 'Зверніть увагу: test report analysis згадано і як приклад few-shot («test reporting with a specific output format»), і як приклад meta. Вирішує <b>характер задачі</b>: суворий формат → few-shot; нова, гнучка → meta.' },
  { id: 'decide', type: 'c', ref: '2.2.5', title: 'Як обирати у сценарних питаннях',
    syl: 'It is even possible to use <b>multiple techniques for a single use case</b>… meta prompting can be used to create an initial prompt… examples… (few-shot prompting)… divide the task into smaller subtasks to enable validation of the intermediate steps (prompt chaining). <b>HO-2.2.5</b>: evaluate the nature of the task — <b>whether it requires precision or repetitive structure</b> — and suggest the prompting technique(s) that best fits.',
    ua: 'У сценарії шукайте сигнали: «кроки з перевіркою», «складно, критично» → chaining; «є приклади», «однаковий формат», «багато однотипного» → few-shot; «не знаю, як написати промпт», «нова задача» → meta. Якщо задача проста й прямолінійна — не ускладнюйте.',
    ex: 'Sample Q16 (2 бали): є кілька існуючих кейсів з відомими результатами і чіткі правила трансформації; LLM може напряму згенерувати нові кейси → <b>few-shot</b> (існуючі кейси = приклади). Chaining і meta тут «ускладнюють просту задачу», zero-shot не використовує приклади.',
    vis: V.flow([
      { t: 'Є приклади / шаблон?', s: '→ Few-shot', tip: 'Repetitive / constrained output.' },
      { t: 'Складно + перевірка кроків?', s: '→ Chaining', tip: 'Precision with human verification.' },
      { t: 'Нова задача, промпту немає?', s: '→ Meta', tip: 'Crafting prompts for new tasks.' }
    ]),
    memo: 'Читайте сценарій як баг-репорт: шукайте <b>ключові слова-симптоми</b> — «examples», «step-by-step verify», «unsure how to prompt».',
    trap: 'Найскладніша техніка ≠ найкраща. Якщо задача <b>straightforward</b> і є приклади — few-shot кращий за chaining/meta (rationale Sample Q16).' },
  { id: 'chk-225a', type: 'q', q: Q2('c225-1', '2.2.5', 'table225', 'A team must produce hundreds of keyword-driven test scripts that follow exactly the same structure as their existing scripts. Which prompting technique is MOST suitable?', [
    ['Prompt chaining', 0, 'Chaining — для складних задач з перевіркою кроків, а тут повторюваний шаблон.'],
    ['Few-shot prompting', 1, 'Повторювана генерація з конкретним патерном; keyword-driven — приклад із таблиці 2.2.5.'],
    ['Meta prompting', 0, 'Meta — для нових, гнучких задач, коли промпт ще треба створити.'],
    ['Zero-shot prompting', 0, 'Без прикладів модель не відтворить точну структуру існуючих скриптів.']
  ]) },
  { id: 'zero', type: 'c', ref: '2.1.2 / 2.2.5 · Sample A2', title: 'А де zero-shot?',
    syl: 'Zero-shot prompting (no example) <b>relies on the model\'s pre-existing knowledge</b> to generate a response. (2.1.2) — Sample Exam A2 (official, matching question) pairs zero-shot with: "<b>Prioritizing test cases based on risk by leveraging the LLM\'s inherent reasoning without examples</b>".',
    ua: 'Zero-shot — коли прикладів немає або вони не потрібні: модель спирається на свої знання. У таблиці 2.2.5 його немає, але на іспиті він може з’явитися як дистрактор або як відповідь для задачі «без прикладів».',
    ex: 'Офіційне додаткове питання A2: chaining ↔ «розбити test analysis на кроки з human verification»; few-shot ↔ «Gherkin з прикладами»; meta ↔ «ітеративно уточнювати промпти»; zero-shot ↔ «пріоритизація за ризиком на власних міркуваннях моделі без прикладів».',
    vis: V.compare(['Техніка', 'Приклад з Sample A2'], [
      { c: ['Prompt chaining', 'test analysis кроками з iterative interactions і human verification'] },
      { c: ['Few-shot', 'Gherkin-кейси з predefined examples'] },
      { c: ['Meta prompting', 'ітеративно уточнювати промпти (напр. для test oracles з неоднозначних вимог)'] },
      { c: ['Zero-shot', 'пріоритизація за ризиком без прикладів'] }
    ]),
    memo: '<b>Zero-shot = «без прикладів, на власних знаннях»</b>.',
    trap: 'Якщо в сценарії є готові приклади, а варіант пропонує zero-shot — він майже напевно неправильний: приклади не використовуються.' },
  { id: 'chk-225b', type: 'q', q: Q2('c225-2', '2.2.5', 'decide', 'A tester must analyze a complex, safety-relevant requirement set and wants to verify each intermediate LLM result before continuing. Which technique is MOST appropriate?', [
    ['Few-shot prompting', 0, 'Приклади допомагають з форматом, але не забезпечують перевірку кроків.'],
    ['Prompt chaining', 1, 'Complex task + precision + human verification at each step.'],
    ['Meta prompting', 0, 'Meta — для створення промпту під нову задачу; тут головне — перевірка кроків.'],
    ['Zero-shot prompting', 0, 'Один промпт без прикладів не дає перевірки проміжних результатів.']
  ]) },
  { id: 'p225', type: 'p', ho: 'GenAI-2.2.5 · HO-2.2.5', tag: K3TAG, title: 'Практика: оберіть техніку для кожної задачі',
    task: '<p>Для кожної задачі оберіть техніку(и) і поясніть одним реченням:</p><ol><li>Перетворити 150 ручних кейсів у формат TestRail-імпорту (CSV з фіксованими колонками); є 3 готові приклади.</li><li>Вперше налаштувати аналіз логів на аномалії; незрозуміло, як сформулювати промпт.</li><li>Проаналізувати регуляторні вимоги до зберігання даних пасажирів: знайти дефекти, згенерувати умови, перевірити покриття — з перевіркою юристом після кожного кроку.</li><li>Згенерувати E2E-процедуру для нової фічі: спершу потрібен якісний промпт, потім 2 еталонні приклади, потім перевірка покриття AC.</li></ol>',
    model: '1) Few-shot — повторювана задача з суворим форматом; 3 приклади задають патерн.\n2) Meta prompting — нова, гнучка задача; LLM допомагає створити промпт (pairing), тестувальник оцінює.\n3) Prompt chaining — складна, критична задача; кроки (дефекти → умови → покриття) з human verification після кожного.\n4) Комбінація: meta (початковий промпт) → few-shot (2 еталонні приклади) → chaining (окремий крок перевірки покриття AC) — як у прикладі з 2.2.5.',
    checklist: ['1 → few-shot (є приклади + суворий формат)', '2 → meta (нова задача, промпт невідомий)', '3 → chaining (складно + перевірка кожного кроку)', '4 → комбінація meta → few-shot → chaining', 'Кожен вибір обґрунтовано характером задачі (precision vs repetitive structure)'],
    note: 'HO-2.2.5 (H1). Саме так виглядають K3-питання 2.2.5 на іспиті.' },
  { id: 'sum-225', type: 's', title: 'Шпаргалка 2.2.5 · Вибір техніки (K3)',
    points: ['<b>Chaining</b>: complex tasks + precision + human verification на кожному кроці (analysis, design, automation).',
      '<b>Few-shot</b>: repetitive або specific/constrained output format (Gherkin, keyword-driven, звіти за шаблоном).',
      '<b>Meta</b>: flexible, dynamic tasks; crafting prompts for new tasks (report analysis, anomaly detection).',
      'Можна комбінувати: meta → few-shot → chaining.',
      'Проста задача + є приклади → few-shot; без прикладів, на знаннях моделі → zero-shot.'],
    vis: V.compare(['Сигнал', 'Техніка'], [{ c: ['кроки + перевірка', 'Chaining'] }, { c: ['приклади / шаблон', 'Few-shot'] }, { c: ['новий промпт', 'Meta'] }]) }
];
