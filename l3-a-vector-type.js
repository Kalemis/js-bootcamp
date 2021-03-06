
class Vec {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    plus(vector) {
      this.y += vector.y;
      this.x += vector.x;
      return this;
    }

    minus(vector) {
      this.y -= vector.y;
      this.x -= vector.x;
      return this;
    }

    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
  }

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


// Source: https://eloquentjavascript.net/code/#6.1
// Could not find the solution myself, looked at the answer sheet and tried to understand it. 
// Now I understand it, just don't think there is any other way to do it better.
