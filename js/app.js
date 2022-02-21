'use strict';

//Global variables
  //DOM windows
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('result-btn');
let resultList = document.getElementById('result-list');
let clickAmount = 25;
  //all products array
let allProducts = [];
//Constructor - product name, img filepath, # of times the item has been shown, number of times the item has been clicked
function Product(name, fileType = 'jpeg') {
  this.name = name;
  this.src = `img/${name}.${fileType}`;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProducts.push(this);
}
// instantiate objects using Product constructor
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

//function for rendering products
function renderProducts(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();
  let indexes = [imgOneIndex, imgTwoIndex, imgThreeIndex];

  while([imgOneIndex, imgTwoIndex].includes(imgThreeIndex)) {
    imgThreeIndex = randomIndex();
  }
  while([imgOneIndex, imgThreeIndex].includes(imgTwoIndex)) {
    imgTwoIndex = randomIndex();
  }

  for(let i = 0; i < indexes.length; i++) {
    allProducts[indexes[i]].timesShown++;
  }
  console.log(allProducts);

  imgOne.src = allProducts[imgOneIndex].src;
  imgOne.alt = allProducts[imgOneIndex].name;

  imgTwo.src = allProducts[imgTwoIndex].src;
  imgTwo.alt = allProducts[imgTwoIndex].name;

  imgThree.src = allProducts[imgThreeIndex].src;
  imgThree.alt = allProducts[imgThreeIndex].name;
}

renderProducts();
//random number generator for random index
function randomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}
//event handler for click
//event listener for click
//event handler for result button
//event listener for resutl button