/* 
 
var name = prompt("What is you name?");
alert(name);

var elemTesting= document.getElementById("testing");
//console.log(elemTesting);

elemTesting.innerHTML=name;

//cupcakes-2285209_1280.jpg

function MouseRollover(myImg){
	myImg.src="images/cupcakes-2285209_1280.jpg";
}
function MouseOut(myImg){
	myImg.src="images/cupcakesImage.jpg";
}
 
 
 */
 
 function hideElement(){
 	var hideDiv = document.getElementById("hideMe");
 	if ( hideDiv.style.display ==="none"){
 		hideDiv.style.display = "block";
 	}else{
 		hideDiv.style.display = "none";
 	}
 }
 
 function thumbs(thumb){
 	thumb.classList.toggle('fa-thumbs-down');
 }
 