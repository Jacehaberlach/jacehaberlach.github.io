let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let inventory = 0;
let gotWeapons = false;
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
    print("Welcome to SkyCraft! Press any enter to start");

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

    if (!gotWeapons) {
        inventory += 5;
        gotWeapons = true;
    }

    print("\nYou are now in the BlackSmith Shop!");
    print("\nYou have been awarded with weapons that are worth five points fellow traveller.");
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

function Forest() {
	clear();

	print("\nYou have entered the Forest of Lost Souls.");
	print("\nGhostly figures surround you.");
	print("\n\tContinue");
	print("\n\tRun");

function processInput(input){
        if (input.toLowerCase() === "continue") {

            if (inventory >= 5) {
                print("\nYour weapons glow with power.");
                print("\nThe lost souls retreat from you.");
                print("\nYou survive the forest!");

		print("\nYou have found the Head of Zombies!");
                inventory += 20;
		
		print("\nA hidden passage opens in the trees...");
		print("\n\tPassage");
        	print("\n\tRun");
            } else {
                print("\nThe lost souls attack you!");
                waitThenCall(killUser);
            }

        } else if (input.toLowerCase() === "run") {
            Mines();
	} else if (input.toLowerCase() === "passage" && inventory >= 20) {
            SecretPassage();
        } else {
            stayHere();
            waitThenCall(Forest);
        }
    }

    waitForInput(processInput);
}

function SecretPassage() {
    clear();
    print("\nYou enter the secret passage hidden in the forest...");
    print("\nIt leads toward the ancient museum.");

    print("\n\tMuseum");
    print("\n\tForest");

    function processInput(input){
        if (input.toLowerCase() === "museum"){
            Museum();
        } else if (input.toLowerCase() === "forest"){
            Forest();
        } else {
            stayHere();
            waitThenCall(SecretPassage);
        }
    }

    waitForInput(processInput);
}

function Museum() {
	clear();
	print("\nYou enter the ancient Museum...");

	if (inventory >= 25){
	print("\nThe Museum Guardian appears!");
        print("\nIt sees the Zombie Head in your possession.");
        print("\nIt roars and prepares to attack!");

        print("\n\tFight");
        print("\n\tRun");

	function processInput(input){

            if (input.toLowerCase() === "fight") {
                BossFight();
            } else if (input.toLowerCase() === "run") {
                SecretPassage();
            } else {
                stayHere();
                waitThenCall(Museum);
            }

        }

        waitForInput(processInput);

	} else {

	print("\nThe Museum Guardian stares at you.");
        print("\n'You dare enter without the Zombie Head?!'");
        print("\nThe Guardian destroys you.");
		waitThenCall(killUser);
	}
}

start();
