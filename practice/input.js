const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let vx = 10;
let vy = 10;
let gravity = 1;

function animate(){
	ctx.clearRect(0,0,800,800);

	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}


animate();

//event handler
function handleKeyDown(e){
	e.preventDefault();
	if(e.key == "s"){
		y = y + vy;
	}else if(e.key == "w"){
		y = y - vy;
	}else if(e.key == "d"){
		x = x + vx;
	}else if(e.key == "a"){
		x = x - vx;
	}
}

//event listener
document.addEventListener('keydown',handleKeyDown)



