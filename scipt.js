const questions = [
    {
        question: "Qual dessas linguagens é usada principalmente para desenvolvimento web front-end?",
        options: ["Python", "JavaScript", "Java", "C++"],
        answer: 1
    },
    {
        question: "Qual comando é usado para criar uma variável em Python?",
        options: ["var", "let", "const", "="],
        answer: 3
    },
    {
        question: "Qual estrutura de dados é ideal para armazenar pares chave-valor em JavaScript?",
        options: ["Array", "Set", "Map", "LinkedList"],
        answer: 2
    },
    {
        question: "Qual tag HTML é usada para criar um link clicável?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');
    const congratulationsMessage = document.getElementById('congratulations-message');

    if (currentQuestionIndex >= questions.length) {
        document.getElementById('result-message').style.display = 'block';
        questionContainer.style.display = 'none';
        nextButton.style.display = 'none';
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleOptionClick(index);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
    congratulationsMessage.style.display = 'none';
}

function handleOptionClick(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const congratulationsMessage = document.getElementById('congratulations-message');

    if (selectedIndex === question.answer) {
        congratulationsMessage.style.display = 'block';
        setTimeout(() => {
            congratulationsMessage.style.display = 'none';
            currentQuestionIndex++;
            showQuestion();
        }, 1000); // Tempo de exibição da mensagem de parabenização
    } else {
        document.getElementById('result-message').textContent = 'Resposta errada. Quiz encerrado.';
        document.getElementById('result-message').style.display = 'block';
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
    }
}

document.getElementById('next-button').onclick = showQuestion;

// Mostrar a primeira pergunta
showQuestion();