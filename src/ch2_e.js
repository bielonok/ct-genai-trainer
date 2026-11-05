// ===================== CHAPTER 2 FINAL (20) =====================
C2.final = [
  Q2('f2-01', '2.1.1', 'instr-input', 'A prompt contains: "Here are two correctly written test conditions from our project as a reference." In which component does this MOST LIKELY belong?', [
    ['Input data', 1, 'Output examples входять в input data.'],
    ['Output format', 0, 'Формат описують вимогами до структури, а не прикладами з проєкту.'],
    ['Context', 0, 'Context — фон про систему.'],
    ['Role', 0, 'Не персона.']
  ]),
  Q2('f2-02', '2.1.1', 'constr-out', 'Which prompt line is BEST classified as a constraint?', [
    ['"Use only requirements from section 4 of the specification."', 1, 'Обмежує, як застосувати інструкцію до даних.'],
    ['"Act as a senior test analyst for banking apps."', 0, 'Role.'],
    ['"The system is a mobile app used by retail customers."', 0, 'Context.'],
    ['"Present the findings in a table with five columns."', 0, 'Output format.']
  ]),
  Q2('f2-03', '2.1.2', 'fewshot', 'Which statement BEST differentiates one-shot from few-shot prompting?', [
    ['One-shot gives a single example; few-shot gives more than one', 1, '2.1.2.'],
    ['One-shot uses one prompt; few-shot uses a chain of prompts', 0, 'Кількість промптів — це про chaining.'],
    ['One-shot needs no examples; few-shot needs exactly three', 0, 'Zero-shot — без прикладів; «рівно три» не вимагається.'],
    ['One-shot is for system prompts; few-shot is for user prompts', 0, 'Не пов’язано.']
  ]),
  Q2('f2-04', '2.1.2', 'chaining', 'Which TWO statements about prompt chaining are CORRECT?', [
    ['Intermediate results are checked manually or automatically', 1, '2.1.2.'],
    ['It supports dynamic interactions in test processes', 1, '2.1.2: allows for dynamic interactions.'],
    ['It relies on the LLM to write its own prompts', 0, 'Meta prompting.'],
    ['It requires a few examples in every prompt', 0, 'Few-shot.'],
    ['It is limited to a single prompt with numbered steps', 0, 'Chaining = кілька промптів.']
  ], { multi: 2 }),
  Q2('f2-05', '2.1.3', 'sys', 'A tester notices that the company chatbot always answers formally and refuses to speculate, whatever they ask. What MOST LIKELY causes this?', [
    ['The rules in the system prompt', 1, 'System prompt задає поведінку й операційні параметри на всю розмову.'],
    ['The output format of the tester’s last user prompt', 0, 'Поведінка стала для всіх запитів — не від одного user prompt.'],
    ['Few-shot examples the tester added', 0, 'Тестувальник прикладів не додавав.'],
    ['The context window of the model', 0, 'Не визначає тон і заборони.']
  ]),
  Q2('f2-06', '2.1.3', 'user', 'Which statement about user prompts is CORRECT?', [
    ['They form the immediate context for each response', 1, '2.1.3.'],
    ['They are typically hidden from the chatbot’s user', 0, 'Видимі.'],
    ['They remain unchanged for the whole session', 0, 'Змінюються щоразу.'],
    ['They define the personality of the LLM', 0, 'Це system prompt.']
  ]),
  Q2('f2-07', '2.2.1', 'tasks221', 'For a payment feature, an LLM receives user stories, regulatory requirements and the defect history, and is asked to rank test conditions. Which additional information is MOST important to make the ranking risk-based?', [
    ['Risk likelihood and impact of failure for each condition', 1, '2.2.1: with information on risk likelihood and risk impact… an LLM can help prioritize.'],
    ['The preferred output format for the ranking table', 0, 'Корисно, але не робить ранжування risk-based.'],
    ['A system prompt asking for formal language', 0, 'Тон не впливає на ризик.'],
    ['A list of boundary values for each input field', 0, 'Це про техніки/дані, не про ризик.']
  ], { k: 'K3' }),
  Q2('f2-08', '2.2.1', 'chain221', 'A tester analyzes a vague user story with prompt chaining: ambiguities → testability → completeness. After step 1 the LLM flags an issue that is not actually a problem. What should the tester do?', [
    ['Correct the result before passing it to the testability step', 1, 'HO-2.2.1b: кожен крок перевіряють і виправляють; наступний крок отримує чистий результат.'],
    ['Continue to step 2 and fix everything at the end', 0, 'Помилка пошириться на наступні кроки.'],
    ['Restart the chain with a zero-shot prompt', 0, 'Не обов’язково; достатньо виправити результат.'],
    ['Add more examples and skip the testability step', 0, 'Пропуск кроку зменшить якість AC.']
  ]),
  Q2('f2-09', '2.2.2', 'ho222', 'You must generate 60 Gherkin scenarios in your team’s style for new user stories. You have five approved scenarios from previous stories. Which prompt approach is BEST?', [
    ['Few-shot prompt with the approved scenarios, GWT and AC alignment', 1, 'Few-shot + GWT + AC — як у Sample Q13 та HO-2.2.2b.'],
    ['Zero-shot prompt asking for "high-quality BDD scenarios" only', 0, 'Без прикладів стиль команди не відтвориться.'],
    ['Meta prompt asking the LLM to invent a new Gherkin style first', 0, 'Стиль уже визначено прикладами.'],
    ['Prompt chain generating one scenario per prompt, no examples', 0, 'Неефективно і без еталону стилю.']
  ]),
  Q2('f2-10', '2.2.2', 'tcgen', 'A team needs load-test data resembling production customer records, including extreme values, without privacy risks. Which approach BEST fits the syllabus?', [
    ['GenAI test data synthesis with production-like synthetic records', 1, 'Privacy-preserving synthetic data, covering extreme situations; functional and non-functional.'],
    ['Anonymizing a copy of production data with a GenAI chatbot', 0, 'Силабус описує синтез privacy-preserving даних; передача копії production-даних у чатбот сама створює ризик для приватності (глава 3).'],
    ['Generating automated scripts from structured test cases', 0, 'Скрипти ≠ дані.'],
    ['Asking GenAI to prioritize the load test schedule', 0, 'Не вирішує задачу даних.']
  ]),
  Q2('f2-11', '2.2.3', 'guiapi', 'After a frontend redesign, many GUI regression tests fail because element locators changed, although the features work. Which GenAI use from the syllabus BEST addresses this?', [
    ['Adapting scripts to dynamic locators and modified interactions', 1, 'GUI regression: GenAI can automatically adapt test scripts to handle dynamic locators.'],
    ['Generating diverse API test data for the endpoints', 0, 'Це API-напрям.'],
    ['Impact analysis of the backend code changes', 0, 'Зміни у фронтенді, а проблема — локатори.'],
    ['Compiling defect reports with screenshots', 0, 'Дефектів продукту немає.']
  ]),
  Q2('f2-12', '2.2.3', 'ho223', 'A team analyzes nightly regression results in one LLM conversation. Many failures repeat known issues; stakeholders need only genuinely new problems. Which prompt sequence is BEST?', [
    ['Compare with the test specification → cluster failures → cross-check known anomalies', 1, 'Послідовні структуровані кроки з перехресною перевіркою за списком відомих аномалій (2.2.3).'],
    ['Cluster failures → generate Gherkin scenarios for them → rerun all failed tests', 0, 'Gherkin і перезапуск не відповідають на питання «що нове».'],
    ['Compare with the test specification → delete known anomalies list → report all', 0, 'Список відомих аномалій якраз потрібен для відсіювання.'],
    ['Summarize all logs in one prompt → let the LLM decide what is new, without a list', 0, 'Без списку відомих аномалій модель не може надійно відрізнити нове.']
  ]),
  Q2('f2-13', '2.2.4', 'mon', 'Halfway through testing, the LLM dashboard shows coverage of high-risk requirements lagging behind plan. Which GenAI support is MOST appropriate next?', [
    ['Insights for reprioritizing tests and reallocating resources', 1, 'Test control у відповідь на відхилення.'],
    ['A test completion report with lessons learned', 0, 'Тестування ще триває.'],
    ['Self-healing of failed GUI scripts', 0, 'Не адресує відставання покриття.'],
    ['Generating a new system prompt for the chatbot', 0, 'Не вирішує проблему.']
  ]),
  Q2('f2-14', '2.2.4', 'ho224', 'Business stakeholders say AI-generated test metrics on the dashboard are hard to interpret. Which prompt change is BEST?', [
    ['Ask for a plain-language summary explaining the metrics and next steps', 1, 'Відповідає 2.2.4 (NL summaries) і логіці Sample Q15.'],
    ['Ask the LLM to add more technical metrics to the dashboard', 0, 'Ускладнить інтерпретацію.'],
    ['Change the role from test manager to test automation engineer', 0, 'Не робить метрики зрозумілішими.'],
    ['Remove the output format to let the LLM decide freely', 0, 'Погіршить передбачуваність.']
  ]),
  Q2('f2-15', '2.2.5', 'decide', 'You must convert 300 legacy test cases into a fixed CSV import format; you have four correctly converted samples. Which technique is MOST suitable?', [
    ['Few-shot prompting with the four samples', 1, 'Повторювана задача з суворим форматом.'],
    ['Prompt chaining with human verification of each case', 0, 'Надмірно для шаблонної конвертації.'],
    ['Meta prompting to design a new CSV structure', 0, 'Формат уже фіксований.'],
    ['Zero-shot prompting describing the CSV in words', 0, 'Не використовує наявні приклади.']
  ]),
  Q2('f2-16', '2.2.5', 'decide', 'A team must analyze test reports from a newly adopted performance-test tool. Nobody has done this with an LLM before, no example analyses exist, and the team does not know how to structure the prompt. Which approach is BEST to begin with?', [
    ['Meta prompting to co-create the prompt with the LLM', 1, 'Нова, гнучка задача; test report analysis — приклад meta з таблиці 2.2.5.'],
    ['Few-shot prompting with sample analyses written by the team', 0, 'Прикладів аналізу ще немає — few-shot неможливий; для нової задачі спершу meta prompting (таблиця 2.2.5: test report analysis).'],
    ['Prompt chaining of ten predefined steps', 0, 'Кроки ще не визначені.'],
    ['One-shot prompting with a random log excerpt', 0, 'Випадковий фрагмент не є еталоном.']
  ]),
  Q2('f2-17', '2.3.1', 'pairs', 'A team evaluates LLM-generated API test scripts before adding them to CI/CD. Which metric directly shows how many scripts can run as is?', [
    ['Execution success rate', 1, '2.3.1.'],
    ['Relevance and contextual fit', 0, 'Про відповідність контексту.'],
    ['Diversity', 0, 'Про різноманітність.'],
    ['Recall', 0, 'Про повноту релевантних випадків.']
  ]),
  Q2('f2-18', '2.3.1', 'why231', 'A tester compares two prompts by running each once and picks the one whose output looked better. What is the MAIN weakness?', [
    ['One run is not statistically relevant for a non-deterministic LLM', 1, '2.3.1: metrics must be based on statistically relevant data.'],
    ['Prompts should never be compared directly with each other', 0, 'A/B — саме порівняння.'],
    ['Only automated metrics are allowed for this comparison', 0, 'Manual review теж допустимий.'],
    ['Time efficiency is the only valid metric for prompts', 0, 'Ні.']
  ]),
  Q2('f2-19', '2.3.2', 'which232', 'Generated test cases are correct, but testers say they are too verbose to use. Which TWO refinement techniques fit this situation BEST?', [
    ['Integrating user feedback', 1, 'Відгуки про корисність і рівень деталізації.'],
    ['Adjusting prompt length and specificity', 1, 'Регулювання деталізації/довжини.'],
    ['Output analysis of wrong expected results', 0, 'Результати правильні; проблема не в помилках.'],
    ['Switching to a reasoning LLM', 0, 'Не техніка покращення промптів.'],
    ['Increasing the context window', 0, 'Не стосується.']
  ], { multi: 2 }),
  Q2('f2-20', '2.3.2', 'team232', 'Each tester in a team writes their own prompts and quality varies greatly. Which practice from the syllabus BEST addresses this?', [
    ['Prompt evaluation sessions and a shared prompt library', 1, '2.3.2: стандартизація, стабільна якість, культура навчання.'],
    ['Requiring every tester to use zero-shot prompts', 0, 'Не вирішує різну якість.'],
    ['Disabling system prompts in all tools', 0, 'Ні.'],
    ['Letting only the test manager use GenAI', 0, 'Не практика з силабусу.']
  ])
];

