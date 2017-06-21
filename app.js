'use strict';
var prodNew = [];
var allProds = [];
var queProds = [];
var itemCount = [];

// var picRoll = [];
// var totalClicks = 0;

var button = document.getElementById('start button');
var clickMe = document.getElementById('imgPics');

function TestProd(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.conversion = 0;
  this.views = 0;
  allProds.push(this);
};
var bag = new TestProd('bag', 'imgs/bag.jpg');
var banana = new TestProd('banana', 'imgs/banana.jpg');
var bathroom = new TestProd('bathroom', 'imgs/bathroom.jpg');
var boots = new TestProd('boots', 'imgs/boots.jpg');
var breakfast = new TestProd('breakfast', 'imgs/breakfast.jpg');
var bubblegum = new TestProd('bubblegum', 'imgs/bubblegum.jpg');
var chair = new TestProd('chair', 'imgs/chair.jpg');
var cthulhu = new TestProd('cthulhu', 'imgs/cthulhu.jpg');
var dogDuck = new TestProd('dog-duck', 'imgs/dog-duck.jpg');
var dragon = new TestProd('dragon', 'imgs/dragon.jpg');
var pen = new TestProd('pen', 'imgs/pen.jpg');
var petSweep = new TestProd('pet-sweep', 'imgs/pet-sweep.jpg');
var scissors = new TestProd('scissors', 'imgs/scissors.jpg');
var shark = new TestProd('shark', 'imgs/shark.jpg');
var sweep = new TestProd('sweep', 'imgs/sweep.png');
var tauntaun = new TestProd('tauntaun', 'imgs/tauntaun.jpg');
var unicorn = new TestProd('unicorn', 'imgs/unicorn.jpg');
var usb = new TestProd('usb', 'imgs/usb.gif');
var waterCan = new TestProd('water-can', 'imgs/water-can.jpg');
var wineGlass = new TestProd('wine -glass', 'imgs/wine-glass.jpg');

function getImage() {
  prodNew = [];
  while (prodNew.length < 3) {
    var select = Math.floor(Math.random() * (allProds.length));
    if (checkMatch(prodNew, allProds[select]) && checkMatch(queProds, allProds[select])) {
      prodNew.push(allProds[select]);
      allProds[select].views++;
    }
  }
  queProds = prodNew;
}

function checkMatch(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function renderImg() {
  var picRoll = document.getElementById('imgPics');
  picRoll.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = queProds[i].path;
    imgEl.id = queProds[i].name;
    picRoll.appendChild(imgEl);
  }
  queProds = [];
};

clickMe.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

function handleClick(e) {
  for (var i = 0; i < allProds.length; i++) {
    if (event.target.id === allProds[i].name) {
      allProds[i].clicks += 1;
      itemCount.push(allProds[i]);
    }
    getImage();
    renderImg();
    if (itemCount.length == 25) {
      clickMe.removeEventListener('click', handleClick, false);
      clickMe.innerHTML = 'Insert catchy logo here';
      button.textContent = 'Inser button text';

    }
  }
};

