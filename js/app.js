'use strict';

//Global variables
//DOM windows
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
// let resultBtn = document.getElementById('result-btn');
// let resultList = document.getElementById('result-list');
const ctx = document.getElementById('my-chart').getContext('2d');
let clickAmount = 25;
//all products array
let allProducts = [];

//local storage
let parsedProducts = JSON.parse(localStorage.getItem('products'));

//local storage data use
if(parsedProducts){
  allProducts = parsedProducts;
}
else{
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
}

//Constructor - product name, img filepath, # of times the item has been shown, number of times the item has been clicked
function Product(name, fileType = 'jpeg') {
  this.name = name;
  this.src = `img/${name}.${fileType}`;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProducts.push(this);
}

//function for rendering products
let indexes = [];
function renderProducts(){

  while(indexes.length < 6) {
    let index = randomIndex();
    while(!indexes.includes(index)) {
      indexes.unshift(index);
    }
  }

  let indexOne = indexes.pop();
  let indexTwo = indexes.pop();
  let indexThree = indexes.pop();

  imgOne.src = allProducts[indexOne].src;
  imgOne.alt = allProducts[indexOne].name;
  allProducts[indexOne].timesShown++;

  imgTwo.src = allProducts[indexTwo].src;
  imgTwo.alt = allProducts[indexTwo].name;
  allProducts[indexTwo].timesShown++;

  imgThree.src = allProducts[indexThree].src;
  imgThree.alt = allProducts[indexThree].name;
  allProducts[indexThree].timesShown++;
}

renderProducts();
//random number generator for random index
function randomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

//event handler for click
function handleClick(event){
  clickAmount--;
  let imgClicked = event.target.alt;
  for(let i = 0; i < allProducts.length; i++) {
    if(imgClicked === allProducts[i].name) {
      allProducts[i].timesClicked++;
    }
  }

  renderProducts();

  if(clickAmount === 0) {
    container.removeEventListener('click', handleClick);
    renderChart();
    //local storage
    let products = JSON.stringify(allProducts);
    localStorage.setItem('products', products);
  };
}

//event listener for click
container.addEventListener('click', handleClick);

function renderChart() {

  let productNames = [];
  let voteData = [];
  let viewData = [];
  for(let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    voteData.push(allProducts[i].timesClicked);
    viewData.push(allProducts[i].timesShown);
  }

  console.log(viewData);

  const myObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: voteData,
        backgroundColor: [
          'lightblue'
        ],
        borderColor: [
          'darkblue'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: viewData,
        backgroundColor: [
          'darkblue'
        ],
        borderColor: [
          'lightblue'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const myChart = new Chart(ctx, myObj);
}
