//Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(
      `draw circle with ${this.radius} radius using Constructor function`
    );
  };
}

const circle2 = new Circle(15);
circle2.draw();
