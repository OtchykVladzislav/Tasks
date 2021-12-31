var canvasHome = document.getElementById('canvasHome').getContext('2d');;
var canvasBycicle = document.getElementById('canvasBycicle').getContext('2d');
var canvasMen = document.getElementById('canvasMen').getContext('2d');

function draw(){
    function Home() {
        //frame
        canvasHome.clearRect(0,0,500,500)
        //head
        canvasHome.beginPath();
        canvasHome.moveTo(250,50);
        canvasHome.lineTo(425,150);
        canvasHome.lineTo(75,150);
        canvasHome.lineTo(250,50);
        canvasHome.fillStyle='red';
        canvasHome.fill();
        canvasHome.stroke();
        //Pipe
        canvasHome.beginPath();
        canvasHome.fillStyle='blue';
        canvasHome.ellipse(300, 50, 30, 10, 0, 0, Math.PI*2);
        canvasHome.arc(300,100,30,0,Math.PI,false);
        canvasHome.lineTo(270,50);
        canvasHome.fill();
        canvasHome.stroke();
        //main
        canvasHome.fillStyle = 'green'
        canvasHome.fillRect(100,150,300,300);
        //1 window
        canvasHome.beginPath();
        canvasHome.fillStyle='blue';
        canvasHome.rect(125,165,75,75);
        canvasHome.moveTo(125,202,5);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(162.5,165);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(200,202,5);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(162.5, 240);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //2 window
        canvasHome.beginPath();
        canvasHome.fillStyle='blue';
        canvasHome.rect(300,165,75,75);
        canvasHome.moveTo(300,202,5);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(337.5,165);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(375,202,5);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(337.5, 240);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //3 window
        canvasHome.beginPath();
        canvasHome.fillStyle='blue';
        canvasHome.rect(300,300,75,75);
        canvasHome.moveTo(300,337,5);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(337.5,300);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(375,337,5);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(337.5, 375);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //door
        canvasHome.beginPath();
        canvasHome.fillStyle='red';
        canvasHome.arc(175, 350, 50, 0, Math.PI, true);
        canvasHome.rect(125, 350, 100, 100);
        canvasHome.moveTo(175, 450)
        canvasHome.lineTo(175, 350);
        canvasHome.moveTo(150, 400);
        canvasHome.arc(150, 400, 5, 0, Math.PI * 2, true);
        canvasHome.moveTo(200, 400);
        canvasHome.arc(200, 400, 5, 0, Math.PI * 2, true);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
    }

    function Bycicle() {
        //frame
        canvasBycicle.clearRect(0,0,500,500)
        //elipse
        canvasBycicle.beginPath();
        canvasBycicle.arc(80, 350, 75, 0, Math.PI * 2, true);
        canvasBycicle.moveTo(240,350);
        canvasBycicle.arc(220, 350, 20, 0, Math.PI * 2, true);
        canvasBycicle.moveTo(485,350)
        canvasBycicle.arc(410, 350, 75, 0, Math.PI * 2, true);
        canvasBycicle.fillStyle='blue';
        canvasBycicle.closePath();
        canvasBycicle.fill();
        canvasBycicle.stroke();
        //cascade + pedals
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(70,350);
        canvasBycicle.lineTo(170,250);
        canvasBycicle.lineTo(350,200);
        canvasBycicle.lineTo(410,350);
        canvasBycicle.lineTo(350,200);
        canvasBycicle.lineTo(220,350);
        canvasBycicle.lineTo(260,360);
        canvasBycicle.lineTo(220,350);
        canvasBycicle.lineTo(70,350);
        canvasBycicle.moveTo(270,360);
        canvasBycicle.lineTo(240,360);
        canvasBycicle.moveTo(220,350);
        canvasBycicle.lineTo(180,340);
        canvasBycicle.moveTo(200,340);
        canvasBycicle.lineTo(170,340);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
        //seat
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(220,350);
        canvasBycicle.lineTo(170,250);
        canvasBycicle.lineTo(160,200);
        canvasBycicle.moveTo(190,200);
        canvasBycicle.lineTo(140,200);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
        //helm
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(350,200);
        canvasBycicle.lineTo(340,170);
        canvasBycicle.lineTo(390,170);
        canvasBycicle.lineTo(340,170);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
    }
    function Men() {
        //frame
        canvasMen.clearRect(0,0,500,500);
        //hat
        canvasMen.beginPath();
        canvasMen.fillStyle='black';
        canvasMen.lineWidth = 10;
        canvasMen.moveTo(250,20);
        canvasMen.lineTo(320,42);
        canvasMen.lineTo(290,120);
        canvasMen.lineTo(220,100);
        canvasMen.moveTo(320,42);
        canvasMen.ellipse(288,31,35,20, Math.PI * .10, 0, Math.PI * 2);
        canvasMen.moveTo(310,105);
        canvasMen.ellipse(260,100,55,20, Math.PI * .10, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        //head
        canvasMen.beginPath();
        canvasMen.lineWidth = 5;
        canvasMen.arc(250, 150, 50, 0, Math.PI * 2, true);
        canvasMen.moveTo(210,160);
        canvasMen.lineTo(230,165);
        canvasMen.bezierCurveTo(215, 161, 230, 150, 240, 167);
        canvasMen.moveTo(215,161);
        canvasMen.bezierCurveTo(180,160,220,145,215,161);
        canvasMen.moveTo(214,135);
        canvasMen.arc(215,135,4,0, Math.PI * 2, true);
        canvasMen.moveTo
        canvasMen.stroke();
        canvasMen.closePath();
        //mon
        canvasMen.beginPath();
        canvasMen.lineWidth = 1;
        canvasMen.fillStyle = 'gray';
        canvasMen.arc(245, 140, 10, 0, Math.PI * 2, true);
        canvasMen.lineTo(260,140);
        canvasMen.lineTo(260,210);
        canvasMen.lineTo(260,140);
        canvasMen.fill();
        canvasMen.stroke();
        canvasMen.closePath();
        //vino
        canvasMen.beginPath();
        canvasMen.lineWidth = 3;
        canvasMen.fillStyle = '#70080D';
        canvasMen.moveTo(174,250);
        canvasMen.lineTo(160,250);
        canvasMen.moveTo(167,250);
        canvasMen.lineTo(167,225);
        canvasMen.moveTo(182,210);
        canvasMen.arc(167, 210, 15, 0, Math.PI, false);
        canvasMen.moveTo(182,210);
        canvasMen.lineTo(182,200);
        canvasMen.moveTo(152,210);
        canvasMen.lineTo(152,200);
        canvasMen.moveTo(184,200);
        canvasMen.lineTo(151,200);
        canvasMen.fill();
        canvasMen.stroke();
        canvasMen.closePath();

        //body
        canvasMen.beginPath();
        canvasMen.lineWidth = 7;
        canvasMen.moveTo(250,200);
        canvasMen.lineTo(230,380);
        canvasMen.lineTo(260,500);
        canvasMen.lineTo(230,380);
        canvasMen.lineTo(210,500);
        canvasMen.lineTo(230,380);
        canvasMen.moveTo(246,240);
        canvasMen.lineTo(265,300);
        canvasMen.lineTo(220,290);
        canvasMen.moveTo(246,240);
        canvasMen.lineTo(200,260);
        canvasMen.lineTo(180,240);
        canvasMen.lineTo(160,240);
        canvasMen.stroke();
        canvasMen.closePath();
    }
    Home()
    Bycicle()
    Men()
}