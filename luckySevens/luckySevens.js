/** variable declarations **/	
var maxAmt=0;	
var maxRoll=0;
var numberOfRolls=0;
var dice1=0;
var dice2=0;
var diceTotal=0;
var maxArray= new Array;
var startingBet=0;
var gameMoney=0;	



	
	
/** main play function **/	
function play(){
	numberOfRolls=0;
	startingBet=0;
	maxArray=new Array;
	startingBet=document.getElementById("startingBet").value;
	maxArray.push(maxAmt);
	var gameMoney=+startingBet;
	if (startingBet>=1){
		while (gameMoney >=1){
			numberOfRolls+=1;
			dice1 = rollDice();
			dice2 = rollDice();
			diceTotal=dice1+dice2;
				if (diceTotal!==7){
					gameMoney-=1;
					maxArray.push(0);
				}else{
					gameMoney+=4;
					maxArray.push(gameMoney);
				}
		}
		dispalyResults();
		console.log(maxArray);
	}else{
		alert("You need to bet more money to play !!!");
	}
}






/** rolls one dice and return result **/	
function rollDice(){
	return Math.floor(Math.random() * 6) + 1;
}






function hideResults(){
	document.getElementById("results").style.display="none";
}





function dispalyResults(){
	document.getElementById("results").style.display="inline";
	document.getElementById("startingBetAmount").innerHTML="$ " + startingBet;
	document.getElementById("TotalRolls").innerHTML=numberOfRolls;
	document.getElementById("highestAmountWon").innerHTML="$ " +Math.max.apply(Math, maxArray);
	var value=Math.max.apply(Math, maxArray);
	document.getElementById("rollCountAtHighestWin").innerHTML=1+ maxArray.indexOf(value);
}