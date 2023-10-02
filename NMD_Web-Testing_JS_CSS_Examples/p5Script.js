const canvas= document.querySelector("#myCanvas");

//console.log(canvas);

const cArea = canvas.getContext("2d");
cArea.beginPath();
cArea.rect(100,100,100,100);
cArea.fill();