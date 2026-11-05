// ===================== QUIZZES =====================
C1.quizzes['1.1.1'] = [
  Q('q111-1', '1.1.1', 'symbolic', 'Which type of AI represents knowledge using symbols and logical rules to mimic human decision-making?', [
    ['Classical machine learning', 0, 'Classical ML — data-driven, з feature selection і training.'],
    ['Symbolic AI', 1, 'Визначення symbolic AI з 1.1.1: rule-based system, symbols and logical rules.'],
    ['Deep learning', 0, 'Deep learning — neural networks, що вчаться на даних.'],
    ['Generative AI', 0, 'GenAI створює новий контент, вивчаючи патерни з training data.']
  ]),
  Q('q111-2', '1.1.1', 'classical', 'Which activities are explicitly required by classical machine learning according to the syllabus?', [
    ['Prompt design, prompt chaining and output review', 0, 'Це про роботу з LLM (глава 2), не classical ML.'],
    ['Rule definition, symbol mapping and logical inference', 0, 'Це symbolic AI.'],
    ['Data preparation, feature selection and model training', 1, 'Саме ці три кроки названо для classical ML.'],
    ['Pre-training on books, articles and websites', 0, 'Це про LLM (1.1.2).']
  ]),
  Q('q111-3', '1.1.1', 'deep', 'What distinguishes deep learning from classical machine learning?', [
    ['Deep learning uses neural networks that learn features automatically', 1, 'Ключова відмінність: features вивчаються автоматично, без ручного визначення.'],
    ['Deep learning works only with structured tabular data', 0, 'Навпаки: DL знаходить патерни у very large and complex datasets — images, video, audio, text.'],
    ['Deep learning requires manual feature selection before training', 0, 'Ручний вибір features — ознака classical ML.'],
    ['Deep learning cannot process images, video or audio', 0, 'Навпаки: DL працює саме з images, video, audio, text (1.1.1).']
  ]),
  Q('q111-4', '1.1.1', 'deep', 'Which statement about human involvement in deep learning is CORRECT according to the syllabus?', [
    ['Deep learning completely removes the need for human involvement', 0, 'Абсолют; силабус: may still require human involvement.'],
    ['Humans must manually define all features before training', 0, 'Це classical ML; DL вчить features автоматично.'],
    ['Humans may still be involved in data annotation, model tuning or result validation', 1, 'Дослівно з 1.1.1.'],
    ['Humans are only needed to write the logical rules', 0, 'Логічні правила — symbolic AI.']
  ]),
  Q('q111-5', '1.1.1', 'genai', 'Generative AI is BEST described as:', [
    ['AI that uses deep learning to create new text, images or code', 1, 'Визначення з 1.1.1.'],
    ['AI that applies predefined IF-THEN rules written by experts', 0, 'Symbolic AI.'],
    ['A data-driven approach that requires manual feature selection', 0, 'Classical ML.'],
    ['A technique for storing vectors in a database', 0, 'Це про vector database (глава 4), не визначення GenAI.']
  ]),
  Q('q111-6', '1.1.1', 'classical', 'The syllabus gives "defect categorization and predicting software problems" as example tasks for which type of AI?', [
    ['Symbolic AI', 0, 'Для symbolic AI ці приклади не наводяться.'],
    ['Classical machine learning', 1, 'Саме для classical ML у 1.1.1.'],
    ['Reasoning LLMs', 0, 'Reasoning LLMs з 1.1.3 — інший контекст.'],
    ['Vision-language models', 0, 'VLM — про visual + textual (1.1.4).']
  ]),
  Q('q111-7', '1.1.1', 'ai-map', 'Which of the following correctly describes the relationship between the AI types in the syllabus?', [
    ['Symbolic AI is a subset of deep learning', 0, 'Symbolic AI не вчиться на даних; це не частина DL.'],
    ['GenAI uses deep learning, which relies on neural networks', 1, 'Обидві частини є в 1.1.1: GenAI uses deep learning techniques; DL uses ML structures called neural networks.'],
    ['Classical machine learning is a type of generative AI', 0, 'Навпаки, GenAI спирається на DL ⊂ ML.'],
    ['Deep learning and symbolic AI are interchangeable terms', 0, 'Це принципово різні підходи.']
  ]),
  Q('q111-8', '1.1.1', 'genai', 'Which TWO statements about using GenAI for software testing are CORRECT?', [
    ['Pre-trained models can be applied directly to test tasks', 1, 'Key advantage з 1.1.1.'],
    ['An additional training phase is mandatory before each test task', 0, 'Навпаки — without the need for an additional training phase.'],
    ['Using pre-trained models directly comes with some risks', 1, '«Although this does come with some risks (see Section 3.1)».'],
    ['GenAI outputs are deterministic because the models are pre-trained', 0, 'LLM — non-deterministic (1.1.2).'],
    ['GenAI requires testers to define features manually', 0, 'Manual features — classical ML.']
  ], { multi: 2 })
];

