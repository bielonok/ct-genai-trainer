// ===================== CHAPTER 2 QUIZZES =====================
C2.quizzes['2.1.1'] = [
  Q2('q211-1', '2.1.1', 'six', 'Which list contains ONLY components of the six-part structured prompt described in the syllabus?', [
    ['Role, context, instruction, input data, constraints, output format', 1, 'Саме ці шість компонентів.'],
    ['Role, persona, task, examples, constraints, output format', 0, 'Persona входить у role; examples — частина input data; «task» — це instruction.'],
    ['Context, instruction, temperature, input data, constraints, output', 0, 'Temperature — параметр моделі (глава 3), не компонент промпту.'],
    ['Role, context, instruction, input data, tone, output format', 0, 'Tone — не окремий компонент; тон задає role.']
  ]),
  Q2('q211-2', '2.1.1', 'role-ctx', 'What is the main purpose of the role component in a structured prompt?', [
    ['It lists the test basis documents the model must analyze', 0, 'Це input data.'],
    ['It defines the perspective the model takes, e.g. a test manager', 1, 'Role — perspective or persona; допомагає з відповідальністю і тоном.'],
    ['It specifies how the answer must be formatted and structured', 0, 'Це output format.'],
    ['It restricts which parts of the input may be considered', 0, 'Це constraints.']
  ]),
  Q2('q211-3', '2.1.1', 'instr-input', 'According to the syllabus, which of the following belongs to the input data component?', [
    ['A sample of the expected output to be produced', 1, 'Output examples прямо згадані серед input data.'],
    ['A description of the tester persona to adopt', 0, 'Це role.'],
    ['A requirement to answer in a markdown table', 0, 'Це output format.'],
    ['A rule to ignore cosmetic issues in the analysis', 0, 'Це constraints.']
  ]),
  Q2('q211-4', '2.1.1', 'instr-input', 'Which description of a good instruction component matches the syllabus?', [
    ['Long and descriptive, repeating the context for safety', 0, 'Силабус: clear, imperative, concise.'],
    ['Clear, imperative and concise, describing the task', 1, 'Clear, imperative and concise instructions include a task description and relevant requirements.'],
    ['Written as a question so the model can choose a task', 0, 'Instruction — директива, а не питання.'],
    ['Placed in the system prompt only, never in the user prompt', 0, 'Немає такого правила.']
  ]),
  Q2('q211-5', '2.1.1', 'constr-out', 'A prompt line states: "Return the result as JSON with fields id, title, steps and expected." Which component is this?', [
    ['Constraints', 0, 'Обмежень на обробку тут немає; описано форму відповіді.'],
    ['Instruction', 0, 'Задача описана деінде; тут — формат.'],
    ['Output format', 1, 'Формат і структура відповіді.'],
    ['Input data', 0, 'Це не дані для обробки.']
  ]),
  Q2('q211-6', '2.1.1', 'constr-out', 'Which statement about constraints is CORRECT according to the syllabus?', [
    ['They describe the test object and functionality being tested', 0, 'Це context.'],
    ['They specify how instructions should be applied to input data', 1, 'Дослівно з 2.1.1.'],
    ['They provide examples of the expected output to the model', 0, 'Приклади — input data.'],
    ['They define the persona and tone the model should adopt', 0, 'Це role.']
  ]),
  Q2('q211-7', '2.1.1', 'role-ctx', 'A prompt includes: "Logs from the last three nightly runs and the list of open defects." In which component would this MOST LIKELY appear?', [
    ['Context', 0, 'Context — фон про систему; тут перелічено конкретні дані, які модель має обробити (2.1.1: input data).'],
    ['Input data', 1, 'Конкретні джерела даних, які модель має проаналізувати.'],
    ['Constraints', 0, 'Обмежень немає.'],
    ['Role', 0, 'Не персона.']
  ]),
  Q2('q211-8', '2.1.1', 'full', 'Which TWO statements about the structured prompt are CORRECT?', [
    ['Providing detailed, structured input data helps produce more accurate results', 1, '2.1.1 про input data.'],
    ['The structure should be combined with prompting techniques depending on task and LLM', 1, '2.1.1: combined with the implementation of prompting techniques.'],
    ['A structured prompt makes LLM output deterministic', 0, 'Структура не прибирає non-determinism.'],
    ['All six components must always be placed in the system prompt', 0, 'Не вимагається; частини можуть бути в system, частини — в user prompt.'],
    ['Constraints and output format are the same component', 0, 'Це два різні компоненти.']
  ], { multi: 2 })
];

