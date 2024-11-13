type Questions = {
  text: string;
  options: { [key: string]: string };
  answer: string;
};


const questions: Array<Questions> =
  [

    {
      text: "What is the capital of France?",
      options: {
        "A": "Berlin",
        "B": "Paris",
        "C": "London",
        "D": "Rome"
      },
      answer: "B"
    },
    {
      text: "Which planet is known as the 'Red Planet'?",
      options: {
        "A": "Earth",
        "B": "Mars",
        "C": "Jupiter",
        "D": "Saturn"
      },
      answer: "B"
    },
    {
      text: "Who painted the famous painting 'The Starry Night'?",
      options: {
        "A": "Vincent van Gogh",
        "B": "Claude Monet",
        "C": "Pablo Picasso",
        "D": "Leonardo da Vinci"
      },
      answer: "A"
    },
    {
      text: "What is the chemical symbol for gold?",
      options: {
        "A": "Ag",
        "B": "Au",
        "C": "Hg",
        "D": "Pb"
      },
      answer: "B"
    },
    {
      text: "Which author wrote 'To Kill a Mockingbird'?",
      options: {
        "A": "Jane Austen",
        "B": "J.K. Rowling",
        "C": "Harper Lee",
        "D": "J.R.R. Tolkien"
      },
      answer: "C"
    },
    {
      text: "What is the largest mammal species?",
      options: {
        "A": "Blue whale",
        "B": "Fin whale",
        "C": "Humpback whale",
        "D": "Gray whale"
      },
      answer: "A"
    },
    {
      text: "Which country invented the internet?",
      options: {
        "A": "United States",
        "B": "United Kingdom",
        "C": "Canada",
        "D": "Sweden"
      },
      answer: "A"
    },
    {
      text: "Who discovered gravity?",
      options: {
        "A": "Galileo Galilei",
        "B": "Sir Isaac Newton",
        "C": "Albert Einstein",
        "D": "Marie Curie"
      },
      answer: "B"
    },
    {
      text: "What is the largest planet in our solar system?",
      options: {
        "A": "Earth",
        "B": "Saturn",
        "C": "Jupiter",
        "D": "Uranus"
      },
      answer: "C"
    },
    {
      text: "Which artist painted 'The Mona Lisa'?",
      options: {
        "A": "Leonardo da Vinci",
        "B": "Michelangelo",
        "C": "Raphael",
        "D": "Caravaggio"
      },
      answer: "A"
    },
    {
      text: "What is the chemical symbol for silver?",
      options: {
        "A": "Ag",
        "B": "Au",
        "C": "Hg",
        "D": "Pb"
      },
      answer: "A"
    },
    {
      text: "Who wrote '1984'?",
      options: {
        "A": "George Orwell",
        "B": "Fyodor Dostoevsky",
        "C": "Jane Austen",
        "D": "Charles Dickens"
      },
      answer: "A"
    },
    {
      text: "What is the smallest country in the world?",
      options: {
        "A": "Vatican City",
        "B": "Monaco",
        "C": "Nauru",
        "D": "Tuvalu"
      },
      answer: "A"
    },
    {
      text: "Which element has the atomic number 6?",
      options: {
        "A": "Carbon",
        "B": "Oxygen",
        "C": "Nitrogen",
        "D": "Sulfur"
      },
      answer: "B"
    },
    {
      text: "Who discovered DNA structure?",
      options: {
        "A": "James Watson",
        "B": "Francis Crick",
        "C": "Rosalind Franklin",
        "D": "Gregor Mendel"
      },
      answer: "A"
    },
    {
      text: "What is the largest living organism?",
      options: {
        "A": "Blue whale",
        "B": "Great Barrier Reef",
        "C": "Amazon rainforest",
        "D": "Redwood forest"
      },
      answer: "B"
    },
    {
      text: "Which city hosted the Summer Olympics in 2012?",
      options: {
        "A": "London",
        "B": "Paris",
        "C": "Tokyo",
        "D": "Rio de Janeiro"
      },
      answer: "A"
    },
    {
      text: "Who painted 'The Last Supper'?",
      options: {
        "A": "Michelangelo",
        "B": "Raphael",
        "C": "Caravaggio",
        "D": "Leonardo da Vinci"
      },
      answer: "D"
    }
  ]

function displayQuiz(questions: Array<Questions>): void {
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit-btn");
  const failledQ: Array<any> = [];

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.style.backgroundColor = "white";
    questionElement.style.padding = "10px";
    questionElement.style.marginTop = "10px";
    questionElement.style.marginBottom = "10px";
    questionElement.style.boxShadow = "0px 0px 10px black";
    questionElement.style.borderRadius = "5px";
    questionElement.className = "question";

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${question.text}`
    questionElement.appendChild(questionText);

    const optionsElement = document.createElement("ul");
    Object.keys(question.options).forEach((key) => {
      const optionElement = document.createElement("li");
      optionElement.style.listStyleType = "none";
      optionElement.innerHTML = `<input type="radio" name="q${index}" value="${key}">${key}: ${question.options[key]}`;
      optionsElement.appendChild(optionElement);
    });
    questionElement.appendChild(optionsElement);

    quizContainer?.appendChild(questionElement);

  });
  submitButton?.addEventListener("click", () => {
    const answers: Array<any> = [];
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`) as HTMLInputElement;
      answers.push(selectedOption ? selectedOption.value : null);
      console.log(question.options)
    });

    let score: number = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
      } else {
        failledQ.push(questions.indexOf(question));

      }
    })
    console.log(answers);
    submitButton.setAttribute("disabled", "true");
    console.log(failledQ);
    failledQ.forEach((e) => {
      document.querySelectorAll(`#quiz-container .question:nth-child(${e + 1})`).forEach((el) => {
        (el as HTMLElement).style.color = 'red';
      })
    })

    // hightlight the correct answer
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        document.querySelectorAll(`#quiz-container .question:nth-child(${index + 1})`).forEach((el) => {
          (el as HTMLElement).style.backgroundColor = 'green';
        })
      }
    })

    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.textContent = `Your score is ${score} out of ${questions.length}.`;
      resultElement.style.color = score === questions.length ? 'green' : score === 0 ? 'red' : 'bule';
      resultElement.style.height = '100px';
      resultElement.style.textAlign = 'center';
      resultElement.style.display = 'flex';
      resultElement.style.justifyContent = 'center';
      resultElement.style.alignItems = 'center';
      resultElement.style.marginTop = '20px';
      resultElement.style.marginBottom = '20px';
      resultElement.style.backgroundColor ='white';
      resultElement.style.fontSize = '20px';
      resultElement.style.fontWeight = 'bold';
      resultElement.style.padding = '10px';
      resultElement.style.borderRadius = '5px';
    }
    const correctionsElement = document.createElement("corrections");
    const retakeButton = document.createElement("button");
    retakeButton.textContent = "Retake Quiz";
    retakeButton.style.marginTop = "10px";
    retakeButton.style.marginBottom = "10px";
    retakeButton.style.backgroundColor = "blue";
    retakeButton.style.color = "white";
    retakeButton.style.padding = "10px";
    retakeButton.style.borderRadius = "5px";
    retakeButton.addEventListener("click", () => {
      location.reload();
    })
    correctionsElement.appendChild(retakeButton);
    if (failledQ.length >= questions.length/2) {
      quizContainer?.appendChild(correctionsElement);
    }

  })

}
displayQuiz(questions);