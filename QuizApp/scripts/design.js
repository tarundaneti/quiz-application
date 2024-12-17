const Questions=[
	{
		ques: "To make your website mobile friendly, you can make your website",
    	options: [{ text: "Responsive", isCorrect: true },
    		{ text: "Reactive", isCorrect: false },
    		{ text: "Fast Loading", isCorrect: false },
    		{ text: "Light", isCorrect: false }
    ]
	},
	{
		ques:"What does CSS stand for___",
		options: [{ text: "Current Style Sheets", isCorrect: false },
    		{ text: "Current Sheets Style", isCorrect: false },
    		{ text: " Cascading Style Sheets", isCorrect: true },
    		{ text: "Cascading Sheets Style", isCorrect: false }
		]
	},
	{
		ques:"Which of the following is true about Javascript",
		options: [{ text: " It is a server side scripting language", isCorrect: false },
    		{ text: "It is client side scripting language", isCorrect: true },
    		{ text: "It is a Software", isCorrect: false },
    		{ text: "It is a database", isCorrect: false }
		]
	},
	{
		ques:"Which of the following is true about PHP",
		options: [{ text: " It is a Software", isCorrect: false },
    		{ text: "It is a database", isCorrect: false },
    		{ text: "It is client side scripting language", isCorrect: false },
    		{ text: " It is a server side scripting language", isCorrect: true }
		]
	},
	{
		ques:"The _____ attribute can be used to display the background colour for a cell of a table.",
		options: [{ text: "CELLSPACING", isCorrect: false },
    		{ text: "BGCOLOR", isCorrect: true },
    		{ text: "COLOR", isCorrect: false },
    		{ text: "SIZE", isCorrect: false }
		]
	},
	{
		ques:"Neutral colors are",
		options: [{ text: " Black, Red, Green", isCorrect: false },
    		{ text: "Black, White, Red", isCorrect: false },
    		{ text: "Black, White, Blue", isCorrect: false },
    		{ text: " Black, White, Grey", isCorrect: true }
		]
	},
	{
		ques:"Which program is used by web clients to view the web pages?",
		options: [{ text: " Web browser", isCorrect: true },
    		{ text: "Protocol", isCorrect: false },
    		{ text: "Web server", isCorrect: false },
    		{ text: "Search Engine", isCorrect: false }
		]
	},
	{
		ques:"Which tag is used to identify the keywords describing the site?",
		options: [{ text: " Meta tag", isCorrect: true },
    		{ text: "Link Tag", isCorrect: false },
    		{ text: "Script Tag", isCorrect: false },
    		{ text: "Title Tag", isCorrect: false }
		]
	},
	{
		ques:"The value set by default in the the TARGET attribute is",
		options: [{ text: "_parent", isCorrect: false },
    		{ text: "_blank", isCorrect: false },
    		{ text: "_top", isCorrect: false },
    		{ text: "_self", isCorrect: true }
		]
	},
	{
		ques:"To program the behavior of web pages, the language used is",
		options: [{ text: "HTML", isCorrect: false },
    		{ text: "JavaScript", isCorrect: true },
    		{ text: "CSS", isCorrect: false },
    		{ text: "XML", isCorrect: false }
		]
	},
]
var currQuestion=0;
var score=0;
var count=0;
var count1 = 30;
var interval = setInterval(function(){
  count1--;
  document.getElementById("count").innerHTML="Time:"+count1;
  console.log(count1);
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
        console.log(score)
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
	var but=document.createElement("button");
    but.innerHTML="<i class='fa fa-refresh fa-spin'></i>  "+"ReAttempt";
	h.innerHTML="your Score:"+score +"<br>"+" Correct Answers:"+score+"/5";
    but.className="but1";
	but.onclick=function(){window.location.reload()}
	s.appendChild(h);
    s.appendChild(but);
}

