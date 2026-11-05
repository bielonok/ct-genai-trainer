// ===================== FINAL TEST (20) =====================
C1.final = [
  Q('f01', '1.1.1', 'symbolic', 'A fare-calculation component encodes expert knowledge as explicit IF-THEN rules (e.g., "IF passenger age < 6 THEN fare = 0"). No training data is used. Which AI type does this represent?', [
    ['Symbolic AI', 1, 'Rule-based system, symbols and logical rules, без навчання на даних.'],
    ['Classical machine learning', 0, 'Немає data preparation / training.'],
    ['Deep learning', 0, 'Немає neural networks.'],
    ['Generative AI', 0, 'Новий контент не генерується.']
  ]),
  Q('f02', '1.1.1', 'deep', 'A model learns to recognize broken layouts directly from thousands of raw screenshots without engineers defining which visual attributes matter. Which AI type is this MOST likely?', [
    ['Symbolic AI', 0, 'Ніхто не писав правил — модель навчилась на даних.'],
    ['Classical machine learning', 0, 'Features не визначались вручну.'],
    ['Deep learning', 1, 'Neural networks automatically learn features з complex data (images).'],
    ['Generative AI', 0, 'Модель розпізнає (класифікує) зображення, а не створює новий контент.']
  ]),
  Q('f03', '1.1.2', 'token', 'Before an LLM can process a user story, what happens FIRST to the input text?', [
    ['It is converted into embeddings by a vision-language model', 0, 'VLM потрібні для зображень; текст спершу токенізується.'],
    ['It is tokenized into smaller units', 1, '«It first tokenizes the input so that each token can be understood individually».'],
    ['It is stored in a vector database', 0, 'Не обов’язковий крок; глава 4.'],
    ['It is checked for correctness against the test basis', 0, 'Модель цього не робить.']
  ]),
  Q('f04', '1.1.2', 'emb', 'Why can an LLM recognize that "sign in" and "log in" have a similar meaning?', [
    ['Because the tokenizer always produces identical tokens for synonyms', 0, 'Tokenization розбиває текст, синоніми мають різні токени; близькість дають embeddings.'],
    ['Because their embeddings are positioned close together in a high-dimensional space', 1, 'Tokens with similar meanings have embeddings positioned closely together.'],
    ['Because of symbolic synonym rules written by testers', 0, 'Symbolic AI.'],
    ['Because the context window is large enough to contain both phrases', 0, 'Розмір вікна не визначає схожість значень.']
  ]),
  Q('f05', '1.1.2', 'ctx', 'A tester removes repeated stack traces from a large test log before sending it to an LLM, and the analysis now covers the whole log. Which explanation BEST fits the syllabus?', [
    ['The token count dropped, so the relevant content fits in the context window', 1, 'Context window вимірюється в токенах; менше токенів — більше релевантного тексту вміщується (1.1.2, HO-1.1.2).'],
    ['The shorter text changed the hyperparameters, so the output became deterministic', 0, 'Довжина вводу не змінює hyperparameters; non-determinism лишається.'],
    ['Shorter inputs are tokenized into whole words instead of sub-words', 0, 'Розмір токенів не залежить від довжини тексту.'],
    ['The model retrained itself on the cleaned log before answering', 0, 'Під час inference модель не довчається — вона передбачає наступний токен.']
  ]),
  Q('f06', '1.1.2', 'nondet', 'Which TWO statements about LLM behavior are CORRECT?', [
    ['The same input can lead to different outputs across runs', 1, 'Non-deterministic behavior (1.1.2).'],
    ['A larger context window increases computational complexity and processing time', 1, 'Дослівно з 1.1.2.'],
    ['Embeddings place tokens with similar meanings far apart', 0, 'Навпаки — схожі токени розташовані поруч.'],
    ['Tokens are always whole words', 0, 'Від символу до слова чи частини слова.'],
    ['Inference means retraining the model on new data', 0, 'Inference — передбачення наступного токена.']
  ], { multi: 2 }),
  Q('f07', '1.1.2', 'slm', 'A team needs a compact model for a narrow task: classifying defect report text on a resource-limited local server. Which option BEST fits the syllabus?', [
    ['A small language model, as it has fewer parameters and is focused', 1, 'SLM — compact, fewer parameters, lightweight and focused (1.1.2).'],
    ['A reasoning LLM, as narrow tasks require chain-of-thought reasoning', 0, 'Вузька класифікація — не high-cognitive-load задача.'],
    ['A symbolic AI system, as local servers cannot run neural networks', 0, 'Твердження вигадане; symbolic AI — rule-based, не мовна модель.'],
    ['A foundation LLM, as it needs no adaptation for specific tasks', 0, 'Foundation LLMs typically require further adaptation (1.1.3).']
  ]),
  Q('f08', '1.2.2', 'pe', 'A team integrates an LLM into its CI pipeline via API and assumes that, because the integration is automated, prompt design no longer matters. Which statement from the syllabus contradicts this assumption?', [
    ['LLM-powered applications are accessible to non-technical stakeholders', 0, 'Це про чатботи, і не стосується промптів.'],
    ['Strong prompt engineering is needed regardless of interaction model', 1, '1.2.2: regardless of how the tester interacts with LLMs.'],
    ['Chatbots allow prompt chaining', 0, 'Правда, але не спростовує хибне припущення.'],
    ['LLM-powered applications offer greater scalability', 0, 'Правда, але не про промпти.']
  ]),
  Q('f09', '1.1.3', 'foundation', 'A tester sends "List five test cases for the login page" to a foundation LLM that was not further adapted, and the model just continues the text instead of answering. Which explanation BEST fits?', [
    ['It is general-purpose and typically needs further adaptation for tasks', 1, 'Foundation LLMs typically require further adaptation; instruction following з’являється після instruction tuning (1.1.3).'],
    ['The prompt exceeded the context window, so the request was dropped', 0, 'Короткий промпт не перевищує вікно.'],
    ['Foundation LLMs cannot process natural language input at all', 0, 'Можуть — силабус згадує NLP серед доменів foundation models.'],
    ['The model needs reasoning training before it can produce any lists', 0, 'Reasoning — для high-cognitive-load задач, не для простого списку.']
  ]),
  Q('f10', '1.1.3', 'reasoning', 'Which task is MOST suited to a reasoning LLM rather than an instruction-tuned LLM?', [
    ['Reformatting 200 test cases into a fixed CSV template', 0, 'Instruction following.'],
    ['Translating a test report into Spanish, keeping its structure', 0, 'Не вимагає багатокрокових міркувань.'],
    ['Inferring likely root causes from failures across several releases', 1, 'Multi-step problem-solving і синтез — high-cognitive-load.'],
    ['Producing test cases for user stories in Gherkin syntax', 0, 'Instruction-tuned (див. Sample Q4 v).']
  ]),
  Q('f11', '1.1.3', 'instruct', 'A team replaces a foundation LLM with an instruction-tuned LLM because the foundation model kept ignoring the requested output format. Which property justifies this choice?', [
    ['It processes images, sound and video', 0, 'Це multimodal LLMs (1.1.4).'],
    ['It is tuned for task adherence and instruction following', 1, 'Instruction tuning optimizes for task adherence, instruction following, response coherence (1.1.3).'],
    ['It uses fewer parameters than the foundation model', 0, 'Це характеристика SLM, не instruction tuning.'],
    ['It adds chain-of-thought reasoning for multi-step problems', 0, 'Це reasoning LLMs.']
  ]),
  Q('f12', '1.1.4', 'vlm', 'A tester uploads a screenshot of a booking page and asks the model: "Is the Pay button disabled?" Which vision-language model task does this illustrate?', [
    ['Image captioning', 0, 'Captioning — опис зображення, а не відповідь на конкретне питання.'],
    ['Visual question answering', 1, 'Питання до зображення — visual question answering (1.1.4).'],
    ['Speech recognition', 0, 'Аудіо — не visual + textual.'],
    ['Test oracle generation', 0, 'Expected results не генеруються; модель відповідає на питання про зображення.']
  ]),
  Q('f13', '1.1.4', 'mmtest', 'A tester uploads a GUI wireframe and the related user story to a multimodal LLM and asks for test cases. What is the expected benefit according to the syllabus?', [
    ['Test cases using text and visual cues, increasing coverage', 1, '1.1.4.'],
    ['Fully automated execution of the generated UI tests', 0, 'Виконання тестів не описано як перевага multimodal LLMs.'],
    ['Guaranteed absence of visual defects', 0, 'Абсолют «guaranteed» — LLM не дає гарантій, plausible ≠ correct.'],
    ['Elimination of the need to review the generated test cases', 0, 'Plausible ≠ correct.']
  ]),
  Q('f14', '1.1.4', 'mmtok', 'A tester attaches a GUI screenshot and a user story to one prompt. Which statement BEST describes how a multimodal LLM handles the two inputs?', [
    ['Text is tokenized, the image becomes embeddings via a VLM, then the transformer processes both', 1, 'Tokenization adapted for each data type; images → embeddings via VLM before transformer (1.1.4).'],
    ['The image is tokenized with the text tokenizer, and the text is rendered as an image', 0, 'Той самий токенізатор до зображень не застосовується.'],
    ['The image goes to a separate rule-based engine; only the text reaches the transformer', 0, 'Rule-based — symbolic AI; зображення обробляє модель.'],
    ['Both inputs are stored in a vector database, and the transformer reads only the index', 0, 'Vector DB не є кроком обробки multimodal LLM у 1.1.4.']
  ]),
  Q('f15', '1.2.1', 'req', 'Which TWO are examples of key LLM capabilities for test tasks?', [
    ['Suggesting test objectives based on user stories', 1, 'Test case creation support.'],
    ['Generating meaningful questions to clarify requirements with stakeholders', 1, 'Requirements analysis and improvement.'],
    ['Taking the final decision to release the software', 0, 'Не capability LLM.'],
    ['Executing every regression test unattended', 0, 'Не key capability (Sample Q6 c).'],
    ['Replacing exploratory testers', 0, 'Не key capability (Sample Q6 d).']
  ], { multi: 2 }),
  Q('f16', '1.2.1', 'auto', 'An LLM reviews an existing UI test script and suggests replacing hard-coded waits and applying a more suitable test technique. Which capability is this?', [
    ['Test oracle generation', 0, 'Expected results не генеруються.'],
    ['Test automation support', 1, 'Improve existing test scripts by suggesting changes and identifying appropriate test techniques.'],
    ['Testware creation', 0, 'Документи не створюються.'],
    ['Test result analysis', 0, 'Результатів тестування тут немає — аналізується скрипт.']
  ]),
  Q('f17', '1.2.1', 'tcoracle', 'For each generated API test case, the LLM also proposes the expected status code and response body. Which capability does this illustrate?', [
    ['Test data generation', 0, 'Тут — очікувані результати, а не вхідні дані.'],
    ['Test oracle generation', 1, 'LLMs can help generate expected results.'],
    ['Test result analysis', 0, 'Результатів виконання ще немає.'],
    ['Test automation support', 0, 'Скрипт не генерується і не покращується; йдеться про expected results.']
  ]),
  Q('f18', '1.2.1', 'auto', 'After a nightly run, an LLM groups 25 failures and labels each with a proposed severity and priority. Which capability is this?', [
    ['Test result analysis', 1, 'Summaries + classifying anomalies based on severity and priority.'],
    ['Test case creation support', 0, 'Нових тест-кейсів не створюється — аналізуються результати прогону.'],
    ['Testware creation', 0, 'Близько, але класифікація аномалій за severity/priority — саме test result analysis.'],
    ['Test oracle generation', 0, 'Expected results не генеруються.']
  ]),
  Q('f19', '1.2.2', 'cmp', 'Which statement BEST compares AI chatbots and LLM-powered testing applications?', [
    ['Chatbots embed LLMs into test tools via APIs; applications offer a conversational interface', 0, 'Сторони переплутані.'],
    ['Chatbots offer a conversational interface; applications embed LLMs into test tools via APIs', 1, '1.2.2: conversational interface vs integration via APIs.'],
    ['Both offer the same functionality and integration and need no prompt engineering', 0, 'Різняться функціональністю й інтеграцією; prompt engineering потрібен.'],
    ['Applications target non-technical stakeholders; chatbots target tool vendors', 0, 'Навпаки: доступність для non-technical — перевага чатботів.']
  ]),
  Q('f20', '1.2.2', 'apps', 'A company wants defect analysis and test data synthesis to run automatically for hundreds of projects and to be customized to its test framework. Which approach fits BEST?', [
    ['Each tester uses a public AI chatbot individually', 0, 'Немає інтеграції та масштабування.'],
    ['An LLM-powered testing application integrated via APIs', 1, 'Customization + scalability + automation.'],
    ['A symbolic rule engine', 0, 'Rule engine — не GenAI і не генерує дефект-аналіз чи синтетичні дані.'],
    ['A reasoning LLM used through a chatbot by one test lead', 0, 'Тип моделі не вирішує задачу інтеграції та масштабування; потрібна LLM-powered application.']
  ])
];

