var can = document.getElementById("Newcanvas");
	var Jctx = can.getContext("2d");


	// ***********For reactangle************** 

	// Jctx.fillStyle; //by default black color
	// Jctx.fillRect(30,40,100,50);  //distace from-x-axis, y-axis and width and height
	// Jctx.fillStyle ="#ffffff";
	// Jctx.fillRect(100,100,100,100); 
	// ***************************************************


	// ***************for line and strokes********
	Jctx.moveTo(10,10);
	Jctx.lineTo(180,300);
	Jctx.stroke();

	Jctx.strokeStyle='red';
	Jctx.lineWidth=9;

	Jctx.moveTo(180,300);
	Jctx.lineTo(360,10);
	Jctx.stroke();

	Jctx.moveTo(360,10);
	Jctx.lineTo(10,10);
	Jctx.stroke();
    // ******************************************************


// in second canvas2
// arc (x,y,r,start, stop)
var can1 = document.getElementById("Newcanvas1");
var Jctx1 = can1.getContext("2d");
Jctx1.beginPath();
Jctx1.arc(190,165,95,0,7);
Jctx1.lineWidth=10;
Jctx1.strokeStyle='white';
Jctx1.stroke();

// *************text strokes logo in canvas********
var can2 = document.getElementById("Newcanvas2");
	var Jctx2 = can2.getContext("2d");

Jctx2.font="40px verdana";
Jctx2.fillStyle='pink';

Jctx2.fillText("Rakesh Rajput", 50,150); // (text, distance from x-axis and y axis)
Jctx2.strokeText("Rakesh Rajput", 50,153);

// canvas 3 for images

var can3 = document.getElementById("Newcanvas3");
	var Jctx3 = can3.getContext("2d");
	var img = new Image();
	img.onload = function () {
		Jctx3.drawImage(img,30,30,100,100);// (img, distance from x, y width, height)
	}
	img.src="favicon.ico";













