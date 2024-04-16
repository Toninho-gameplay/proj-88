
var canvas = new fabric.Canvas("myCanvas");

ball_X=0;
ball_Y=0;
hole_X=800;
hole_Y=400;
ball_obj=""
hole_obj=""

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function (Img) {
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_Y,
			left:hole_X
		});
		canvas.add(hole_obj);
	})
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",function (Img) {
		ball_obj= Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_Y,
			left:ball_X
		})
		canvas.add(ball_obj)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
E se a id coordenadas coincidem, para remover a imagem da bola
e exibir "Você atingiu o objetivo!!!" 
além de tornar a borda do canvas vermelha 'red'. */
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_X==hole_X)&&(ball_Y==hole_Y)) {
	canvas.remove(ball_obj)		
	document.getElementById("hd3").innerHTML="Você atijiu o objetivo"
	document.getElementById("myCanvas").style.borderColor="red"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_Y>5) {
			ball_Y= ball_Y -block_image_height;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function down()
	{
		if (ball_Y<=450) {
			ball_Y= ball_Y +block_image_height;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function left()
	{
		if(ball_X >5)
		{
			ball_X=ball_X-block_image_width;
			canvas.remove(ball_obj);
			newImage()
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X=ball_X+block_image_width;
			canvas.remove(ball_obj);
			newImage()
		}
	}
	
}

