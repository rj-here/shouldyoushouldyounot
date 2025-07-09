function takePoints() {
alert("WARNING: This is to help you make a decision, easing your troubles. BUT, DO NOT FULLY GO WITH THE DECISION MADE HERE!");
var decisionPoints = 0;
var decision = prompt("Do you have a point to make? (Yes or No)");
while (decision == "yes" || decision == "Yes") {
    var point = document.getElementById("point").value;
    var pointValue = parseInt(document.getElementById("pointValue").value);
    decisionPoints += pointValue;
    decision = prompt("Do you have a point to make? (Yes or No)")
}
if (decisionPoints > 0) {
    alert("The points raised in making your decision are: " + decisionPoints + " points.\nThis sounds like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints < 0) {
    alert("The points raised in making your decision are: " + decisionPoints + " points.\nThis doesn't sound like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints == 0) {
    alert("The points raised in making your decision are: " + decisionPoints + " points.\nThis sounds like a decision, which if made is okay, and if not made, is also okay. It's not the end of the world and ultimately, the decision is yours!");
}
}