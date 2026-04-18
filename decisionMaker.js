function takePoints() {
var wordsToIgnore = [
    "kill", "k1ll", "k!ll", "ki11", "k!11", "k!l1", "k1l1",
    "die", "d1e", "d!e", "di3", "d!3",
    "suicide", "su!cide", "su1cide", "sui!cide", "suic!de", "suic1de",
    "destroy", "d3stroy", "d3str0y", "d3str@y", "d!stroy",
    "harm", "h@rm", "h4rm", "h!rm", "h4r!",
    "hurt", "h!rt", "h4rt", "h@rt",
    "abuse", "4buse", "ab!se", "abuse!", "abus3",
    "neglect", "n3glect", "n3gl3ct", "n3g!ect",
    "steal", "st3al", "st3@l", "st3@1", "st3@!",
    "lie", "l!e", "l1e", "l!3", "l13",
    "cheat", "ch3at", "ch3@t", "ch3@!",
    "manipulate", "man!pulate", "man1pulate", "man!pu1ate", "man!pu!ate",
    "exploit", "exp!oit", "exp10it", "exp!0it", "exp!0!t",
    "oppress", "0ppress", "0ppr3ss", "0ppr!ss", "0ppr3ss!",
    "discriminate", "d!scriminate", "d1scriminate", "d!scr!minate", "d!scr!m!nate",
    "bully", "bu11y", "bu!ly", "bu!1y", "bu!11y",
    "harass", "h@rass", "h4rass", "h!rass", "h4r@ss",
    "terror", "t3rror", "t3rr0r", "t3rr0r!", "t3rr0r1st",
    "assault", "ass@ult", "ass4ult", "ass!ult", "ass4u1t"
];
var inputText = prompt("What decision do you want to make?"); //Get the input text from the user, in the case of a decision.
if (wordsToIgnore.some(word => inputText.toLowerCase().includes(word))) { //Check if the input text contains any of the words to ignore
    alert("Sorry, but HARM IS NOT ALLOWED!\nThis decision maker is meant to help you make decisions that are not harmful to yourself or others. Please try again with a different decision.");
    return; //Exit the function if the input text contains any of the words to ignore
}
alert("WARNING: This is to help you make a decision, easing your troubles. BUT, DO NOT FULLY GO WITH THE DECISION MADE HERE!");
var decisionPoints = 0; //Initialize the decision points
var decision = prompt("Do you have a point to make? (Yes or No)"); //Add a point for making the decision
while (decision === "yes" || decision === "Yes") { //Loop running until user says no
    var point = prompt("Enter your point:"); //Get the point from the user
    if (wordsToIgnore.some(word => point.toLowerCase().includes(word))) { //Check if the input text contains any of the words to ignore
    alert("Sorry, but HARM IS NOT ALLOWED!\nThis decision maker is meant to help you make decisions that are not harmful to yourself or others. Please try again with a different decision.");
    return; //Exit the function if the input text contains any of the words to ignore
}
    var pointValue = parseInt(prompt("What is the value of this point?")); //Get the point's value from the user
    decisionPoints += pointValue; //Adding the "value" of the point for/against the decision
    decision = prompt("Do you have a point to make? (Yes or No)"); //Keep going until the user wishes to stop
}
if (decisionPoints > 0) {//Positive -> Good (probably)
    alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis sounds like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints < 0) {//Negative -> Bad (probably)
    alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis doesn't sound like a good decision to make. Ultimately, the decision is yours!");
}
else if (decisionPoints == 0) {//Neutral -> On you, but then back to square one!
    alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis sounds like a decision, which if made is okay, and if not made, is also okay. It's not the end of the world and ultimately, the decision is yours!");
}
}