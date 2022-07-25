const quizData = [
    {
        question:"Who is the Prime minister of India?",
        a:"Manmohan Singh",
        b:"Nitesh Kumar",
        c:"Narendra Modi",
        d:"Shushil Modi",
        correct:"c",
    },
    {
        question:"Who is the governor of bihar?",
        a:"Phagu Chauhan",
        b:"Nitesh Kumar",
        c:"RamNath Kovind",
        d:"Sushil Modi",
        correct:"a",
    },
    {
        question:"In which state Kedarnath temple is located?",
        a:"Uttar Pradesh",
        b:"Himachal Pradesh",
        c:"Uttarakhand",
        d:"Jharkhand",
        correct:"c",
    },
    {
        question:"Where is the capital of Rajasthan?",
        a:"Raipur",
        b:"Jaipur",
        c:"Gandhi Nagar",
        d:"Shimla",
        correct:"b",
    },
    {
        question:"How many district are there in bihar?",
        a:"36",
        b:"38",
        c:"40",
        d:"41",
        correct:"b",
    }
]

const quizCon = document.getElementById("quizCon");
const question = document.getElementById("question");
const answers = document.querySelectorAll(".answers");
const opt_a = document.getElementById("opt_a");
const opt_b = document.getElementById("opt_b");
const opt_c = document.getElementById("opt_c");
const opt_d = document.getElementById("opt_d");
const submitBtn = document.getElementById("submit");

let currentQ = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelect();
    questionObj = quizData[currentQ];
    question.textContent = questionObj.question;
    opt_a.innerText = questionObj.a;
    opt_b.innerText = questionObj.b;
    opt_c.innerText = questionObj.c;
    opt_d.innerText = questionObj.d;
}

function getSelected(){
    let answer = undefined;
    answers.forEach((ele)=>{
        if(ele.checked == true)
            answer = ele.id;
    });

    return answer;
}

function deSelect(){
    answers.forEach((ele)=>{
        ele.checked = false;
    });
}

submitBtn.addEventListener("click",()=>{
    const ans = getSelected();
    if(ans)
    {
        if(ans==quizData[currentQ].correct)
            score++;

        currentQ++;
        if(currentQ<quizData.length)
            loadQuiz();
        else
        {
            quizCon.innerHTML = `
            <h2> You have scored ${score}/${quizData.length}</h2> 
            <button onClick = "location.reload()" >Reload</button> `;

        }

    }

});

