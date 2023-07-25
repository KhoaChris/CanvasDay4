const WIDTH = 1000, HEIGHT = 500

/**
 * @type {HTMLCanvasElement} 
 */
let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;

canvas.style.border = '5px solid black';

    function drawSmileFace(dx,dy){
        function drawEye(x,y){
            pen.beginPath();
            pen.arc(x, y, 50, 0, 2*Math.PI);
            pen.stroke();
            pen.fillStyle = 'white';
            pen.fill();
            pen.closePath();
    
            pen.beginPath();
            pen.arc(x, y, 20, 0, 2*Math.PI);
            pen.stroke();
            pen.fillStyle = 'black';
            pen.fill();
            pen.closePath();
        }
    
        function drawMouth(x,y){
            pen.beginPath();
            pen.arc(x, y, 100, 0, Math.PI);
            pen.stroke();
            pen.closePath();
            // let image = new Image();
            // image.src = 'https://i.pinimg.com/originals/4c/21/67/4c216707c422d5f438c86112604d6174.png';
            // pen.drawImage(image, x-100, y-100, 200, 200);
        }
    
        pen.beginPath();
        pen.arc(dx, dy, 200, 0, 2*Math.PI);
        pen.stroke();
        pen.fillStyle = 'yellow';
        pen.fill();
        // pen.closePath();
    
        drawEye(dx-100, dy-100);
        drawEye(dx+100, dy-100);
        drawMouth(dx, dy);
    }
drawSmileFace(WIDTH/2, HEIGHT/2);

    function loop(){
        const FPS = 15;
        let frame = 1000/FPS;
        let dy=HEIGHT/2;
        let count = 10;

        //set interval là thời gian hoạt động sau một khoảng thời gian được quy định.
        setInterval(function(){
            if(dy > HEIGHT/2 + 50){
                count -= 10;
            }
            else if(dy < HEIGHT/2 - 50){
                count += 10;
            }
            pen.clearRect(0,0,WIDTH,HEIGHT); 
            dy += count;
            drawSmileFace(WIDTH/2,dy);
        },frame);
    }
    loop();