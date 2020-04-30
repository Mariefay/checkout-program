const { RegularPrice } = require("./RegularPrice");
const { SpecialPrice} = require("./SpecialPrice");

class PricingStrategy {
  constructor(pricingRules) {
    this._pricingRules = pricingRules.map(item => {
      if (item.hasOwnProperty("specialOffer")) {
        return new SpecialPrice(item.type, item.price, item.specialPriceVolume, item.specialPrice)
      }
      else {
        return new RegularPrice(item.type, item.price)
      }
    })
  }

  get pricingRules() {
    return this._pricingRules;
  }
}

module.exports = { PricingStrategy };
