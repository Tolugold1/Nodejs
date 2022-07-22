var rect = require('./rectangle');

function Node(l, b) {
   console.log("Solving for area and perimeter of a rectangle with l " + l + " and b "+ b);
   rect(l, b, (err, rectangle) => {
      if (err) {
         console.log("Error:", err.message)
      } else {
         console.log("The perimeter of the rectangle with l " + l + " and b " + b + " is " + rectangle.perimeter());
         console.log("The area of the rectangle with l " + l + " and b " + b + " is " + rectangle.area())
      }
   });
   console.log("This statement is called after the call to rect()");
}

Node(2,4);
Node(3,5);
Node(0,5);
Node(-3,5);