C1.quizzes['1.1.2'] = [
  Q('q112-1', '1.1.2', 'llm', 'On which deep learning model are LLMs based according to the syllabus?', [
    ['Symbolic expert systems', 0, 'Це не deep learning модель.'],
    ['Generative pre-trained transformer', 1, '«Based on the generative pre-trained transformer deep learning model».'],
    ['Decision trees with manual features', 0, 'Classical ML.'],
    ['Vector databases', 0, 'Vector DB — сховище embeddings (глава 4), не модель.']
  ]),
  Q('q112-2', '1.1.2', 'slm', 'What is the main characteristic of small language models (SLMs) compared to LLMs?', [
    ['They have fewer parameters and are lightweight and focused', 1, 'Визначення SLM з 1.1.2.'],
    ['They cannot generate text, only classify it', 0, 'Такого обмеження в силабусі немає.'],
    ['They are rule-based and do not use neural networks', 0, 'SLM — мовні моделі, не symbolic AI.'],
    ['They always have larger context windows than LLMs', 0, 'Немає такого твердження в силабусі.']
  ]),
  Q('q112-3', '1.1.2', 'token', 'How large can a token be according to the syllabus?', [
    ['Always exactly one word', 0, 'Токен може бути і символом, і частиною слова.'],
    ['A character, a sub-word or a whole word', 1, '«As small as a character or as large as a sub-word or word».'],
    ['Always exactly four characters', 0, 'Фіксованого розміру немає.'],
    ['A full sentence or paragraph', 0, 'Речення розбивається на кілька токенів.']
  ]),
  Q('q112-4', '1.1.2', 'emb', 'Which TWO statements about tokenization and embeddings are CORRECT?', [
    ['Tokenization and embeddings convert language into a numerical form the model can process', 1, 'Дослівно з 1.1.2.'],
    ['Embeddings break text into characters and sub-words', 0, 'Це tokenization.'],
    ['Tokens with similar meanings have embeddings positioned close together', 1, 'Саме так: proximity enables LLMs to understand word relationships.'],
    ['Tokenization predicts the next token during inference', 0, 'Next-token prediction — функція моделі під час inference.'],
    ['Embeddings are only used for images', 0, 'Embeddings — представлення токенів (і для тексту, і для інших модальностей).']
  ], { multi: 2 }),
  Q('q112-5', '1.1.2', 'transformer', 'What does an LLM do during inference?', [
    ['It retrains its parameters on the user prompt', 0, 'Inference — це використання моделі, не навчання.'],
    ['It predicts the next token in a sequence using learned relationships between tokens', 1, 'Дослівно з 1.1.2.'],
    ['It looks up the correct answer in a database of verified facts', 0, 'LLM генерує statistically plausible текст, а не шукає перевірені факти.'],
    ['It applies symbolic rules defined by experts', 0, 'Symbolic AI.']
  ]),
  Q('q112-6', '1.1.2', 'transformer', 'Why do transformer models excel at language tasks?', [
    ['Because they learn how tokens relate across long sequences', 1, 'Пояснення з 1.1.2.'],
    ['Because they rely on manually selected features', 0, 'Classical ML.'],
    ['Because they guarantee factually correct output', 0, 'Plausible is not necessarily correct.'],
    ['Because they do not require tokenization', 0, 'Вхід спершу токенізується.']
  ]),
  Q('q112-7', '1.1.2', 'plausible', 'A tester notices that an LLM produced an expected result that sounds convincing but contradicts the specification. Which statement from the syllabus BEST explains this?', [
    ['LLMs have too few parameters to follow a specification', 0, 'Не пояснює правдоподібну, але хибну відповідь.'],
    ['Its output is plausible, but plausible is not always correct', 1, 'Саме це твердження з 1.1.2.'],
    ['Embeddings place tokens with similar meanings far apart', 0, 'Хибно: схожі токени — поруч.'],
    ['LLMs cannot process natural language specifications', 0, 'LLM якраз відмінно обробляють природну мову.']
  ]),
  Q('q112-8', '1.1.2', 'nondet', 'Which TWO factors does the syllabus name as the primary causes of non-deterministic LLM behavior?', [
    ['The probabilistic nature of inference mechanisms', 1, 'Причина №1.'],
    ['Hyperparameter settings', 1, 'Причина №2.'],
    ['Network latency between client and server', 0, 'Не згадується в силабусі.'],
    ['Continuous retraining after every prompt', 0, 'LLM не довчається з кожним запитом.'],
    ['The size of the training dataset', 0, 'Не є названою причиною non-determinism.']
  ], { multi: 2 }),
  Q('q112-9', '1.1.2', 'ctx', 'In what unit is the context window of an LLM measured?', [
    ['Characters', 0, 'Пастка: вимірюється в токенах.'],
    ['Words', 0, 'Пастка: токен може бути і частиною слова, і символом; одиниця виміру — токени.'],
    ['Tokens', 1, '«The amount of preceding text, measured in tokens».'],
    ['Parameters', 0, 'Parameters — характеристика розміру моделі (див. SLM), не context window.']
  ]),
  Q('q112-10', '1.1.2', 'ctx', 'A team wants to analyze very large test logs with an LLM and chooses a model with a much larger context window. Which trade-off should they expect according to the syllabus?', [
    ['Lower coherence when analyzing long passages', 0, 'Навпаки, більше вікно покращує coherence.'],
    ['Increased computational complexity and processing time', 1, 'Дослівно: increasing tokens increases computational complexity and processing time.'],
    ['Loss of the ability to tokenize long text', 0, 'Tokenization не залежить від розміру вікна; компроміс — складність і час обробки.'],
    ['Fully deterministic outputs for every prompt', 0, 'Розмір вікна не прибирає non-determinism.']
  ]),
  Q('q112-11', '1.1.2', 'ctx', 'What is the MOST likely consequence when a defect report and its attached log together exceed the LLM\'s context window?', [
    ['The model automatically switches to a reasoning LLM', 0, 'Такого механізму немає.'],
    ['Earlier relevant details may fall outside the window and be missed', 1, 'Як у rationale Sample Q2: tokens outside the window are effectively discarded.'],
    ['The model automatically summarizes the log before reading it', 0, 'Такого автоматичного механізму в силабусі немає; модель просто не враховує текст поза вікном.'],
    ['The model becomes deterministic', 0, 'Перевищення вікна не впливає на non-determinism; проблема — втрата ранньої інформації.']
  ]),
  Q('q112-12', '1.1.2', 'llm', 'Which statement about LLMs is CORRECT according to the syllabus?', [
    ['They are pre-trained on large text datasets to answer prompts in context', 1, 'Визначення LLM з 1.1.'],
    ['LLMs are trained only on the test basis of the current project', 0, 'Вони навчені на very large datasets (books, articles, websites).'],
    ['LLMs are symbolic AI systems based on logical rules', 0, 'LLM — deep learning (transformer).'],
    ['LLMs always produce the same response for the same prompt', 0, 'LLM — non-deterministic.']
  ])
];

