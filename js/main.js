//variables=====================================================================
let cart = [];

const productForm = document.querySelector('#productForm');
const productName = document.querySelector('#name');
const productType = document.querySelector('#category');
const productPrice = document.querySelector('#price');
const productQty = document.querySelector('#quantity');
const nextBtn = document.querySelector('#nextButton');
const printBtn = document.querySelector('#printMemoButton');
const memoBody = document.querySelector('.memoBody');
const grossTotal = document.querySelector('#grossTotal');
const totalPayable = document.querySelector('#totalPayable');

//classes=======================================================================
class Food {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.discount = 5;
    this.type = 'food';
    this.totalPrice = this.price * this.qty;
    this.priceAfterDis = this.totalPrice - ((this.totalPrice * this.discount) / 100);
    this.priceWithAvat = this.priceAfterDis + ((this.priceAfterDis * 5) / 100);
  }
}
class Apparel {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.discount = 20;
    this.type = 'apparel';
    this.totalPrice = this.price * this.qty;
    this.priceAfterDis = this.totalPrice - ((this.totalPrice * this.discount) / 100);
    this.priceWithAvat = this.priceAfterDis + ((this.priceAfterDis * 5) / 100);
  }
}
class Others {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.discount = 10;
    this.type = 'others';
    this.totalPrice = this.price * this.qty;
    this.priceAfterDis = this.totalPrice - ((this.totalPrice * this.discount) / 100);
    this.priceWithAvat = this.priceAfterDis + ((this.priceAfterDis * 5) / 100);
  }
}

//helper functions===============================================================

updateTotalPrice = () => {
  let afterDispricearr = []

  cart.filter((item) => {
    // console.log(item.priceAfterDis);
    afterDispricearr.push(item.priceAfterDis)
  })
  // console.log(afterDispricearr);

  const totalPrice = afterDispricearr.reduce((initial, item) => {
    return initial += item;
  }, 0)

  grossTotal.innerHTML = totalPrice;

}

updateTotalPayable = () => {
  //this function should update the total payable price at memo footer
  let payableArr = [];

  cart.filter((item) => {
    payableArr.push(item.priceWithAvat)
  })
  // console.log(payableArr);

  const totalAmount = payableArr.reduce((initial, item) => {
    return initial += item;
  })
  // console.log(totalAmount);

  totalPayable.innerHTML = Math.round(totalAmount);

}

//event listeners=================================================================
nextBtn.addEventListener('click', () => {
  //step 1: create an item object based on user input using the pre-declared classes and push it to cart array
  let item;
  if (productType.value === "food") {
    item = new Food(productName.value.trim(), productPrice.value, productQty.value);
    cart.push(item);
    // console.log(cart);

  }
  else if (productType.value === "apparel") {
    item = new Apparel(productName.value.trim(), productPrice.value, productQty.value);
    cart.push(item);
    // console.log(cart);
  }
  else if (productType.value === "others") {
    item = new Others(productName.value.trim(), productPrice.value, productQty.value);
    cart.push(item);
    // console.log(cart);
  }
  productForm.reset(); //reset the from after next button click

  //step 2: create an element similiar to itemSec div at line 55-62 at the html document and update their textcontent from the created object
  const itemSection = document.createElement(`div`);
  itemSection.classList.add('itemSec', 'row');

  const itemIdx = document.createElement(`p`);
  itemIdx.classList.add('col-1');
  itemIdx.textContent = cart.length;

  const itemName = document.createElement(`p`);
  itemName.classList.add('col-4');
  itemName.textContent = item.name;

  const itemQuantity = document.createElement(`p`);
  itemQuantity.classList.add('col-1', 'text-end');
  itemQuantity.textContent = item.qty;

  const itemPerPc = document.createElement(`p`);
  itemPerPc.classList.add('col-2', 'text-end');
  itemPerPc.textContent = item.price;

  const totalPrice = document.createElement(`p`);
  totalPrice.classList.add('col-2', 'text-end');
  totalPrice.textContent = item.qty * item.price;


  const priceAfterDis = document.createElement(`p`);
  priceAfterDis.classList.add('col-2', 'text-end');
  priceAfterDis.textContent = totalPrice.textContent - (totalPrice.textContent * (item.discount / 100));

  itemSection.append(itemIdx, itemName, itemQuantity, itemPerPc, totalPrice, priceAfterDis)

  memoBody.appendChild(itemSection);
  // console.log(cart);


  //calculating price
  updateTotalPrice(); //call the function at (line 43) to update total price
  updateTotalPayable(); //call the function at (line 47) to update total price

  // reset/clear all the input values or set to default
})


printBtn.addEventListener('click', () => {
  var printContents = document.getElementById('invoice').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  // location.reload()

})