// ===================== OFFICIAL SAMPLE EXAM A v1.1 (Q1–Q7) =====================
function SQ(num, sec, slide, q, opts, official, ua, multi) {
  return Object.assign(Q('s' + num, sec, slide, q, opts, { fixed: true, num, official, ua }), multi ? { multi } : {});
}
C1.sample = [
  SQ(1, '1.1.1', 'ai-map', 'Match each type of AI technology (1-4) with its CORRECT description (A-D):<div class="pre">1. Symbolic AI\n2. Classical machine learning\n3. Deep learning\n4. Generative AI\n\nA. Uses neural networks to automatically learn features from data.\nB. Uses rule-based systems to mimic human decision-making.\nC. Uses deep learning to create new data by learning from its training data.\nD. Uses a data-driven approach that requires feature selection.</div>Select ONE option.', [
    ['1D, 2B, 3A, 4C', 0], ['1D, 2C, 3B, 4A', 0], ['1C, 2B, 3D, 4A', 0], ['1B, 2D, 3A, 4C', 1]],
    'Symbolic AI uses a rule-based system to mimic human decision-making, representing knowledge using symbols and logical rules (1B). Classical machine learning uses a data-driven approach that requires data preparation, feature selection and model training (2D). Deep learning uses neural networks (machine learning structures) to automatically learn features from data (3A). Generative AI uses deep learning techniques to create new data by learning and mimicking patterns from its training data (4C). Thus: d) is correct.',
    'Ключові слова-якорі: <b>rule-based → Symbolic</b>, <b>feature selection → Classical ML</b>, <b>neural networks / automatically learn features → Deep learning</b>, <b>create new data → GenAI</b>. Лайфхак для matching-питань: знайдіть одну пару, в якій впевнені на 100% (1B — rule-based), і відкиньте варіанти без неї: 1B є лише у варіанті d). Потім швидко перевірте решту пар d) — усі сходяться.'),
  SQ(2, '1.1.2', 'ctx', 'Consider the realm of Large Language Models (LLMs). Which of the following options BEST explains why context window limitations affect LLM\'s text processing capabilities?', [
    ['Because context windows restrict temporal processing sequences, preventing LLMs from maintaining chronological consistency across extended text analysis.', 0, 'Not correct because context windows do not control temporal sequencing but limit the scope of text that can be simultaneously considered.'],
    ['Because context windows prevent cross-referencing capabilities, limiting LLMs’ ability to connect information across different document sources simultaneously.', 0, 'Not correct because context windows affect scope within the current input, not cross-document referencing capabilities.'],
    ['Because context windows force LLMs to discard earlier information, which may contain relevant details needed for understanding later content.', 1, 'Correct. When text exceeds the context window size, the model cannot simultaneously consider all parts of the document. As the model processes new tokens, it must effectively “forget” or discard tokens that fall outside its context window boundary.'],
    ['Because context windows constrain parsing granularity levels, restricting LLMs from adjusting between character-level and document-level analysis approaches.', 0, 'Not correct because context windows do not determine parsing approaches but limit the amount of text that can be processed simultaneously.']],
    '',
    'Дистрактори a), b), d) звучать «розумно» через складні терміни (temporal processing, cross-referencing, parsing granularity), але не мають стосунку до визначення. Context window = <b>скільки токенів модель бачить одночасно</b>; те, що за межами, «забувається». Порада: на ISTQB-іспиті найпростіший варіант, що прямо випливає з визначення, часто і є правильним.'),
  SQ(3, '1.1.2', 'token', 'Which of the following statements BEST describes tokenization in processing text for LLMs?', [
    ['Tokenization converts tokens into high-dimensional vectors to capture their meaning.', 0, 'Not correct. This describes embeddings, not tokenization.'],
    ['Tokenization creates the building blocks used to understand and generate text.', 1, 'Correct. Tokenization involves splitting text into smaller units (tokens) that represent the building blocks of natural language generation tasks and enable LLMs to understand and generate text. See also the definition of “Tokenization” in Appendix D.'],
    ['Tokenization generates contextually appropriate responses using neural networks.', 0, 'Not correct. This describes the general function of LLMs, not tokenization.'],
    ['Tokenization predicts the next token in a sequence based on learned relationships.', 0, 'Not correct. This refers to how LLMs generate text, not tokenization.']],
    '',
    'Класичне питання на розрізнення етапів конвеєра: <b>tokenization</b> (розбити) → <b>embeddings</b> (вектори) → <b>transformer / inference</b> (генерувати, передбачати next token). Кожен дистрактор описує сусідній етап. «Building blocks» = цеглинки LEGO.'),
  SQ(4, '1.1.3', 'choose', 'In the context of software testing, which of the following statements (i-v) about foundation, instruction-tuned, and reasoning LLMs are CORRECT?<div class="pre">i.   Foundation LLMs excel at generating test cases from high-level requirements without structured input.\nii.  Reasoning LLMs excel at creating test scripts that strictly follow predefined organizational templates.\niii. Instruction-tuned LLMs excel at autonomously prioritizing test execution based on real-time user feedback.\niv.  Reasoning LLMs excel at synthesizing data from defect reports to detect trends and prioritize test efforts.\nv.   Instruction-tuned LLMs excel at generating test cases that adhere to Gherkin language syntax.</div>Select ONE option.', [
    ['i, ii, and iii', 0], ['ii, iii, and iv', 0], ['i, ii, and v', 0], ['iv, and v', 1]],
    'i. Not correct. While foundation LLMs can generate test cases, they do not inherently “excel” at this task without structured input. ii. Not correct. Creating template-based test scripts requires executing explicit instructions, which is the role of instruction-tuned LLMs, not reasoning LLMs. iii. Not correct. Instruction-tuned LLMs are designed to follow structured prompts, not make autonomous decisions; prioritizing tests based on feedback requires reasoning. iv. Correct. Reasoning LLMs are designed for synthesizing multiple data sources and performing logical inference, problem-solving, and decision-making. v. Correct. Instruction-tuned LLMs are specifically trained to follow instructions, including adhering to requested formats, styles, and syntax rules (e.g., Gherkin). Thus: d) is correct.',
    'Головна думка: <b>формат/шаблон/синтаксис → instruction-tuned</b>; <b>синтез, тренди, пріоритизація → reasoning</b>; <b>foundation без структурованого входу не «excel»</b>. У твердженнях ii і iii сторони навмисно переплутані. Стратегія для i–v: оцініть кожне твердження окремо і лише потім шукайте комбінацію.'),
  SQ(5, '1.1.4', 'vlm', 'Which of the following statements BEST describes the relation between multimodal LLMs and vision-language models?', [
    ['Multimodal LLMs are a subset of vision-language models designed to handle diverse inputs.', 0, 'Not correct. Vision-language models are a subset of multimodal LLMs, not the reverse.'],
    ['Vision-language models are a subset of multimodal LLMs focusing on visual and textual data.', 1, 'Correct. Vision-language models specifically integrate visual and textual data, making them a subset of multimodal LLMs.'],
    ['Vision-language models are unrelated to multimodal LLMs and focus only on the user interface.', 0, 'Not correct. Vision-language models are closely related to multimodal LLMs and focus on both visual and textual data.'],
    ['Multimodal LLMs and vision-language models are interchangeable terms.', 0, 'Not correct. Multimodal LLMs and vision-language models have distinct scopes and are not interchangeable.']],
    '',
    'Запам\'ятайте напрям: <b>VLM ⊂ Multimodal</b> («усі смартфони — телефони, але не навпаки»). Варіант a) — той самий зв’язок, але перевернутий; це улюблений прийом ISTQB.'),
  SQ(6, '1.2.1', 'caps', 'Which TWO of the following options represent key capabilities of LLMs in test tasks?', [
    ['Identifying ambiguities and inconsistencies in requirements.', 1, 'Correct. LLMs can analyze and clarify requirements by identifying ambiguities and inconsistencies.'],
    ['Generating complete application code for deployment.', 0, 'Not correct. Generating complete application code is not a key capability of LLMs in test tasks.'],
    ['Automating the execution of all test scripts without human intervention.', 0, 'Not correct. LLMs can support test automation by suggesting improvements to test scripts and identifying design patterns but do not directly execute test scripts or fully automate test scripts without human oversight.'],
    ['Performing exploratory testing on software applications.', 0, 'Not correct. LLMs cannot perform manual exploratory testing because it is an intuitive and adaptive process that requires human creativity, experience, and decision-making.'],
    ['Creating diverse test data with various combinations and boundary values.', 1, 'Correct. LLMs can generate diverse test data, including combinations and boundaries.']],
    '',
    'Звіряйтеся з <b>R-COD-ART</b>: a) — Requirements, e) — Data. Неправильні варіанти містять «complete», «all… without human intervention» або описують людську діяльність (exploratory testing). Абсолюти — червоний прапорець.', 2),
  SQ(7, '1.2.2', 'cmp', 'Which of the following statements BEST explains the difference between AI chatbots and LLM-powered testing applications in the context of software testing?', [
    ['AI chatbots are more suited for specific test tasks, while LLM-powered testing applications focus on ad hoc interactions.', 0, 'Not correct. AI chatbots are best suited for ad hoc interactions, not specific test tasks.'],
    ['Both AI chatbots and LLM-powered testing applications are designed to perform identical tasks without any configuration differences.', 0, 'Not correct. AI chatbots and LLM-powered testing applications have distinct purposes and are not identical in functionality or configurability.'],
    ['LLM-powered testing applications rely on conversational prompts, while AI chatbots require integration into test tools and test processes.', 0, 'Not correct. LLM-powered testing applications focus on integration into test processes, not conversational prompts. AI chatbots do not require integration into test tools and processes because their primary function is to facilitate ad hoc interactions.'],
    ['AI chatbots offer conversational interfaces for ad hoc test tasks, while LLM-powered testing applications provide customized solutions for specific test tasks.', 1, 'Correct. AI chatbots provide conversational interfaces for ad hoc tasks, while LLM-powered testing applications deliver customized solutions for specific needs.']],
    '',
    'Варіанти a) і c) — «дзеркальні» (сторони поміняні місцями), b) — абсолют «identical». Тримайте в голові пару: <b>Chat ↔ ad hoc, conversational</b>; <b>App ↔ specific, customized, API-integrated</b>.')
];