C2.quizzes['2.1.2'] = [
  Q2('q212-1', '2.1.2', 'three', 'Which three core prompting techniques does the syllabus name for test tasks?', [
    ['Prompt chaining, few-shot prompting, meta prompting', 1, 'Три core techniques з 2.1.2.'],
    ['Zero-shot prompting, one-shot prompting, few-shot prompting', 0, 'Це варіанти за кількістю прикладів, а не три core techniques.'],
    ['Prompt chaining, system prompting, user prompting', 0, 'System/user prompt — типи промптів (2.1.3), не техніки.'],
    ['Few-shot prompting, chain-of-thought, retrieval prompting', 0, 'Chain-of-thought і retrieval prompting не входять до трьох core techniques із 2.1.2 (prompt chaining, few-shot, meta prompting).']
  ]),
  Q2('q212-2', '2.1.2', 'chaining', 'What characterizes prompt chaining?', [
    ['Several examples are included in a single prompt', 0, 'Це few-shot.'],
    ['The LLM writes the prompt that the tester will use', 0, 'Це meta prompting.'],
    ['A task is split into steps, each result checked before the next', 1, 'Intermediate steps (multiple prompts), кожен результат перевіряють і уточнюють.'],
    ['One long prompt lists all subtasks to be done at once', 0, 'Один промпт — не chaining.']
  ]),
  Q2('q212-3', '2.1.2', 'chaining', 'Why does prompt chaining lead to greater accuracy according to the syllabus?', [
    ['Each checked response informs the next prompt', 1, '«Leads to greater accuracy as each response informs the next prompt.»'],
    ['The model is retrained after each step of the chain', 0, 'Моделі не довчаються між кроками.'],
    ['It removes the need for human verification entirely', 0, 'Навпаки, передбачає перевірку кроків.'],
    ['It always uses a reasoning LLM for every step', 0, 'Тип моделі не визначає техніку.']
  ]),
  Q2('q212-4', '2.1.2', 'fewshot', 'What is the difference between zero-shot and few-shot prompting?', [
    ['Zero-shot uses no examples; few-shot provides more than one example', 1, 'Zero = 0, few = більше одного.'],
    ['Zero-shot uses one example; few-shot provides up to three examples', 0, 'One example — це one-shot; фіксованої межі «три» немає.'],
    ['Zero-shot needs no instruction; few-shot needs a detailed instruction', 0, 'Різниця — у прикладах, а не в інструкції.'],
    ['Zero-shot is for chatbots; few-shot is for LLM-powered applications', 0, 'Не пов’язано з моделлю взаємодії.']
  ]),
  Q2('q212-5', '2.1.2', 'fewshot', 'When is few-shot prompting particularly effective according to the syllabus?', [
    ['When a complex task must be verified step by step', 0, 'Це сценарій для prompt chaining.'],
    ['When examples can illustrate the required behavior', 1, '«Particularly effective for tasks where examples can illustrate the required behavior.»'],
    ['When the tester does not know how to write a prompt', 0, 'Це сценарій для meta prompting.'],
    ['When the model must rely only on its prior knowledge', 0, 'Це zero-shot.']
  ]),
  Q2('q212-6', '2.1.2', 'meta', 'Which TWO statements about meta prompting are CORRECT?', [
    ['The LLM generates or refines prompts that the tester evaluates', 1, 'Дослівна суть meta prompting.'],
    ['It reduces the manual effort needed to design effective prompts', 1, 'Beneficial when efficiency and prompt optimization are critical.'],
    ['It requires providing several output examples in the prompt', 0, 'Це few-shot.'],
    ['It replaces the tester’s evaluation of the generated prompts', 0, 'Тестувальник оцінює й уточнює.'],
    ['It is only usable with system prompts, not user prompts', 0, 'Немає такого обмеження.']
  ], { multi: 2 }),
  Q2('q212-7', '2.1.2', 'meta', 'The syllabus describes meta prompting as a form of "pairing". What does this mean?', [
    ['Two testers review each prompt together before use', 0, 'Pairing тут — тестувальник + AI.'],
    ['The tester and the AI interactively co-create a prompt', 1, 'Form of pairing with the GenAI tool: tester and AI work together.'],
    ['Each prompt is paired with a reference output for A/B testing', 0, 'A/B — техніка 2.3.2.'],
    ['Two LLMs exchange prompts until they agree on the answer', 0, 'Не описано в силабусі.']
  ]),
  Q2('q212-8', '2.1.2', 'combo', 'Which statement about combining prompting techniques is CORRECT?', [
    ['Techniques are mutually exclusive within a single test task', 0, 'Силабус: можна поєднувати.'],
    ['Combination is only possible for reasoning LLMs', 0, 'Не пов’язано з типом моделі.'],
    ['Meta prompting can create an initial prompt later enriched with examples', 1, 'Приклад комбінації з 2.2.5: meta → few-shot → chaining.'],
    ['Combining techniques removes the need for the six-part structure', 0, 'Техніки використовують разом зі структурою.']
  ])
];

