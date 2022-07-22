module.exports = (x, y, callback ) => {
   if (x <= 0 || y <= 0) {
      setTimeout(() => {
         callback(new Error("Be serious! x and y must be greater than 0. x is " + x + " and y is " + y), null)
      }, 2000)
   } else {
      setTimeout(() => {
         callback(null, {
            perimeter: () => (2 * (x + y)),
            area: () => (x * y)
         })
      }, 2000)
   }
}