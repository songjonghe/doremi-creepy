const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");


let fps = 60;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeleft = {
    currentX: 190,
    currentY: 85,
    targerX: 190,
    targerY: 85,
  };

  let eyeright = {
    currentX: 210,
    currentY: 85,
    targerX: 210,
    targerY: 85,
  };

  document.addEventListener("mousemove", (eleft) => {
    eyeleft.targerX = eleft.clientX;
    eyeleft.targerY = eleft.clientY;
    console.log(eyeleft);
  });
  document.addEventListener("mousemove", (eright) => {
    eyeright.targerX = eright.clientX;
    eyeright.targerY = eright.clientY;
  });


    let eyeHeight = 80;
    let alpha = 0.1;
    let clickCount = 0;

function draw() {
    setInterval(()=>{
        delta = Date.now() - then;
        let fps = 1000 / delta;
        then = Date.now();
        alpha += 0.5;
        eyeHeight += Math.sin(alpha) * 10;

      ctx.beginPath();
      ctx.clearRect(0, 0, 400, 400);
      ctx.fillStyle = "black";
      ctx.font = "20px Georgia";
      ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);
//đầu
    ctx.beginPath();
    ctx.arc(195,115, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "Yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
//tai trái

ctx.beginPath();
ctx.arc( 175, 30, 25,Math.PI,-7);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath()


//tai phải
ctx.beginPath();
ctx.arc( 230, 19, 18,Math.PI,7);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath()

 //mặt  
    ctx.beginPath();
    ctx.arc(200,140, 70, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //mặt trái
    ctx.beginPath();
    ctx.arc(195, 125, 80, Math.PI/2, 1.5* Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //mặt phải
    ctx.beginPath();
    ctx.arc(195, 125, 80, Math.PI/2, 1.5* Math.PI,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

 //miệng
    ctx.beginPath();
    ctx.arc(200, 150, 40, 0,  Math.PI);
    ctx.fillStyle = "#9F1F31";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
// lưỡi
    ctx.beginPath();
    ctx.arc(200, 185, 20, Math.PI,  0);
    ctx.fillStyle = "#E35841";
    ctx.fill();
    ctx.stroke(); 

 //mắt trái   
    ctx.beginPath();
    ctx.arc(180, 80, 20, 0,  2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(180, 60, 5, Math.PI,0); 
    ctx.stroke();
    ctx.closePath();
    
    
    
   //mắt phải 
    ctx.beginPath();
    ctx.arc(220, 80, 20, 0,  2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 60, 5, Math.PI,0); 
    ctx.stroke();
    ctx.closePath();
    
    
    //tròng trái
    ctx.beginPath();
    ctx.arc(eyeleft.currentX, eyeleft.currentY, 8, 0,  2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //tròng phải
    ctx.beginPath();
    ctx.arc(eyeright.currentX, eyeright.currentY, 7, 0,  2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //mũi
    ctx.beginPath();
    ctx.arc(200, 135, 12, 0,  2*Math.PI);
    ctx.fillStyle = "#CC6666";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200, 125, 10, Math.PI,0); 
    ctx.stroke();
    ctx.closePath();
    

    
//nơ
    ctx.beginPath();
    ctx.roundRect(140, 195, 120, 15, 20);
    ctx.fillStyle = "#33CCFF";
    ctx.fill();
    ctx.st
    ctx.stroke();
    ctx.closePath();
 


//chuông
    ctx.beginPath();
    ctx.arc(200, 210, 20, 0,  2*Math.PI);
    ctx.fillStyle = "#FBC343";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  //
    ctx.beginPath();
    ctx.moveTo(181, 195);
    ctx.lineTo(220, 195);

    ctx.moveTo(181, 202);
    ctx.lineTo(220, 202);

    ctx.moveTo(200, 215);
    ctx.lineTo(200, 230);
    ctx.stroke();
 // lỗ chuông
    ctx.beginPath();
    ctx.arc(200, 211, 6, 0,  2*Math.PI);
    ctx.fillStyle = "#987456";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

  
    if (eyeleft.currentX < eyeleft.targerX) {
        eyeleft.currentX += 1;
      } else if (eyeleft.currentX > eyeleft.targerX) {
        eyeleft.currentX -= 1;
      }

    if (eyeleft.currentX > 195) {
        eyeleft.currentX -= 1;
      }
    if (eyeleft.currentX < 170) {
        eyeleft.currentX += 1;
      }
    
    if (eyeleft.currentY < eyeleft.targerY) {
        eyeleft.currentY += 1;
      } else if (eyeleft.currentY > eyeleft.targerY) {
        eyeleft.currentY -= 1;
      }

    if (eyeleft.currentY > 90) {
        eyeleft.currentY -= 1;
      }
    if (eyeleft.currentY < 70) {
        eyeleft.currentY += 1;
      }
    


    if (eyeright.currentX < eyeright.targerX) {
        eyeright.currentX += 1;
      } else if (eyeright.currentX > eyeright.targerX) {
        eyeright.currentX -= 1;
      }

    
    if (eyeright.currentX > 230) {
        eyeright.currentX -= 1;
      }
    if (eyeright.currentX < 205) {
        eyeright.currentX += 1;
      }
    
    if (eyeright.currentY < eyeright.targerY) {
        eyeright.currentY += 1;
      } else if (eyeright.currentY > eyeright.targerY) {
        eyeright.currentY -= 1;
      }

      
    if (eyeright.currentY > 90) {
        eyeright.currentY -= 1;
      }
    if (eyeright.currentY < 70) {
        eyeright.currentY += 1;
      }

}, fpsInterval);
}
draw();