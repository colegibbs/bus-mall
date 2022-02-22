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
let indexes = [];
function renderProducts(){
  // let imgOneIndex = randomIndex();
  // let imgTwoIndex = randomIndex();
  // let imgThreeIndex = randomIndex();
  // let indexes = [imgOneIndex, imgTwoIndex, imgThreeIndex];

  // while([imgOneIndex, imgTwoIndex].includes(imgThreeIndex)) {
  //   imgThreeIndex = randomIndex();
  // }
  // while([imgOneIndex, imgThreeIndex].includes(imgTwoIndex)) {
  //   imgTwoIndex = randomIndex();
  // }

  while(indexes.length < 6) {
    let index = randomIndex();
    while(!indexes.includes(index)) {
      indexes.unshift(index);
    }
  }

  console.log(indexes);

  for(let i = 0; i < indexes.length; i++) {
    allProducts[indexes[i]].timesShown++;
  }

  let indexOne = indexes.pop();
  let indexTwo = indexes.pop();
  let indexThree = indexes.pop();

  imgOne.src = allProducts[indexOne].src;
  imgOne.alt = allProducts[indexOne].name;

  imgTwo.src = allProducts[indexTwo].src;
  imgTwo.alt = allProducts[indexTwo].name;

  imgThree.src = allProducts[indexThree].src;
  imgThree.alt = allProducts[indexThree].name;
}

renderProducts();
//random number generator for random index
function randomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

//event handler for click
function handleClick(event){
  clickAmount--;
  console.log(clickAmount);
  let imgClicked = event.target.alt;
  console.log(imgClicked);
  for(let i = 0; i < allProducts.length; i++) {
    if(imgClicked === allProducts[i].name) {
      allProducts[i].timesClicked++;
    }
  }
  console.log(allProducts);
  renderProducts();
  if(clickAmount === 0) {
    container.removeEventListener('click', handleClick);
  }
}

//event listener for click
container.addEventListener('click', handleClick);

//event handler for result button
function handleResultBtn(event){
  for(let i = 0; i < allProducts.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${allProducts[i].name} was voted for ${allProducts[i].timesClicked} times and was show ${allProducts[i].timesShown} times.`;
    resultList.appendChild(liElem);
  }
}

//event listener for resutl button
resultBtn.addEventListener('click', handleResultBtn);
