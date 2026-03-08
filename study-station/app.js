// ════════════════════════════════════════════
//  ELLIE'S STUDY STATION — app.js
// ════════════════════════════════════════════

// ── NAVIGATION ──────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.subject-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.subject).classList.add('active');
  });
});

// ── TAB SWITCHING ────────────────────────────
document.querySelectorAll('.tabs').forEach(tabGroup => {
  tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.subject-section');
      section.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      section.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
});

// ════════════════════════════════════════════
//  JAPANESE DATA
// ════════════════════════════════════════════
const hiraganaData = [
  { kana: 'あ', romaji: 'a',  en: 'a (vowel)' },
  { kana: 'い', romaji: 'i',  en: 'i (vowel)' },
  { kana: 'う', romaji: 'u',  en: 'u (vowel)' },
  { kana: 'え', romaji: 'e',  en: 'e (vowel)' },
  { kana: 'お', romaji: 'o',  en: 'o (vowel)' },
  { kana: 'か', romaji: 'ka', en: 'ka' },
  { kana: 'き', romaji: 'ki', en: 'ki' },
  { kana: 'く', romaji: 'ku', en: 'ku' },
  { kana: 'け', romaji: 'ke', en: 'ke' },
  { kana: 'こ', romaji: 'ko', en: 'ko' },
  { kana: 'さ', romaji: 'sa', en: 'sa' },
  { kana: 'し', romaji: 'shi', en: 'shi' },
  { kana: 'す', romaji: 'su', en: 'su' },
  { kana: 'せ', romaji: 'se', en: 'se' },
  { kana: 'そ', romaji: 'so', en: 'so' },
  { kana: 'た', romaji: 'ta', en: 'ta' },
  { kana: 'ち', romaji: 'chi', en: 'chi' },
  { kana: 'つ', romaji: 'tsu', en: 'tsu' },
  { kana: 'て', romaji: 'te', en: 'te' },
  { kana: 'と', romaji: 'to', en: 'to' },
  { kana: 'な', romaji: 'na', en: 'na' },
  { kana: 'に', romaji: 'ni', en: 'ni' },
  { kana: 'ぬ', romaji: 'nu', en: 'nu' },
  { kana: 'ね', romaji: 'ne', en: 'ne' },
  { kana: 'の', romaji: 'no', en: 'no' },
  { kana: 'は', romaji: 'ha', en: 'ha' },
  { kana: 'ひ', romaji: 'hi', en: 'hi' },
  { kana: 'ふ', romaji: 'fu', en: 'fu' },
  { kana: 'へ', romaji: 'he', en: 'he' },
  { kana: 'ほ', romaji: 'ho', en: 'ho' },
  { kana: 'ま', romaji: 'ma', en: 'ma' },
  { kana: 'み', romaji: 'mi', en: 'mi' },
  { kana: 'む', romaji: 'mu', en: 'mu' },
  { kana: 'め', romaji: 'me', en: 'me' },
  { kana: 'も', romaji: 'mo', en: 'mo' },
  { kana: 'や', romaji: 'ya', en: 'ya' },
  { kana: 'ゆ', romaji: 'yu', en: 'yu' },
  { kana: 'よ', romaji: 'yo', en: 'yo' },
  { kana: 'ら', romaji: 'ra', en: 'ra' },
  { kana: 'り', romaji: 'ri', en: 'ri' },
  { kana: 'る', romaji: 'ru', en: 'ru' },
  { kana: 'れ', romaji: 're', en: 're' },
  { kana: 'ろ', romaji: 'ro', en: 'ro' },
  { kana: 'わ', romaji: 'wa', en: 'wa' },
  { kana: 'を', romaji: 'wo/o', en: 'wo (object marker)' },
  { kana: 'ん', romaji: 'n',  en: 'n (final)' },
];

