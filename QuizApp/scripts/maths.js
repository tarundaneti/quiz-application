const Questions=[
	{
		ques: "The octal number 473 in the decimal representation is equal to (in decimals)",
    	options: [{ text: "315", isCorrect: true },
    		{ text: "312", isCorrect: false },
    		{ text: "313", isCorrect: false },
    		{ text: "316", isCorrect: false }
    ]
	},
	{
		ques:"How many numbers can be made with the help of the digits 0, 1, 2, 3, 4, 5 which are greater than 3000 (repetition is not allowed)",
		options: [{ text: "180", isCorrect: false },
    		{ text: "360", isCorrect: false },
    		{ text: "1380", isCorrect: true },
    		{ text: "1500", isCorrect: false }
		]
	},
	{
		ques:"If one root of the equation x2 + px + 12 = 0 is 4, while the equation x2 + px + q = 0 has equal roots, then the value of q is ",
		options: [{ text: "8/19", isCorrect: false },
    		{ text: "49/4", isCorrect: true },
    		{ text: "4/49", isCorrect: false },
    		{ text: "19/8", isCorrect: false }
		]
	},
	{
		ques:" If x–coordinate of a point P on the join of Q (2, 2, 1) and R(5, 1, –2) is 4, then its z–coordinate is",
		options: [{ text: "-2", isCorrect: false },
    		{ text: "2", isCorrect: false },
    		{ text: "1", isCorrect: false },
    		{ text: "-1", isCorrect: true }
		]
	},
	{
		ques:"What percent of 7.2 is 6?",
		options: [{ text: "10%", isCorrect: false },
    		{ text: "8 1/3 %", isCorrect: true },
    		{ text: " 20%", isCorrect: false },
    		{ text: "15%", isCorrect: false }
		]
	},
	{
		ques:"What percentage is 3% of 5%?",
		options: [{ text: "45%", isCorrect: false },
    		{ text: "50%", isCorrect: false },
    		{ text: "15%", isCorrect: false },
    		{ text: "60%", isCorrect: true }
		]
	},
	{
		ques:"The difference in simple interest and compound interest on a certain sum of money in 2 years at 10 % p.a. is Rs. 50. The sum is",
		options: [{ text: "Rs. 5000", isCorrect: true },
    		{ text: "Rs. 6000", isCorrect: false },
    		{ text: " Rs. 10000", isCorrect: false },
    		{ text: " Rs. 2000", isCorrect: false }
		]
	},
	{
		ques:"The compound interest on a certain sum of money for 2 years is Rs. 208 and the simple interest for the same time at the same rate is Rs. 200. Find the rate %.",
		options: [{ text: "8%", isCorrect: true },
    		{ text: "5%", isCorrect: false },
    		{ text: "6%", isCorrect: false },
    		{ text: "7%", isCorrect: false }
		]
	},
	{
		ques:"What fraction of a millimeter is a nanometer?",
		options: [{ text: "One thousandth", isCorrect: false },
    		{ text: "One ten thousandth", isCorrect: false },
    		{ text: " One hundredth", isCorrect: false },
    		{ text: "One millionth", isCorrect: true }
		]
	},
	{
		ques:"Who is considered the father of Mathematics?",
		options: [{ text: "Eulier", isCorrect: false },
    		{ text: "Pythagorus", isCorrect: true },
    		{ text: "Euclid", isCorrect: false },
    		{ text: "Ramanajuna", isCorrect: false }
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

