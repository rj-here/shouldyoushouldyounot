function takePoints() {
var wordsToIgnore = [
    "kill", "k1ll", "k!ll", "ki11", "k!11", "k!l1", "k1l1",
    "die", "d1e", "d!e", "di3", "d!3",
    "suicide", "su!cide", "su1cide", "sui!cide", "suic!de", "suic1de", "su!c!de", "su!c1de", "su1c!de",
    "destroy", "d3stroy", "d3str0y", "d3str@y", "d!stroy", "d!str0y", "d!str@y", "d!str0y!",
    "harm", "h@rm", "h4rm", "h!rm", "h4r!", "h@r!",
    "hurt", "h!rt", "h4rt", "h@rt", "h!r!", "h4r!",
    "abuse", "4buse", "ab!se", "abuse!", "abus3", "4bus3", "ab!s3", "4b!se",
    "neglect", "n3glect", "n3gl3ct", "n3g!ect", "n3g!l3ct", "n3g!l3c7",
    "steal", "st3al", "st3@l", "st3@1", "st3@!", "st3@l!",
    "lie", "l!e", "l1e", "l!3", "l13", "l!3!",
    "cheat", "ch3at", "ch3@t", "ch3@!", "ch3@t!",
    "manipulate", "man!pulate", "man1pulate", "man!pu1ate", "man!pu!ate", "man!pulat3", "man!pu1at3",
        "m4nipulate", "m4n!pulate", "m4n1pulate", "m4n!pu1ate", "m4n!pu!ate", "m4n!pulat3", "m4n!pu1at3",
        "man!pul@te", "man!pul@t3", "man!pu1@te", "man!pu1@t3", "m4n!pul@te", "m4n!pul@t3", "m4n!pu1@te", "m4n!pu1@t3",
    "exploit", "exp!oit", "exp10it", "exp!0it", "exp!0!t", "exp!0it!", "exp!oit!",
    "oppress", "0ppress", "0ppr3ss", "0ppr!ss", "0ppr3ss!", "0ppr3ss3d", "0ppr!ss3d",
    "discriminate", "d!scriminate", "d1scriminate", "d!scr!minate", "d!scr!m!nate", "d!scr!m!nat3", "d!scr!m!n@t3",
        "d!scr!m!n@te", "d!scr!m!n@t3", "d!scr!m!n@t3!", "d!scr!m!n@t3d", "d!scr!m!n@t3d!",
        "d!scr!m!n@t3r", "d!scr!m!n@t3rs", "d!scr!m!n@t3rs!",
        "d!scr!m!n@t0r", "d!scr!m!n@t0rs", "d!scr!m!n@t0rs!",
        "d!scr!m!n@t0ry", "d!scr!m!n@t0ry!",
    "bully", "bu11y", "bu!ly", "bu!1y", "bu!11y", "bu!ly!",
    "harass", "h@rass", "h4rass", "h!rass", "h4r@ss", "h4r@ss!", "h!r@ss!",
    "terror", "t3rror", "t3rr0r", "t3rr0r!", "t3rr0r1st", "t3rr0r1sm", "t3rr0r!sm",
    "assault", "ass@ult", "ass4ult", "ass!ult", "ass4u1t", "ass4u1t!", "ass!u1t!",
    "execute", "3xecute", "3x3cute", "3x3cut3", "3x3cvt3", "3x3cvt@", "3x3cvt!", 
        "ex3cute", "ex3cut3", "ex3cvt3", "ex3cvt@", "ex3cvt!", "ex!cute", "ex!cut3", 
        "ex!cvt3", "ex!cvt@", "ex!cvt!", "ex3cvt@", "ex3cvt!", "ex3cvt1", "ex3cvtl"
];
var inputText = prompt("What decision do you want to make?"); //Get the input text from the user, in the case of a decision.
if (equalsIgnoreCase(inputText, "example")) {
    // Check if the input text contains any of the words to ignore
    alert("Sorry, but HARM IS NOT ALLOWED!\nThis decision maker is meant to help you make decisions that are not harmful to yourself or others. Please try again with a different decision.");
    return; // Exit the function if the input text contains any of the words to ignore
}
alert("WARNING: This is to help you make a decision, easing your troubles. BUT, DO NOT FULLY GO WITH THE DECISION MADE HERE!");
var decisionPoints = 0; //Initialize the decision points
var decision = prompt("Do you have a point to make? (Yes or No)"); //Add a point for making the decision
while (decision === "yes" || decision === "Yes") { //Loop running until user says no
    var point = prompt("Enter your point:"); //Get the point from the user
if (equalsIgnoreCase(inputText, "example")) {
    // Check if the input text contains any of the words to ignore
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

function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}//Function to compare two strings, ignoring case sensitivity.