// ===================== GLOSSARY =====================
const AD = 'Appendix D';
C1.glossary = [
  { id: 'g-ai', term: 'Artificial Intelligence (AI)', sec: '1.1.1', src: '§1.1.1', en: 'A broad field that encompasses different types of technologies, each with its own unique way of solving problems.', ua: '«Парасолька» над symbolic AI, classical ML, deep learning і GenAI.' },
  { id: 'g-sym', term: 'Symbolic AI', sec: '1.1.1', src: AD, en: 'An AI approach that uses symbols, rules, and structured knowledge to model reasoning.', ua: 'Правила «якщо — то», записані людиною; не навчається на даних.' },
  { id: 'g-ml', term: 'Machine learning (ML)', sec: '1.1.1', src: AD, en: 'The process using computational techniques to enable systems to learn from data or experience (ISO/IEC TR 29119-11).', ua: 'Системи вчаться на даних, а не на явно записаних правилах.' },
  { id: 'g-cml', term: 'Classical machine learning', sec: '1.1.1', src: '§1.1.1', en: 'A data-driven approach that requires data preparation, feature selection and model training; used e.g. for defect categorization and predicting software problems.', ua: 'ML з ручним вибором ознак (features): підготувати дані → обрати ознаки → натренувати.' },
  { id: 'g-feat', term: 'Feature', sec: '1.1.1', src: AD, en: 'An individual measurable attribute of the input data used for training by an ML algorithm and for prediction by an ML model.', ua: 'Вимірювана ознака даних, напр. «кількість змінених рядків у коміті».' },
  { id: 'g-dl', term: 'Deep learning', sec: '1.1.1', src: AD, en: 'ML using neural networks with multiple layers.', ua: 'Нейромережі самі знаходять ознаки у великих складних даних (зображення, текст, аудіо).' },
  { id: 'g-genai', term: 'Generative AI (GenAI)', sec: '1.1.1', src: AD, en: 'A type of artificial intelligence system that uses machine learning models to generate (new) intellectual content that resembles human-created content.', ua: 'AI, що створює новий контент: текст, код, зображення.' },
  { id: 'g-llm', term: 'Large language model (LLM)', sec: '1.1.2', src: AD, en: 'A computer program that uses very large collections of language data in order to understand and produce text in a way that is similar to the way humans do.', ua: 'GenAI-модель для тексту, попередньо навчена на величезних текстових даних.' },
  { id: 'g-gpt', term: 'Generative pre-trained transformer (GPT)', sec: '1.1.2', src: AD, en: 'A type of transformer-based deep learning model pre-trained on vast amounts of text data to understand and generate human-like text.', ua: 'G — генерує, P — навчена заздалегідь, T — transformer. Основа LLM.' },
  { id: 'g-slm', term: 'Small language model (SLM)', sec: '1.1.2', src: AD, en: 'Language models that are intentionally designed and trained to be small, offering a balance between efficiency and task-specific language understanding.', ua: 'Компактна модель з меншою кількістю параметрів — легка і сфокусована.' },
  { id: 'g-tok', term: 'Tokenization', sec: '1.1.2', src: AD, en: 'The process of breaking down text into smaller units for processing by language models.', ua: 'Розрізання тексту на токени (символ / частина слова / слово).' },
  { id: 'g-emb', term: 'Embedding', sec: '1.1.2', src: AD, en: 'A technique used to represent tokens as dense vectors in a continuous space, learned during training to capture semantic, syntactic, and contextual relationships.', ua: 'Токен як вектор чисел; схожі за змістом токени — поруч.' },
  { id: 'g-tr', term: 'Transformer', sec: '1.1.2', src: AD, en: 'A deep learning model architecture that utilizes self-attention mechanisms to capture long-range dependencies in input sequences.', ua: 'Архітектура нейромережі LLM: бачить зв’язки між токенами навіть на великій відстані.' },
  { id: 'g-inf', term: 'Inference (next-token prediction)', sec: '1.1.2', src: '§1.1.2', en: 'During inference, LLMs predict the next token in a sequence, leveraging learned relationships to generate coherent and contextually appropriate text.', ua: 'Робота моделі під час відповіді: вгадати наступний токен, додати, повторити.' },
  { id: 'g-nd', term: 'Non-deterministic behavior', sec: '1.1.2', src: '§1.1.2', en: 'LLMs exhibit non-deterministic behavior primarily due to the probabilistic nature of their inference mechanisms and hyperparameter settings, leading to variations in outputs even for the same input.', ua: 'Однаковий промпт → різні відповіді. Причини: імовірнісний inference + hyperparameters.' },
  { id: 'g-ctx', term: 'Context window', sec: '1.1.2', src: AD, en: 'The span of text, measured in tokens, that a language model considers when generating responses, influencing the relevance and coherence of its outputs.', ua: '«Робоча пам’ять» моделі в токенах. Більше вікно — більше контексту, але більше часу й обчислень.' },
  { id: 'g-fl', term: 'Foundation LLM (Base LLM)', sec: '1.1.3', src: AD, en: 'General-purpose models pre-trained on a wide range of text data, capable of predicting the next word based on learned linguistic patterns. Synonym: Base LLM.', ua: 'Універсальна модель-«ерудит»; для конкретних задач потребує адаптації.' },
  { id: 'g-it', term: 'Instruction-tuned LLM', sec: '1.1.3', src: AD, en: 'A foundation LLM trained to follow instructions, often reinforced by feedback to encourage correct answers.', ua: 'Дотренована на парах «промпт → відповідь»; тримає формат і інструкції. Інша назва — non-reasoning.' },
  { id: 'g-rl', term: 'Reasoning LLM', sec: '1.1.3', src: AD, en: 'An LLM building upon instruction-tuned models by refining their ability to emulate human-like reasoning processes.', ua: 'Міркує кроками (chain-of-thought); для складних аналітичних задач.' },
  { id: 'g-ft', term: 'Fine-tuning', sec: '1.1.3', src: AD + ' (детально — гл. 4)', en: 'A supervised learning process using a dataset of labeled examples to update LLM weights and adapt them for specific tasks or domains.', ua: 'Дотренування моделі на розмічених прикладах під конкретну задачу. Так з foundation отримують instruction-tuned.' },
  { id: 'g-mm', term: 'Multimodal model', sec: '1.1.4', src: AD, en: 'GenAI models that are capable of processing and generating content across multiple data types, such as text, images, and audio.', ua: 'Модель, що працює з кількома типами даних: текст, зображення, звук, відео.' },
  { id: 'g-vlm', term: 'Vision-language model (VLM)', sec: '1.1.4', src: AD, en: 'A GenAI system that jointly processes visual and textual data to perform tasks by linking and generating content across both modalities.', ua: 'Підмножина multimodal: картинка + текст (captioning, visual Q&A, consistency).' },
  { id: 'g-oracle', term: 'Test oracle generation', sec: '1.2.1', src: '§1.2.1', en: 'LLMs can help generate expected results.', ua: 'LLM пропонує очікувані результати для тест-кейсів. Перевіряйте їх за test basis.' },
  { id: 'g-caps', term: 'Key LLM capabilities for test tasks', sec: '1.2.1', src: '§1.2.1', en: 'Requirements analysis and improvement; test case creation support; test oracle generation; test data generation; test automation support; test result analysis; testware creation.', ua: 'Мнемоніка R-COD-ART: Requirements, Cases, Oracle, Data, Automation, Results, Testware.' },
  { id: 'g-chat', term: 'AI chatbot', sec: '1.2.2', src: AD, en: 'A conversational agent that uses LLMs to process queries and generate human-like text responses, enabling interactive communication with users.', ua: 'Чат-інтерфейс до LLM: швидкі ad hoc задачі, онбординг, уточнення концептів.' },
  { id: 'g-app', term: 'LLM-powered testing application', sec: '1.2.2', src: '§1.2.2', en: 'Applications that integrate LLM capabilities via APIs to perform well-defined and often automated testing tasks, offering greater customization and scalability.', ua: 'LLM, вбудована в тестові інструменти через API для конкретних повторюваних задач.' },
  { id: 'g-pc', term: 'Prompt chaining', sec: '1.2.2', src: AD, en: 'A prompting technique that involves using the output of one prompt as the input for another, creating a sequence of prompts.', ua: 'Ланцюжок промптів: результат одного — вхід наступного. Дозволяє ітеративно уточнювати відповідь.' },
  { id: 'g-agent', term: 'LLM-powered agent', sec: '1.2.2', src: AD + ' (детально — гл. 4)', en: 'An application that integrates LLM reasoning, decision-making, and memory, using tools to perform tasks.', ua: 'Просунута LLM-апка, що сама використовує інструменти для виконання тестових ролей.' },
  { id: 'g-prompt', term: 'Prompt', sec: '1.2.2', src: AD, en: 'A natural language input provided to elicit specific response in Generative AI and large language models.', ua: 'Запит природною мовою до моделі.' },
  { id: 'g-pe', term: 'Prompt engineering', sec: '1.2.2', src: AD + ' (детально — гл. 2)', en: 'The process of designing and refining input prompts to guide LLMs toward producing desired outputs.', ua: 'Мистецтво складати промпти; потрібне і для чатботів, і для LLM-апок.' }
];

