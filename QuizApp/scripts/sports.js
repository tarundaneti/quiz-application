const Questions=[
	{
		ques: "Who is the only player to cross the 7000 run mark in Women’s One Day International?",
    	options: [{ text: "Mithali Raj", isCorrect: true },
    		{ text: "Charlotte Edwards", isCorrect: false },
    		{ text: "Belinda Clark", isCorrect: false },
    		{ text: "Hayley Mattews", isCorrect: false }
    ]
	},
	{
		ques:"Who among the following is the first Indian to score a century in Indian Premier League (IPL)?",
		options: [{ text: "Gautam Gambhir", isCorrect: false },
    		{ text: "Sachin", isCorrect: false },
    		{ text: "Manish Pandey", isCorrect: true },
    		{ text: "Rahul Dravid", isCorrect: false }
		]
	},
	{
		ques:"When was the first World Cup Football held?",
		options: [{ text: "1904", isCorrect: false },
    		{ text: "1930", isCorrect: true },
    		{ text: "1906", isCorrect: false },
    		{ text: "1912", isCorrect: false }
		]
	},
	{
		ques:"Which of the following country has hosted the Commonwealth Games maximum number of times?",
		options: [{ text: "India", isCorrect: false },
    		{ text: "Canada", isCorrect: false },
    		{ text: "Germany", isCorrect: false },
    		{ text: "Australia", isCorrect: true }
		]
	},
	{
		ques:"When was the concept of “Green Olympics” developed and put into practice?",
		options: [{ text: "2008", isCorrect: false },
    		{ text: "2000", isCorrect: true },
    		{ text: "2016", isCorrect: false },
    		{ text: "2003", isCorrect: false }
		]
	},
	{
		ques:"In Pole Vault, what material is the pole made up of?",
		options: [{ text: "Steel", isCorrect: false },
    		{ text: "Wood", isCorrect: false },
    		{ text: "Plastic", isCorrect: false },
    		{ text: "Carbon fibre or Fiberglass", isCorrect: true }
		]
	},
	{
		ques:"Which country will host the 2026 Winter Olympic Games?",
		options: [{ text: "Italy", isCorrect: true },
    		{ text: "France", isCorrect: false },
    		{ text: "China", isCorrect: false },
    		{ text: "South korea", isCorrect: false }
		]
	},
	{
		ques:"In which year, the first Cricket World Cup was held?",
		options: [{ text: "1971", isCorrect: true },
    		{ text: "1983", isCorrect: false },
    		{ text: "1923", isCorrect: false },
    		{ text: "1947", isCorrect: false }
		]
	},
	{
		ques:"Which country won the gold medal in the Kabaddi in the 2018 Asian Games?",
		options: [{ text: "Bangladesh", isCorrect: false },
    		{ text: "Pakistan", isCorrect: false },
    		{ text: "india", isCorrect: false },
    		{ text: "Iran", isCorrect: true }
		]
	},
	{
		ques:"Who was the first Indian to win individual gold medal at the Commonwealth Games?",
		options: [{ text: "PT Usha", isCorrect: false },
    		{ text: "Milkha Singh", isCorrect: true },
    		{ text: "Dhyan Chad", isCorrect: false },
    		{ text: "paan Singh Tomar", isCorrect: false }
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
    but.innerHTML="<i class='fa fa-refresh fa-spin'></i> "+"ReAttempt";
	h.innerHTML="your Score:"+score +"<br>"+" Correct Answers:"+score+"/5";
    but.className="but1";
	but.onclick=function(){window.location.reload()}
	s.appendChild(h);
    s.appendChild(but);
}