C1.quizzes['1.1.3'] = [
  Q('q113-1', '1.1.3', 'stages', 'Which sequence correctly reflects the progressively specialized training stages of LLMs?', [
    ['Reasoning → instruction-tuned → foundation', 0, 'Зворотний порядок.'],
    ['Foundation → instruction-tuned → reasoning', 1, 'Instruction-tuned derived from foundation; reasoning extend instruction-tuned.'],
    ['Instruction-tuned → foundation → reasoning', 0, 'Instruction-tuned походять від foundation.'],
    ['Foundation → reasoning → instruction-tuned', 0, 'Reasoning будуються на instruction-tuned.']
  ]),
  Q('q113-2', '1.1.3', 'foundation', 'Which statement BEST describes foundation LLMs?', [
    ['Task-specific models that need no further adaptation', 0, 'Силабус: typically require further adaptation.'],
    ['General-purpose models that typically need further adaptation', 1, 'Визначення з 1.1.3.'],
    ['Models fine-tuned on pairs of prompts and expected responses', 0, 'Це instruction-tuned.'],
    ['Models specialized in chain-of-thought reasoning', 0, 'Це reasoning LLMs.']
  ]),
  Q('q113-3', '1.1.3', 'instruct', 'Which TWO goals does the instruction-tuning process optimize for according to the syllabus?', [
    ['Instruction following', 1, 'Одна з трьох цілей (task adherence, instruction following, response coherence).'],
    ['Response coherence', 1, 'Одна з трьох цілей.'],
    ['Image captioning', 0, 'Задача VLM (1.1.4).'],
    ['Feature selection', 0, 'Classical ML.'],
    ['Larger context windows', 0, 'Не ціль instruction-tuning у силабусі.']
  ], { multi: 2 }),
  Q('q113-4', '1.1.3', 'reasoning', 'Which capabilities are emphasized by reasoning LLMs?', [
    ['Strict adherence to predefined output templates', 0, 'Сильна сторона instruction-tuned.'],
    ['Logical inference and multi-step, chain-of-thought reasoning', 1, 'Дослівно з 1.1.3.'],
    ['Converting images into embeddings before processing', 0, 'VLM.'],
    ['Lightweight focused deployment with fewer parameters', 0, 'SLM.']
  ]),
  Q('q113-5', '1.1.3', 'reasoning', 'A test manager wants an LLM to synthesize information from defect reports, test results and change logs to identify risk areas and prioritize test efforts. Which LLM type is MOST suitable?', [
    ['Foundation LLM', 0, 'Потребує адаптації, не спеціалізована на багатокрокових міркуваннях.'],
    ['Instruction-tuned LLM', 0, 'Добре тримає формат, але задача — high-cognitive-load синтез.'],
    ['Reasoning LLM', 1, 'Синтез складної інформації + пріоритизація = reasoning (пор. Sample Q4 iv).'],
    ['Small language model', 0, 'SLM — характеристика розміру моделі (fewer parameters, lightweight, focused), а не одна з трьох категорій 1.1.3; для high-cognitive-load задач силабус вказує reasoning LLMs.']
  ]),
  Q('q113-6', '1.1.3', 'choose', 'Instruction-tuned LLMs are sometimes referred to as:', [
    ['Base LLMs', 0, 'Base LLM — синонім foundation LLM.'],
    ['Non-reasoning LLMs', 1, '«Instruction-tuned (sometimes referred to as non-reasoning)».'],
    ['Vision-language models', 0, 'Інша категорія (1.1.4).'],
    ['Chain-of-thought LLMs', 0, 'Chain-of-thought — ознака reasoning LLMs, а не синонім instruction-tuned.']
  ]),
  Q('q113-7', '1.1.3', 'choose', 'According to the syllabus, what determines the selection between instruction-tuned and reasoning LLMs for a testing task?', [
    ['The number of testers in the test team', 0, 'Не критерій із силабусу.'],
    ['The complexity and reasoning demands of the task', 1, 'Дослівно з 1.1.3.'],
    ['Whether the model is multimodal', 0, 'Не критерій вибору між цими двома.'],
    ['Whether the model was released recently', 0, 'Новизна моделі не є критерієм у силабусі; критерій — складність і reasoning demands задачі.']
  ]),
  Q('q113-8', '1.1.3', 'reasoning', 'How do reasoning LLMs relate to instruction-tuned LLMs?', [
    ['They are unrelated model families', 0, 'Пов’язані: reasoning будуються на instruction-tuned.'],
    ['They extend instruction-tuned models with further training', 1, '«Reasoning models extend instruction-tuned models… further trained or fine-tuned on carefully selected tasks».'],
    ['Instruction-tuned LLMs are derived from reasoning LLMs', 0, 'Порядок переплутано: reasoning LLMs розширюють instruction-tuned.'],
    ['Reasoning LLMs are small language models optimized for speed', 0, 'Плутанина з SLM; reasoning LLMs — про багатокрокові міркування, а не компактність.']
  ]),
  Q('q113-9', '1.1.3', 'instruct', 'A tester needs test cases strictly in Gherkin syntax (Given/When/Then) for a set of user stories. Which LLM type is MOST suitable and why?', [
    ['Reasoning LLM, because Gherkin requires multi-step logical inference', 0, 'Дотримання синтаксису — не high-cognitive-load задача.'],
    ['Instruction-tuned LLM, because it is optimized to follow instructions and requested formats', 1, 'Відповідає Sample Q4 (v).'],
    ['Foundation LLM, because it excels without structured input', 0, 'Sample Q4 (i) — хибне твердження.'],
    ['Vision-language model, because Gherkin is a visual notation', 0, 'Gherkin — текстова нотація.']
  ])
];

