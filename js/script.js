var count = 0;
console.log("count = ", count);
var elem = document.getElementById('cat');
elem.addEventListener('click', function() {
  // increment the counter
  count++;
  console.log("count = ", count);
  document.getElementById('counter').innerHTML = "Click Count: " + count;

})