function takePoints() {
var inputText = document.getElementById("inputText").value; //Get the input text from the user, in the case of a decision.
alert("WARNING: This is to help you make a decision, easing your troubles. BUT, DO NOT FULLY GO WITH THE DECISION MADE HERE!");
var decisionPoints = 0; //Initialize the decision points
var decision = prompt("Do you have a point to make? (Yes or No)"); //Add a point for making the decision
while (decision == 'y' || decision == 'Y') { //Loop running until user says no
    var point = document.getElementById("point").value;
    var pointValue = parseInt(document.getElementById("pointValue").value);
    decisionPoints += pointValue; //Adding the "value" of the point for/against the decision
    decision = prompt("Do you have a point to make? (Yes or No)"); //Keep going until the user wishes to stop
}
if (decisionPoints > 0) {//Positive -> Good (probably)
    alert("The points raised in making your decision of" + inputText + " are: " + decisionPoints + " points.\nThis sounds like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints < 0) {//Negative -> Bad (probably)
    alert("The points raised in making your decision of" + inputText + " are: " + decisionPoints + " points.\nThis doesn't sound like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints == 0) {//Neutral -> On you, but then back to square one!
    alert("The points raised in making your decision are: " + decisionPoints + " points.\nThis sounds like a decision, which if made is okay, and if not made, is also okay. It's not the end of the world and ultimately, the decision is yours!");
}
}