// flashcards: all glossary terms + concept cards
C1.flashcards = C1.glossary.map(g => ({ id: 'fc-' + g.id, term: g.term, sec: g.sec, en: g.en, ua: g.ua, kind: 'term' })).concat([
  { id: 'fc-k1', kind: 'concept', sec: '1.1.1', term: 'AI spectrum: 4 types', en: 'Symbolic AI · Classical machine learning · Deep learning · Generative AI', ua: '«Сам Мудро Глибоко Генерує». GenAI ⊂ DL ⊂ ML; symbolic AI — окремо (правила, не дані).' },
  { id: 'fc-k2', kind: 'concept', sec: '1.1.1', term: 'Key advantage of GenAI for testing', en: 'Pre-trained models can be applied directly to test tasks without the need for an additional training phase (with some risks, see 3.1).', ua: 'Готова модель → одразу промпт, без власного навчання. Але ризики є.' },
  { id: 'fc-k3', kind: 'concept', sec: '1.1.2', term: 'Plausible vs correct', en: 'The transformer model can generate statistically plausible text… But plausible is not necessarily correct.', ua: '«Звучить ≠ Є». Будь-який результат LLM перевіряємо.' },
  { id: 'fc-k4', kind: 'concept', sec: '1.1.3', term: 'Which LLM type for which task?', en: 'Selection depends on the complexity and reasoning demands of the specific testing task.', ua: 'Формат/шаблон → instruction-tuned; синтез, тренди, пріоритизація → reasoning.' },
  { id: 'fc-k5', kind: 'concept', sec: '1.2.2', term: 'Chatbot vs LLM-powered app', en: 'AI chatbots offer conversational interfaces for ad hoc test tasks; LLM-powered testing applications provide customized solutions for specific test tasks.', ua: 'Chat ↔ ad hoc; App ↔ API, specific, customization, scalability.' }
]);
