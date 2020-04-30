const { expect } = require("chai");
const { Checkout } = require("../Checkout");

describe("checkout system, all items scanned are of different type", () => {
  it("should return the right total", () => {
    const price = (goods) => {
      pricingRules = [
        {
          type: "A",
          price: 50,
          specialOffer: true,
          specialPriceVolume: 3,
          specialPrice: 130,
        },
        {
          type: "B",
          price: 30,
          specialOffer: true,
          specialPriceVolume: 2,
          specialPrice: 45,
        },
        { type: "C", price: 20 },
        { type: "D", price: 15 },
      ];
      testCheckout = new Checkout(pricingRules);
      console.log(goods, 1)
      goods.split("").forEach((item) => {
        
        testCheckout.scan(item);
      });
      return testCheckout.total;
    };
    expect(price("")).to.eql(0);
    expect(price("A")).to.eql(50);
    expect(price("AB")).to.eql(80);
    expect(price("CBDA")).to.eql(115);
  });
});

describe("checkout system, all items scanned are of the same type", () => {
  it("should return the right total for any number of A, including the special offer", () => {
    const price = (goods) => {
      pricingRules = [
        {
          type: "A",
          price: 50,
          specialOffer: true,
          specialPriceVolume: 3,
          specialPrice: 130,
        },
        {
          type: "B",
          price: 30,
          specialOffer: true,
          specialPriceVolume: 2,
          specialPrice: 45,
        },
        { type: "C", price: 20 },
        { type: "D", price: 15 },
      ];
      testCheckout = new Checkout(pricingRules);
      goods.split("").forEach((item) => {
        testCheckout.scan(item);
      });
      return testCheckout.total;
    };
    expect(price("AA")).to.eql(100);
    expect(price("AAA")).to.eql(130);
    expect(price("AAAA")).to.eql(180);
    expect(price("AAAAA")).to.eql(230);
    expect(price("AAAAAA")).to.eql(260);
  });
});

describe("checkout system, mix of items scanned, with and without special offers", () => {
  it("should return the right total", () => {
    const price = (goods) => {
      pricingRules = [
        {
          type: "A",
          price: 50,
          specialOffer: true,
          specialPriceVolume: 3,
          specialPrice: 130,
        },
        {
          type: "B",
          price: 30,
          specialOffer: true,
          specialPriceVolume: 2,
          specialPrice: 45,
        },
        { type: "C", price: 20 },
        { type: "D", price: 15 },
      ];
      testCheckout = new Checkout(pricingRules);
      goods.split("").forEach((item) => {
        testCheckout.scan(item);
      });
      return testCheckout.total;
    };
    expect(price("AAAB")).to.eql(160);
    expect(price("AAABB")).to.eql(175);
    expect(price("AAABBD")).to.eql(190);
    expect(price("DABABA")).to.eql(190);
  });
});

describe("checkout system, incremental check (total is right after each item)", () => {
  it("should count the offers right after item is scanned", () => {
    pricingRules = [
      {
        type: "A",
        price: 50,
        specialOffer: true,
        specialPriceVolume: 3,
        specialPrice: 130,
      },
      {
        type: "B",
        price: 30,
        specialOffer: true,
        specialPriceVolume: 2,
        specialPrice: 45,
      },
      { type: "C", price: 20 },
      { type: "D", price: 15 },
    ];
    testCheckout = new Checkout(pricingRules);
    expect(testCheckout.total).to.eql(0);
    testCheckout.scan("A");
    expect(testCheckout.total).to.eql(50);
    testCheckout.scan("B");
    expect(testCheckout.total).to.eql(80);
    testCheckout.scan("A");
    expect(testCheckout.total).to.eql(130);
    testCheckout.scan("A");
    expect(testCheckout.total).to.eql(160);
    testCheckout.scan("B");
    expect(testCheckout.total).to.eql(175);
  });
});
