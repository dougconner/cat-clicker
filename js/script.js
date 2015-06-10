<<<<<<< HEAD
var cats = [
  {
    'name': 'poplinre',
    'photo': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    'name': 'chewie',
    'photo': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
  }
  ];

var image = [];
var clickText = "Click Count: ";
var clickCount = [];

for (var i = 0; i < cats.length; i++) {

  // create div, img and append img to div
  var div = document.createElement('div');
  image[i] = document.createElement('img');
  image[i].src = cats[i].photo;

  // create header to hold the cat's name
  var catName = document.createElement('h3');
  var nameText = document.createTextNode(cats[i].name);
  catName.appendChild(nameText);

  // create the header to hold the click count
  clickCount[i] = 0;
  var clicksElem = document.createElement('h3');
  var id = 'clicks' + i;
  clicksElem.setAttribute('id', id);
  var clicksText = document.createTextNode(clickText + '0');
  clicksElem.appendChild(clicksText);

  // Append everything to the div and then to the body
  div.appendChild(image[i]);
  div.appendChild(catName);
  div.appendChild(clicksElem);

  document.getElementById('bodyElem').appendChild(div);
}

function addListener(i) {
  image[i].addEventListener('click', function() {
    // increment the counter
    clickCount[i]++;
    var id = 'clicks' + i;
    var elem = document.getElementById(id);
    elem.innerHTML = clickText + '' + clickCount[i];
  });
}

// add an event listener to image for incrementing counter on click
for (var i = 0; i < cats.length; i++) {
  addListener(i);
}

||||||| merged common ancestors
=======
var count = 0;
console.log("count = ", count);
var elem = document.getElementById('cat');
elem.addEventListener('click', function() {
  // increment the counter
  count++;
  console.log("count = ", count);
  document.getElementById('counter').innerHTML = "Click Count: " + count;

})
>>>>>>> f1f3005616c98209e73424123504beacb469a1bf
