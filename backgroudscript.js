color[] palette = {#63524D, #9F0F0E, #747275, #000000, #FFFFFF};
float x = random(width);
    void setup() {
      size($("canvas").width(),$("canvas").height());
      colorMode(HSB, 60, 100, 100, 100);
 background(random(width), random(height), random(80));
    }

    void draw() {
      x+=30;
  float r = random(5);
  noFill();
  strokeWeight(random(1, 15));
  stroke(palette[int(r)]);
  float y = random(height);
    float d = random(10, 250);
    rect(x, y, d, d);
  x = constrain(x, 0, width+250);
    }