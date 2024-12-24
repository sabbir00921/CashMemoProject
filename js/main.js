//variables=====================================================================
let cart = [];
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
  }
}
class Apparel {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.discount = 20;
    this.type = 'apparel';
  }
}
class Others {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.discount = 10;
    this.type = 'others';
  }
}

//helper functions===============================================================
updateTotalPrice = () => {
  //this function should update the total price at memo footer
}

updateTotalPayable = () => {
  //this function should update the total payable price at memo footer
}

//event listeners=================================================================
nextBtn.addEventListener('click', () => {
  //step 1: create an item object based on user input using the pre-declared classes and push it to cart array

  //step 2: create an element similiar to itemSec div at line 55-62 at the html document and update their textcontent from the created object

  //calculating price
  updateTotalPrice(); //call the function at (line 43) to update total price
  updateTotalPayable(); //call the function at (line 47) to update total price

  // reset/clear all the input values or set to default
})


printBtn.addEventListener('click', () => {
  console.log('Not yet worked on');
})