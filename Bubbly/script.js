
//artists recommended to listen to this program: playboi carti, mac miller (his old stuff), ASAP Rocky ofc
//drugs recommended; microdosing LSD, ecstasy (not yet FDA approved), edibles would likey be good
//want to try this with that virtual reality stuff... would be sick


var canvas = document.getElementById("paint"); //creation of canvas
var c = canvas.getContext("2d");
var tx = window.innerWidth;
console.log(tx)
var ty = window.innerHeight;
console.log(ty)


var dpi = window.devicePixelRatio;
canvas.setAttribute('height', canvas.clientHeight *dpi); //fixes pizelation issues 
canvas.setAttribute('width', canvas.clientWidth*dpi);


function createSquare(){
	this.height = randnum();
	this.posy = randy(); //position of square (y)
	this.posx = randx(); // position of square (x)
	this.vel = Math.random(); //accleration of square (mistakenly named vel)
	this.color = randColor(); // generates squares random color
	this.dy = Math.random(); // speed of box in y direction
	this.dx = Math.random(); // speed of box in x direction 
	this.update = function(){
		c.beginPath();
		c.fillStyle = this.color;
		c.fillRect(this.posx, this.posy, this.height, this.height);

	}


}

var square = [];
for(var i = 0; i < 1000; i++){    ///change the number of square pavers here
	square.push(new createSquare());
}
console.log(square)






function randnum() { //random number generator that controls the size of the squares
		let range = (tx/20);
		console.log(range)
		size = Math.round(Math.random()*(range));
		return size;
}




function randx(){
	return Math.floor(Math.random()*(tx)); //random number generator
}

function randy(){
		return Math.floor(Math.random()*(ty)); //another random number generater
}


function randColor(){  //random color generator
	console.log('Hello World')
	var color = '#';
	list = 'ABCDEF0123456789';
	for (var i = 0; i < 6; i++){
		color += list[Math.floor(Math.random()*16)];

//black and white... the classy acidtrip

/*	var color = '#';
 	var num = Math.round(Math.random());
 	if (num == 0) {
 		color += '000000';
 	}
 	else{
 		color += 'FFFFFF';
 	}*/
 
 }
	return color;
	

}






function animate(){
	if (tx != window.innerWidth || ty != window.innerHeight){
		var tx = window.innerWidth;
		var ty = window.innerHeight;
		c.width = tx;
		c.height = ty;
	}

requestAnimationFrame(animate);
	/*c.clearRect(0,0, tx, ty);*/ //make it so that its just rectangles floating around in spacce

for( var i = 0; i < square.length; i++){
		square[i].update();
	/*square[i].color +=1;*/ //cool effect to fade the screen into random monocolor
		square[i].vel = Math.random()/10;
		square[i].posx += square[i].dx;
		square[i].posy  += square[i].dy;	
		square[i].dy += square[i].vel;
		square[i].dx += square[i].vel;
		if((square[i].posy > canvas.height) || square[i].posy < 0){
			square[i].dy = -1*square[i].dy;
			//square.push(createSquare());

		}
		if ((square[i].posx > canvas.width) || (square[i].posx < 0)){
			square[i].dx = (-1*square[i].dx);
			//square.push(createSquare());

		}

}

}


animate();


//dancers- (noun) the weird dancing gifs that pop up at random time in a radom place; the idea is to have a shit ton of them so that you never see the same one... makes it v entertaining 
var dancers = document.getElementsByClassName('dancers'); //dancer stuff in the works
var IdStore = new Array();
for (var i = 0; i < dancers.length; i++){
	IdStore.push(dancers[i].id);
}
	console.log(IdStore)

setInterval(() => {

var show = Math.floor(Math.random()*(IdStore.length));
var element = document.getElementById(IdStore[show])
console.log(element.src)
var new_Img = new Image();
new_Img.src = element.src;
console.log(new_Img)

canvas.drawImage(new_Img, 500, 500, 200, 200);
console.log('draw')

// Math.round(Math.random()*c.width), Math.round(Math.random()*c.height), (Math.round(Math.random()*c.width)/2), (Math.round(Math.random()*c.height)/2)
},5000); //pace at which new dancers pop up


setInterval(() => {
var dancers = document.getElementsByClassName('dancers');
var show = Math.floor(Math.random()*(dancers.length));
console.log(show)
dancers[show].style.display = 'none';

},1000); // pace at which dancers are removed





