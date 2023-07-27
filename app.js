let questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1991",
    b: "1996",
    c: "1998",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for",
    a: "Clear Sheet Style",
    b: "Cascading sheet Style",
    c: "Cascading Style sheet",
    d: "None of the above",
    correct: "c",
  },
  {
    que: "The default link color for hyperlinks",
    a: "Green",
    b: "Blue",
    c: "Purple",
    d: "Red",
    correct: "b",
  },
  {
    que: "Which tag is used to underline text?",
    a: "<a>",
    b: "<u>",
    c: "<b>",
    d: "<l>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<js>",
    c: "<scripting>",
    d: "<script>",
    correct: "d",
  },
  {
    que: "Choose the correct HTML element for the largest heading:",
    a: "<heading>",
    b: "<h1>",
    c: "<head>",
    d: "<h6>",
    correct: "b",
  },
  {
    que: "What is the correct HTML element for inserting a line break?",
    a: "<break>",
    b: "<br>",
    c: "<lb>",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "Choose the correct HTML element to define important text",
    a: "<important>",
    b: "<b>",
    c: "<strong>",
    d: "<i>",
    correct: "c",
  },
  {
    que: "Choose the correct HTML element to define emphasized text",
    a: "<i>",
    b: "<em>",
    c: "<italic>",
    d: "<u>",
    correct: "b",
  },
];

// loads the question
let index = 0;
let total = questions.length;
let correct = 0;
let right = 0;
let wrong = 0;
let quesbox = document.getElementById("quesbox");
let optinputs = document.querySelectorAll(".options");

let loadquest = () => {
  if (index == total) {
    return endquiz();
  }
  reset();
  let data = questions[index];
  quesbox.innerText = `${index + 1}) ${data.que}`;
  optinputs[0].nextElementSibling.innerText = data.a;
  optinputs[1].nextElementSibling.innerText = data.b;
  optinputs[2].nextElementSibling.innerText = data.c;
  optinputs[3].nextElementSibling.innerText = data.d;
};

// submit quiz
let submitquiz = () => {
  let data = questions[index];
  let ans = getanswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquest();
  return;
};

let getanswer = () => {
  let answer;
  optinputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

let reset = () => {
  optinputs.forEach((input) => {
    input.checked = false;
  });
};

let endquiz = () => {
  document.querySelector(".container").innerHTML = `
  <div style="text-align: center; height: 300px; display: flex;flex-direction: column; justify-content:center; align-items:center">
    <h3 style="font-size: 30px; padding-bottom: 20px;">Thank you for playing the quiz </h3>
    <h2 style="font-size: 35px"> ${right} / ${total} are correct</h2>
  </div>
  `;
};

loadquest();
