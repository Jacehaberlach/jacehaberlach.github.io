let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function SkyHub() {
    clear();
    print("\nWelcome to the SkyCraft Hub!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBlackSmith," + "\n\tMuseum");
    
    function processInput(input){
        if (input.toLowerCase() === "blacksmith") {
            BlackSmith();
	} else if {
		(input.toLowerCase() === "museum") {
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
    print("\nYou are in the BlackSmith Shop!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tSkyHub," + "\n\tMines");
    
    function processInput(input){
        if (input.toLowerCase() === "skyhub") {
            SkyHub();
	} else if {
		(input.toLowerCase() === "mines") {
		Mines();
        } else {
            stayHere();
            waitThenCall(BlackSmith);
        }
    }
    waitForInput(processInput);
}

function Museum() {
	clear();
	print("\nWelcome to the Museum I advise you to not be in here unless you have the Zombie Head or else I will kill you!");
	print("\nGo back to the Hub or Else..." + 
	"\n\tSkyHub");

	function processInput(input){
	if (input.toLowerCase() === "skyhub") {
		SkyHub();
	} else {
		stayHere();
		waitThenCall(killUser);
	}
		waitForInput(processInput);
	}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            SkyHub();
    }
    waitForInput(processInput);
}


