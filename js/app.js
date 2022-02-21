'use strict';

//Global variables
  //DOM windows
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('result-btn');
let resultList = document.getElementById('result-list');
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

  imgOne.src = allProducts[indexes[0]].src;
  imgOne.alt = allProducts[indexes[0]].name;

  imgTwo.src = allProducts[indexes[1]].src;
  imgTwo.alt = allProducts[indexes[1]].name;

  imgThree.src = allProducts[indexes[2]].src;
  imgThree.alt = allProducts[indexes[2]].name;
  
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