// ===================== OFFICIAL SAMPLE EXAM A v1.1 (Q8–Q18) =====================
function SQ2(num, sec, slide, q, opts, official, ua, multi) {
  return Object.assign(Q2('s' + num, sec, slide, q, opts, { fixed: true, num, official, ua }), multi ? { multi } : {});
}
const PROMPT_Q14 = 'Role: Act as a test analyst.\nContext: Analyze raw regression test results from a recent test execution cycle.\nInstruction: Identify discrepancies in the test results.\nInput Data: Use the attached file containing raw test results.\nConstraints: Use the known anomalies list for cross-checking.\nOutput Format: Provide a list of discrepancies using a table format.';
const PROMPT_Q15 = 'Role: Act as a test manager.\nContext: You are provided with raw data from test tools.\nInstruction: Generate test progress metrics, defect trend metrics, and coverage metrics from the raw data.\nInput Data: Use the attached file containing raw test results.\nConstraints: Ensure that the output is concise and understandable.\nOutput Format: Display metrics on a dashboard.';
C2.sample = [
  SQ2(8, '2.1.1', 'role-ctx', 'A tester is examining a structured prompt used to obtain LLM assistance for performance test analysis. One of the components of this prompt reads: "Test reports from performance testing tools, system monitoring logs during peak usage periods, and application performance benchmarks from previous releases".<br>In which component of the six-part prompt structure would this description MOST LIKELY appear?', [
    ['Context', 0, 'Not correct. Context provides background information about the test environment or system being tested, not specific (input) data to be analyzed. While this mentions performance testing, it is listing actual data sources rather than providing background information.'],
    ['Input data', 1, 'Correct. The description lists specific data sources (test reports, monitoring logs, performance benchmarks) that will be processed by the LLM to perform the analysis task.'],
    ['Constraints', 0, 'Not correct. Constraints outline restrictions or special considerations for how the task should be performed. The description lists actual data sources rather than restrictions on the analysis approach.'],
    ['Output format', 0, 'Not correct. Output format specifies the expected structure and characteristics of the LLM’s response. The description lists actual data sources, without any reference to how results should be presented.']],
    '', 'Правило: <b>конкретні джерела даних, які модель обробляє → input data</b>; <b>фонова інформація про систему → context</b>. Слово «performance» у тексті — пастка, що штовхає до context.'),
  SQ2(9, '2.1.1', 'constr-out', 'A tester wants an LLM to analyze a requirements specification for potential defects. In the structured prompt the tester is using, one line reads: "The potential defects must be provided in a markdown table with the following columns: ID, requirement reference, defect type, description, severity".<br>In which component of the six-part prompt structure would this line MOST LIKELY appear?', [
    ['Instructions', 0, 'Not correct. The given line does not describe what task to perform, but rather how to present the results.'],
    ['Constraints', 0, 'Not correct. The given line is not imposing restrictions or limitations on the analysis process, but rather specifying the desired presentation format. Constraints might include aspects like “exclude cosmetic issues”.'],
    ['Output format', 1, 'Correct. The given line matches the syllabus definition of output format specifications that guide how the LLM should format the output.'],
    ['Context', 0, 'Not correct. The given line provides no background information such as the context of the requirements specification. Instead, it is about formatting the output.']],
    '', '«Must» звучить як обмеження, але зміст — <b>як подати результат</b> (таблиця, колонки) → output format. Constraints — про обробку («exclude cosmetic issues»).'),
  SQ2(10, '2.1.2', 'three', 'Which of the following BEST differentiates prompt chaining, few-shot prompting, and meta prompting techniques?', [
    ['Prompt chaining focuses on providing examples, few-shot prompting breaks tasks into subtasks, and meta prompting refines prompts manually.', 0, 'Not correct. Prompt chaining is defined by decomposing a task into sequential prompts; few-shot supplies examples; meta prompting relies on the LLM to revise prompts by itself, not on the tester refining manually.'],
    ['Few-shot prompting provides guidance with examples, prompt chaining breaks tasks into multiple prompts, and meta prompting allows the model to iteratively refine its own prompts.', 1, 'Correct. Few-shot provides guidance with examples, prompt chaining decomposes tasks into intermediate steps (multiple prompts), and meta prompting uses AI to refine its own prompts iteratively.'],
    ['Meta prompting emphasizes breaking down tasks into steps, prompt chaining uses examples, and few-shot prompting focuses on manual optimization of prompts.', 0, 'Not correct. Meta prompting’s core purpose is automatic prompt refinement by the LLM; prompt chaining is step-by-step decomposition; few-shot supplies examples.'],
    ['Prompt chaining provides guidance without examples, few-shot provides guidance with examples, and meta prompting relies on tester-defined prompts.', 0, 'Not correct. Prompt chaining is defined by stepwise decomposition, not “guidance without examples”. Meta prompting relies on the LLM to generate/refine prompts.']],
    '', 'Класичне «перемішування»: правильний варіант — єдиний, де кожна техніка має <b>свою</b> суть: few-shot = приклади, chaining = кілька промптів, meta = LLM покращує власні промпти.'),
  SQ2(11, '2.1.3', 'sys', 'What is the primary function of a system prompt in interactions with LLMs?', [
    ['To provide a framework for the LLM behavior for the entire conversation.', 1, 'Correct. The system prompt stays constant throughout the interaction session and establishes the fundamental framework for how the LLM should respond.'],
    ['To provide specific questions or instructions from the user to the LLM.', 0, 'Not correct. This describes the function of a user prompt, not a system prompt.'],
    ['To adjust dynamically with each user interaction and set the conversation’s context.', 0, 'Not correct. The system prompt does not adjust dynamically; it remains constant.'],
    ['To include visible input from the user and set rules for the conversation.', 0, 'Not correct. The system prompt is hidden and does not include visible input from the user.']],
    '', 'System prompt: <b>сталий, прихований, на всю розмову</b>. Варіанти b–d описують ознаки user prompt (змінний, видимий, від користувача).'),
  SQ2(12, '2.2.1', 'chain221', 'You are tasked with applying the following test approach to a set of stable requirements for a new project: generate test conditions, prioritize them based on risk level, and identify potential coverage gaps. The requirements have already been thoroughly reviewed for defects.<br>Which of the following sequences of steps (i-v) should you follow to effectively apply Generative AI to implement this test approach using a prompt chaining technique?<div class="pre">i.   Submit the requirements to the LLM and prompt it to produce test conditions based on those requirements.\nii.  Provide the test conditions to the LLM, ensuring it understands the context for prioritization, and prompt it to prioritize those test conditions accordingly.\niii. Provide the prioritized test conditions to the LLM and prompt it to analyze them to determine whether all aspects of the requirements are addressed in the test conditions.\niv.  Submit the requirements to the LLM and prompt it to produce prioritized test conditions that address all aspects of the requirements.\nv.   Submit the requirements to the LLM and prompt it to detect inconsistencies and ambiguities in those requirements.</div>', [
    ['i, ii, and iii', 1], ['iv, and ii', 0], ['i, iii, and v', 0], ['v, and iv', 0]],
    'i. Correct — begins with generating test conditions from the requirements. ii. Correct — LLMs can prioritize test conditions based on risk level when provided with proper context. iii. Correct — coverage analysis to determine whether all aspects of the test basis are covered. iv. Not correct — attempts to do everything in one step rather than breaking it down. v. Not correct — the requirements are stable and already thoroughly reviewed for defects. Thus a) is correct.',
    'Читайте умову як вимогу до ланцюга: <b>три цілі = три кроки</b> (умови → пріоритети → покриття). (iv) — «все одним промптом» (не chaining), (v) — зайвий крок, бо вимоги вже відрев’ювлені. K3, 2 бали.'),
  SQ2(13, '2.2.2', 'ho222', 'Consider applying the few-shot structured prompting technique to generate Gherkin-style test cases (i.e., scenario-based) for the following user story and acceptance criterion:<br>– User story: "As a user, I want to reset my password so that I can regain access to my account if I forget it."<br>– Acceptance criterion: "When a user submits a registered email address then they receive a password reset email."<br>You can rely on predefined examples that include user stories, acceptance criteria, and Gherkin-style test cases. Which one of the following prompts is BEST suited to this task?', [
    ['<b>Prompt A</b><div class="pre">Role: Act as a test analyst.\nContext: You are testing a password reset functionality.\nInstruction: Generate Gherkin-style test cases for the user story and acceptance criterion, using the following predefined examples as a guide: << predefined examples >>.\nInput Data: <<< user story >>> and <<< acceptance criterion >>>.\nConstraints: Rely on best practices to create test cases.\nOutput Format: Generate test cases with expected results.</div>', 0, 'Not correct. It does not explicitly require the “Given-When-Then” syntax and relies on vague best practices in the constraints; does not ensure alignment with the acceptance criterion.'],
    ['<b>Prompt B</b><div class="pre">Role: Act as a test analyst specializing in Gherkin-style test cases.\nContext: You are testing a password reset functionality.\nInstruction: Generate Gherkin-style test cases for the user story and acceptance criterion, using the following predefined examples as a guide: << predefined examples >>.\nInput Data: <<< user story >>> and <<< acceptance criterion >>>.\nConstraints: Use "Given-When-Then" syntax and ensure alignment with the acceptance criterion.\nOutput Format: Respect the given Gherkin-style test case format.</div>', 1, 'Correct. Comprehensive and leverages predefined examples to guide the LLM.'],
    ['<b>Prompt C</b><div class="pre">Role: Act as a test analyst.\nContext: You are testing a password reset functionality.\nInstruction: Generate Gherkin-style test cases for the user story and acceptance criterion. Rely on best practices to create test cases.\nInput Data: <<< user story >>> and <<< acceptance criterion >>>.\nConstraints: Use "Given-When-Then" syntax and ensure alignment with the acceptance criterion.\nOutput Format: Respect the given Gherkin-style test case format.</div>', 0, 'Not correct. Lacks the use of predefined examples and relies on vague best practices in the instructions.'],
    ['<b>Prompt D</b><div class="pre">Role: Act as a test analyst.\nContext: You are testing a password reset functionality.\nInstruction: Generate at least two Gherkin-style test cases for the user story and acceptance criterion. Focus on edge cases.\nInput Data: <<< user story >>> and <<< acceptance criterion >>>.\nConstraints: Ensure all test cases follow "Given-When-Then" syntax.\nOutput Format: Respect the given Gherkin-style test case format.</div>', 0, 'Not correct. Focuses on edge cases but neglects comprehensive coverage and the use of examples for guidance.']],
    '', 'Чек-лист для таких питань: <b>(1) є приклади?</b> (few-shot) <b>(2) явний GWT-синтаксис?</b> <b>(3) відповідність AC?</b> Лише B має всі три. «Best practices» — розмите формулювання, ознака слабкого варіанту. K3, 2 бали.'),
  SQ2(14, '2.2.3', 'ho223', 'You are tasked with applying structured prompting to analyze regression test results. Here is an initial draft of the prompt:<div class="pre">' + PROMPT_Q14 + '</div>You are asked to improve this prompt. Which of the following improvements would BEST align the prompt with structured prompt engineering best practices for comprehensive regression test report analysis?', [
    ['Add a step to cluster similar issues and cross-check findings against the known anomalies list.', 0, 'Not correct. Addresses clustering and cross-checking but misses other critical steps like separating test results.'],
    ['Specify that the role is a regression test analyst specializing in actionable insights.', 0, 'Not correct. Improves role clarity but does not expand instructions or address structured steps.'],
    ['Expand the instruction to include separating expected results and actual results, clustering issues, and highlighting discrepancies.', 1, 'Correct. Expands instructions to include all critical structured analysis steps: separating expected and actual results, clustering issues, highlighting discrepancies.'],
    ['Include references to regression testing principles such as "Given-When-Then" in the constraints.', 0, 'Not correct. Introduces irrelevant constraints, misaligning the prompt with the task requirements.']],
    '', 'Найслабше місце чернетки — розмита <b>instruction</b>. Найкраще покращення додає <b>усі</b> ключові кроки аналізу; a) — частково, b) — лише role, d) — нерелевантний Gherkin. K3, 2 бали.'),
  SQ2(15, '2.2.4', 'ho224', 'You are using an LLM to assist in preparing actionable test metrics from raw data. The metrics include test progress, defect trends, and coverage, which are graphically displayed and explained with text. Your goal is to ensure the generated metrics are accurate, actionable, and easily interpretable by stakeholders. Here is an initial draft of a prompt:<div class="pre">' + PROMPT_Q15 + '</div>Which of the following improvements would BEST enhance the LLM’s ability to produce accurate and actionable metrics?', [
    ['Specify that the role is a test manager focusing on actionable insights and decision support, ensuring comprehensive analysis of test data.', 0, 'Not correct. Clarifies the role but does not add any concrete instruction that improves accuracy, actionability, or interpretability.'],
    ['Add an instruction to include potential risks identified from the trends in the generated metrics, along with their impact assessment and priority levels.', 0, 'Not correct. Adds a risk-analysis task that could distract the model from the core metrics and offers no mechanism for making results clear to stakeholders.'],
    ['Expand the output format to include a plain-language summary that interprets the metrics and outlines next steps for stakeholders.', 1, 'Correct. A plain-language summary that interprets the metrics and outlines next steps directly supports stakeholder understanding and actionability (see 2.2.4: “Enhanced test metrics visualization and reporting”).'],
    ['Emphasize constraints that the output is also easily interpretable by stakeholders, using clear language and avoiding technical jargon throughout the response.', 0, 'Not correct. Merely re-states an existing constraint and gives no specific guidance on how to achieve stakeholder-level interpretability.']],
    '', 'Мета — <b>actionable + interpretable</b>. Конкретна зміна output format (summary + next steps) досягає обох. Дистрактори: «краща role», «повтор constraint», «додатковий аналіз ризиків» — правдоподібні, але не по суті. K3, 2 бали.'),
  SQ2(16, '2.2.5', 'decide', 'Your goal is to create test cases for an AI-based system that suffers from the test oracle problem, preventing you from determining expected results. You can only count on a few existing test cases with known expected results. Through appropriate analysis, you have identified a set of well-defined transformation rules that specify how changes to inputs affect expected results. These rules can be applied to all existing test cases. You have decided to rely on Generative AI, providing a given LLM with the existing test cases with their inputs and expected results, a clear description of the transformation rules, and guidelines for generating additional test cases by precisely applying these rules. With the specified information, the chosen LLM can directly generate additional test cases in line with your expectations.<br>Which of the following prompting techniques is BEST suited to achieve your goal in this scenario?', [
    ['Few-shot prompting', 1, 'Correct. Few-shot prompting is ideal: you provide some examples (the existing test cases with inputs and expected results) to guide the LLM in applying the transformation rules.'],
    ['Prompt chaining', 0, 'Not correct. While prompt chaining could be used, it could unnecessarily complicate this very straightforward task.'],
    ['Meta prompting', 0, 'Not correct. While meta-prompting could be used, it is not as direct and specific as few-shot prompting for this very straightforward task.'],
    ['Zero-shot prompting', 0, 'Not correct. Zero-shot prompting would not be effective since it would not leverage existing test cases as examples.']],
    '', 'Ключові сигнали: «a few existing test cases» (= приклади), «can directly generate» (= проста задача). Довгий текст про oracle problem і metamorphic-правила — шум. K3, 2 бали.'),
  SQ2(17, '2.3.1', 'pairs', 'You are leveraging Generative AI to assist in testing an entertainment software application. The Generative AI model generates test cases for user interaction scenarios, test scripts for API interactions, and synthetic test data to address edge cases.<br>To effectively evaluate the Generative AI model’s performance and to refine prompts, which combination of metrics and actions BEST ensures comprehensive assessment and improvement?', [
    ['Evaluate the diversity of test cases to ensure varied input scenarios and use test execution success rate to validate the functionality of generated API test scripts.', 1, 'Correct. Diversity ensures comprehensive coverage of edge cases, and test execution success rate evaluates the reliability of API test scripts.'],
    ['Apply accuracy and completeness metrics to validate test cases against entertainment software requirements and rely on time efficiency to compare AI-generated test scripts with manual test efforts.', 0, 'Not correct. Relying primarily on time efficiency does not fully evaluate coverage or test execution reliability.'],
    ['Focus on precision to ensure generated test data meets entertainment software compliance standards, while contextual fit and test execution success rate assesses the alignment and usability of test scripts.', 0, 'Not correct. Precision and contextual fit are valuable but do not address diversity or thoroughly evaluate test execution success for API test scripts.'],
    ['Prioritize relevance and contextual fit for all outputs to maintain consistency with entertainment software requirements and include diversity metrics to expand edge case coverage.', 0, 'Not correct. Without considering metrics like test execution success rate or accuracy, critical aspects of evaluation are missed.']],
    '', 'Зіставте артефакти з метриками: сценарії + edge cases → <b>diversity</b>; API-скрипти → <b>execution success rate</b>. Лише a) покриває обидва ключові артефакти.'),
  SQ2(18, '2.3.2', 'which232', 'Which of the following techniques for evaluating and iteratively refining prompts is BEST suited for determining why an LLM consistently generates test cases with wrong expected results that contradict the input requirements, thereby providing insights to optimize the prompt and prevent similar errors?', [
    ['Output analysis', 1, 'Correct. Output analysis examines LLM outputs for inaccuracies or inconsistencies; classifying the wrong expected results reveals why the prompt misled the LLM.'],
    ['A/B testing of prompts', 0, 'Not correct. A/B testing is better suited for comparing different prompt versions than for diagnosing the cause of wrong expected results.'],
    ['Adjusting prompt length and specificity', 0, 'Not correct. It can improve responses, but does not directly address the cause of wrong expected results.'],
    ['Integrating user feedback', 0, 'Not correct. Useful for real-world needs, but does not directly address the cause of wrong expected results.']],
    '', 'Слова-сигнали: «determining <b>why</b>», «prevent similar errors» → <b>output analysis</b> (типи помилок). A/B — «яка версія краща», а не «чому».')
];

