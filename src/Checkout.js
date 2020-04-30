const {PricingStrategy} = require('./PricingStrategy')

class Checkout {
  constructor(pricingRules) {
    this._total = 0;
    this._pricing = new PricingStrategy(pricingRules);
  }

  get total() {
    return this._total;
  }

  set total(newTotal) {
    this._total = newTotal;
  }
  get pricing() {
    return this._pricing;
  }

  scan(item) {
    this.total += this.pricing.pricingRules.find(obj => obj.type === item).getPrice()
 
  }
}





module.exports = { Checkout };
