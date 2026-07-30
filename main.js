const subjects = ["English Language", "Mathematics", "Physics", "Chemistry"];

const questions = [
  // English (0-14)
  {
    subject: 0,
    text: "Choose the word that is nearest in meaning to the word BENEVOLENT.",
    options: ["Kind", "Hostile", "Greedy", "Lazy"],
    answer: 0,
  },
  {
    subject: 0,
    text: "Identify the figure of speech in: 'The classroom was a zoo during the party.'",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    answer: 1,
  },
  {
    subject: 0,
    text: "Choose the option that best completes the sentence: 'Neither the students nor the teacher _____ present.'",
    options: ["were", "was", "are", "have been"],
    answer: 1,
  },
  {
    subject: 0,
    text: "Which of the following is a synonym for ELOQUENT?",
    options: ["Quiet", "Fluent", "Shy", "Rude"],
    answer: 1,
  },
  {
    subject: 0,
    text: "The plural of 'phenomenon' is:",
    options: ["phenomenons", "phenomena", "phenomenas", "phenomenes"],
    answer: 1,
  },
  {
    subject: 0,
    text: "Identify the type of clause in: 'When he arrived, the meeting had started.'",
    options: [
      "Noun clause",
      "Relative clause",
      "Adverbial clause",
      "Coordinate clause",
    ],
    answer: 2,
  },
  {
    subject: 0,
    text: "Choose the correct spelling:",
    options: ["Accomodate", "Accommodate", "Acomodate", "Accommadate"],
    answer: 1,
  },
  {
    subject: 0,
    text: "The word VERBOSE means:",
    options: ["Brief", "Using too many words", "Silent", "Confusing"],
    answer: 1,
  },
  {
    subject: 0,
    text: "Which sentence is grammatically correct?",
    options: [
      "She don't like reading.",
      "She doesn't likes reading.",
      "She doesn't like reading.",
      "She not like reading.",
    ],
    answer: 2,
  },
  {
    subject: 0,
    text: "Choose the antonym of TRANSPARENT:",
    options: ["Clear", "Opaque", "Visible", "Shiny"],
    answer: 1,
  },
  {
    subject: 0,
    text: "A group of lions is called a:",
    options: ["Pack", "Flock", "Pride", "Herd"],
    answer: 2,
  },
  {
    subject: 0,
    text: "Which punctuation mark is used to show possession?",
    options: ["Comma", "Colon", "Apostrophe", "Hyphen"],
    answer: 2,
  },
  {
    subject: 0,
    text: "Choose the correctly punctuated sentence:",
    options: [
      "Its a hot day.",
      "It's a hot day.",
      "Its' a hot day.",
      "It is' a hot day.",
    ],
    answer: 1,
  },
  {
    subject: 0,
    text: "The literary device where an author addresses an absent person is called:",
    options: ["Allusion", "Apostrophe", "Irony", "Allegory"],
    answer: 1,
  },
  {
    subject: 0,
    text: "Which of these is a preposition?",
    options: ["Quickly", "Beautiful", "Beneath", "Running"],
    answer: 2,
  },

  // Mathematics (15-29)
  {
    subject: 1,
    text: "Simplify: log₁₀(100) + log₁₀(10)",
    options: ["2", "3", "4", "1"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Find the value of x if 2x + 5 = 17",
    options: ["x = 4", "x = 6", "x = 5", "x = 3"],
    answer: 1,
  },
  {
    subject: 1,
    text: "What is the area of a circle with radius 7cm? (π = 22/7)",
    options: ["44 cm²", "154 cm²", "49 cm²", "22 cm²"],
    answer: 1,
  },
  {
    subject: 1,
    text: "If P = {1,2,3,4} and Q = {3,4,5,6}, find P ∩ Q",
    options: ["{1,2,3,4,5,6}", "{3,4}", "{1,2}", "{5,6}"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Solve: 3² + 4² = ?",
    options: ["14", "25", "7", "49"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Find the gradient of the line y = 3x + 7",
    options: ["7", "3", "-3", "1/3"],
    answer: 1,
  },
  {
    subject: 1,
    text: "What is 15% of 200?",
    options: ["20", "30", "25", "15"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Factorize: x² - 5x + 6",
    options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-6)(x+1)", "(x-1)(x-6)"],
    answer: 0,
  },
  {
    subject: 1,
    text: "The sum of interior angles of a hexagon is:",
    options: ["540°", "720°", "360°", "900°"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Convert 0.75 to a fraction in its lowest terms:",
    options: ["3/5", "3/4", "7/10", "75/10"],
    answer: 1,
  },
  {
    subject: 1,
    text: "If sin θ = 0.5, what is θ?",
    options: ["30°", "45°", "60°", "90°"],
    answer: 0,
  },
  {
    subject: 1,
    text: "What is the HCF of 24 and 36?",
    options: ["6", "12", "4", "8"],
    answer: 1,
  },
  {
    subject: 1,
    text: "A car travels 120 km in 2 hours. What is its speed?",
    options: ["240 km/h", "60 km/h", "80 km/h", "50 km/h"],
    answer: 1,
  },
  {
    subject: 1,
    text: "Evaluate: ³√64",
    options: ["4", "8", "6", "2"],
    answer: 0,
  },
  {
    subject: 1,
    text: "The reciprocal of 2/5 is:",
    options: ["0.4", "5/2", "2/5", "10"],
    answer: 1,
  },

  // Physics (30-44)
  {
    subject: 2,
    text: "What is the SI unit of electric current?",
    options: ["Volt", "Watt", "Ampere", "Ohm"],
    answer: 2,
  },
  {
    subject: 2,
    text: "Which of these is a scalar quantity?",
    options: ["Velocity", "Force", "Speed", "Acceleration"],
    answer: 2,
  },
  {
    subject: 2,
    text: "The speed of light in a vacuum is approximately:",
    options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
    answer: 1,
  },
  {
    subject: 2,
    text: "Newton's first law of motion is also known as the law of:",
    options: ["Gravitation", "Inertia", "Acceleration", "Action and Reaction"],
    answer: 1,
  },
  {
    subject: 2,
    text: "Which device converts mechanical energy to electrical energy?",
    options: ["Motor", "Transformer", "Generator", "Capacitor"],
    answer: 2,
  },
  {
    subject: 2,
    text: "What type of image does a concave mirror form when the object is at the focus?",
    options: [
      "Virtual, erect, diminished",
      "Real, inverted, magnified",
      "Image at infinity",
      "Virtual, erect, same size",
    ],
    answer: 2,
  },
  {
    subject: 2,
    text: "The formula for density is:",
    options: [
      "Mass × Volume",
      "Mass / Volume",
      "Volume / Mass",
      "Mass + Volume",
    ],
    answer: 1,
  },
  {
    subject: 2,
    text: "Which of the following is a good conductor of electricity?",
    options: ["Glass", "Rubber", "Copper", "Wood"],
    answer: 2,
  },
  {
    subject: 2,
    text: "What is the unit of frequency?",
    options: ["Meter", "Hertz", "Newton", "Joule"],
    answer: 1,
  },
  {
    subject: 2,
    text: "Which phenomenon explains why a straw appears bent in water?",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    answer: 1,
  },
  {
    subject: 2,
    text: "The energy stored in a stretched spring is:",
    options: [
      "Kinetic energy",
      "Chemical energy",
      "Elastic potential energy",
      "Thermal energy",
    ],
    answer: 2,
  },
  {
    subject: 2,
    text: "Ohm's Law states that V = ?",
    options: ["I/R", "IR", "R/I", "I+R"],
    answer: 1,
  },
  {
    subject: 2,
    text: "What is the acceleration due to gravity on Earth?",
    options: ["10 m/s", "9.8 m/s²", "8.9 m/s²", "10.5 m/s²"],
    answer: 1,
  },
  {
    subject: 2,
    text: "The process by which heat is transferred through a vacuum is:",
    options: ["Conduction", "Convection", "Radiation", "Absorption"],
    answer: 2,
  },
  {
    subject: 2,
    text: "A body is said to be in equilibrium when:",
    options: [
      "It moves at constant speed",
      "The net force on it is zero",
      "It accelerates uniformly",
      "It is in motion",
    ],
    answer: 1,
  },

  // Chemistry (45-59)
  {
    subject: 3,
    text: "What is the chemical formula for water?",
    options: ["H₂O₂", "HO", "H₂O", "H₃O"],
    answer: 2,
  },
  {
    subject: 3,
    text: "The atomic number of Carbon is:",
    options: ["12", "6", "14", "8"],
    answer: 1,
  },
  {
    subject: 3,
    text: "Which of these is an alkali metal?",
    options: ["Calcium", "Sodium", "Magnesium", "Iron"],
    answer: 1,
  },
  {
    subject: 3,
    text: "What type of bond is formed between Na and Cl in NaCl?",
    options: ["Covalent", "Metallic", "Ionic", "Hydrogen"],
    answer: 2,
  },
  {
    subject: 3,
    text: "The pH of a neutral solution is:",
    options: ["0", "7", "14", "5"],
    answer: 1,
  },
  {
    subject: 3,
    text: "What gas is produced when zinc reacts with dilute HCl?",
    options: ["Oxygen", "Chlorine", "Carbon dioxide", "Hydrogen"],
    answer: 3,
  },
  {
    subject: 3,
    text: "Which of these is a noble gas?",
    options: ["Nitrogen", "Chlorine", "Argon", "Fluorine"],
    answer: 2,
  },
  {
    subject: 3,
    text: "The process of a liquid turning into gas at its boiling point is called:",
    options: ["Condensation", "Sublimation", "Vaporization", "Fusion"],
    answer: 2,
  },
  {
    subject: 3,
    text: "What is the valency of Oxygen?",
    options: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    subject: 3,
    text: "Which gas makes up the largest percentage of air?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    answer: 2,
  },
  {
    subject: 3,
    text: "Rust is chemically known as:",
    options: [
      "Iron(II) oxide",
      "Iron(III) chloride",
      "Iron(III) oxide",
      "Iron sulphate",
    ],
    answer: 2,
  },
  {
    subject: 3,
    text: "An indicator that turns red in acid is:",
    options: [
      "Phenolphthalein",
      "Methyl orange",
      "Litmus paper",
      "Both B and C",
    ],
    answer: 3,
  },
  {
    subject: 3,
    text: "The number of moles in 18g of water (Molar mass = 18g/mol) is:",
    options: ["2 moles", "0.5 moles", "1 mole", "18 moles"],
    answer: 2,
  },
  {
    subject: 3,
    text: "Isotopes are atoms of the same element with different:",
    options: [
      "Atomic numbers",
      "Number of protons",
      "Number of neutrons",
      "Chemical properties",
    ],
    answer: 2,
  },
  {
    subject: 3,
    text: "Which of these is an example of a physical change?",
    options: [
      "Burning wood",
      "Rusting of iron",
      "Melting of ice",
      "Cooking an egg",
    ],
    answer: 2,
  },
];

let currentQ = 0;
let answers = new Array(60).fill(null);
let flagged = new Array(60).fill(false);
let timeLeft = 7200;
let timerInterval = null;
let examStarted = false;
let reviewing = false;
let currentCandidate = null;
let authMode = "login";
let registeredUsers = [];

const USERS_STORAGE_KEY = "jamb-cbt-users";
const DEMO_USER = {
  name: "DEMO CANDIDATE",
  regNumber: "21/7654321EF",
  dob: "2006-01-15",
  centre: "CBT SIMULATOR",
};

function loadUsers() {
  try {
    const savedUsers = JSON.parse(
      localStorage.getItem(USERS_STORAGE_KEY) || "[]",
    );
    if (Array.isArray(savedUsers) && savedUsers.length > 0) {
      registeredUsers = savedUsers;
    } else {
      registeredUsers = [DEMO_USER];
      saveUsers();
    }
  } catch (error) {
    registeredUsers = [DEMO_USER];
    saveUsers();
  }
}

function saveUsers() {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(registeredUsers));
  }
}

function setAuthMode(mode) {
  authMode = mode;
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const title = document.getElementById("auth-title");
  const desc = document.getElementById("auth-desc");
  const submitBtn = document.getElementById("auth-submit-btn");
  const loginHint = document.getElementById("login-hint");
  const loginBtn = document.getElementById("show-login-btn");
  const registerBtn = document.getElementById("show-register-btn");
  const errEl = document.getElementById("login-error");

  if (mode === "register") {
    title.textContent = "Create Account";
    desc.textContent = "Register a new candidate profile to start the exam.";
    submitBtn.textContent = "REGISTER →";
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    loginHint.style.display = "none";
    loginBtn.classList.remove("active");
    registerBtn.classList.add("active");
  } else {
    title.textContent = "Candidate Login";
    desc.textContent = "Enter your JAMB registration details to continue.";
    submitBtn.textContent = "LOGIN →";
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    loginHint.style.display = "block";
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  }

  errEl.classList.remove("show");
  errEl.textContent = "";
}

function showSplash(candidate) {
  const loginScreen = document.getElementById("login-screen");
  document.getElementById("splash-name").textContent = candidate.name;
  document.getElementById("splash-reg").textContent = candidate.regNumber;
  document.getElementById("splash-centre").textContent =
    candidate.centre || "CBT SIMULATOR";
  document.getElementById("header-candidate").textContent =
    candidate.name.toUpperCase();
  document.getElementById("header-centre").textContent =
    candidate.centre || "CBT SIMULATOR";
  loginScreen.style.opacity = "0";
  setTimeout(() => {
    loginScreen.style.display = "none";
    document.getElementById("splash").style.display = "flex";
  }, 500);
}

function doLogin() {
  if (authMode === "register") {
    const name = document.getElementById("name-input").value.trim();
    const reg = document
      .getElementById("reg-register-input")
      .value.trim()
      .toUpperCase();
    const dob = document.getElementById("dob-register-input").value;
    const centre = document
      .getElementById("centre-register-input")
      .value.trim();
    const errEl = document.getElementById("login-error");

    if (!name || !reg || !dob) {
      errEl.textContent =
        "Please fill in your full name, registration number, and date of birth.";
      errEl.classList.add("show");
      return;
    }

    const alreadyExists = registeredUsers.some(
      (user) => user.regNumber.toUpperCase() === reg,
    );
    if (alreadyExists) {
      errEl.textContent = "This registration number is already registered.";
      errEl.classList.add("show");
      return;
    }

    const newUser = {
      name,
      regNumber: reg,
      dob,
      centre: centre || "CBT SIMULATOR",
    };

    registeredUsers.push(newUser);
    saveUsers();
    currentCandidate = newUser;
    errEl.classList.remove("show");
    showSplash(newUser);
    return;
  }

  const reg = document.getElementById("reg-input").value.trim().toUpperCase();
  const dob = document.getElementById("dob-input").value;
  const errEl = document.getElementById("login-error");

  if (!reg || !dob) {
    errEl.textContent =
      "Please enter both your registration number and date of birth.";
    errEl.classList.add("show");
    return;
  }

  const matchedUser = registeredUsers.find(
    (user) => user.regNumber.toUpperCase() === reg && user.dob === dob,
  );
  if (!matchedUser) {
    errEl.textContent =
      "Invalid registration number or date of birth. Please try again.";
    errEl.classList.add("show");
    return;
  }

  currentCandidate = matchedUser;
  errEl.classList.remove("show");
  showSplash(matchedUser);
}

function startExam() {
  document.getElementById("splash").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementById("header-candidate").textContent = (
      currentCandidate?.name || "CANDIDATE"
    ).toUpperCase();
    document.getElementById("header-centre").textContent =
      currentCandidate?.centre || "CBT SIMULATOR";
    document.getElementById("subheader").style.display = "flex";
    document.getElementById("main").style.display = "grid";
    examStarted = true;
    buildGrid();
    renderQuestion();
    startTimer();
  }, 600);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  const display = `${pad(h)}:${pad(m)}:${pad(s)}`;
  const el = document.getElementById("timer-display");
  el.textContent = display;
  el.className = "";
  if (timeLeft <= 300) el.classList.add("danger");
  else if (timeLeft <= 600) el.classList.add("warning");
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

function renderQuestion() {
  const q = questions[currentQ];
  document.getElementById("q-counter").textContent =
    `Question ${currentQ + 1} of 60`;
  document.getElementById("q-subject-badge").textContent = subjects[q.subject];
  document.getElementById("current-subject-header").textContent =
    subjects[q.subject].toUpperCase();
  document.getElementById("question-text").textContent =
    `${currentQ + 1}. ${q.text}`;

  const list = document.getElementById("options-list");
  list.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.className = "option-item";

    if (reviewing) {
      if (i === q.answer) li.classList.add("correct");
      else if (answers[currentQ] === i && i !== q.answer)
        li.classList.add("wrong");
    } else {
      if (answers[currentQ] === i) li.classList.add("selected");
    }

    li.innerHTML = `<div class="opt-letter">${letters[i]}</div><div class="opt-text">${opt}</div>`;
    if (!reviewing) li.onclick = () => selectAnswer(i);
    list.appendChild(li);
  });

  const flagBtn = document.getElementById("flag-btn");
  flagBtn.className = "btn btn-flag" + (flagged[currentQ] ? " flagged" : "");
  flagBtn.textContent = flagged[currentQ] ? "🚩 Flagged" : "🚩 Flag";

  updateSubjectTabs();
  updateGrid();
}

