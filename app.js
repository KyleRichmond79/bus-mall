'use strict';

var allImgs = [];
var Prod = [];

function TestProd (name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.clicks = 0;
  allImgs.push(this);
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

// function randomNumArray (min, max) {
//   var getThreeProd = [];
//   for (var i = 0; i < 3; i++) {
//     getThreeProd.push(Math.floor(Math.random() * (min, max) + min));
//   }
//   while (getThreeProd[0] === getThreeProd[1] || getThreeProd[1] === getThreeProd[2] || getThreeProd[0] === getThreeProd[2]) {
//
//   }
// }
function displayProd() {
  var at = [];
  
}