C1.quizzes['1.1.4'] = [
  Q('q114-1', '1.1.4', 'mm', 'Which data modalities can multimodal LLMs process according to the syllabus?', [
    ['Only text in multiple languages', 0, 'Multimodal ≠ multilingual.'],
    ['Text, images, sound and video', 1, 'Перелік з 1.1.4.'],
    ['Only images and screenshots', 0, 'Це занадто вузько (ближче до VLM).'],
    ['Images and video only', 0, 'Занадто вузько; силабус: text, images, sound and video.']
  ]),
  Q('q114-2', '1.1.4', 'mmtok', 'How are images handled before being processed in the transformer of a multimodal LLM?', [
    ['They are converted into embeddings using vision-language models', 1, 'Дослівно з 1.1.4.'],
    ['They are described manually by a tester in text', 0, 'Модель обробляє зображення сама.'],
    ['They are ignored; only text is processed', 0, 'Тоді модель не була б multimodal.'],
    ['They are split into characters by the text tokenizer', 0, 'Tokenization adapted for each data type; текстовий tokenizer до зображень не застосовується.']
  ]),
  Q('q114-3', '1.1.4', 'mmtok', 'Which statement about tokenization in multimodal LLMs is CORRECT?', [
    ['The same text tokenizer is applied to all data types without change', 0, 'Силабус: tokenization is adapted for each data type.'],
    ['Tokenization is adapted for each data type', 1, 'Дослівно з 1.1.4.'],
    ['Multimodal models do not use tokenization', 0, 'Використовують, але адаптовану.'],
    ['Tokenization is applied only after the transformer generates a response', 0, 'Токенізація відбувається до обробки в transformer, а не після.']
  ]),
  Q('q114-4', '1.1.4', 'vlm', 'Which TWO tasks are described as typical for vision-language models?', [
    ['Image captioning', 1, 'Задача VLM.'],
    ['Visual question answering', 1, 'Задача VLM.'],
    ['Speech synthesis', 0, 'Аудіо — не visual + textual.'],
    ['Feature selection for regression models', 0, 'Classical ML.'],
    ['Executing GUI test scripts', 0, 'Не задача VLM.']
  ], { multi: 2 }),
  Q('q114-5', '1.1.4', 'mmtest', 'A tester provides a multimodal LLM with a screenshot of a checkout page and the related user story. Which testing benefit described in the syllabus does this enable?', [
    ['It can spot discrepancies between expected results and the screenshot', 1, 'Дослівно з 1.1.4.'],
    ['The LLM can guarantee the page has no defects', 0, 'Абсолют; plausible ≠ correct.'],
    ['The LLM can execute the checkout flow in production', 0, 'Не описано в силабусі.'],
    ['The LLM can automatically fix the UI defects it detects', 0, 'Силабус говорить про виявлення розбіжностей, а не про виправлення дефектів.']
  ]),
  Q('q114-6', '1.1.4', 'mmtest', 'How can LLMs augmented with vision-language models increase overall test coverage?', [
    ['By replacing all manual exploratory testing', 0, 'Не стверджується; exploratory testing вимагає людини.'],
    ['By generating test cases that combine text and visual cues', 1, 'Дослівно з 1.1.4.'],
    ['By executing generated UI tests across browsers', 0, 'Виконання тестів не описано в 1.1.4; coverage зростає завдяки тест-кейсам з текстом і візуальними підказками.'],
    ['By increasing the context window for screenshots', 0, 'Coverage зростає завдяки тест-кейсам з текстом і візуальними підказками, а не розміру вікна.']
  ]),
  Q('q114-7', '1.1.4', 'mm', 'What enables multimodal LLMs to work with different types of data?', [
    ['Training on diverse datasets that link different data types', 1, 'Дослівно з 1.1.4.'],
    ['They use separate rule sets for each data type', 0, 'Rule sets — symbolic AI.'],
    ['They store every image in a vector database', 0, 'Vector databases — тема глави 4; здатність працювати з різними даними дає навчання на diverse datasets.'],
    ['They convert every input into plain text first', 0, 'Ні — tokenization adapted for each data type, зображення → embeddings (1.1.4).']
  ]),
  Q('q114-8', '1.1.4', 'vlm', 'Which inputs does the syllabus mention as visual elements that multimodal LLMs can analyze in software testing?', [
    ['Screenshots and GUI wireframes', 1, '«Visual elements of applications, such as screenshots and GUI wireframes».'],
    ['Audio recordings of stand-ups', 0, 'Не названо як visual elements.'],
    ['Defect reports and user stories', 0, 'Це textual descriptions, які аналізуються РАЗОМ із visual elements, але самі не є visual elements.'],
    ['Embeddings and tokens', 0, 'Це внутрішні представлення моделі, а не візуальні елементи застосунку.']
  ])
];

