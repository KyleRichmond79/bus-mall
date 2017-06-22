'use strict';
var allProds = [];
var newImgs = [];
var prevImg = [];
var rightIndex = 0;
var leftIndex = 0;
var centerIndex = 0;
var counter = 0;
var container = document.getElementById('imgPics');
var button = document.getElementById('start button');
var viewResults = document.getElementById();

function TestProd(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
  allProds.push(this);
};

if(localStorage.data) {
  allProds = JSON.parse(localStorage.data);
} else {
  new TestProd('bag', 'imgs/bag.jpg');
  new TestProd('banana', 'imgs/banana.jpg');
  new TestProd('bathroom', 'imgs/bathroom.jpg');
  new TestProd('boots', 'imgs/boots.jpg');
  new TestProd('breakfast', 'imgs/breakfast.jpg');
  new TestProd('bubblegum', 'imgs/bubblegum.jpg');
  new TestProd('chair', 'imgs/chair.jpg');
  new TestProd('cthulhu', 'imgs/cthulhu.jpg');
  new TestProd('dog-duck', 'imgs/dog-duck.jpg');
  new TestProd('dragon', 'imgs/dragon.jpg');
  new TestProd('pen', 'imgs/pen.jpg');
  new TestProd('pet-sweep', 'imgs/pet-sweep.jpg');
  new TestProd('scissors', 'imgs/scissors.jpg');
  new TestProd('shark', 'imgs/shark.jpg');
  new TestProd('sweep', 'imgs/sweep.png');
  new TestProd('tauntaun', 'imgs/tauntaun.jpg');
  new TestProd('unicorn', 'imgs/unicorn.jpg');
  new TestProd('usb', 'imgs/usb.gif');
  new TestProd('water-can', 'imgs/water-can.jpg');
  new TestProd('wine -glass', 'imgs/wine-glass.jpg');
}

function randomIndex() {
  for (var i = 0; i < allProds.length; i++) {
    leftIndex = Math.floor(Math.random() * allProds.length);
    centerIndex = Math.floor(Math.random() * allProds.length);
    rightIndex = Math.floor(Math.random() * allProds.length);
  }
  newImgs = [];
  newImgs.push(leftIndex, centerIndex, rightIndex);
};

function randomProds() {
  randomIndex();
}

while(leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex || newImgs[0] === prevImg[0] || newImgs[0] === prevImg[1] || newImgs[0] === prevImg[2] || newImgs[1] === prevImg[0] || newImgs[1] === prevImg[1] || newImgs[1] === prevImg[2] || newImgs[2] === prevImg[0] || newImgs[2] === prevImg[1] || newImgs[2] === prevImg[2]) {
  randomProds();

  left.src = allProds[rightIndex].filepath;
  center.src = allProds[leftIndex].filepath;
  right.src = allProds[centerIndex].filepath;

  left.alt = allProds[rightIndex].name;
  center.alt = allProds[lefttIndex].name;
  right.alt = allProds[centerIndex].name;

  allProds[leftIndex].views += 1;
  allProds[centerIndex].views += 1;
  allProds[rightIndex].views += 1;
};

function updatePrevArray() {
  prevImg.push(leftIndex, centerIndex, rightIndex);
};

function handleClick(e) {
  if(event.target.id === 'imgPics') {
    alert('Make sure you click on an iamge please!');
  }
  for(var i = 0; i , allProds.length; i++) {
    if (event.target.alt === allProds[i].name) {
      allProds[i].clicks++;
      localStorage.setItem('data', JSON.stringify(allProds));
    }
  }
  prevImg = [];
  updatePrevArray();
  if (counter < 25) {
    onclick = counter++;
    randomProds();
  } else {
    container.removeEventListener('click', handleClick);
  }
}
randomProds();

function handleDisplayResults() {
  var picList = document.getElementById('pic-list');
  function displayList() {
  // console.log('inside displayList');
    picList.innerHTML = '';
    for (var i = 0; i < allProducts.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].numberTimesClicked + ' times.';
      picList.appendChild(liEl);
    }
  }
  displayList();
  drawChart();
}

function drawChart(){
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartData.push(allProducts[i].numberTimesClicked);
    chartLabel.push(allProducts[i].name);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: '# of clicks',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

//EVENT LISTENERS
container.addEventListener('click', handleClick);
viewListResults.addEventListener('click', handleDisplayListResults);
