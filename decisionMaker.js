function takePoints() {
    var wordsToIgnore = [
        // Variations for "kill"
        "kill", "k1ll", "k!ll", "ki11", "k!11", "k!l1", "k1l1", "k!l!", "k1l!", "k!11!", "k1!1!",

        // Variations for "die"
        "die", "d1e", "d!e", "di3", "d!3", "d!3!", "d13!",

        // Variations for "suicide"
        "suicide", "su!cide", "su1cide", "sui!cide", "suic!de", "suic1de", "su!c!de", "su!c1de", "su1c!de",
        "5uicide", "5u!cide", "5u1cide", "5ui!cide", "5uic!de", "5uic1de", "5u!c!de", "5u!c1de", "5u1c!de",

        // Variations for "destroy"
        "destroy", "d3stroy", "d3str0y", "d3str@y", "d!stroy", "d!str0y", "d!str@y", "d!str0y!",
        "d3$tr0y", "d3$tr@y", "d!$tr0y", "d!$tr@y", "d!$tr0y!",

        // Variations for "harm"
        "harm", "h@rm", "h4rm", "h!rm", "h4r!", "h@r!", "h4r!", "h@rm!", "h4rm!", "h!rm!",

        // Variations for "hurt"
        "hurt", "h!rt", "h4rt", "h@rt", "h!r!", "h4r!", "h!r7", "h4r7", "h!r!", "h4r!",

        // Variations for "abuse"
        "abuse", "4buse", "ab!se", "abuse!", "abus3", "4bus3", "ab!s3", "4b!se", "4bu$e", "4bu$3", "4b!$3",

        // Variations for "neglect"
        "neglect", "n3glect", "n3gl3ct", "n3g!ect", "n3g!l3ct", "n3g!l3c7", "n3g!l3c7!", "n3g!l3c7!",

        // Variations for "steal"
        "steal", "st3al", "st3@l", "st3@1", "st3@!", "st3@l!", "5teal", "5t3al", "5t3@l", "5t3@1", "5t3@!",

        // Variations for "lie"
        "lie", "l!e", "l1e", "l!3", "l13", "l!3!", "l!3!", "l!3!",

        // Variations for "cheat"
        "cheat", "ch3at", "ch3@t", "ch3@!", "ch3@t!", "ch34t", "ch34t!", "ch34@", "ch34@!",

        // Variations for "manipulate"
        "manipulate", "man!pulate", "man1pulate", "man!pu1ate", "man!pu!ate", "man!pulat3", "man!pu1at3",
        "m4nipulate", "m4n!pulate", "m4n1pulate", "m4n!pu1ate", "m4n!pu!ate", "m4n!pulat3", "m4n!pu1at3",
        "man!pul@te", "man!pul@t3", "man!pu1@te", "man!pu1@t3", "m4n!pul@te", "m4n!pul@t3", "m4n!pu1@te", "m4n!pu1@t3",

        // Variations for "attack"
        "attack", "@ttack", "att@ck", "@tt@ck", "att4ck", "@tt4ck", "att4ck!", "@tt4ck!", "att@ck!", "@tt@ck!",
        "4ttack", "4tt@ck", "4tt4ck", "4tt4ck!", "4tt@ck!", "@tt4ck!", "@tt4ck", "@tt@ck!",
        "att4ck3", "@tt4ck3", "att@ck3", "@tt@ck3", "att4ck3!", "@tt4ck3!", "att@ck3!", "@tt@ck3!",
        "4tt4ck3", "4tt@ck3", "4tt4ck3!", "4tt@ck3!", "@tt4ck3!", "@tt@ck3!",

        // Variations for "annihilate"
        "annihilate", "@nnihilate", "ann!hilate", "@nn!hilate", "ann1hilate", "@nn1hilate",
        "ann!h!late", "@nn!h!late", "ann!h1late", "@nn!h1late", "ann!h!l@te", "@nn!h!l@te",
        "ann!h!l@t3", "@nn!h!l@t3", "ann!h1l@te", "@nn!h1l@te", "ann!h1l@t3", "@nn!h1l@t3",
        "4nnihilate", "4nn!hilate", "4nn1hilate", "4nn!h!late", "4nn!h1late", "4nn!h!l@te",
        "4nn!h!l@t3", "4nn!h1l@te", "4nn!h1l@t3", "@nn!h!l4te", "@nn!h!l4t3", "4nn!h!l4te",
        "4nn!h!l4t3", "ann!h!l4te", "ann!h!l4t3", "@nn!h!l4te", "@nn!h!l4t3",

         // Variations for "fire"
        "fire", "f1re", "f!re", "f!r3", "f1r3", "f!r3!", "f1r3!", "f!re!", "f1re!", 
        "f!r@", "f1r@", "f!r@!", "f1r@!", "f!r3@", "f1r3@", "f!r3@!", "f1r3@!",

        // Variations for "flame"
        "flame", "f1ame", "f!ame", "f1am3", "f!am3", "flam3", "fl@m3", "fl@me", 
        "f!@me", "f1@me", "f!@m3", "f1@m3", "fl@m3!", "fl@me!", "f!@me!", "f1@me!",

        // Variations for "burn"
        "burn", "b!rn", "b1rn", "b!r!", "b1r!", "b!rn!", "b1rn!", "b!r@", "b1r@", 
        "b!r@!", "b1r@!", "b!rn@", "b1rn@", "b!rn@!", "b1rn@!"
    ];

    var inputText = prompt("What decision do you want to make?"); // Get the input text from the user

    // Check if the input text contains any of the words to ignore
    if (wordsToIgnore.some(word => inputText.toLowerCase().includes(word))) {
        alert("Sorry, but HARM IS NOT ALLOWED!\nThis decision maker is meant to help you make decisions that are not harmful to yourself or others. Please try again with a different decision.");
        return; // Exit the function completely
    }

    alert("WARNING: This is to help you make a decision, easing your troubles. BUT, DO NOT FULLY GO WITH THE DECISION MADE HERE!");

    var decisionPoints = 0; // Initialize the decision points
    var decision = prompt("Do you have a point to make? (Yes or No)"); // Add a point for making the decision

    while (decision.toLowerCase() === "yes") { // Loop running until user says no
        var point = prompt("Enter your point:"); // Get the point from the user
        var pointValue = parseInt(prompt("What is the value of this point?")); // Get the point's value from the user
        decisionPoints += pointValue; // Adding the "value" of the point for/against the decision
        decision = prompt("Do you have a point to make? (Yes or No)"); // Keep going until the user wishes to stop
    }

    if (decisionPoints > 0) { // Positive -> Good (probably)
        alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis sounds like a good decision to make. Ultimately, the decision is yours!");
    } else if (decisionPoints < 0) { // Negative -> Bad (probably)
        alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis doesn't sound like a good decision to make. Ultimately, the decision is yours!");
    } else { // Neutral -> On you, but then back to square one!
        alert("The points raised in making your decision of " + inputText + " are: " + decisionPoints + " points.\nThis sounds like a decision, which if made is okay, and if not made, is also okay. It's not the end of the world and ultimately, the decision is yours!");
    }
};