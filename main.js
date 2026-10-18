
let questionsData = {};
let currentAnswer = '';

// Load questions from JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questionsData = data;
        console.log('Questions loaded successfully');
    })
    .catch(error => console.error('Error loading questions:', error));

function getRandomQuestion(letter) {
    if (!questionsData[letter] || questionsData[letter].length === 0) {
        return 'لا توجد أسئلة لهذا الحرف';
    }
    
    const questions = questionsData[letter];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionObj = questions[randomIndex];
    const question = Object.keys(questionObj)[0];
    // store current answer for later reveal
    currentAnswer = questionObj[question];
    return question;
}

function showQuestion(letter) {
    const question = getRandomQuestion(letter);
    document.getElementById("question-text").innerText = question;
    document.getElementById("popup").style.display = "block";
    // hide previous answer
    const answerEl = document.getElementById('answer-text');
    if (answerEl) {
        answerEl.style.display = 'none';
        answerEl.innerText = '';
    }
}

function showAnswer() {
    const answerEl = document.getElementById('answer-text');
    if (!answerEl) return;
    if (!currentAnswer) {
        answerEl.innerText = 'لا توجد إجابة متاحة';
    } else {
        answerEl.innerText = currentAnswer;
    }
    answerEl.style.display = 'block';
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
let i;
function getId(div){
    i=div.id;
}
function changeColor(col){
    let cels= document.querySelector(`#${i}`);

    cels.style.backgroundColor=col;
}