function selectAnswer(i) {
  answers[currentQ] = i;
  renderQuestion();
  updateStats();
}

function toggleFlag() {
  flagged[currentQ] = !flagged[currentQ];
  renderQuestion();
  updateStats();
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQ < 59) {
    currentQ++;
    renderQuestion();
  }
}

function jumpToSubject(idx) {
  const start = [0, 15, 30, 45][idx];
  currentQ = start;
  renderQuestion();
}

function updateSubjectTabs() {
  const tabs = document.querySelectorAll(".subject-tab");
  const subjectStarts = [0, 15, 30, 45];
  tabs.forEach((tab, i) => {
    tab.classList.toggle(
      "active",
      currentQ >= subjectStarts[i] &&
        (i === 3 || currentQ < subjectStarts[i + 1]),
    );
  });
}

function buildGrid() {
  const grid = document.getElementById("q-grid");
  grid.innerHTML = "";
  for (let i = 0; i < 60; i++) {
    const b = document.createElement("div");
    b.className = "q-bubble";
    b.id = `bubble-${i}`;
    b.textContent = i + 1;
    b.onclick = () => {
      currentQ = i;
      renderQuestion();
    };
    grid.appendChild(b);
  }
}

function updateGrid() {
  for (let i = 0; i < 60; i++) {
    const b = document.getElementById(`bubble-${i}`);
    if (!b) continue;
    b.className = "q-bubble";
    if (flagged[i]) b.classList.add("flagged-q");
    else if (answers[i] !== null) b.classList.add("answered");
    if (i === currentQ) b.classList.add("current");
  }
}

