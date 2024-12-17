const Questions=[
	{
		ques: "Name of the first university of India?",
    	options: [{ text: "Nalanda University", isCorrect: true },
    		{ text: "Taxshila University", isCorrect: false },
    		{ text: "Jawahar University", isCorrect: false },
    		{ text: "Dronacharya University", isCorrect: false }
    ]
	},
	{
		ques:"Name of the first deputy Prime Minister of India?",
		options: [{ text: "R.N. Shukla", isCorrect: false },
    		{ text: "V.R. Gill", isCorrect: false },
    		{ text: "Sardar Vallabh Bhai Patel", isCorrect: true },
    		{ text: "D.B. Mahawar", isCorrect: false }
		]
	},
	{
		ques:"Which of the following is the capital of Arunachal Pradesh?",
		options: [{ text: "Dispur", isCorrect: false },
    		{ text: "Itanagar", isCorrect: true },
    		{ text: "Imphal", isCorrect: false },
    		{ text: "Panaji", isCorrect: false }
		]
	},
	{
		ques:"Which of the following states is not located in the North?",
		options: [{ text: "Himachal Pradesh", isCorrect: false },
    		{ text: "Haryana", isCorrect: false },
    		{ text: "Jammu and Kashmir", isCorrect: false },
    		{ text: " Jharkhand", isCorrect: true }
		]
	},
	{
		ques:"Which is the largest coffee-producing state of India?",
		options: [{ text: "Arunachal Pradesh", isCorrect: false },
    		{ text: "Karnataka", isCorrect: true },
    		{ text: "Tamil Nadu", isCorrect: false },
    		{ text: "Kerala", isCorrect: false }
		]
	},
	{
		ques:"Which state has the largest area?",
		options: [{ text: "Maharashtra", isCorrect: false },
    		{ text: "Madhya Pradesh", isCorrect: false },
    		{ text: "Uttar Pradesh", isCorrect: false },
    		{ text: "Rajasthan", isCorrect: true }
		]
	},
	{
		ques:"Who among the following was Akbar’s revenue minister?",
		options: [{ text: "Todar Mal", isCorrect: true },
    		{ text: "Tansen", isCorrect: false },
    		{ text: "Raja Man Singh", isCorrect: false },
    		{ text: " Birbal", isCorrect: false }
		]
	},
	{
		ques:"Who among the following freedom fighters of India revived the Indian National Army ‘Azad Hind Fauj’ (which was formed in 1942 by Rash Behari Bose and Captain-General Mohan Singh) in the year 1943?",
		options: [{ text: "Subhas Chandra Bose", isCorrect: true },
    		{ text: "Mahatma Gandhi", isCorrect: false },
    		{ text: " Bhagat Singh", isCorrect: false },
    		{ text: "Jawaharlal Nehru", isCorrect: false }
		]
	},
	{
		ques:"The word India came from the Indus, called ______ in Sanskrit.",
		options: [{ text: "Adya", isCorrect: false },
    		{ text: "Sarvatr", isCorrect: false },
    		{ text: "Bhanuh", isCorrect: false },
    		{ text: "Sindhu", isCorrect: true }
		]
	},
	{
		ques:"Khinoor diamond was first founded in",
		options: [{ text: "UK/British", isCorrect: false },
    		{ text: "India", isCorrect: true },
    		{ text: "America", isCorrect: false },
    		{ text: "Sri Lanka", isCorrect: false }
		]
	},
]

var currQuestion=0;
var score=0;
var count=0;
var t=1;
var count1 = 30;
var interval = setInterval(function(){
  count1--;
  document.getElementById("count").innerHTML="Time:"+count1;
  //console.log(count1);
  if (count1 === 0){
    clearInterval(interval);
    count=5;
	loadNext();

  }
}, 1000);


loadQues();
function loadQues() {
	currQuestion=Math.floor(Math.random()*Questions.length);
    const question = document.getElementById("ques")
    const opt = document.getElementById("opts")
    question.textContent =(count+1)+"."+ Questions[currQuestion].ques;
    opt.innerHTML = ""
 
    for (let i = 0; i < 4; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
		const br=document.createElement("br");
        choice.type = "radio";
        choicesdiv.className = "answer";
		choice.name="ans";
		choice.className="form-check-input";
        choice.value = i;
        choiceLabel.textContent =Questions[currQuestion].options[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
function loadNext(){
	if (count < 4) {
        count++;
        loadQues();
    } else { 
		loadScore();
    }
}
function loadPrev(){
	count-=1;
	loadQues();
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="ans"]:checked').value);
    if (Questions[currQuestion].options[selectedAns].isCorrect) {
        score++;
        //console.log(score)
        loadNext();
    }
	else{
	loadNext();
	}
}
function loadScore(){
	document.getElementById("opts").remove()
	document.getElementById("ques").remove()
	document.getElementById("but").remove()
	document.getElementById("but").remove()
	document.getElementById("but1").remove()
	document.getElementById("count").remove()
	var s=document.getElementById("score")
	var h=document.createElement("h1");
	var but3=document.createElement("button");
    but3.innerHTML="<i class='fa fa-refresh fa-spin'></i>  "+"ReAttempt";
	h.innerHTML="your Score:"+score +"<br>"+" Correct Answers:"+score+"/5";
    but3.className="but1";
	but3.onclick=function(){window.location.reload()}
	s.appendChild(h);
    s.appendChild(but3);
	
}

