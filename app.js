var openingHour = 10;
var closingHour = 18;
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

// generic function that writes to browser the number of cookies 
// sold per hour as list using specified id
function writeUL(id){
  var list = document.getElementById(id);
  for (var i = 0; i < pike.hourTotal.length; i++){
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hourText[i] + ': ' + this.hourTotal[i] + ' cookies'));
    list.appendChild(item);
  }
  var item = document.createElement('li');
  item.appendChild(document.createTextNode('Total: ' + this.total + ' cookies'));
  list.appendChild(item); 

  return list;
}

// generic function that writes location of store to browser 
// using specified id
function writeLocation(id){
  var loc = document.getElementById(id);
  loc.innerHTML = this.location;
}


// location 1
var pike = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookieCust: 5.2,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookieHour: function() {
    return Math.round(this.avgCookieCust * this.randCustHour());
  },
  writeUL: writeUL,
  writeLocation: writeLocation
}

// calculate total sales per hour and grand total for location 1
pike.hourTotal = [];
pike.total = 0;
for (var i = 0; i < closingHour - openingHour; i++){
  var sale = pike.totalCookieHour();
  pike.hourTotal.push(sale);
  pike.total += sale;
}

// display results in browser for location 1
pike.writeLocation('pike-head');
pike.writeUL('pike');


// location 2
var seatac = {
  location: 'SeaTac Airport',
  minCustHour: 6,
  maxCustHour: 44,
  avgCookieCust: 1.2,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookieHour: function() {
    return Math.round(this.avgCookieCust * this.randCustHour());
  },
  writeUL: writeUL,
  writeLocation: writeLocation
}

seatac.hourTotal = [];
seatac.total = 0;
for (var i = 0; i < closingHour - openingHour; i++){
  var sale = seatac.totalCookieHour();
  seatac.hourTotal.push(sale);
  seatac.total += sale;
}

// display results in browser for location 2
seatac.writeLocation('seatac-head');
seatac.writeUL('seatac');


// location 3
var scenter = {
  location: 'Southcenter Mall',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieCust: 1.9,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookieHour: function() {
    return Math.round(this.avgCookieCust * this.randCustHour());
  },
  writeUL: writeUL,
  writeLocation: writeLocation
}

scenter.hourTotal = [];
scenter.total = 0;
for (var i = 0; i < closingHour - openingHour; i++){
  var sale = scenter.totalCookieHour();
  scenter.hourTotal.push(sale);
  scenter.total += sale;
}

// display results in browser for location 3
scenter.writeLocation('scenter-head');
scenter.writeUL('scenter');


// location 4
var bellevue = {
  location: 'Bellevue Square',
  minCustHour: 20,
  maxCustHour: 48,
  avgCookieCust: 3.3,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookieHour: function() {
    return Math.round(this.avgCookieCust * this.randCustHour());
  },
  writeUL: writeUL,
  writeLocation: writeLocation
}

bellevue.hourTotal = [];
bellevue.total = 0;
for (var i = 0; i < closingHour - openingHour; i++){
  var sale = bellevue.totalCookieHour();
  bellevue.hourTotal.push(sale);
  bellevue.total += sale;
}

// display results in browser for location 4
bellevue.writeLocation('bellevue-head');
bellevue.writeUL('bellevue');


// location 5
var alki = {
  location: 'Alki',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieCust: 2.6,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookieHour: function() {
    return Math.round(this.avgCookieCust * this.randCustHour());
  },
  writeUL: writeUL,
  writeLocation: writeLocation
}

alki.hourTotal = [];
alki.total = 0;
for (var i = 0; i < closingHour - openingHour; i++){
  var sale = alki.totalCookieHour();
  alki.hourTotal.push(sale);
  alki.total += sale;
}

// display results in browser for location 5
alki.writeLocation('alki-head');
alki.writeUL('alki');