function updateStats() {
  const ans = answers.filter((a) => a !== null).length;
  const flag = flagged.filter((f) => f).length;
  document.getElementById("stat-answered").textContent = ans;
  document.getElementById("stat-flagged").textContent = flag;
  document.getElementById("stat-remaining").textContent = 60 - ans;
}

function showConfirm() {
  const unanswered = answers.filter((a) => a === null).length;
  document.getElementById("confirm-msg").textContent =
    unanswered > 0
      ? `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`
      : "You have answered all questions. Ready to submit?";
  document.getElementById("confirm-overlay").classList.add("show");
}

function hideConfirm() {
  document.getElementById("confirm-overlay").classList.remove("show");
}

function getPerformanceMessage(percent) {
  if (percent >= 75)
    return "Excellent performance. You are ready for a strong UTME score.";
  if (percent >= 50)
    return "Good effort. You have a solid foundation and can improve further.";
  if (percent >= 30)
    return "Fair performance. Keep practicing to build confidence.";
  return "You are still building momentum. Keep revising and try again.";
}

function submitExam() {
  clearInterval(timerInterval);
  hideConfirm();

  let correct = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.answer) correct++;
  });
  const wrong = answers.filter(
    (a, i) => a !== null && a !== questions[i].answer,
  ).length;
  const unanswered = answers.filter((a) => a === null).length;
  const total = Math.round(correct * 2.5);
  const percent = Math.round((correct / 60) * 100);

  document.getElementById("result-message").textContent =
    getPerformanceMessage(percent);
  document.getElementById("r-total").textContent = total;
  document.getElementById("r-correct").textContent = correct;
  document.getElementById("r-wrong").textContent = wrong;
  document.getElementById("r-unanswered").textContent = unanswered;
  document.getElementById("r-percent").textContent = percent + "%";

  document.getElementById("result-screen").classList.add("show");
}

function reviewAnswers() {
  reviewing = true;
  document.getElementById("result-screen").classList.remove("show");
  currentQ = 0;
  renderQuestion();
}

function handleKeyboardInput(event) {
  if (!examStarted || reviewing) return;

  if (event.key >= "1" && event.key <= "4") {
    event.preventDefault();
    const optionIndex = Number(event.key) - 1;
    if (optionIndex < questions[currentQ].options.length) {
      selectAnswer(optionIndex);
    }
  } else if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    nextQuestion();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    prevQuestion();
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFlag();
  }
}

// Init
loadUsers();
setAuthMode("login");
document.addEventListener("keydown", handleKeyboardInput);
updateStats();
