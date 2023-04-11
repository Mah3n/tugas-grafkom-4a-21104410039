function setup() {
  createCanvas(640, 480);
  background(200);
}

function draw() {
  strokeWeight(4);
  translate(170, 20);

  beginShape();
  fill(255);
  stroke(13, 68, 158);
  rect(130, 86, 180, 250);
  endShape();
  
  translate(100, 30);
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 80);
  vertex(185, 80);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 100);
  vertex(185, 100);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 120);
  vertex(185, 120);
  endShape();
  
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 140);
  vertex(185, 140);
  endShape();
  
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 160);
  vertex(185, 160);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 180);
  vertex(185, 180);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 200);
  vertex(185, 200);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 220);
  vertex(185, 220);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 240);
  vertex(185, 240);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 260);
  vertex(185, 260);
  endShape();
  
  beginShape();
  stroke(13, 68, 158);
  vertex(10, 280);
  vertex(185, 280);
  endShape();
  
  beginShape();
  translate(-240, -40);
  scale(1.20);
  fill(13, 68, 158);
  stroke(13, 68, 158);
  vertex(100, 100);
  vertex(250, 70);
  vertex(250, 300);
  vertex(100, 270);
  endShape(CLOSE);
}