// function getProd() {
//   prodNew = [];
//   while (prodNew.length < 3) {
//     var x = Math.floor(Math.random() * (allProds.length));
//     if (checkProdMatch(prodNew, allProds[x]) && checkProdMatch(prodFirstPick, allProds[x])) {
//       prodNew.push(allProds[x]);
//       allProds[x].views++;
//     }
//   }
//   prodFirstPick = prodNew;
//
// }
//
// function checkProdMatch(array, value) {
//   for (var i = 0; i, array.length; i++) {
//     if (value === array[i]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function render() {
//   // picRoll.innerHTML = '';
//   for (var i = 0; i < prodFirstPick.length; i++) {
//     var imgEl = document.createElement('img');
//     imgEl.src = prodFirstPick[i].path;
//     imgEl.id = prodFirstPick[i].name;
//     picRoll.appendChild(imgEl);
//   }
// }
// picRoll.addEventListener('click', handleClick);
//
// function handleClick(event) {
//   console.log('click');
//   for (var i = 0; i < prodFirstPick.length; i++) {
//     if (event.target.id === prodFirstPick[i].name) {
//       prodFirstPick[i].clicks++;
//       totalClicks++;
//     }
//     // getProd();
//     calcConversion();
//     render();
//   }
//   if (totalClicks === 25) {
//     picRoll.removeEventListener('click', handleClick, false);
//     imgPics.innerHTML = 'Thank you for your time.';
//   }
// }
//
// function calcConversion() {
//   for (var i = 0; i < allProds.length; i++) {
//     if (allProds[i].views === 0) {
//       allProds[i].conversion === 'NA';
//     } else {
//       allProds[i].conversion = allProds[i].clicks / allProds[i].views;
//     }
//   }
// }
//
// // function wipeRoll() {
// //   var el = document.getElementById(imgPics);
// //   while (el.firstChild) {
// //     el.removeChild(el.firstChild);
// //   }
// // }
//
// // function rollResult() {
// //   picRoll.removeEventListener('click', handleClick);
// //   var sectEl = document.createElement('section');
// //   sectEl.id = 'surveyResults';
// //   var h2El = document.createElement('h2');
// //   h2El.textContent = 'surveyResults';
// //   sectEl.appendChild(h2El);
// //   var ulEl = document.createElement('ul');
// //   for (var i = 0; i < allProds.length; i++) {
// //     var liEl = document.createElement('li');
// //     liEl.textContent = allProds[i].clicks + ' votes for ' + allProds[i].name + '.';
// //     ulEl.appendChild(liEl);
// //   }
// //   sectEl.appendChild(ulEl);
// //   picRoll.appendChild(sectEl);
// // prodChart();
// // }
//
// // function prodChart() {
// //   var ctx = document.getElementById('chart');
// //   var chartL = [];
// //   var chartD = [];
// //   for (var i = 0; i < products.length; i++) {
// //     chartL.push(products[i].name);
// //     chartD.push(products[i].clicks);
// //   }
// //   var prodChart = new Chart(ctx, {
// //     type: 'bar',
// //     data: {
// //       labels: chartL,
// //       datasets: [{
// //         label: '# of Clicks',
// //         data: chartD,
// //         backgroundColor: [
// //           'rgba(255, 99, 132, 1)',
// //           'rgba(54, 162, 235, 1)',
// //           'rgba(255, 206, 86, 1)',
// //           'rgba(75, 192, 192, 1)',
// //           'rgba(153, 102, 255, 1)',
// //           'rgba(255, 159, 64, 1)',
// //           'rgba(255, 99, 132, 1)',
// //           'rgba(54, 162, 235, 1)',
// //           'rgba(255, 206, 86, 1)',
// //           'rgba(75, 192, 192, 1)',
// //           'rgba(153, 102, 255, 1)',
// //           'rgba(255, 159, 64, 1)',
// //           'rgba(255, 99, 132, 1)',
// //           'rgba(54, 162, 235, 1)',
// //           'rgba(255, 206, 86, 1)',
// //           'rgba(75, 192, 192, 1)',
// //           'rgba(153, 102, 255, 1)',
// //           'rgba(255, 159, 64, 1)',
// //           'rgba(255, 99, 132, 1)',
// //           'rgba(54, 162, 235, 1)'
// //         ],
// //         borderColor: [
// //           'rgba(255,99,132,1)',
// //           'rgba(54, 162, 235, 1)',
// //           'rgba(255, 206, 86, 1)',
// //           'rgba(75, 192, 192, 1)',
// //           'rgba(153, 102, 255, 1)',
// //           'rgba(255, 159, 64, 1)'
// //         ],
// //         borderWidth: 1
// //       }]
// //     },
// //     options: {
// //       scales: {
// //         yAxes: [{
// //           ticks: {
// //             beginAtZero: true
// //           }
// //         }]
// //       }
// //     }
// //   });
// // }
//
//
// picRoll.addEventListener('click', handleClick);
