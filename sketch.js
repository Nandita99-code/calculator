var n1,n2;
var num1,num2;
var b1,b2,n_a,n_m;


function setup() {
  createCanvas(400, 400);
  num1= createInput();
  num1.position(5,60);
  num1.style("background-color","green");

  num2=createInput();
  num2.position(200,60)

 b1=createButton("ADD");
 b1.position(10,200);
 b1.mousePressed(add);
 b1.style("background-color","yellow");

 b2=createButton("MULTIPLY");
 b2.position(210,200);
 b2.mousePressed(multiply)
 b2.style("background-color","blue");



}

function draw() {
  background("pink");
 text("Number 1",70,50)
 text("Number 2",270,50)


  n1=parseInt(num1.value());
  n2=parseInt(num2.value());


push();
stroke("black");
strokeWeight(4)
fill("red");
textSize(20);
textStyle(BOLD);
text("The Sum is " + n_a ,100,270);
text("The Product is " + n_m ,100,300);
pop();
text(mouseX +","+ mouseY,mouseX,mouseY);

}
 function add(){
   n_a=n1+n2;
   console.log(n_a)
}
function multiply(){
  n_m=n1*n2;
  console.log(n_m)
}