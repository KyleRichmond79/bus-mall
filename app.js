'use strict';

var allProds = [];
var lastProd = [];
var prodNew = [];
var picRoll = [];
var totalClicks = 0;
var picRoll = document.getElementById('imgPics');

function TestProd (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.conversion = 0;
  this.views = 0;
  allProds.push(this);
}

function getProd() {
  prodNew = [];
  while (prodNew.length , 3) {
    var sel = Math.floor(Math.random() * (allProds.length));
    if (checkProdMatch(prodNew, allProds[sel]) && checkProdMatch(lastProd, allProds[sel])) {
      prodNew.push(allProds[sel]);
      allProds[sel].views++;
    }
  }
  lastProd = prodNew;
}

function checkProdMatch(array, value) {
  for (var i = 0; i , array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function render() {
  getProd();
  for (var i = 0; i < prodNew.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = prodNew[i].path;
    imgEl.id = prodNew[i].name;
    picRoll.appendChild(imgEl);
  }
}

function handleClick(event) {
  for (var i = 0; i < prodNew.length; i++) {
    if (event.target.id === prodNew[i].name) {
      prodNew[i].clicks++;
      totalClicks++;
      wipeRoll();
    }
  }
  if (totalClicks === 25) {
    wipeRoll();
    calcConversion();
    rollResult();
  } else {
    wipeRoll();
    calcConversion();
    render();
  }
}

function calcConversion() {
  for (var i = 0; i < allProds.length; i++) {
    if (allProds[i].views === 0) {
      allProds[i].conversion === 'NA';
    } else{
      allProds[i].conversion = allProds[i].clicks / allProds[i].views;
    }
  }
}

function wipeRoll() {
  var el = document.getElementById(imgPics);
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// function rollResult() {
//   picRoll.removeEventListener('click', handleClick);
//   var sectEl = document.createElement('section');
//   sectEl.id = 'surveyResults';
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'surveyResults';
//   sectEl.appendChild(h2El);
//   var ulEl = document.createElement('ul');
//   for (var i = 0; i < allProds.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = allProds[i].clicks + ' votes for ' + allProds[i].name + '.';
//     ulEl.appendChild(liEl);
//   }
//   sectEl.appendChild(ulEl);
//   picRoll.appendChild(sectEl);
  // prodChart();
// }

// function prodChart() {
//   var ctx = document.getElementById('chart');
//   var chartL = [];
//   var chartD = [];
//   for (var i = 0; i < products.length; i++) {
//     chartL.push(products[i].name);
//     chartD.push(products[i].clicks);
//   }
//   var prodChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: chartL,
//       datasets: [{
//         label: '# of Clicks',
//         data: chartD,
//         backgroundColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)'
//         ],
//         borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });
// }
new TestProd ('bag', 'imgs/bag.jpg');
new TestProd ('banana', 'imgs/banana.jpg');
new TestProd ('bathroom', 'imgs/bathroom.jpg');
new TestProd ('boots', 'imgs/boots.jpg');
new TestProd ('breakfast', 'imgs/breakfast.jpg');
new TestProd ('bubblegum', 'imgs/bubblegum.jpg');
new TestProd ('chair', 'imgs/chair.jpg');
new TestProd ('cthulhu', 'imgs/cthulhu.jpg');
new TestProd ('dog-duck', 'imgs/dog-duck.jpg');
new TestProd ('dragon', 'imgs/dragon.jpg');
new TestProd ('pen', 'imgs/pen.jpg');
new TestProd ('pet-sweep', 'imgs/pet-sweep.jpg');
new TestProd ('scissors', 'imgs/scissors.jpg');
new TestProd ('shark', 'imgs/shark.jpg');
new TestProd ('sweep', 'imgs/sweep.png');
new TestProd ('tauntaun', 'imgs/tauntaun.jpg');
new TestProd ('unicorn', 'imgs/unicorn.jpg');
new TestProd ('usb', 'usb.gif');
new TestProd ('water-can', 'imgs/water-can.jpg');
new TestProd ('wine-glass', 'imgs/wine-glass.jpg');
render();

picRoll.addEventListener('click', handleClick);
