export class Money {
  constructor({ amount = 0.0, currency = "" } = {}) {
    this.amount = amount;
    this.currency = currency;
  }
}
/*

export class Price {
  constructor(
    { sell: {amount = 0.0, currency = ""} = {}} = {},
    { rent = new Money() } = {},
    { gage = new Money() } = {}
  ) {
    this.sellPrice = sell;
    this.rentPrice = rent;
    this.gagePrice = gage;
  }
}

export function createPrice(sell, rent, gage) {
  return Object.freeze(new Price(sell, rent, gage));
}
*/
