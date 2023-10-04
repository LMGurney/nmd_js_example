var button = document.querySelector("#myButton");

button.addEventListener('click', function(){
	let color = prompt("What color do you like? ");
	
	let body = document.querySelector('body');
	document.body.style.backgroundColor = color;

});


const canvas= document.querySelector("#myCanvas");

//console.log(canvas);

const cArea = canvas.getContext("2d");
cArea.beginPath();
cArea.rect(100,100,100,100);
cArea.fill();