// Common Japanese vocab for Year 7
const jpVocabExtra = [
  { kana: 'おはよう', romaji: 'ohayou', en: 'Good morning' },
  { kana: 'こんにちは', romaji: 'konnichiwa', en: 'Hello / Good afternoon' },
  { kana: 'こんばんは', romaji: 'konbanwa', en: 'Good evening' },
  { kana: 'ありがとう', romaji: 'arigatou', en: 'Thank you' },
  { kana: 'すみません', romaji: 'sumimasen', en: 'Excuse me / Sorry' },
  { kana: 'はい', romaji: 'hai', en: 'Yes' },
  { kana: 'いいえ', romaji: 'iie', en: 'No' },
  { kana: 'わたし', romaji: 'watashi', en: 'I / Me' },
  { kana: 'あなた', romaji: 'anata', en: 'You' },
  { kana: 'なまえ', romaji: 'namae', en: 'Name' },
  { kana: 'がっこう', romaji: 'gakkou', en: 'School' },
  { kana: 'せんせい', romaji: 'sensei', en: 'Teacher' },
  { kana: 'ともだち', romaji: 'tomodachi', en: 'Friend' },
  { kana: 'いち', romaji: 'ichi', en: 'One (1)' },
  { kana: 'に', romaji: 'ni', en: 'Two (2)' },
  { kana: 'さん', romaji: 'san', en: 'Three (3)' },
  { kana: 'し/よん', romaji: 'shi/yon', en: 'Four (4)' },
  { kana: 'ご', romaji: 'go', en: 'Five (5)' },
  { kana: 'ろく', romaji: 'roku', en: 'Six (6)' },
  { kana: 'しち/なな', romaji: 'shichi/nana', en: 'Seven (7)' },
  { kana: 'はち', romaji: 'hachi', en: 'Eight (8)' },
  { kana: 'きゅう', romaji: 'kyuu', en: 'Nine (9)' },
  { kana: 'じゅう', romaji: 'juu', en: 'Ten (10)' },
];

// Build JP vocab table
const jpVocabBody = document.getElementById('jp-vocab-body');
[...hiraganaData, ...jpVocabExtra].forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${item.kana}</td><td>${item.romaji}</td><td>${item.en}</td>`;
  jpVocabBody.appendChild(row);
});

// ── FLASHCARD ENGINE ─────────────────────────
const cardDecks = {
  jp: hiraganaData.map(h => ({ front: h.kana, back: `${h.romaji} — ${h.en}` })),
  ss: []  // filled later
};
const cardState = {
  jp: { index: 0, flipped: false },
  ss: { index: 0, flipped: false }
};

function renderCard(prefix) {
  const deck  = cardDecks[prefix];
  const state = cardState[prefix];
  if (!deck.length) return;
  state.flipped = false;
  document.getElementById(`${prefix}-card`).classList.remove('flipped');
  document.getElementById(`${prefix}-front`).textContent = deck[state.index].front;
  document.getElementById(`${prefix}-back`).textContent  = deck[state.index].back;
  document.getElementById(`${prefix}-counter`).textContent =
    `${state.index + 1} / ${deck.length}`;
}
function flipCard(prefix) {
  cardState[prefix].flipped = !cardState[prefix].flipped;
  document.getElementById(`${prefix}-card`).classList.toggle('flipped');
}
function nextCard(prefix) {
  const deck = cardDecks[prefix];
  cardState[prefix].index = (cardState[prefix].index + 1) % deck.length;
  renderCard(prefix);
}
function prevCard(prefix) {
  const deck = cardDecks[prefix];
  cardState[prefix].index = (cardState[prefix].index - 1 + deck.length) % deck.length;
  renderCard(prefix);
}

// ── QUIZ ENGINE ──────────────────────────────
const quizState = {};

function initQuiz(prefix, questions) {
  quizState[prefix] = {
    questions: shuffle([...questions]),
    index: 0,
    score: 0,
    total: 0,
    answered: false
  };
  renderQuiz(prefix);
}

function renderQuiz(prefix) {
  const state = quizState[prefix];
  if (!state) return;
  const q = state.questions[state.index % state.questions.length];
  state.answered = false;

  document.getElementById(`${prefix}-quiz-q`).textContent = q.question;
  document.getElementById(`${prefix}-quiz-feedback`).textContent = '';
  document.getElementById(`${prefix}-quiz-feedback`).className = 'quiz-feedback';
  document.getElementById(`${prefix}-next-btn`).style.display = 'none';

  const optsEl = document.getElementById(`${prefix}-quiz-opts`);
  optsEl.innerHTML = '';
  shuffle([...q.options]).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(prefix, opt, q.answer, btn);
    optsEl.appendChild(btn);
  });
}

function checkAnswer(prefix, chosen, correct, btnEl) {
  if (quizState[prefix].answered) return;
  quizState[prefix].answered = true;
  quizState[prefix].total++;

  const fb = document.getElementById(`${prefix}-quiz-feedback`);
  const allBtns = document.querySelectorAll(`#${prefix}-quiz-opts .quiz-option`);

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });

  if (chosen === correct) {
    quizState[prefix].score++;
    btnEl.classList.add('correct');
    fb.textContent = '✓ Correct! Well done!';
    fb.className = 'quiz-feedback correct-fb';
  } else {
    btnEl.classList.add('wrong');
    fb.textContent = `✗ Not quite — the answer is: ${correct}`;
    fb.className = 'quiz-feedback wrong-fb';
  }

  document.getElementById(`${prefix}-score`).textContent = quizState[prefix].score;
  document.getElementById(`${prefix}-total`).textContent = quizState[prefix].total;
  document.getElementById(`${prefix}-next-btn`).style.display = 'inline-block';
}

