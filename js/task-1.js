function makeTransaction(quantity, pricePerDroid) {
  console.log("You ordered <quantity> droids worth <totalPrice> credits!");
  const total = quantity * pricePerDroid;
  console.log(total);
  return total;
}

const message = "You ordered <quantity> droids worth <totalPrice> credits!";
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// document.body.textContent = makeTransaction(quantity, pricePerDroid);