// ===================== GLOSSARY =====================
const AD2 = 'Appendix D';
C2.glossary = [
  { id: 'g2-zero', term: 'Zero-shot prompting', sec: '2.1.2', src: AD2, en: 'A prompt writing technique where the prompt contains no examples, relying on the model’s pre-existing knowledge to generate a response.', ua: 'Промпт без прикладів — модель спирається на власні знання.' },
  { id: 'g2-one', term: 'One-shot prompting', sec: '2.1.2', src: AD2, en: 'A prompt writing technique where the prompt contains one example to guide the LLM’s response.', ua: 'Рівно один приклад очікуваного результату.' },
  { id: 'g2-few', term: 'Few-shot prompting', sec: '2.1.2', src: AD2, en: 'A technique where a model is given a few examples within the prompt to guide it in generating appropriate responses.', ua: 'Кілька прикладів у промпті → стабільний, очікуваний результат.' },
  { id: 'g2-meta', term: 'Meta prompting', sec: '2.1.2', src: AD2, en: 'The crafting of higher-level instructions that generate specific prompts for exploring or automating capabilities.', ua: '«Промпт про промпт»: LLM генерує/покращує промпти, тестувальник оцінює.' },
  { id: 'g2-sys', term: 'System prompt', sec: '2.1.3', src: AD2, en: 'A predefined instruction set, typically hidden from the chatbot’s users, that consistently establishes the context, tone, and boundaries for an LLM’s responses and guides its behavior throughout interactions.', ua: 'Сталі приховані правила на всю розмову: роль, тон, обмеження.' },
  { id: 'g2-user', term: 'User prompt', sec: '2.1.3', src: AD2, en: 'An instruction or query entered by a user into a Large Language Model (LLM) that directs the model’s response to fulfil specific tasks or provide desired information.', ua: 'Видимий запит користувача; змінюється з кожною взаємодією.' },
  { id: 'g2-nlp', term: 'Natural language processing (NLP)', sec: '2.2.1', src: AD2, en: 'The processing of data encoded in natural language by computers to retrieve information and for knowledge representation.', ua: 'Обробка природної мови; завдяки їй LLM розбиває вимоги на тестовані твердження.' },
  { id: 'g2-6c', term: 'Six prompt components', sec: '2.1.1', src: '§2.1.1', en: 'Role, context, instruction, input data, constraints, output format.', ua: 'Хто? Де? Що? З чим? У яких межах? Як віддати?' },
  { id: 'g2-ctx', term: 'Context (prompt component)', sec: '2.1.1', src: '§2.1.1', en: 'Background information the GenAI model needs to determine the test conditions: details about the test object, the functionality to be tested, and relevant contextual information.', ua: 'Фон про систему — не плутати з input data (дані для обробки).' },
  { id: 'g2-con', term: 'Constraints (prompt component)', sec: '2.1.1', src: '§2.1.1', en: 'Restrictions or special considerations the LLM should adhere to; they specify how instructions should be applied to input data.', ua: '«Як можна/не можна» обробляти дані (напр. exclude cosmetic issues).' },
  { id: 'g2-out', term: 'Output format (prompt component)', sec: '2.1.1', src: '§2.1.1', en: 'Output specifications that denote the expected format, structure or characteristics of the response.', ua: 'Як віддати результат: таблиця, колонки, JSON, Gherkin.' },
  { id: 'g2-tds', term: 'Test data synthesis', sec: '2.2.2', src: '§2.2.2', en: 'GenAI can create representative, data privacy-preserving synthetic test data that resembles production data, covering extreme situations and varied test conditions.', ua: 'Синтетичні дані «як у проді», без чутливої інформації.' },
  { id: 'g2-heal', term: 'Self-healing and adaptive tests', sec: '2.2.3', src: '§2.2.3', en: 'GenAI can be used to automatically adjust test scripts to handle minor UI or API changes, preventing unnecessary failures from small modifications.', ua: 'Скрипти самі підлаштовуються під дрібні зміни UI/API.' },
  { id: 'g2-imp', term: 'Impact analysis (regression)', sec: '2.2.3', src: '§2.2.3', en: 'Analyzing code changes to identify high-risk areas, enabling targeted regression testing where it is most needed.', ua: 'Що зачепили зміни коду → цільовий регрес.' },
  { id: 'g2-kdt', term: 'Keyword-driven automation (with GenAI)', sec: '2.2.3', src: '§2.2.3', en: 'LLMs implement test scripts based on keyword-driven frameworks, where pre-defined keywords represent common test steps; GenAI maps keywords to test cases and generates scripts.', ua: 'Ключові слова = типові кроки; LLM генерує з них скрипти (few-shot).' },
  { id: 'g2-ctrl', term: 'Test control (GenAI support)', sec: '2.2.4', src: '§2.2.4', en: 'GenAI can assist with test control by providing insights for reprioritizing tests, adjusting test schedules, and reallocating resources as needed.', ua: 'Monitoring — бачу відхилення; control — коригую план, розклад, ресурси.' },
  { id: 'g2-nls', term: 'Natural language summary (test metrics)', sec: '2.2.4', src: '§2.2.4', en: 'GenAI can assist in the creation of dynamic dashboards and natural language summaries, ensuring that all stakeholders have access to the relevant metrics.', ua: 'Пояснення метрик звичайною мовою + наступні кроки для стейкхолдерів.' },
  { id: 'g2-sel', term: 'Choosing a prompting technique', sec: '2.2.5', src: '§2.2.5', en: 'Prompt chaining: complex tasks requiring precision with human verification at each step. Few-shot: repetitive or specific/constrained output format tasks. Meta prompting: flexible, dynamic tasks; crafting prompts for new tasks.', ua: 'Точність → ланцюг. Шаблон → приклади. Новизна → мета. Можна поєднувати.' },
  { id: 'g2-acc', term: 'Accuracy (GenAI metric)', sec: '2.3.1', src: '§2.3.1', en: 'Measures the overall correctness of the generated output against expert-written test cases, requirements, or other standards.', ua: 'Загальна правильність vs еталон. Приклад: покриття всіх вимог.' },
  { id: 'g2-prec', term: 'Precision (GenAI metric)', sec: '2.3.1', src: '§2.3.1', en: 'Evaluates the correctness of the generated output with respect to a specific objective.', ua: 'Правильність щодо конкретної цілі. Приклад: правильно знайдені аномалії.' },
  { id: 'g2-rec', term: 'Recall (GenAI metric)', sec: '2.3.1', src: '§2.3.1', en: 'Measures the ability of a model to identify all relevant instances within a dataset.', ua: 'Чи знайдено ВСЕ релевантне. Приклад: valid та invalid partitions.' },
  { id: 'g2-rel', term: 'Relevance and contextual fit', sec: '2.3.1', src: '§2.3.1', en: 'Determines whether the generated output is applicable and appropriate for a given context.', ua: 'Узгодженість з test basis і доменом.' },
  { id: 'g2-div', term: 'Diversity (GenAI metric)', sec: '2.3.1', src: '§2.3.1', en: 'Enables a wide range of inputs and scenarios to be covered, avoiding repetition.', ua: 'Різні поведінки користувачів, edge cases, без повторів.' },
  { id: 'g2-exe', term: 'Execution success rate', sec: '2.3.1', src: '§2.3.1', en: 'Measures the proportion of generated test artefacts that can be executed successfully as is in the test environment.', ua: 'Скільки скриптів запускаються одразу, без синтаксичних помилок.' },
  { id: 'g2-time', term: 'Time efficiency', sec: '2.3.1', src: '§2.3.1', en: 'Evaluates the time saved compared to manual test efforts.', ua: 'Час AI vs час людини на ту саму роботу.' },
  { id: 'g2-ab', term: 'A/B testing of prompts', sec: '2.3.2', src: '§2.3.2', en: 'Create multiple versions of prompts and evaluate which version produces better results based on predefined metrics.', ua: 'Порівняння версій промпту за метриками.' },
  { id: 'g2-oa', term: 'Output analysis', sec: '2.3.2', src: '§2.3.2', en: 'Examine AI-generated output for inaccuracies or inconsistencies, e.g. with respect to the test basis; understanding error types helps refine prompts.', ua: 'Розбір помилок у виводі → «чому?» → кращий промпт.' },
  { id: 'g2-lib', term: 'Prompt library', sec: '2.3.2', src: '§2.3.2', en: 'Shared collection of prompts across a test team or organization, supporting standardized techniques, consistent quality and a culture of learning.', ua: 'Спільна бібліотека перевірених промптів команди.' }
];
C2.flashcards = C2.glossary.map(g => ({ id: 'fc-' + g.id, term: g.term, sec: g.sec, en: g.en, ua: g.ua, kind: 'term' })).concat([
  { id: 'fc2-k1', kind: 'concept', sec: '2.2.5', term: 'Chaining vs Few-shot vs Meta: коли що?', en: 'Chaining: complex tasks requiring precision with human verification at each step. Few-shot: repetitive or specific/constrained output format tasks. Meta: flexible, dynamic tasks; crafting prompts for new tasks.', ua: 'Точність → ланцюг. Шаблон → приклади. Новизна → мета.' },
  { id: 'fc2-k2', kind: 'concept', sec: '2.2.1', term: '5 задач test analysis з GenAI', en: 'Identify defects in the test basis; generate test conditions; prioritize by risk; support coverage analysis; suggest test techniques.', ua: 'Д-У-Р-П-Т: дефект, умова, ризик, покриття, техніка.' },
  { id: 'fc2-k3', kind: 'concept', sec: '2.2.3', term: '5 активностей регресу з GenAI', en: 'Keyword-driven automation; impact analysis & test optimization; self-healing & adaptive tests; automated reporting & insights; enhanced defect reporting & RCA.', ua: 'Ключ — Вплив — Лікування — Звіт — Причина.' },
  { id: 'fc2-k4', kind: 'concept', sec: '2.2.4', term: 'Monitoring vs Control', en: 'Monitoring: metrics, trends, predict risks, alert deviations from plan. Control: reprioritize tests, adjust schedules, reallocate resources.', ua: 'Monitoring — бачу; Control — кермую.' },
  { id: 'fc2-k5', kind: 'concept', sec: '2.3.2', term: '5 технік покращення промптів', en: 'Iterative prompt modification; A/B testing; output analysis; integrate user feedback; adjust prompt length and specificity.', ua: '«Чому?» → output analysis; «Яка краща?» → A/B; «Чи зручно?» → feedback.' }
]);

// ---- review adjustments: recall drills in K3 sections are K2 (1 point); q225-8 belongs to LO 2.1.2
['q221-1','q221-7','c222-2','q222-1','q222-2','q222-3','q222-4','q222-7','q222-8','q223-1','q223-2','q223-3','q223-4','q223-8','q224-1','q224-3','q224-6','q224-7','q225-1','q225-2','q225-6','q225-7','c221-1','c223-1','c224-1','q221-2','q221-3','q221-4','q224-2'].forEach(id => {
  const all = Object.values(C2.quizzes).flat().concat(...Object.values(C2.slides).map(a => a.filter(x => x.type === 'q').map(x => x.q)));
  const q = all.find(z => z.id === id); if (q) { q.k = 'K2'; q.drill = true; }
});
(function () { const i = C2.quizzes['2.2.5'].findIndex(q => q.id === 'q225-8'); if (i >= 0) { const q = C2.quizzes['2.2.5'].splice(i, 1)[0]; q.lo = 'GenAI-2.1.2'; q.k = 'K2'; C2.quizzes['2.1.2'].push(q); } })();