C2.quizzes['2.1.3'] = [
  Q2('q213-1', '2.1.3', 'sys', 'Who typically defines the system prompt according to the syllabus?', [
    ['The developer or tester configuring the LLM', 1, 'Typically defined by the developer or tester.'],
    ['The chatbot’s user at the start of each message', 0, 'Це user prompt.'],
    ['The LLM itself during meta prompting', 0, 'Meta prompting — про генерацію промптів, не про system prompt.'],
    ['The test manager in the test plan document', 0, 'Не описано так.']
  ]),
  Q2('q213-2', '2.1.3', 'sys', 'Which TWO statements describe a system prompt?', [
    ['It stays constant throughout the interaction session', 1, '2.1.3.'],
    ['It is usually not visible or editable by the chatbot user', 1, '2.1.3: not visible or editable by the chatbot’s user in most interfaces.'],
    ['It changes with each new question from the user', 0, 'Це user prompt.'],
    ['It contains the user’s current question', 0, 'Це user prompt.'],
    ['It applies only to the first response of a session', 0, 'Застосовується до всієї розмови.']
  ], { multi: 2 }),
  Q2('q213-3', '2.1.3', 'sys', 'Which components of a structured prompt does the syllabus say a system prompt may contain?', [
    ['Role, context and constraints', 1, '«It may contain parts of a structured prompt such as the role, context and constraints.»'],
    ['Only the input data to be analyzed', 0, '2.1.3 називає role, context, constraints (і загальні інструкції щодо output), а не «лише input data».'],
    ['Only the output format of each answer', 0, 'Може містити загальні інструкції про output, але не «лише» це.'],
    ['None — it only sets the model temperature', 0, 'System prompt задає поведінку, роль, обмеження.']
  ]),
  Q2('q213-4', '2.1.3', 'user', 'How does the LLM generate a response in a session that uses both prompt types?', [
    ['It uses only the latest user prompt and ignores the system prompt', 0, 'Обидва враховуються.'],
    ['It considers the unchanging system prompt and the current user prompt together', 1, 'Дослівно з 2.1.3.'],
    ['It uses the system prompt only when the user prompt is empty', 0, 'Ні.'],
    ['It merges all previous user prompts into a new system prompt', 0, 'Ні.']
  ]),
  Q2('q213-5', '2.1.3', 'good', 'Which recommendation for user prompts does the syllabus give?', [
    ['Keep them vague so the system prompt can fill in the details', 0, 'Навпаки — focused and well-structured.'],
    ['Make them focused and well-structured, with explicit instructions', 1, '2.1.3: focused, well-structured, explicit instructions + context + output format.'],
    ['Repeat the full system prompt in every user prompt', 0, 'Не рекомендується.'],
    ['Avoid output format instructions in user prompts', 0, 'Силабус їх, навпаки, рекомендує.']
  ]),
  Q2('q213-6', '2.1.3', 'good', 'A company builds an internal QA assistant. Every answer must use ISTQB terminology and never invent API fields. Where should these rules be defined?', [
    ['In each user prompt written by the testers', 0, 'Тоді правила залежать від кожного користувача і можуть загубитися.'],
    ['In the system prompt of the assistant', 1, 'Сталі правила поведінки для всієї розмови — system prompt.'],
    ['In the output format of the first answer only', 0, 'Правило має діяти на всю сесію.'],
    ['In a few-shot example attached to every question', 0, 'Приклади не задають правила поведінки на всю розмову.']
  ]),
  Q2('q213-7', '2.1.3', 'user', 'Which line is MOST LIKELY a user prompt rather than part of a system prompt?', [
    ['"You are a testing assistant; always use formal language."', 0, 'Це типовий system prompt.'],
    ['"List the key differences between black-box and white-box testing."', 1, 'Приклад user prompt з 2.1.3.'],
    ['"Avoid speculation and cite testing principles when relevant."', 0, 'Частина прикладу system prompt з 2.1.3.'],
    ['"Respond concisely and respect domain-specific rules."', 0, 'Operational parameters — system prompt.']
  ]),
  Q2('q213-8', '2.1.3', 'sys', 'What are "operational parameters" in a system prompt according to the syllabus?', [
    ['Settings such as temperature and token limits of the model', 0, 'Силабус описує їх як правила відповіді, а не як гіперпараметри.'],
    ['Rules for how the LLM responds, e.g. formal tone or concise answers', 1, 'Operational parameters determine how the LLM responds: tone, conciseness, domain rules.'],
    ['The input data that changes with every user question', 0, 'Це user prompt.'],
    ['The metrics used to evaluate the LLM output', 0, 'Метрики — 2.3.1.']
  ])
];

C2.quizzes['2.2.1'] = [
  Q2('q221-1', '2.2.1', 'apply', 'What is a typical output of GenAI-supported test analysis according to the syllabus?', [
    ['Executable automated test scripts for CI', 0, 'Це test implementation (2.2.2).'],
    ['Prioritized test conditions, e.g. AC', 1, 'Typical test analysis work products.'],
    ['A test execution schedule with dependencies', 0, 'Це test implementation (2.2.2).'],
    ['A test completion report with lessons learned', 0, 'Це test completion (2.2.4).']
  ]),
  Q2('q221-2', '2.2.1', 'tasks221', 'A tester gives an LLM the risk likelihood and impact for each test condition, plus history of defects in login and payment. What can the LLM now support BEST?', [
    ['Generating synthetic production-like test data', 0, 'Дані — 2.2.2.'],
    ['Prioritizing test conditions based on risk level', 1, 'Likelihood + impact + user-facing features + historical defects → priority levels.'],
    ['Self-healing of GUI test scripts', 0, 'Регрес, 2.2.3.'],
    ['Generating a keyword library', 0, 'Не пов’язано з наданими ризиками.']
  ]),
  Q2('q221-3', '2.2.1', 'tasks221', 'An LLM flags that two acceptance criteria of a user story contradict each other. Which test analysis task is demonstrated?', [
    ['Supporting coverage analysis', 0, 'Покриття — мапінг вимог на умови.'],
    ['Identifying potential defects in the test basis', 1, 'Inconsistencies у test basis.'],
    ['Suggesting test techniques', 0, 'Техніки тест-дизайну не пропонуються.'],
    ['Prioritizing test conditions by risk', 0, 'Пріоритетів немає.']
  ]),
  Q2('q221-4', '2.2.1', 'tasks221', 'For a requirement about a numeric input range, the LLM recommends boundary value analysis. Which task is this?', [
    ['Suggesting test techniques', 1, 'GenAI can suggest relevant test techniques (BVA, EP) based on the requirement type.'],
    ['Generating test data', 0, 'Даних не згенеровано — запропоновано техніку.'],
    ['Identifying defects in the test basis', 0, 'Дефект вимоги не знайдено.'],
    ['Supporting coverage analysis', 0, 'Покриття не аналізувалося.']
  ]),
  Q2('q221-5', '2.2.1', 'chain221', 'New user stories for a booking-cancellation feature have NOT been reviewed yet. The test lead wants a prompt chain that improves the stories, derives test conditions, and then recommends test techniques. Which sequence is BEST?', [
    ['Detect ambiguities → generate test conditions → suggest test techniques', 1, 'Спершу усунути дефекти test basis, далі умови, потім техніки (2.2.1); між кроками — перевірка людиною.'],
    ['Generate test conditions → suggest test techniques → detect ambiguities', 0, 'Дефекти в stories потраплять в умови; їх треба прибрати на початку.'],
    ['One prompt that fixes the stories and outputs conditions with techniques', 0, 'Один промпт — не chaining, немає перевірки проміжних результатів.'],
    ['Suggest test techniques → generate test scripts → prioritize them by risk', 0, 'Скрипти — не test analysis; кроки не відповідають цілі.']
  ]),
  Q2('q221-6', '2.2.1', 'mm221', 'A tester wants well-formed, clear and complete acceptance criteria from a user story and a GUI wireframe. Which prompt approach fits the syllabus BEST?', [
    ['Structured multimodal prompt: story, wireframe image and field rules', 1, 'HO-2.2.1a: структурований мультимодальний промпт (text + image) + обмеження полів / бізнес-правила.'],
    ['Zero-shot text prompt with the story only, asking to "write AC"', 0, 'Втрачається візуальний вхід і контекст.'],
    ['A few-shot prompt of Gherkin scenarios from other projects only', 0, 'Приклади інших проєктів не замінюють story + wireframe.'],
    ['A system prompt instructing the model to accept any AC format', 0, 'Не забезпечує якість AC.']
  ]),
  Q2('q221-7', '2.2.1', 'chain221', 'In a prompt chain refining acceptance criteria (ambiguities → testability → completeness), what should happen between steps?', [
    ['The LLM retrains on the corrected acceptance criteria', 0, 'Перетренування немає.'],
    ['The tester verifies and corrects the output before the next step', 1, 'HO-2.2.1b: results manually verified and corrected; next stage uses a clean result.'],
    ['The tester switches to a different LLM for each step', 0, 'Не вимагається.'],
    ['Nothing — the chain should run without interruption', 0, 'Тоді втрачається сенс chaining.']
  ]),
  Q2('q221-8', '2.2.1', 'tasks221', 'An LLM produced vague test conditions for a payment user story; the prompt contained only the story title. Which TWO changes are MOST likely to improve the accuracy of the output?', [
    ['Add the full user story with its acceptance criteria', 1, 'Якісні, релевантні вхідні дані прямо впливають на точність (2.2.1).'],
    ['Add relevant business rules, e.g. payment limits', 1, 'Релевантний контекст і вхідні дані для задачі.'],
    ['Ask for the output as a markdown table', 0, 'Змінює форму, не точність.'],
    ['Change the role from tester to test manager', 0, 'Роль не замінює відсутні вхідні дані.'],
    ['Ask the LLM to answer in a more formal tone', 0, 'Тон не впливає на точність умов.']
  ], { multi: 2 })
];

