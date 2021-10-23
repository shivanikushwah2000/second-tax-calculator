console.log("hello");
function subTotal() {
  var price = document.orderform.price.value;
  var quantity = document.orderform.quantity.value;
  productPrice = price * quantity;
  document.orderform.subtotal.value = productPrice.toFixed(2);
  return productPrice;
}
//calculateTax() takes result of subTotal function but has to refer to the result to move forward as opposed to the previous function
//.toFixed() is the decimal points
function calculateTax() {
  //var subTotal = document.orderform.subtotal.value; OR for dryer code:
  var subtotal = subTotal();
  var product = document.orderform.product.value;
  //   var stax = 0.1;
  let stax;
  let tax;
  if (product == "book" || product == "medicine" || product == "food") {
    tax = subtotal;
  } else if (product == "imported") {
    stax = 0.05;
    tax = subtotal * stax;
  } else {
    stax = 0.1;
    tax = subtotal * stax;
  }

  document.orderform.salestax.value = tax.toFixed(2);
  return tax;
}
//takes the HTML output results from the previous two functions and adds them together.
function grandTotal() {
  var product = document.orderform.product.value;
  var subtotal = subTotal();
  var tax = calculateTax();
  document.orderform.subtotal.value = subtotal.toFixed(2);
  document.orderform.salestax.value = tax.toFixed(2);
  if (product == "book" || product == "medicine" || product == "food") {
    var gtotal = subtotal;
  } else {
    var gtotal = subtotal + tax;
  }

  document.orderform.gtotal.value = gtotal.toFixed(2);
}
