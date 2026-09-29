// Dashboard buttons
function openLessons() {
    window.location.href = "lessons.html";
}

// Subject selection
function openSubject(subject) {
    window.location.href = "topics.html?subject=" + encodeURIComponent(subject);
}

// Topic selection
function openLesson(topic) {
    window.location.href = "lesson.html?topic=" + encodeURIComponent(topic);
}


// Lesson quick check
function checkAnswer() {
    document.getElementById("answer").innerHTML =
        "Correct answer: 5";
}


// Quiz
let score = 0;
let answered = [false, false, false];

function answerQuestion(question, correct) {

    if (answered[question] === true) {
        return;
    }

    answered[question] = true;

    if (correct === 1) {
        score++;
    }
}

function showScore() {

    localStorage.setItem("quizScore", score);

    document.getElementById("score").innerHTML =
        "Your score is: " + score + " / 3";

    if (score < 2) {

        document.getElementById("recommendation").innerHTML =
            "<h3>Weak Topic: Fractions</h3>" +
            "<p>You need more practice in Fractions.</p>" +
            "<p>Recommended: Review the Fractions lesson and try the quiz again.</p>";

    } else {

        document.getElementById("recommendation").innerHTML =
            "<h3>Good Performance!</h3>" +
            "<p>You have a good understanding of Fractions.</p>";
    }
}


// Topics
let subject = new URLSearchParams(window.location.search).get("subject");

let topics = {
    Mathematics: ["Fractions", "Geometry", "Algebra"],
    Science: ["Physics", "Chemistry", "Biology"],
    English: ["Grammar", "Vocabulary", "Communication"]
};

if (subject && topics[subject]) {

    document.getElementById("subjectTitle").innerHTML = subject;

    let cards = "";

    topics[subject].forEach(function(topic) {

        cards += `
            <div class="card">
                <div class="icon">📚</div>
                <h2>${topic}</h2>
                <p>Learn and practice ${topic}.</p>
                <button onclick="openLesson('${topic}')">
                    Learn Now
                </button>
            </div>
        `;

    });

    document.getElementById("topicCards").innerHTML = cards;
}
let selectedTopic =
    new URLSearchParams(window.location.search).get("topic");

let lessons = {

    Fractions: {
        description: "Learn the basics of fractions.",
        content: "A fraction represents a part of a whole. For example, in 3/4, 3 is the numerator and 4 is the denominator.",
        question: "What is the numerator in 5/8?",
        answer: "The numerator is 5."
    },

    Geometry: {
        description: "Learn about shapes, angles and measurements.",
        content: "Geometry is the study of shapes, sizes, angles and positions. Examples include triangles, circles and squares.",
        question: "How many sides does a triangle have?",
        answer: "A triangle has 3 sides."
    },

    Algebra: {
        description: "Learn about variables and equations.",
        content: "Algebra uses letters and numbers to represent unknown values. For example, x + 2 = 5.",
        question: "What is x in x + 2 = 5?",
        answer: "x = 3."
    },

    Physics: {
        description: "Learn the basics of force and motion.",
        content: "Physics is the study of matter, energy, force and motion. Force can change the motion of an object.",
        question: "What force pulls objects towards Earth?",
        answer: "Gravity."
    },

    Chemistry: {
        description: "Learn about matter and its properties.",
        content: "Chemistry is the study of matter and how substances change and interact with each other.",
        question: "What is the chemical formula for water?",
        answer: "H₂O."
    },

    Biology: {
        description: "Learn about living organisms.",
        content: "Biology is the study of living organisms such as plants, animals and microorganisms.",
        question: "What is the basic unit of life?",
        answer: "The cell."
    },

    Grammar: {
        description: "Improve your English grammar.",
        content: "Grammar is the set of rules used to form correct sentences. It includes nouns, verbs, adjectives and more.",
        question: "What is a verb?",
        answer: "A verb is a word that shows an action or state."
    },

    Vocabulary: {
        description: "Improve your English vocabulary.",
        content: "Vocabulary means the collection of words that a person knows and uses.",
        question: "What is a synonym for 'happy'?",
        answer: "Joyful or glad."
    },

    Communication: {
        description: "Improve your communication skills.",
        content: "Good communication means expressing ideas clearly and listening carefully to others.",
        question: "Why is listening important in communication?",
        answer: "Listening helps us understand what another person is saying."
    }
};


if (selectedTopic && lessons[selectedTopic]) {

    document.getElementById("lessonTitle").innerHTML =
        selectedTopic;

    document.getElementById("lessonDescription").innerHTML =
        lessons[selectedTopic].description;

    document.getElementById("lessonContent").innerHTML =
        lessons[selectedTopic].content;

    document.getElementById("question").innerHTML =
        lessons[selectedTopic].question;

}


function checkLessonAnswer() {

    if (selectedTopic && lessons[selectedTopic]) {

        document.getElementById("answer").innerHTML =
            "Answer: " + lessons[selectedTopic].answer;

    }
}