C2.quizzes['2.2.2'] = [
  Q2('q222-1', '2.2.2', 'tcgen', 'Which elements can an LLM suggest when generating test cases, according to the syllabus?', [
    ['Preconditions, inputs, expected results and coverage criteria', 1, 'Дослівно з 2.2.2.'],
    ['Only test step descriptions without expected results', 0, 'LLM може пропонувати й expected results.'],
    ['Only automated scripts, never manual test cases', 0, 'Підтримуються і ручні, і автоматизовані.'],
    ['Final release decisions and sign-off criteria', 0, 'Не test case elements.']
  ]),
  Q2('q222-2', '2.2.2', 'tcgen', 'What is a key benefit of GenAI test data synthesis described in the syllabus?', [
    ['It copies production data exactly for realistic tests', 0, 'Навпаки — синтетичні, без розкриття чутливих даних.'],
    ['It creates realistic data without exposing sensitive information', 1, 'Privacy-preserving synthetic data resembling production.'],
    ['It is limited to functional testing only', 0, 'Functional і non-functional.'],
    ['It avoids extreme values to keep tests stable', 0, 'Навпаки, covers extreme situations.']
  ]),
  Q2('q222-3', '2.2.2', 'scripts', 'From what does GenAI generate manual test procedures and automated test scripts, according to the syllabus?', [
    ['From structured test cases', 1, '«From structured test cases, interpreting test steps…»'],
    ['From production logs only', 0, 'Не описано так.'],
    ['From the test completion report', 0, 'Ні.'],
    ['From the system prompt alone', 0, 'Ні.']
  ]),
  Q2('q222-4', '2.2.2', 'scripts', 'Which TWO factors can GenAI use to optimize a test execution schedule?', [
    ['Interdependencies between test cases', 1, 'Analyze test cases and their interdependencies.'],
    ['Associated risks and priority', 1, 'Based on priority, associated risks, resource availability and test objectives.'],
    ['The date each test case was last modified', 0, 'Не названо серед критеріїв.'],
    ['The model’s context window size', 0, 'Не критерій розкладу.'],
    ['The number of steps in each test case', 0, 'Не названо серед критеріїв.']
  ], { multi: 2 }),
  Q2('q222-5', '2.2.2', 'ho222', 'You must write functional test cases for 25 user stories in your team’s test management template. Four approved cases in that template exist. Which prompt is BEST?', [
    ['Four approved cases as examples; constraint: one case per AC; output: team template', 1, 'Few-shot із затвердженими прикладами + обмеження для покриття AC + фіксований формат.'],
    ['Instruction "follow industry best practices"; output: team template; no examples', 0, 'Без прикладів шаблон команди відтворюється гірше; «best practices» — розмито.'],
    ['Four approved cases as examples; constraint: cover negative cases only', 0, 'Обмеження лише негативними кейсами не покриває всі AC.'],
    ['Instruction "generate as many cases as possible"; output: free text', 0, 'Немає прикладів, формату і критерію покриття.']
  ]),
  Q2('q222-6', '2.2.2', 'ho222', 'A tester generated functional test cases from 12 acceptance criteria with an LLM. Before extending them to end-to-end tests, the tester wants to confirm completeness. Which next prompt in the chain is BEST?', [
    ['Ask for a table mapping each acceptance criterion to its test cases', 1, 'Таблиця покриття AC → TC перевіряє повноту.'],
    ['Ask the LLM to count the test cases and compare the total with 12', 0, 'Кількість ≠ покриття.'],
    ['Ask the LLM to convert all test cases into keyword-driven scripts', 0, 'Це реалізація, не перевірка повноти.'],
    ['Ask the LLM to rate its own confidence in each case from 1 to 5', 0, 'Самооцінка не показує прогалини покриття.']
  ]),
  Q2('q222-7', '2.2.2', 'ho222', 'A tester uses GenAI to prioritize a test suite with risks and dependencies. Why does the syllabus require manual verification of the result?', [
    ['To detect errors in the LLM’s multi-criteria reasoning', 1, 'HO-2.2.2c: manually verified to detect any errors in the LLM’s reasoning.'],
    ['Because LLMs cannot read dependency information', 0, 'Можуть, але можуть помилятися.'],
    ['Because prioritization must be done in Gherkin', 0, 'Не пов’язано.'],
    ['To measure the time efficiency of the LLM', 0, 'Це метрика, не ціль перевірки.']
  ]),
  Q2('q222-8', '2.2.2', 'design', 'Which testware does the syllabus list as created or evaluated with GenAI support in test design and implementation?', [
    ['Test cases, test data, test scripts and test environments', 1, 'Дослівно з 2.2.2.'],
    ['Only test cases and test plans', 0, 'Занадто вузько; test plan — інший етап.'],
    ['Only automated scripts for CI/CD pipelines', 0, 'Занадто вузько.'],
    ['Requirements, user stories and wireframes', 0, 'Це test basis (вхід test analysis).']
  ])
];

