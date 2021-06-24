
var n;

function setup(){
createCanvas(400,400);
num1=createInput();
num1.position(5,60);


num2=createInput();
num2.position(200,60);

b1=createButton("ADD");
b1.position(100,200);
b1.mousePressed(add);


}
function draw(){
background("pink");

text("Number1",5,50);
text("Number2",200,50);

n1= parseInt(num1.value());
n2=parseInt(num2.value());
text("sum" + n ,200,200)

}
function add(){
    n=n1+n2;
    console.log(n1+n2);
}