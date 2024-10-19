/* eslint no-underscore-dangle: ["error", { "allow": ["_size", "_location"] }] */

class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](atr) {
    if (atr === 'number') {
      return this._size;
    }
    return this._location;
  }
}

export default HolbertonClass;