C2.quizzes['2.2.3'] = [
  Q2('q223-1', '2.2.3', 'regr', 'Why are regression tests described as ideal candidates for automation with GenAI support?', [
    ['They grow with each release and run often in CI/CD', 1, '2.2.3: зростання кількості + висока частота виконання в CI/CD.'],
    ['They never change, so their scripts need no maintenance', 0, 'Навпаки, потребують підтримки (self-healing).'],
    ['They only cover the non-functional requirements', 0, 'Functional і non-functional.'],
    ['They are always executed manually by domain experts', 0, 'Ні.']
  ]),
  Q2('q223-2', '2.2.3', 'regr', 'What is the purpose of GenAI-based impact analysis in regression testing?', [
    ['Identify areas most likely affected by recent code changes', 1, 'Focus regression test efforts where they are most needed.'],
    ['Automatically fix defects found in the regression run', 0, 'Не описано.'],
    ['Replace all regression tests with exploratory sessions', 0, 'Ні.'],
    ['Measure the time efficiency of generated scripts', 0, 'Метрика, не impact analysis.']
  ]),
  Q2('q223-3', '2.2.3', 'act223', 'Which GenAI activity compiles defect reports with test logs, screenshots and test environment data?', [
    ['Self-healing and adaptive tests', 0, 'Про стабільність скриптів.'],
    ['Enhanced defect reporting and root cause analysis', 1, 'Дослівно з 2.2.3.'],
    ['Keyword-driven automation', 0, 'Про скрипти з ключових слів.'],
    ['Impact analysis and test optimization', 0, 'Про вибір зачеплених областей.']
  ]),
  Q2('q223-4', '2.2.3', 'act223', 'What does the syllabus require regarding the output of GenAI in regression testing?', [
    ['It can be used without review because tests are automated', 0, 'GenAI can make mistakes.'],
    ['It must be carefully checked, depending on the associated risk', 1, 'Дослівно з 2.2.3.'],
    ['It must be checked only for non-functional tests', 0, 'Перевірка — для всіх, залежно від ризику.'],
    ['It must be regenerated until two runs are identical', 0, 'Не описано.']
  ]),
  Q2('q223-5', '2.2.3', 'guiapi', 'An API changed its authentication method and renamed several fields, breaking many regression scripts. How can GenAI help according to the syllabus?', [
    ['By adapting the scripts to the evolving API specification', 1, 'API regression: adapt test scripts automatically to evolving API specifications.'],
    ['By updating dynamic locators in the GUI test scripts', 0, 'Dynamic locators — GUI.'],
    ['By converting the API tests into manual test procedures', 0, 'Не вирішує проблему.'],
    ['By removing the affected tests from the suite', 0, 'Не те, що описано.']
  ]),
  Q2('q223-7', '2.2.3', 'ho223', 'A draft prompt asks an LLM to "summarize last night’s regression results". Stakeholders need to know which failures are new and which are already known. Which change BEST improves the prompt?', [
    ['Add the known anomalies list as input and ask to mark each failure new or known', 1, 'Потрібні вхідні дані (known anomalies) і чітка інструкція перехресної перевірки (2.2.3).'],
    ['Change the role to a senior regression analyst who writes executive summaries', 0, 'Роль не дає моделі знати, які збої вже відомі.'],
    ['Add a constraint that every failure is described in Given-When-Then syntax', 0, 'Gherkin нерелевантний для аналізу звіту.'],
    ['Shorten the prompt to a single sentence so the model generalizes better', 0, 'Проблема — відсутні дані, а не довжина.']
  ]),
  Q2('q223-8', '2.2.3', 'act223', 'Which TWO are activities of GenAI in automated regression testing listed in the syllabus?', [
    ['Self-healing and adaptive tests', 1, 'Названо в 2.2.3.'],
    ['Automated test reporting and insights', 1, 'Названо в 2.2.3.'],
    ['Formal approval of release candidates', 0, 'Не активність GenAI.'],
    ['Replacing CI/CD pipelines with chatbots', 0, 'Ні.'],
    ['Writing user stories for new features', 0, 'Не регрес.']
  ], { multi: 2 })
];