C1.quizzes['1.2.1'] = [
  Q('q121-1', '1.2.1', 'req', 'How can LLMs support requirements analysis according to the syllabus?', [
    ['By identifying ambiguities, inconsistencies or missing information and generating clarifying questions', 1, 'Дослівно з 1.2.1.'],
    ['By formally approving requirements on behalf of stakeholders', 0, 'LLM допомагає, рішення — за людьми.'],
    ['By automatically resolving conflicting requirements without stakeholder involvement', 0, 'LLM генерує питання для обговорення зі стейкхолдерами, а не вирішує конфлікти сама.'],
    ['By prioritizing requirements according to business value', 0, 'Пріоритизація вимог за бізнес-цінністю не названа як capability у 1.2.1.']
  ]),
  Q('q121-2', '1.2.1', 'tcoracle', 'Based on which inputs can LLMs help generate test cases and suggest test objectives?', [
    ['Hyperparameter settings of the language model', 0, 'Не названо в 1.2.1 як основа для тест-кейсів.'],
    ['Requirements, user stories or other test basis elements', 1, 'Дослівно з 1.2.1.'],
    ['Production deployment pipeline configurations', 0, 'Не названо в 1.2.1 як основа для тест-кейсів.'],
    ['Release approval records signed by management', 0, 'Не названо в 1.2.1 як основа для тест-кейсів.']
  ]),
  Q('q121-3', '1.2.1', 'data', 'Which activity is an example of the "test data generation" capability?', [
    ['Summarizing a regression test run', 0, 'Test result analysis.'],
    ['Creating boundary values for a booking form', 1, 'Datasets, boundary values, combinations.'],
    ['Generating questions for stakeholders', 0, 'Requirements analysis.'],
    ['Updating the test plan', 0, 'Testware creation.']
  ]),
  Q('q121-4', '1.2.1', 'auto', 'Which statement about test automation support by LLMs is CORRECT?', [
    ['LLMs can help generate test scripts from test case descriptions and improve existing scripts', 1, 'Дослівно з 1.2.1.'],
    ['LLMs execute all test scripts without human oversight', 0, 'Rationale Sample Q6 c — не key capability.'],
    ['LLMs replace the need for test techniques', 0, 'Навпаки, можуть допомогти identifying appropriate test techniques.'],
    ['LLMs can generate scripts only after being retrained on the project code base', 0, 'GenAI застосовується без additional training phase (1.1.1).']
  ]),
  Q('q121-5', '1.2.1', 'auto', 'How can LLMs help with test result analysis?', [
    ['By summarizing results and classifying anomalies', 1, 'Дослівно з 1.2.1.'],
    ['By deciding to release the product', 0, 'Рішення про реліз — за людьми.'],
    ['By rerunning failed tests automatically in production', 0, 'Перезапуск тестів не входить у test result analysis з 1.2.1 (summaries + класифікація аномалій).'],
    ['By generating boundary values', 0, 'Test data generation.']
  ]),
  Q('q121-6', '1.2.1', 'testware', 'Which TWO documents does the syllabus list as examples of the testware creation capability of LLMs?', [
    ['Test plans', 1, 'Названо в 1.2.1.'],
    ['Defect reports', 1, 'Названо в 1.2.1.'],
    ['Production deployment pipelines', 0, 'Не testware у контексті 1.2.1.'],
    ['Source code of the test object', 0, 'Код тестового об’єкта не є документом тестування; у 1.2.1 названо test plans, test reports, defect reports.'],
    ['Release approvals', 0, 'Затвердження релізу — рішення людей, не документ, який LLM «створює».']
  ], { multi: 2 }),
  Q('q121-7', '1.2.1', 'testware', 'Which of the following is NOT presented as a key LLM capability for test tasks?', [
    ['Generating expected results', 0, 'Test oracle generation — key capability.'],
    ['Identifying appropriate test techniques for scripts', 0, 'Частина test automation support.'],
    ['Performing exploratory testing in place of a human tester', 1, 'Rationale Sample Q6 d: exploratory testing вимагає людської креативності, досвіду і рішень.'],
    ['Keeping test reports updated as the project evolves', 0, 'Testware creation.']
  ]),
  Q('q121-8', '1.2.1', 'caps', 'Which items can LLMs interpret according to the syllabus, making them tools for understanding information throughout the test process?', [
    ['Requirements, specs, screenshots, code, test cases, defect reports', 1, 'Перелік з 1.2.1.'],
    ['Hyperparameter settings, model weights and tokenizer files', 0, 'Не названо в 1.2.1 серед того, що LLM інтерпретують.'],
    ['Network latency measurements of the test servers', 0, 'Не названо в 1.2.1 серед того, що LLM інтерпретують.'],
    ['Server hardware specifications and invoices', 0, 'Не названо в 1.2.1 серед того, що LLM інтерпретують.']
  ]),
  Q('q121-9', '1.2.1', 'req', 'During backlog refinement, a tester asks an LLM to review a user story that says "the page should load fast". The LLM flags "fast" and suggests asking for a measurable target. Which capability is demonstrated?', [
    ['Test result analysis', 0, 'Тестів ще не запускали.'],
    ['Requirements analysis and improvement', 1, 'Ідентифікація ambiguity + питання для стейкхолдерів.'],
    ['Test oracle generation', 0, 'Expected results не генерувались.'],
    ['Test automation support', 0, 'Скриптів немає.']
  ])
];

