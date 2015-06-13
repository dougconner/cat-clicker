$(function() {
  // initial data array
  var model = {
    cats: [
      {
        name: 'poplinre',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 2',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 3',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 4',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'chewie',
        photo: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
      }
    ],
    // set count on all cats to zero
    init: function() {
      this.cats.forEach(function(element){
        element.count = 0;
      });
    },
    getCount: function(index) {
      return model.cats[index].count;
    },
    incrementCount: function(index) {
      this.cats[index].count++;
    }
  };

  var octopus = {

    init: function() {
      model.init();
      view.init();
      // Need current cat for dispensing clicks
      this.currentCatIndex = 0;
    },
    getCat: function(index) {
      // Get cat data from Model
      var cat = {};
      cat.index = index;
      this.currentCatIndex = index;
      cat.imgSrc = model.cats[index].photo;
      cat.name = model.cats[index].name;
      cat.count = model.cats[index].count;
      view.renderCat(cat);
    },
    setCount: function(count) {
      view.renderCount(count);
    },
    catClicked: function() {
      model.incrementCount(this.currentCatIndex);
      this.setCount(model.getCount(this.currentCatIndex));
    },
    getCatNames: function() {
      var catNames = [];
      model.cats.forEach(function(element) {
        catNames.push(element.name);
      });
      return catNames;
    }

  };


  var view = {

    init: function() {
      this.catList = $('#cat-list');
      view.renderList();
      // Add event listener to the image
      // test value
      $('#cat-pic').get(0).addEventListener('click', function() {
        octopus.catClicked();
      });

    },
    renderList: function() {
      var htmlStr = '';
      octopus.getCatNames().forEach(function(name, index){
        htmlStr += '<li id="cat' + index + '" class="cat-name">' +
          name + '</li>';
      });
      this.catList.html( htmlStr );
      // Add event listeners to the cats list
      octopus.getCatNames().forEach(function(name,index){
        $('#cat' + index).get(0).addEventListener('click', (function(iCopy) {
          return function() {
            octopus.getCat(iCopy);
          };
        })(index));
      });
    },
    renderCat: function(cat) {
      $('#cat-pic').attr("src", cat.imgSrc);
      $('h3#cat-name').text('Name: ' + cat.name);
      octopus.setCount(cat.count);
    },
    renderCount: function(count) {
      $('.count').text('Click Count: ' + count);
    }

  };
  octopus.init();
});