C2.quizzes['2.2.4'] = [
  Q2('q224-1', '2.2.4', 'mon', 'Why is GenAI helpful for test monitoring tasks according to the syllabus?', [
    ['Monitoring needs large amounts of sometimes unstructured data from tools', 1, 'Retrieval of large quantities of (sometimes unstructured) data.'],
    ['Monitoring data never exists before the test project ends', 0, 'Дані часто вже є в test management tools.'],
    ['Monitoring requires executing all tests again', 0, 'Ні.'],
    ['Monitoring is only needed for non-functional testing', 0, 'Ні.']
  ]),
  Q2('q224-2', '2.2.4', 'mon', 'Which activity is an example of test control supported by GenAI?', [
    ['Detecting a trend of increasing defects', 0, 'Це моніторинг.'],
    ['Suggesting to reallocate testers to a high-risk area', 1, 'Test control: reprioritize, adjust schedules, reallocate resources.'],
    ['Producing a natural language summary of metrics', 0, 'Visualization & reporting.'],
    ['Writing a lessons-learned section', 0, 'Completion insights.']
  ]),
  Q2('q224-3', '2.2.4', 'mon', 'What does GenAI provide for test completion according to the syllabus?', [
    ['Completion reports with successes and lessons learned', 1, 'Test completion insights and continuous learning.'],
    ['Automatic closure of all remaining open defects', 0, 'Не описано.'],
    ['A new test basis prepared for the next release', 0, 'Ні.'],
    ['Self-healing of the failed regression test scripts', 0, 'Це регрес (2.2.3).']
  ]),
  Q2('q224-4', '2.2.4', 'ho224', 'An LLM builds a weekly progress dashboard from test management exports. The test manager notices it silently drops test cases with status "Blocked", so progress looks better than it is. Which prompt change is BEST?', [
    ['Add a constraint that all statuses, including Blocked, must be counted and shown', 1, 'Constraint задає, як застосувати інструкцію до даних, і усуває викривлення метрики.'],
    ['Change the role to a test manager focused on stakeholder communication', 0, 'Роль не виправляє неточні дані.'],
    ['Add a plain-language summary of the dashboard for business stakeholders', 0, 'Корисно для зрозумілості, але не виправляє неточні дані.'],
    ['Add a lessons-learned section to each weekly dashboard', 0, 'Lessons learned — для completion, не для точності прогресу.']
  ]),
  Q2('q224-5', '2.2.4', 'ho224', 'From raw exports of the test management tool, a test manager prompts an LLM to prepare input for the weekly steering meeting. Which output BEST matches GenAI support for test monitoring?', [
    ['Progress, defect trend and coverage metrics with highlighted risks', 1, '2.2.4: метрики й тренди з виявленням ризиків.'],
    ['Accuracy, precision and recall of the LLM’s own answers', 0, 'Це метрики оцінки GenAI (2.3.1).'],
    ['Token counts and context window usage per prompt', 0, 'Технічні параметри LLM (глава 1).'],
    ['A refactored automation codebase with fewer locators', 0, 'Це регрес / self-healing (2.2.3).']
  ]),
  Q2('q224-6', '2.2.4', 'mon', 'Which TWO describe test monitoring and metrics analysis with GenAI?', [
    ['Analyzing trends to predict potential risks', 1, '2.2.4.'],
    ['Alerting teams about deviations from the plan', 1, '2.2.4.'],
    ['Reallocating resources between teams', 0, 'Це test control.'],
    ['Generating Gherkin test cases', 0, 'Test design.'],
    ['Adapting locators in GUI scripts', 0, 'Регрес (self-healing).']
  ], { multi: 2 }),
  Q2('q224-7', '2.2.4', 'mon', 'What is the purpose of dynamic dashboards and natural language summaries produced with GenAI?', [
    ['To give all stakeholders relevant metrics for quick decisions', 1, 'Enhanced visualization & reporting.'],
    ['To replace the test plan with an automatically generated one', 0, 'Не описано.'],
    ['To store prompts in a shared prompt library', 0, 'Це 2.3.2.'],
    ['To train the LLM on project-specific data', 0, 'Не описано.']
  ])
];

