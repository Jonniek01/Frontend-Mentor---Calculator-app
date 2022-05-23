/*CHANGING THEMES*/


//accessed the user's machine theme
localStorage.getItem('theme');
const body=document.getElementById("body")
const toggle1 = document.getElementById("theme1");
const toggle2 = document.getElementById("theme2");
const toggle3 = document.getElementById("theme3");

const theme = window.localStorage.getItem("theme");
if(theme!=""){
    body.classList.add("theme1")
    body.classList.add(theme);
}

toggle1.addEventListener("click", () => {
    if(body.classList.contains("theme2")){
        body.classList.remove("theme2");

    }
   if(body.classList.contains("theme3")){
        body.classList.remove("theme3");

    }
    body.classList.add("theme1");


     window.localStorage.setItem("theme", "theme1");
});
toggle2.addEventListener("click", () => {
    if(body.classList.contains("theme1")){
        body.classList.remove("theme1");

    }
    if(body.classList.contains("theme3")){
        body.classList.remove("theme3");

    }
    body.classList.add("theme2");



     window.localStorage.setItem("theme", "theme2");
});
toggle3.addEventListener("click", () => {
    if(body.classList.contains("theme2")){
        body.classList.remove("theme2");

    }
    if(body.classList.contains("theme1")){
        body.classList.remove("theme1");

    }
    body.classList.add("theme3");


     window.localStorage.setItem("theme", "theme3");
});

/*CALCULATOR LOGIC*/


function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}