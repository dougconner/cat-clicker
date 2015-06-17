$(function() {
  // initial data array
  var model = {
    cats: [
      {
        name: 'poplinre',
        clicks: '0',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 2',
        clicks: '0',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 3',
        clicks: '0',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'cat 4',
        clicks: '0',
        photo: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      },
      {
        name: 'chewie',
        clicks: '0',
        photo: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
      }
    ],
    getCount: function(index) {
      return model.cats[index].clicks;
    },
    setCat: function(catData) {
      this.cats[catData.index].name = catData.name;
      this.cats[catData.index].clicks = catData.clicks;
      this.cats[catData.index].photo = catData.photo;
    },
    incrementCount: function(index) {
      this.cats[index].clicks++;
    }
  };

  var octopus = {

    init: function() {
      // Need current cat for dispensing clicks
      this.currentCatIndex = 0;
      this.showEditBox = false;
      view.init();
      this.displayCat();
    },
    getCat: function(index) {
      // Get cat data from Model
      var cat = {};
      cat.index = index;
      this.currentCatIndex = index;
      cat.imgSrc = model.cats[index].photo;
      cat.name = model.cats[index].name;
      cat.count = model.getCount(index);
      return cat;
    },
    displayCat: function() {
      view.renderCat(this.getCat(this.currentCatIndex));
      view.renderEditBox(this.showEditBox, this.getCat(this.currentCatIndex));
    },
    setCount: function(count) {
      view.renderCount(count);
    },
    catClicked: function() {
      model.incrementCount(this.currentCatIndex);
      this.setCount(model.getCount(this.currentCatIndex));
    },
    saveCat: function() {
      var catData = {};
      catData.index = this.currentCatIndex;
      catData.name = $('#edit-name').val();
      catData.photo = $('#img-url').val();
      catData.clicks = $('#clicks').val();
      model.setCat(catData);
      this.displayCat();
      // update the selection list display
      $('#cat' + catData.index).text(catData.name);
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
      this.renderList();
      // Add event listener to the image to get clicks
      $('#cat-pic').get(0).addEventListener('click', function() {
        octopus.catClicked();
      });
      $('#admin').get(0).addEventListener('click', function() {
        // show the fieldset
        octopus.showEditBox = true;
        view.renderEditBox(octopus.showEditBox, octopus.getCat(octopus.currentCatIndex));
      });
      $('#save').get(0).addEventListener('click', function() {
        // save data to model
        octopus.saveCat();
      });
      $('#cancel').get(0).addEventListener('click', function() {
        // hide the fieldset
        octopus.showEditBox = false;
        view.renderEditBox(octopus.showEditBox, octopus.currentCatIndex);
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
            octopus.currentCatIndex = iCopy;
            octopus.displayCat();
          };
        })(index));
      });
    },
    renderCat: function() {
      var cat = octopus.getCat(octopus.currentCatIndex);
      $('#cat-pic').attr("src", cat.imgSrc);
      $('h3#cat-name').text('Name: ' + cat.name);
      octopus.setCount(cat.count);
    },
    renderCount: function(count) {
      $('.count').text('Click Count: ' + count);
      $('#clicks').val(count);
    },
    renderEditBox: function(show, cat) {
      // fill boxes with current cat data
      $('#edit-name').val(cat.name);
      $('#img-url').val(cat.imgSrc);
      $('#clicks').val(cat.count);
      if (show === true) {
        $('#cat-details-edit').show();
      } else {
        $('#cat-details-edit').hide();
      }
    }

  };
  octopus.init();
});