C2.quizzes['2.2.5'] = [
  Q2('q225-1', '2.2.5', 'table225', 'Which prompting technique does the syllabus recommend for complex tasks requiring precision with human verification at each step?', [
    ['Few-shot prompting', 0, 'Для повторюваних/шаблонних задач.'],
    ['Prompt chaining', 1, 'Таблиця 2.2.5.'],
    ['Meta prompting', 0, 'Для нових, гнучких задач.'],
    ['Zero-shot prompting', 0, 'Немає перевірки кроків.']
  ]),
  Q2('q225-2', '2.2.5', 'table225', 'Which technique fits "flexible, dynamic tasks, useful for crafting prompts for new tasks"?', [
    ['Prompt chaining', 0, 'Складні задачі з перевіркою кроків.'],
    ['Few-shot prompting', 0, 'Повторювані задачі з форматом.'],
    ['Meta prompting', 1, 'Таблиця 2.2.5.'],
    ['One-shot prompting', 0, 'One-shot — рівно один приклад; це не техніка для створення промптів під нові задачі.']
  ]),
  Q2('q225-3', '2.2.5', 'decide', 'A tester is new to generating performance-test reports with an LLM. The team needs a reusable prompt that produces reports in a fixed company layout, and wants to check the metric extraction before the report is written. Which approach is BEST?', [
    ['Meta prompt a draft, add sample reports as examples, chain extraction and reporting', 1, '2.2.5: meta для початкового промпту, few-shot для фіксованого формату, chaining для перевірки проміжного кроку.'],
    ['One few-shot prompt with sample reports as examples, no intermediate checks', 0, 'Немає перевірки витягнутих метрик перед звітом.'],
    ['Prompt chain for extraction and reporting, describing the layout only in words', 0, 'Без прикладів фіксований формат відтворюється гірше; немає допомоги з новою задачею.'],
    ['Meta prompt a draft once, then use it zero-shot without any examples', 0, 'Без прикладів і без перевірки проміжних кроків.']
  ]),
  Q2('q225-4', '2.2.5', 'decide', 'A tester must generate test reports in a strict company template every week. Which technique fits BEST?', [
    ['Few-shot prompting with previous reports as examples', 1, 'Test reporting with a specific output format — few-shot (таблиця 2.2.5).'],
    ['Meta prompting to invent a new structure every week', 0, 'Структура фіксована, не нова.'],
    ['Prompt chaining with human checks of every sentence', 0, 'Надмірно для шаблонної задачі.'],
    ['Zero-shot prompting without a template', 0, 'Не забезпечить суворий формат.']
  ]),
  Q2('q225-5', '2.2.5', 'decide', 'A tester has never analyzed logs for anomalies with an LLM, has no example analyses available, and does not know how to phrase the prompt. Which technique is MOST appropriate as a start?', [
    ['Few-shot prompting', 0, 'Прикладів ще немає.'],
    ['Prompt chaining', 0, 'Спочатку треба зрозуміти, яким має бути промпт.'],
    ['Meta prompting', 1, 'Нова задача, промпт невідомий; anomaly detection — приклад із таблиці.'],
    ['One-shot prompting', 0, 'Немає навіть одного прикладу.']
  ]),
  Q2('q225-6', '2.2.5', 'decide', 'Which combination does the syllabus give as an example for a single use case?', [
    ['Meta prompting → few-shot prompting → prompt chaining', 1, 'Приклад з 2.2.5.'],
    ['Zero-shot → one-shot → few-shot', 0, 'Не приклад із силабусу.'],
    ['Prompt chaining → meta prompting → zero-shot', 0, 'Не приклад із силабусу.'],
    ['Few-shot → A/B testing → output analysis', 0, 'A/B і output analysis — техніки оцінки (2.3.2).']
  ]),
  Q2('q225-7', '2.2.5', 'table225', 'Which TWO are listed in the syllabus as typical applications of few-shot prompting?', [
    ['Gherkin style test cases', 1, 'Таблиця 2.2.5.'],
    ['Keyword-driven testing', 1, 'Таблиця 2.2.5.'],
    ['Crafting prompts for new tasks', 0, 'Meta prompting.'],
    ['Complex test analysis with step checks', 0, 'Prompt chaining.'],
    ['Collaborative prompt co-creation', 0, 'Meta prompting (pairing).']
  ], { multi: 2 }),
  Q2('q225-8', '2.1.2', 'fewshot', 'In which situation would zero-shot prompting be the LEAST suitable choice?', [
    ['A simple question the model can answer from its own knowledge', 0, 'Тут zero-shot цілком підходить.'],
    ['Reproducing the exact structure of existing team scripts', 1, 'Потрібні приклади → few-shot; zero-shot не відтворить точний патерн.'],
    ['Asking for a short explanation of what a test oracle is', 0, 'Загальне знання моделі — zero-shot доречний («relies on the model’s pre-existing knowledge», 2.1.2).'],
    ['Asking for a definition of equivalence partitioning', 0, 'Знання моделі достатньо.']
  ])
];

C2.quizzes['2.3.1'] = [
  Q2('q231-1', '2.3.1', 'seven', 'Which metric evaluates the overall correctness of generated output against expert-written test cases or requirements?', [
    ['Precision', 0, 'Precision — щодо конкретної цілі.'],
    ['Accuracy', 1, 'Дослівно з таблиці 2.3.1.'],
    ['Recall', 0, 'Recall — знайти всі релевантні випадки.'],
    ['Diversity', 0, 'Різноманітність сценаріїв.']
  ]),
  Q2('q231-2', '2.3.1', 'seven', 'Which metric is illustrated by "generated test cases cover various user behaviors and explore edge cases"?', [
    ['Relevance and contextual fit', 0, 'Відповідність контексту.'],
    ['Execution success rate', 0, 'Виконуваність.'],
    ['Diversity', 1, 'Приклад diversity з 2.3.1.'],
    ['Precision', 0, 'Правильність щодо цілі.']
  ]),
  Q2('q231-3', '2.3.1', 'seven', 'What does time efficiency measure according to the syllabus?', [
    ['The time saved compared to manual test efforts', 1, '2.3.1.'],
    ['The response latency of the LLM API', 0, 'Не цей сенс.'],
    ['The duration of test execution in CI/CD', 0, 'Не описано так.'],
    ['How fast testers read the generated output', 0, 'Ні.']
  ]),
  Q2('q231-4', '2.3.1', 'why231', 'Why must evaluation metrics for GenAI be based on statistically relevant data?', [
    ['Because GenAI output is non-deterministic', 1, '«Given the non-deterministic nature of GenAI…»'],
    ['Because metrics can only be computed automatically', 0, 'Можна й вручну.'],
    ['Because each metric needs a separate LLM', 0, 'Ні.'],
    ['Because prompts are always too long', 0, 'Ні.']
  ]),
  Q2('q231-5', '2.3.1', 'why231', 'Which TWO ways of evaluating the metrics does the syllabus mention?', [
    ['Manual reviews by testers', 1, '2.3.1.'],
    ['Automated comparison against a predefined reference', 1, '2.3.1.'],
    ['Asking the same LLM to grade itself only', 0, 'Не описано.'],
    ['Counting tokens of the generated output', 0, 'Не метрика якості.'],
    ['Measuring the size of the training dataset', 0, 'Не стосується.']
  ], { multi: 2 }),
  Q2('q231-6', '2.3.1', 'pairs', 'An LLM generates API test scripts and test cases for a booking flow. The team wants to know how many scripts run as is without errors, and whether the cases cover valid and invalid partitions of the "passengers" field. Which metric pair BEST fits?', [
    ['Execution success rate and recall', 1, 'Обидва приклади — з таблиці 2.3.1.'],
    ['Accuracy and time efficiency', 0, 'Не вимірюють ні запуск скриптів, ні покриття partitions.'],
    ['Precision and diversity', 0, 'Precision — щодо конкретної цілі; diversity — різні сценарії, а не partitions.'],
    ['Relevance/contextual fit and time efficiency', 0, 'Не відповідають на жодне з двох питань команди.']
  ]),
  Q2('q231-7', '2.3.1', 'pairs', 'Which metric matches "generated test cases are consistent with the test basis and integrate domain-specific requirements"?', [
    ['Relevance and contextual fit', 1, 'Приклад із 2.3.1.'],
    ['Recall of relevant instances', 0, 'Recall — усі релевантні випадки (partitions).'],
    ['Diversity of scenarios', 0, 'Різноманітність.'],
    ['Time efficiency of generation', 0, 'Час.']
  ]),
  Q2('q231-8', '2.3.1', 'seven', 'Which metric is illustrated by "the degree to which generated test cases correctly identify anomalies"?', [
    ['Accuracy', 0, 'Accuracy — загалом vs еталон; приклад — покриття вимог.'],
    ['Precision', 1, 'Приклад precision із 2.3.1.'],
    ['Recall', 0, 'Приклад recall — partitions.'],
    ['Execution success rate', 0, 'Виконуваність.']
  ])
];

