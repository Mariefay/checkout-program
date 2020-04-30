class RegularPrice {
  constructor(type, unitPrice) {
    this._type = type;
    this._unitPrice = unitPrice;
  }

  get type() {
    return this._type;
  }
  get unitPrice() {
    return this._unitPrice;
  }

  get units() {
    return this._units;
  }

  getPrice() {
    return this.unitPrice;
  }
}

module.exports = { RegularPrice };
