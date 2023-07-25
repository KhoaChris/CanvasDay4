const WIDTH = 800,
  HEIGHT = 500;

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;

canvas.style.border = "5px solid black";

// Function to draw Doremi
function drawSpongebob(dx, dy) {
  //function draw body
  function drawBody(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 200, y);
    ctx.lineTo(x + 200, y + 250);
    ctx.lineTo(x, y + 250);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
  }

  function drawSideBody(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 250);
    ctx.lineTo(x + 70, y + 220);
    ctx.lineTo(x + 70, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
  }

  //function draw circle
  function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#DDE242";
    ctx.fill();
  }
  function drawBigCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#DDE242";
    ctx.fill();
  }

  //fuction draw eyes
  function drawEyes(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x - 20, y, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#00AAFC";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x - 22, y, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  //function draw nose
  function drawNose(x, y) {
    ctx.beginPath();
    ctx.ellipse(x, y - 50, 20, 60, 1.8, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
  }

  //function draw mouth
  function drawMouth(x, y) {
    ctx.beginPath();
    ctx.ellipse(x, y - 28, 50, 50, 0, 0, Math.PI);
    ctx.fillStyle = "#F08080";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x, y - 28, 50, 0, 0, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
  }

  //function draw teeths
  function drawTeeth(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(x - 125, y + 194, 25, 20);
    ctx.fillStyle = "white";
    ctx.fillRect(x - 90, y + 194, 25, 20);
    ctx.stroke();
    ctx.closePath();
  }

  //function draw shirt
  function drawShirt(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 199, y);
    ctx.lineTo(x + 199, y + 30);
    ctx.lineTo(x, y + 30);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  //function draw side shirt
  function drawSideShirt(x, y) {
    ctx.beginPath
    ctx.moveTo(x, y+70);
    ctx.lineTo(x, y + 100);
    ctx.lineTo(x + 70, y + 50);
    ctx.lineTo(x + 70, y+20);
    ctx.lineTo(x, y+70);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  //function draw pant
  function drawPant(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 199, y);
    ctx.lineTo(x + 199, y + 40);
    ctx.lineTo(x, y + 40);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = "#935116";
    ctx.fill();
    ctx.closePath();
  }

  //function draw side pant
  function drawSidePant(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y+70);
    ctx.lineTo(x, y + 110); // height of left line y
    ctx.lineTo(x + 70, y + 60); // height of right line y
    ctx.lineTo(x + 70, y+20);
    ctx.lineTo(x, y+70);
    ctx.stroke();
    ctx.fillStyle = "#935116";
    ctx.fill();
    ctx.closePath();
  }

  function drawPantBelt(x,y){
    ctx.beginPath();
    ctx.rect(x,y,50,10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawSideBelt(x,y){
    ctx.beginPath();
    ctx.moveTo(x, y+80);
    ctx.lineTo(x, y + 80); // height of left line y
    ctx.lineTo(x + 30, y + 60); // height of right line y
    ctx.lineTo(x + 30, y+48);
    ctx.lineTo(x, y+68);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  function drawCaravat(x,y){
    ctx.beginPath();
    ctx.moveTo(x + 25, y+3);
    ctx.lineTo(x  , y + 35);
    ctx.lineTo(x , y + 35);
    ctx.lineTo(x + 24, y + 70);
    ctx.lineTo(x+50, y+35);
    ctx.fillStyle = "#E33100";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(x,y,50,10);
    ctx.fillStyle = "#E33100";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawLegs(x,y){
    ctx.beginPath()
    ctx.rect(x,y,50,10);
    ctx.fillStyle = "#935116";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.rect(x+15,y+10,20,60);
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(x+15,y+30,20,40);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawShoes(x,y){
    ctx.beginPath();
    ctx.rect(x,y,15,20);
    ctx.fillStyle = "#935116";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawShoes2(x,y){
    ctx.beginPath();
    ctx.ellipse(x, y + 201, 9, 30, 1.6, 0, Math.PI);
    ctx.fillStyle = "#935116";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawShirtAround(x,y){
    ctx.beginPath();
    ctx.ellipse(x, y - 28, 25, 30, 3.15, 0, Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x, y - 28, 25, 0, 0, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(x-10,y-28,20,105);
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x-5, y + 75, 3, 20, 0.5, 0, Math.PI);
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.ellipse(x+3, y + 75, 3, 20, -0.5, 0, Math.PI);
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x, y + 75, 3, 20, 0, 0, Math.PI);
    ctx.fillStyle = "#FFFF01";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  //body drawing
  drawBody(dx - 100, dy - 200);
  drawSideBody(dx + 100, dy - 200);

  //circle drawing
  drawCircle(dx - 80, dy - 160);
  drawBigCircle(dx - 50, dy - 180);
  drawBigCircle(dx + 70, dy - 170);
  drawBigCircle(dx + 80, dy);
  drawBigCircle(dx - 60, dy + 20);
  drawCircle(dx + 60, dy + 30);
  drawCircle(dx + 150, dy - 90);
  drawBigCircle(dx + 120, dy - 60);
  drawCircle(dx + 120, dy - 160);

  //eyes drawing
  drawEyes(dx - 30, dy - 100);
  drawEyes(dx + 30, dy - 100);

  //nose drawing
  drawNose(dx, dy);

  //mouth drawing
  drawMouth(dx, dy);

  //teeth drawing
  drawTeeth(dx + 90, dy - 221);

  //shirt drawing
  drawShirt(dx - 100, dy + 50);
  drawSideShirt(dx+100,dy-20);

  //pant drawing
  drawPant(dx - 100, dy + 80);
  drawSidePant(dx+100,dy+10);
  drawPantBelt(dx -85, dy + 88);
  drawPantBelt(dx -23, dy + 88);
  drawPantBelt(dx + 40, dy + 88);
  drawSideBelt(dx + 105, dy +18);

  //caravat drawing
  drawCaravat(dx-25, dy + 50);

  //legs drawing
  drawLegs(dx-60, dy+121);
  drawLegs(dx+20, dy+121);

  //shoes drawing
  drawShoes(dx-38, dy+192);
  drawShoes(dx+43, dy+192);
  drawShoes2(dx - 37, dy);
  drawShoes2(dx + 45, dy);

  //shirt around drawing
  drawShirtAround(dx + 150, dy + 25);
}
drawSpongebob(WIDTH / 2, HEIGHT / 2);

function loop(){
  const FPS = 30;
  let frame = 1000/FPS;
  let dy=HEIGHT/2;
  let count = 2;

  //set interval là thời gian hoạt động sau một khoảng thời gian được quy định.
  setInterval(function(){
      if(dy > HEIGHT/2 + 50){
          count -= 10;
      }
      else if(dy < HEIGHT/2 - 50){
          count += 10;
      }
      ctx.clearRect(0,0,WIDTH,HEIGHT); 
      dy += count;
      drawSpongebob(WIDTH/2,dy);
  },frame);
}
loop();