C2.quizzes['2.3.2'] = [
  Q2('q232-1', '2.3.2', 'which232', 'Generated test cases for a discount feature repeatedly use a 10% discount, although the requirements specify 15% for loyalty members. The tester wants to understand what type of error occurs and why, to change the prompt. Which technique is BEST?', [
    ['A/B testing of prompts', 0, 'Порівнює версії, не діагностує причину.'],
    ['Output analysis', 1, 'Логіка Sample Q18: типи помилок → причина → покращення.'],
    ['Adjusting prompt length', 0, 'Не адресує причину напряму.'],
    ['Integrating user feedback', 0, 'Про корисність/зрозумілість, не про причину помилок.']
  ]),
  Q2('q232-2', '2.3.2', 'five', 'What does iterative prompt modification involve?', [
    ['Starting from a base prompt and adjusting it based on actual results', 1, '2.3.2.'],
    ['Running two prompts in parallel and keeping the faster one', 0, 'Ближче до A/B, і критерій — метрики, не швидкість.'],
    ['Letting testers vote on the clarity of the output', 0, 'User feedback.'],
    ['Removing all context to improve generalization', 0, 'Не те; і «всі» — абсолют.']
  ]),
  Q2('q232-3', '2.3.2', 'five', 'What does the syllabus say about prompt length and specificity?', [
    ['Longer prompts always produce better results', 0, 'Абсолют; силабус — «sometimes».'],
    ['More context can help, yet shorter prompts may generalize better', 1, '2.3.2.'],
    ['Prompt length has no measurable impact on results', 0, 'Має вплив.'],
    ['Highly specific prompts should be avoided in testing', 0, 'Ні.']
  ]),
  Q2('q232-4', '2.3.2', 'team232', 'Which TWO benefits of sharing prompt practices across a test organization are mentioned?', [
    ['Standardizing prompt techniques and consistent quality', 1, '2.3.2.'],
    ['Promoting a culture of learning and iterative improvement', 1, '2.3.2.'],
    ['Making LLM outputs deterministic', 0, 'Ні.'],
    ['Removing the need for metrics', 0, 'Ні.'],
    ['Allowing the LLM to train on the library automatically', 0, 'Не описано.']
  ], { multi: 2 }),
  Q2('q232-6', '2.3.2', 'team232', 'What is given as an example of sharing practices in the test organization?', [
    ['Sharing prompt libraries', 1, '2.3.2: e.g. by sharing prompt libraries.'],
    ['Sharing one generic prompt for all test tasks', 0, 'Один загальний промпт суперечить ідеї бібліотеки під різні задачі.'],
    ['Sharing generated test cases without review', 0, 'Не практика з 2.3.2 і суперечить перевірці результатів.'],
    ['Sharing test environments', 0, 'Не про промпти.']
  ]),
  Q2('q232-7', '2.3.2', 'five', 'Testers say generated test cases use different terms than the project glossary. Which refinement technique addresses this MOST directly?', [
    ['Iterative modification of wording and terminology', 1, 'Приклад iterative modification: adjusting wording (e.g., regarding terminology).'],
    ['A/B testing of ten randomly varied prompt versions', 0, 'Спершу варто виправити очевидну причину.'],
    ['Switching from few-shot to zero-shot prompting', 0, 'Не вирішує термінологію.'],
    ['Measuring the execution success rate of the cases', 0, 'Метрика, не покращення.']
  ]),
  Q2('q232-8', '2.3.2', 'team232', 'What are prompt evaluation and optimization sessions intended to ensure?', [
    ['Continuous improvement of GenAI prompts', 1, '2.3.2.'],
    ['Formal certification of each tester', 0, 'Ні.'],
    ['That no prompt is ever changed again', 0, 'Навпаки.'],
    ['That LLMs stop hallucinating', 0, 'Не гарантується.']
  ])
];
