var name = prompt("What is your name?");
alert(name);

var elemTesting = document.getElementById("testing");
// console.log(elemTesting);

elemTesting.innerHTML=name;

//images\cupcakes-2285209_1280.jpg

function MouseRollover(myImg){
    myImg.src="images/cupcakes-2285209_1280.jpg";
}
function MouseOut(myImg){
    myImg.src="images/cupcakesImage.jpg";
}