function nextQuiz(prefix) {
  quizState[prefix].index++;
  renderQuiz(prefix);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── JP QUIZ ──────────────────────────────────
const jpQuestions = hiraganaData.slice(0, 20).map(h => {
  const wrongs = shuffle(hiraganaData.filter(x => x.romaji !== h.romaji)).slice(0, 3).map(x => x.romaji);
  return {
    question: `What is the romaji reading of: ${h.kana}`,
    options: [...wrongs, h.romaji],
    answer: h.romaji
  };
});
initQuiz('jp', jpQuestions);


// ════════════════════════════════════════════
//  ENGLISH DATA
// ════════════════════════════════════════════
const enArguments = [
  {
    title: 'Argument 1: Jack Was Reclaiming Stolen Property',
    body: 'The Giant had originally stolen Jack\'s family\'s wealth, including his father\'s possessions. Jack was not stealing — he was recovering what rightfully belonged to his family. You cannot steal something that was already stolen from you.',
    evidence: 'Evidence: In the original story, the Giant had robbed and killed Jack\'s father, taking his golden harp and hen. Jack\'s actions were a form of restitution.'
  },
  {
    title: 'Argument 2: Necessity — Saving His Family From Poverty',
    body: 'Jack and his mother were living in desperate poverty. They had nothing left but a cow, which they traded for magic beans. Jack\'s motivation was not greed but survival. The law recognises "necessity" as a valid defence when someone acts to prevent greater harm.',
    evidence: 'Evidence: At the start of the story, Jack and his mother were starving and destitute. His actions were driven by survival, not malice.'
  },
  {
    title: 'Argument 3: Self-Defence Against a Violent Threat',
    body: 'The Giant openly threatened Jack\'s life — "Fee fi fo fum, I smell the blood of an Englishman. Be he alive or be he dead, I\'ll grind his bones to make my bread." Jack was in genuine, immediate danger. Any reasonable person would flee and act to protect themselves.',
    evidence: 'Evidence: The Giant\'s own words confirm his murderous intent. Jack\'s actions in escaping and cutting the beanstalk were acts of self-preservation.'
  }
];

const enArgumentsList = document.getElementById('en-arguments-list');
enArguments.forEach(arg => {
  const div = document.createElement('div');
  div.className = 'argument-card';
  div.innerHTML = `
    <h3>${arg.title}</h3>
    <p>${arg.body}</p>
    <p class="evidence">${arg.evidence}</p>
  `;
  enArgumentsList.appendChild(div);
});

const enTechniques = [
  { name: 'Rhetorical Question', desc: 'Ask a question you don\'t expect an answer to, to make the audience think.', example: '"Would you punish a starving child for fighting to feed his family?"' },
  { name: 'Rule of Three', desc: 'Use three points or examples together for emphasis and rhythm.', example: '"Jack was desperate, threatened, and reclaiming what was his."' },
  { name: 'Emotive Language', desc: 'Use words that trigger emotion in the audience.', example: '"A frightened young boy, alone and starving…"' },
  { name: 'Appeal to Logic (Logos)', desc: 'Use facts and reasoned argument to persuade.', example: '"The evidence clearly shows the Giant had already committed theft and murder."' },
  { name: 'Alliteration', desc: 'Repeat the same starting sound for emphasis and memorability.', example: '"Jack was justified, judicious, and just."' },
  { name: 'Direct Address', desc: 'Speak directly to the audience to engage them personally.', example: '"Ask yourself — what would you have done in Jack\'s shoes?"' },
];

const enTechList = document.getElementById('en-techniques-list');
enTechniques.forEach(t => {
  const div = document.createElement('div');
  div.className = 'technique-card';
  div.innerHTML = `<h3>${t.name}</h3><p>${t.desc}</p><div class="example">${t.example}</div>`;
  enTechList.appendChild(div);
});

const speechSections = [
  { title: 'Introduction', prompt: 'Start with a hook (rhetorical question or bold statement). State your position: Jack is NOT guilty. Preview your 3 arguments.' },
  { title: 'Body Paragraph 1 — Reclaiming Stolen Property', prompt: 'Explain that the Giant originally stole from Jack\'s family. Use evidence from the story. Conclude that Jack was reclaiming what was his.' },
  { title: 'Body Paragraph 2 — Necessity (Poverty & Survival)', prompt: 'Describe Jack and his mother\'s poverty. Explain that Jack acted out of necessity. Connect to the legal concept of necessity as a defence.' },
  { title: 'Body Paragraph 3 — Self-Defence', prompt: 'Quote the Giant\'s threat ("Fee fi fo fum..."). Explain the immediate danger Jack faced. Argue that cutting the beanstalk was self-defence.' },
  { title: 'Conclusion', prompt: 'Restate your position firmly. Summarise your three arguments briefly. End with a powerful, memorable statement or call to action.' },
];
const speechBuilder = document.getElementById('speech-builder');
speechSections.forEach((s, i) => {
  const div = document.createElement('div');
  div.className = 'speech-section';
  div.innerHTML = `
    <div class="speech-section-header" onclick="toggleSpeech(${i})">
      <span>${s.title}</span><span id="speech-arrow-${i}">▼</span>
    </div>
    <div class="speech-section-body" id="speech-body-${i}">
      <p><strong>Prompt:</strong> ${s.prompt}</p>
      <textarea placeholder="Write your draft here..."></textarea>
    </div>
  `;
  speechBuilder.appendChild(div);
});
function toggleSpeech(i) {
  const body = document.getElementById(`speech-body-${i}`);
  const arrow = document.getElementById(`speech-arrow-${i}`);
  body.classList.toggle('open');
  arrow.textContent = body.classList.contains('open') ? '▲' : '▼';
}


// ════════════════════════════════════════════
//  MATHS DATA
// ════════════════════════════════════════════
const mathsNotes = [
  {
    title: 'Index Notation',
    points: [
      'Index notation = writing repeated multiplication using a base and exponent',
      '2³ means 2 × 2 × 2 = 8  (base = 2, index/exponent = 3)',
      '10² = 10 × 10 = 100',
      'Any number to the power of 0 = 1  (e.g. 5⁰ = 1)',
      'Any number to the power of 1 = itself  (e.g. 7¹ = 7)',
      'To multiply same base: ADD the indices  (e.g. 2³ × 2⁴ = 2⁷)',
      'To divide same base: SUBTRACT the indices  (e.g. 3⁵ ÷ 3² = 3³)',
    ]
  },
  {
    title: 'Multiplication & Division',
    points: [
      'Multiplication: repeated addition  (e.g. 4 × 6 = 24)',
      'Division: splitting into equal groups  (e.g. 24 ÷ 6 = 4)',
      'Order of operations: BODMAS/BIDMAS',
      'B = Brackets, O/I = Orders/Indices, D = Division, M = Multiplication, A = Addition, S = Subtraction',
      'Multiplication and division have equal priority — work left to right',
      'Negative × Negative = Positive',
      'Positive × Negative = Negative',
    ]
  },
  {
    title: 'Square Roots & Square Numbers',
    points: [
      'A square number = a number multiplied by itself  (e.g. 4² = 16)',
      'Square root = the reverse  (e.g. √16 = 4)',
      'Key squares to know: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100',
      '√ symbol means square root',
      '√25 = 5 because 5 × 5 = 25',
    ]
  },
  {
    title: 'Factors',
    points: [
      'A factor is a number that divides evenly into another number',
      'Factors of 12: 1, 2, 3, 4, 6, 12',
      'HCF (Highest Common Factor): largest factor two numbers share',
      'HCF of 12 and 18 = 6',
      'Prime factors: factors that are prime numbers',
      'Factor trees help find prime factors',
      '12 = 2 × 2 × 3 = 2² × 3',
    ]
  },
  {
    title: 'Fractions',
    points: [
      'Fraction = numerator (top) ÷ denominator (bottom)',
      'Equivalent fractions: ½ = 2/4 = 3/6',
      'Simplifying: divide top and bottom by HCF',
      'Adding fractions: find common denominator first',
      '½ + ⅓ = 3/6 + 2/6 = 5/6',
      'Multiplying fractions: multiply tops, multiply bottoms',
      '½ × ⅔ = 2/6 = ⅓',
      'Dividing fractions: flip the second fraction and multiply',
    ]
  }
];

const maNotesCards = document.getElementById('ma-notes-cards');
mathsNotes.forEach(topic => {
  const div = document.createElement('div');
  div.className = 'info-card';
  div.innerHTML = `<h3>${topic.title}</h3><ul>${topic.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  maNotesCards.appendChild(div);
});

// Maths practice problems
const practiceProblems = [
  { topic: 'Index Notation', problems: [
    { q: '2⁴ = ?', a: '16' },
    { q: '3³ = ?', a: '27' },
    { q: '5² = ?', a: '25' },
    { q: '10³ = ?', a: '1000' },
    { q: '4⁰ = ?', a: '1' },
  ]},
  { topic: 'Square Roots', problems: [
    { q: '√49 = ?', a: '7' },
    { q: '√81 = ?', a: '9' },
    { q: '√100 = ?', a: '10' },
    { q: '√36 = ?', a: '6' },
    { q: '√16 = ?', a: '4' },
  ]},
  { topic: 'Factors — HCF', problems: [
    { q: 'HCF of 12 and 8 = ?', a: '4' },
    { q: 'HCF of 15 and 25 = ?', a: '5' },
    { q: 'HCF of 18 and 24 = ?', a: '6' },
  ]},
];

const maPracticeArea = document.getElementById('ma-practice-area');
practiceProblems.forEach(block => {
  const div = document.createElement('div');
  div.className = 'practice-block';
  div.innerHTML = `<h3>${block.topic}</h3>`;
  block.problems.forEach((prob, idx) => {
    const id = `pp-${block.topic.replace(/\W/g, '')}-${idx}`;
    const pDiv = document.createElement('div');
    pDiv.className = 'practice-problem';
    pDiv.innerHTML = `
      <span>${prob.q}</span>
      <input type="text" id="${id}" placeholder="?" onkeydown="if(event.key==='Enter') checkPractice('${id}','${prob.a}')" />
      <button onclick="checkPractice('${id}','${prob.a}')">Check</button>
      <span class="result" id="${id}-result"></span>
    `;
    div.appendChild(pDiv);
  });
  maPracticeArea.appendChild(div);
});

function checkPractice(id, correct) {
  const input = document.getElementById(id);
  const result = document.getElementById(`${id}-result`);
  const val = input.value.trim();
  if (val === correct) {
    result.textContent = '✓ Correct!';
    result.className = 'result correct';
  } else {
    result.textContent = `✗ Answer: ${correct}`;
    result.className = 'result wrong';
  }
}

// Maths quiz
const maQuizQuestions = [
  { question: 'What is 2⁵?', options: ['16', '32', '64', '25'], answer: '32' },
  { question: 'What is √64?', options: ['6', '7', '8', '9'], answer: '8' },
  { question: 'What is 3⁴?', options: ['12', '27', '64', '81'], answer: '81' },
  { question: 'What are the factors of 12?', options: ['1,2,3,4,6,12', '1,2,4,8,12', '1,3,4,9,12', '2,3,6,9,12'], answer: '1,2,3,4,6,12' },
  { question: 'What is ½ + ¼?', options: ['1/6', '2/6', '3/4', '2/8'], answer: '3/4' },
  { question: 'What is the HCF of 12 and 18?', options: ['2', '3', '6', '9'], answer: '6' },
  { question: 'What does BODMAS stand for (first letter)?', options: ['Brackets', 'Binary', 'Base', 'Both'], answer: 'Brackets' },
  { question: 'What is 10⁰?', options: ['0', '1', '10', '100'], answer: '1' },
  { question: 'Simplify 8/12', options: ['4/6', '2/3', '3/4', '1/2'], answer: '2/3' },
  { question: 'What is √144?', options: ['11', '12', '13', '14'], answer: '12' },
];
initQuiz('ma', maQuizQuestions);


// ════════════════════════════════════════════
//  SOCIAL SCIENCE DATA
// ════════════════════════════════════════════

// Timeline
const timelineData = [
  {
    date: '221 BCE',
    title: 'Qin Dynasty Founded',
    body: 'Ying Zheng united the warring states and became Qin Shi Huang — the First Emperor of China. He standardised writing, currency, weights and measures across China.'
  },
  {
    date: '221–210 BCE',
    title: 'Reign of Qin Shi Huang',
    body: 'Built the early Great Wall by connecting existing walls. Used a strict legal code (Legalism). Constructed the famous Terracotta Army for his tomb. Centralised power — no regional lords.'
  },
  {
    date: '210 BCE',
    title: 'Death of Qin Shi Huang',
    body: 'After his death, the Qin dynasty quickly collapsed due to harsh laws and peasant rebellions. The dynasty lasted only 15 years total.'
  },
  {
    date: '206 BCE',
    title: 'Qin Dynasty Ends / Han Dynasty Begins',
    body: 'Liu Bang (Emperor Gaozu) overthrew the Qin and founded the Han Dynasty. The Han ruled for over 400 years — one of China\'s golden ages.'
  },
  {
    date: '206 BCE – 9 CE',
    title: 'Western Han Dynasty',
    body: 'The Han expanded China\'s territory, opened the Silk Road for trade, and developed Confucianism as the basis for government. Paper was invented during this period.'
  },
  {
    date: '141–87 BCE',
    title: 'Reign of Emperor Wu (Han Wudi)',
    body: 'The most powerful Han emperor. Expanded the empire into Central Asia. Established the Silk Road trade routes. Fought off the Xiongnu nomads in the north.'
  },
  {
    date: '25–220 CE',
    title: 'Eastern Han Dynasty',
    body: 'The Han dynasty continued after a brief interruption. The Eastern Han saw advances in science, including seismographs and improved papermaking. Buddhism spread to China.'
  },
  {
    date: '220 CE',
    title: 'Han Dynasty Ends',
    body: 'The Han dynasty collapsed due to internal conflict, corruption, and the Yellow Turban Rebellion. China split into the Three Kingdoms period.'
  },
];

const timelineEl = document.getElementById('ss-timeline-content');
timelineData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `<div class="date">${item.date}</div><h3>${item.title}</h3><p>${item.body}</p>`;
  timelineEl.appendChild(div);
});

// Emperors
const emperorsData = [
  {
    title: 'Qin Shi Huang (221–210 BCE)',
    points: [
      'First Emperor of a unified China',
      'Founded the Qin Dynasty',
      'Standardised writing, money, weights & measures',
      'Connected walls to form the Great Wall',
      'Built the Terracotta Army (8,000+ soldiers)',
      'Used Legalism — strict laws and punishments',
      'Burned books to control knowledge',
    ]
  },
  {
    title: 'Emperor Gaozu / Liu Bang (206–195 BCE)',
    points: [
      'Founded the Han Dynasty after defeating the Qin',
      'Was a peasant who rose to become Emperor',
      'Reduced harsh laws and taxes from the Qin era',
      'Established Confucianism in government',
      'Organised China into a more unified state',
    ]
  },
  {
    title: 'Emperor Wu / Han Wudi (141–87 BCE)',
    points: [
      'Greatest Han emperor — ruled for 54 years',
      'Expanded China\'s empire to its largest size',
      'Opened and developed the Silk Road trade network',
      'Fought the Xiongnu nomads to protect China\'s north',
      'Made Confucianism the official state philosophy',
      'Established civil service exams based on merit',
    ]
  },
];

const empCards = document.getElementById('ss-emperors-cards');
emperorsData.forEach(e => {
  const div = document.createElement('div');
  div.className = 'info-card';
  div.innerHTML = `<h3>${e.title}</h3><ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  empCards.appendChild(div);
});

// Yellow River
const yellowRiverData = [
  {
    title: 'What is the Yellow River?',
    points: [
      'Chinese name: Huang He (黄河)',
      'Second-longest river in China (~5,464 km)',
      'Called "China\'s Sorrow" due to devastating floods',
      'Also called "the cradle of Chinese civilisation"',
    ]
  },
  {
    title: 'Why It Was Important',
    points: [
      'Fertile soil (loess) deposited by floods enabled farming',
      'Early Chinese civilisations settled along its banks',
      'Provided water for drinking, irrigation and transport',
      'The Shang and Zhou dynasties formed along the Yellow River',
    ]
  },
  {
    title: 'Floods — "China\'s Sorrow"',
    points: [
      'The river carried enormous amounts of yellow silt (loess)',
      'Silt raised the riverbed, causing frequent floods',
      'Floods destroyed crops, homes and caused famines',
      'The Han dynasty built large flood-control projects',
      'Millions of people died from Yellow River floods across history',
    ]
  },
  {
    title: 'Connection to Dynasties',
    points: [
      'Qin and Han empires both managed the Yellow River',
      'Flood control was a key duty of emperors',
      'Failure to manage floods could cause rebellions',
      'The Yellow Turban Rebellion (which ended the Han) was partly caused by flooding and famine',
    ]
  },
];

const yrCards = document.getElementById('ss-yellowriver-cards');
yellowRiverData.forEach(d => {
  const div = document.createElement('div');
  div.className = 'info-card';
  div.innerHTML = `<h3>${d.title}</h3><ul>${d.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  yrCards.appendChild(div);
});

// Social Science Flashcards
cardDecks.ss = [
  { front: 'Who was the First Emperor of China?', back: 'Qin Shi Huang (221 BCE)' },
  { front: 'What dynasty did Liu Bang found?', back: 'The Han Dynasty (206 BCE)' },
  { front: 'What is the Chinese name for the Yellow River?', back: 'Huang He (黄河)' },
  { front: 'Why is the Yellow River called "China\'s Sorrow"?', back: 'Frequent devastating floods that destroyed crops and killed millions' },
  { front: 'What was the Silk Road?', back: 'A trade network opened by Emperor Wu, connecting China to Central Asia and beyond' },
  { front: 'What philosophy did the Han dynasty use?', back: 'Confucianism' },
  { front: 'What philosophy did the Qin dynasty use?', back: 'Legalism (strict laws and punishments)' },
  { front: 'What did Qin Shi Huang standardise?', back: 'Writing, currency, weights and measures' },
  { front: 'What is the Terracotta Army?', back: 'Over 8,000 life-size clay soldiers buried with Qin Shi Huang to protect him in the afterlife' },
  { front: 'When did the Han dynasty end?', back: '220 CE — due to the Yellow Turban Rebellion and internal conflict' },
  { front: 'What was invented during the Han dynasty?', back: 'Paper (and improvements to papermaking)' },
  { front: 'What was Emperor Wu\'s biggest military achievement?', back: 'Fighting off the Xiongnu nomads and expanding China\'s borders' },
  { front: 'How long did the Qin dynasty last?', back: 'Only 15 years (221–206 BCE)' },
  { front: 'Why did the Qin dynasty fall?', back: 'Harsh laws, heavy taxation, and peasant rebellions' },
  { front: 'What did the Yellow River\'s silt (loess) enable?', back: 'Extremely fertile farming land along the riverbanks' },
];

// SS Quiz
const ssQuizQuestions = [
  { question: 'Who was the first emperor of a unified China?', options: ['Liu Bang', 'Emperor Wu', 'Qin Shi Huang', 'Emperor Gaozu'], answer: 'Qin Shi Huang' },
  { question: 'What dynasty did Liu Bang found after overthrowing the Qin?', options: ['Tang Dynasty', 'Zhou Dynasty', 'Ming Dynasty', 'Han Dynasty'], answer: 'Han Dynasty' },
  { question: 'What is the Chinese name for the Yellow River?', options: ['Chang Jiang', 'Huang He', 'Wei He', 'Hai He'], answer: 'Huang He' },
  { question: 'Why is the Yellow River sometimes called "China\'s Sorrow"?', options: ['It was too shallow to navigate', 'It frequently flooded and killed millions', 'It had no fish', 'It dried up every summer'], answer: 'It frequently flooded and killed millions' },
  { question: 'What famous structure did Qin Shi Huang help build?', options: ['The Forbidden City', 'The Terracotta Army', 'The Temple of Heaven', 'The Grand Canal'], answer: 'The Terracotta Army' },
  { question: 'What trade network did Emperor Wu open?', options: ['The Spice Route', 'The Silk Road', 'The Tea Road', 'The Dragon Road'], answer: 'The Silk Road' },
  { question: 'Which philosophy did the Qin dynasty use to rule?', options: ['Buddhism', 'Taoism', 'Legalism', 'Confucianism'], answer: 'Legalism' },
  { question: 'Which philosophy did the Han dynasty use to govern?', options: ['Legalism', 'Buddhism', 'Confucianism', 'Taoism'], answer: 'Confucianism' },
  { question: 'When did the Han dynasty end?', options: ['206 BCE', '100 CE', '220 CE', '400 CE'], answer: '220 CE' },
  { question: 'What was invented during the Han dynasty?', options: ['Gunpowder', 'Printing press', 'Paper', 'Compass'], answer: 'Paper' },
];
initQuiz('ss', ssQuizQuestions);

// ── INIT ALL CARDS ───────────────────────────
renderCard('jp');
renderCard('ss');
