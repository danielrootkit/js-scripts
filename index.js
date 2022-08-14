//Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(`draw circle with ${radius} radius using Factory function`);
    },
  };
}

//Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(
      `draw circle with ${this.radius} radius using Constructor function`
    );
  };
}

const circle1 = createCircle(7);
circle1.draw();

const circle2 = new Circle(15);
circle2.draw();
