let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let inventory = 0;

//If you need, add any "helper" functions here
function killUser(){
	clear();
	print("\n💀 You have died!");
	print("\nThe Museum Guardian has killed you.");
	print("\nRestarting the game...");
	waitThenCall(start);
}

//Start of the game
function start(){
    clear();
    print("Welcome to SkyCraft! Press any key to start");

    function processInput(input){
        SkyHub();
    }

    waitForInput(processInput);
}

//Make one function for each location
function SkyHub() {
    clear();
    print("\nWelcome to the SkyCraft Hub!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBlackSmith" + "\n\tMuseum");
    
    function processInput(input){
        if (input.toLowerCase() === "blacksmith") {
            BlackSmith();
	} else if (input.toLowerCase() === "museum") {
		Museum();
        } else {
            stayHere();
            waitThenCall(SkyHub);
        }
    }	    
	waitForInput(processInput);
}

function BlackSmith() {
    clear();
    print("\nYou are now in the BlackSmith Shop!");
    print("\nYou have been awarded with weapons fellow traveller.");
    print("\nNow go, for the Head of Zombies awaits you!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tSkyHub" + "\n\tMines");
    
    function processInput(input){
        if (input.toLowerCase() === "skyhub") {
            SkyHub();
	} else if (input.toLowerCase() === "mines") {
		Mines();
        } else {
            stayHere();
            waitThenCall(BlackSmith);
        }
    }	
	    waitForInput(processInput);
}

function Mines() {
	clear();
	print("\nWelcome to the Mines fellow traveller.");
	print("\nThis is the path to the FOREST OF LOST SOULS...");
	print("\nI wish you the Best of luck in your travels.");
	print("\n\tSkyHub" + "\n\tBlackSmith" + "\n\tForest");

function processInput(input){
        if (input.toLowerCase() === "skyhub") {
            SkyHub();
	} else if (input.toLowerCase() === "blacksmith") {
		BlackSmith();
        } else if (input.toLowerCase() === "forest") {
		Forest();
	} else {
            stayHere();
            waitThenCall(Mines);
	}
    }

	    waitForInput(processInput);
}

function Museum() {
	clear();
	print("\nWhat are you doing in the Museum?");
	print("\nI advise you to not be in here unless you have the Zombie Head.");
	print("\nI suggest you go back to the Hub or else I will kill you!");
	print("\n\tSkyHub");

	function processInput(input){
	if (input.toLowerCase() === "skyhub") {
		SkyHub();
	} else {
		print("\nThe Museum Guardian becomes furious...");
		print("\nYou ignored the warning.");
		waitThenCall(killUser);
	}
	}
		waitForInput(processInput);
}

start();
