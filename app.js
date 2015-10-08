var openingHour = 10;
var closingHour = 18;

// putting store hours into readable strings
var hourText = [];
for (var i = openingHour; i < closingHour; i++){
  if (i < 12) {
    hourText.push(i + 'am');
  } else if (i === 12) {
    hourText.push(i + 'pm');
  } else {
    hourText.push((i - 12) + 'pm');
  }
}

var table = document.getElementById('summary');

// this IIFE creates the table header and populate with appropriate times
(function(){
  // var table = document.getElementById('summary');
  var row = document.createElement('tr');
  // append an empty TextNode
  var start = document.createElement('th');
  start.appendChild(document.createTextNode(''));
  row.appendChild(start);

  for (var i = 0; i < hourText.length; i++){
    var time = document.createElement('th');
    time.appendChild(document.createTextNode(hourText[i]));
    row.appendChild(time);
  }
  var end = document.createElement('th');
  end.appendChild(document.createTextNode('Total (cookies)'));
  row.appendChild(end);

  table.appendChild(row);
})();

// creating object constructor for CookieStand
var CookieStand = function(place, min, max, avg) {
  this.place = place;
  this.minCustHour = min;
  this.maxCustHour = max;
  this.avgCookieCust = avg;
  this.randCustHour = function(){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  };
  this.totalCookieHour = function(){
    return Math.round(this.avgCookieCust * this.randCustHour());
  };

  // simulate daily sales
  this.hourTotal = [];
  this.sim = function(){
    var total = 0;
    for (var i = 0; i < closingHour - openingHour; i++){
      var sale = this.totalCookieHour();
      this.hourTotal.push(sale);
      total += sale;
    }
    return total;
  };
  this.dayTotal = this.sim();

  // write store location and simulation results to table
  this.writeTable = function(){
    var row = document.createElement('tr');

    var loc = document.createElement('th');
    loc.appendChild(document.createTextNode(this.place));
    row.appendChild(loc);
    for (var i = 0; i < this.hourTotal.length; i++){
      var data = document.createElement('td');
      data.appendChild(document.createTextNode(this.hourTotal[i]));
      row.appendChild(data);
    }
    var sum = document.createElement('td');
    sum.appendChild(document.createTextNode(this.dayTotal));
    row.appendChild(sum);
    return row;
  };
};

// create object for each store location
var pike = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seatac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var scenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

var allStores = [pike, seatac, scenter, bellevue, alki];

var renderAll = function() {
  // clear table data
  while (table.childNodes.length > 1) {   
    table.removeChild(table.lastChild);
  }

  for (var i = 0; i < allStores.length; i++) {
    table.appendChild(allStores[i].writeTable());
  }
}

renderAll();

// retrieve input from form
var addStore = document.getElementById('add-store');
var newSubmit = document.getElementById('submit-button');

var newPlace = document.getElementById('new-place');
var newMin = document.getElementById('new-min');
var newMax = document.getElementById('new-max');
var newAvg = document.getElementById('new-avg');

var handleSubmit = function(event) {
  event.preventDefault();
  // alert user if any field is empty
  if (!newPlace.value || !newMin.value || !newMax.value || !newAvg.value) {
    return alert('Please fill in every field.');
  }

  var newStore = new CookieStand(newPlace.value, Number(newMin.value), Number(newMax.value), Number(newAvg.value)); 
  allStores.push(newStore);

  // reset input values
  newPlace.value = null;
  newMin.value = null;
  newMax.value = null;
  newAvg.value = null;

  renderAll();
};

newSubmit.addEventListener('click', handleSubmit);
