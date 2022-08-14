//Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(`draw circle with ${radius} radius using Factory function`);
    },
  };
}

const circle1 = createCircle(7);
circle1.draw();
