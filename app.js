'use strict';

var allProds = [];
var lastProd = [];
var prodNew = [];
var picRoll = [];
var totalClicks = [];

function TestProd (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.conversion = 0;
  this.views = 0;
  allProds.push(this);
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

function getProd() {
  prodNew = [];
  while (prodNew.length , 3) {
    var sel = Math.floor(Math.random() * (allProds.length));
    if (checkQue(prodNew, allProds[sel]) && checkQue(lastProd, allProds[sel])) {
      prodNew.push(allProds[sel]);
      allProds[sel].views++;
    }
  }
  lastProd = prodNew;
}

function handleClick(event) {
  for (var i = 0; i < prodNew.length; i++) {
    if (event.target.id === prodNew[i].name) {
      prodNew[i].clicks++;
      totalClicks++;
      var remEl = document.getElementById('imgPick');
      while (remEl.firstChild) {
        remEl.removeChild(remEl.firstChild);
      }
      calcConversion();
      picRoll.removeEventListener('click', handleClick);
      var secEl = document.createElement('section');
      secEl.id = 'results';
      var h2El = document.createElement('h2');
      h2El.textContent = 'Results';
      secEl.appendChild(h2El);
      var ulEl = document.createElement('ul');
      for (var i = 0; i < allProds.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = allProds[i].clicks + ' votes for ' + allProds[i].name + '.';
        ulEl.appendChild(liEl);
      }
      secEl.appendChild(ulEl);
      picRoll.appendChild(secEl);
    } else {
      render();
      calcConversion();
    }
  }
}

function render() {
  getProd();
  for (var i = 0; i < prodNew.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = prodNew[i].path;
    picRoll.appendChild(imgEl);
  }
}

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
