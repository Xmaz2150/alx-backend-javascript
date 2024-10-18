/* eslint no-underscore-dangle: ["error", { "allow": ["_sqft"] }] */
class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
