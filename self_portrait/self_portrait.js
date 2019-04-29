function setup() {
createCanvas(500, 500);
}
// face 
function draw() {
background(143, 199, 238);
//face
fill(239, 211, 143);//skincolor
ellipse(200, 200, 197, 285);
ellipse(200, 200, 197, 285);
fill(251, 250, 247); //white eye
ellipse(160, 160 , 48, 50); //left eye
fill(5, 5, 5);//black eye left
ellipse(160, 160, 20, 20);//left eye
fill(251, 250, 247); //white eye
ellipse(240, 160, 48, 50); //right eye
fill(5, 5, 5); //black eye right
ellipse(240, 160, 20, 20); //right eye
fill(250, 199, 98);
triangle(200, 170, 200, 190, 215, 180);
//eye brows
strokeWeight(5);
line(150, 120, 175, 120);
line(225, 120, 250, 120);
fill(139,69,19);

}