C1.quizzes['1.2.2'] = [
  Q('q122-1', '1.2.2', 'two', 'According to the syllabus, how do AI chatbots and LLM-powered testing applications relate to each other?', [
    ['They are complementary ways of leveraging GenAI', 1, '«Two complementary ways».'],
    ['Chatbots are an outdated version of LLM-powered applications', 0, 'Такого твердження немає.'],
    ['They are identical in functionality and integration', 0, 'Вони різняться functionality, flexibility, integration approaches.'],
    ['Chatbots are intended only for non-technical stakeholders', 0, 'Доступні й для non-technical, але використовуються тестувальниками в усіх ролях.']
  ]),
  Q('q122-2', '1.2.2', 'chatbot', 'Which technique does the syllabus mention that allows testers to iteratively refine chatbot outputs?', [
    ['Feature selection', 0, 'Classical ML.'],
    ['Prompt chaining', 1, '«Through techniques such as prompt chaining, testers can iteratively refine outputs».'],
    ['Image captioning', 0, 'VLM.'],
    ['Tokenization adaptation', 0, 'Multimodal LLMs.']
  ]),
  Q('q122-3', '1.2.2', 'chatbot', 'Which TWO scenarios are described as particularly suitable for AI chatbots?', [
    ['Onboarding new testers', 1, 'Названо в 1.2.2.'],
    ['Fast feedback and clarification of test concepts', 1, 'Названо в 1.2.2.'],
    ['Embedding defect analysis into an existing test framework', 0, 'LLM-powered applications.'],
    ['Creating AI agents for specific testing roles', 0, 'LLM-powered applications (гл. 4).'],
    ['Large-scale automated test data synthesis via APIs', 0, 'LLM-powered applications.']
  ], { multi: 2 }),
  Q('q122-4', '1.2.2', 'chatbot', 'Why can AI chatbots broaden the potential user base of GenAI in testing?', [
    ['Because their intuitive UI suits non-technical stakeholders', 1, 'Дослівно з 1.2.2.'],
    ['Because they require API integration skills', 0, 'Навпаки: API-інтеграція — ознака LLM-powered applications; чатботи інтуїтивні без технічних навичок.'],
    ['Because they are integrated into existing test frameworks', 0, 'Інтеграція у фреймворки — характеристика LLM-powered applications.'],
    ['Because they do not need prompts', 0, 'Потрібні — prompt engineering важливий завжди.']
  ]),
  Q('q122-5', '1.2.2', 'apps', 'How do LLM-powered testing applications typically access LLM capabilities?', [
    ['Via APIs integrated into test tools or frameworks', 1, '«Integration of LLM capabilities via APIs».'],
    ['Only through a chat window in the browser', 0, 'Це чатбот.'],
    ['Through manual copy-paste between a chatbot and the test tool', 0, 'Це радше використання чатботу; applications інтегрують LLM через API.'],
    ['Through vision-language models only', 0, 'VLM — тип моделі, а не спосіб інтеграції.']
  ]),
  Q('q122-6', '1.2.2', 'apps', 'Which TWO advantages are attributed to LLM-powered testing applications?', [
    ['Greater customization', 1, 'Названо в 1.2.2.'],
    ['Scalability', 1, 'Названо в 1.2.2.'],
    ['No need for prompt engineering', 0, 'Prompt engineering потрібен regardless.'],
    ['Fully deterministic outputs', 0, 'Інтеграція не прибирає non-determinism LLM.'],
    ['Accessibility for any non-technical user without setup', 0, 'Це перевага чатботів.']
  ], { multi: 2 }),
  Q('q122-7', '1.2.2', 'apps', 'What is described as a more advanced implementation of LLM-powered testing applications?', [
    ['Prompt chaining in a chatbot', 0, 'Техніка для чатботів.'],
    ['AI agents designed to perform certain testing roles', 1, '«Organizations can create AI agents specifically designed to perform certain testing roles (see Chapter 4)».'],
    ['Prompt templates stored in a chatbot history', 0, 'Не названо як advanced implementation; AI agents — так.'],
    ['Small language models embedded in the browser', 0, 'SLM — про розмір моделі, а не про просунуту реалізацію applications.']
  ]),
  Q('q122-8', '1.2.2', 'pe', 'Which statement about prompt engineering is CORRECT according to the syllabus?', [
    ['It is needed only for AI chatbots', 0, 'Regardless of interaction model.'],
    ['It is needed only for LLM-powered applications', 0, 'Regardless of interaction model.'],
    ['It is required for both chatbots and LLM-powered apps', 1, 'Дослівно з 1.2.2.'],
    ['It becomes unnecessary with reasoning LLMs', 0, 'Не стверджується.']
  ]),
  Q('q122-9', '1.2.2', 'cmp', 'A tester wants to quickly explore possible test cases for a new feature by asking questions and refining the answers in several steps. Which interaction model fits BEST?', [
    ['LLM-powered testing application integrated via API into the CI pipeline', 0, 'Підходить для well-defined, automated задач.'],
    ['AI chatbot', 1, 'Dynamic exploration of requirements and potential test cases + iterative refinement.'],
    ['LLM-powered testing application, as it offers more customization for ad hoc questions', 0, 'Ad hoc + iterative refinement — це сильна сторона чатботів; applications — для well-defined задач.'],
    ['AI chatbot, because it removes the need for prompt engineering', 0, 'Правильна модель, але причина хибна: prompt engineering потрібен regardless (1.2.2).']
  ])
];
