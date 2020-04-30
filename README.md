# checkout-program


This is my solution for this kata : http://codekata.com/kata/kata09-back-to-the-checkout/


## Installation

Clone this repositery and use the package manager npm to get started :

```bash
npm install
```

## Tests

You can find the test in the spec folder, under index.spec.js.
I have rewritten the test originally written in Ruby in the kata using Mocha and Chai, and kept the structure of the tests. 

You can run the tests by running the following command.

```bash
npm test
```

## Design choices

I wrote this code following Object Oriented principles and SOLID principles.
The Checkout class is the interface with th scan function and the total value of the items scanned. It is in this class that we pass the pricing rules to be set in the PricingStrategy class. The PricingStrategy class is acting like an interface - and could be declared as so in other languages than JavaScript - and allows for 2 types of pricingStrategies to be implemented (RegularPrice and SpecialPrice) although we could add more if needed (free products, end of the day reductions...). The SpecialPrice class is for the special volume offers that we find in the kata. There are a lot of other ways this kata could have been solved, by creating a product class to hold the items or using inheritance. I lok forward to discussing this solution with you and hear about the way you would have solved it !

