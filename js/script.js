var cats = [
  {
    'name': 'poplinre',
    'photo': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    'name': 'cat 2',
    'photo': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    'name': 'cat 3',
    'photo': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    'name': 'cat 4',
    'photo': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    'name': 'chewie',
    'photo': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
  }
  ];

// Create a list for selecting cat to view and click
  // create div and ul for list
var div = document.createElement('div');
var ul = document.createElement('ul');
div.appendChild(ul);
var bodyElem = document.getElementById('bodyElem');
var previousCat = 0;

for (var i = 0; i < cats.length; i++) {

  // create li to hold the cat's name
  var catName = document.createElement('li');
  var nameText = document.createTextNode(cats[i].name);
  catName.appendChild(nameText);

  // Append everything to the div and then to the body
  div.appendChild(catName);

  bodyElem.appendChild(div);

  // select the cat by clicking on list element
  catName.addEventListener('click', (function(iCopy) {
    return function() {
      bodyElem.replaceChild(div[iCopy], div[previousCat]);
      previousCat = iCopy;
    };
  })(i));
}

// Create all cats appended to div, replace div when
// a new cat is selected
var image = [];
var clickText = "Click Count: ";
var clickCount = [];
var div = [];

for (var i = 0; i < cats.length; i++) {

  // create div, img and append img to div
  div[i] = document.createElement('div');
  div[i].setAttribute('id', 'cat' + i);
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

  // Append to each div
  div[i].appendChild(image[i]);
  div[i].appendChild(catName);
  div[i].appendChild(clicksElem);
}

// Append default cat to body
bodyElem.appendChild(div[previousCat]);

function addClickListener(i) {
  image[i].addEventListener('click', function() {
    // increment the counter
    clickCount[i]++;
    var id = 'clicks' + i;
    var elem = document.getElementById(id);
    elem.innerHTML = clickText + '' + clickCount[i];
  });
}

// add an event listener to each image for incrementing counter on click
for (var i = 0; i < cats.length; i++) {
  addClickListener(i);
}

