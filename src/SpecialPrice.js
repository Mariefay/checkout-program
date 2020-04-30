class SpecialPrice {
  constructor(type, unitPrice, specialVolume, specialPrice) {
    this._type = type;
    this._unitPrice = unitPrice;
    this._specialVolume = specialVolume;
    this._specialPrice = specialPrice;
    this._quantity = 0;
  }

  get type() {
    return this._type;
  }
  get unitPrice() {
    return this._unitPrice;
  }
  get specialPrice() {
    return this._specialPrice;
  }
  get specialVolume() {
    return this._specialVolume;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  getPrice() {
    let price = this.unitPrice;
    this.quantity++;
    const realPrice = this.unitPrice * this.quantity;
    if (this.quantity === this.specialVolume) {
      price -= (realPrice - this.specialPrice);
      this.quantity = 0;
    }

    return price;
  }
}

module.exports = { SpecialPrice };
