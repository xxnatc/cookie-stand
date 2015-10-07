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

writeTime = (function(){
    var table = document.getElementById('summary');
    var row = document.createElement('tr');

    var start = document.createElement('th');
    start.appendChild(document.createTextNode(''));
    row.appendChild(start);
    
    for (var i = 0; i < hourText.length; i++){
      var time = document.createElement('th');
      time.appendChild(document.createTextNode(hourText[i]));
      row.appendChild(time);
    }

    var end = document.createElement('th');
    end.appendChild(document.createTextNode('Total'));
    row.appendChild(end);
    
    table.appendChild(row);
  }());


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
  }
  this.dayTotal = this.sim();

  // write store location using specified id
  this.writeLocation = function(id){
    var el = document.getElementById(id);
    el.innerHTML = this.place;
  };

  // write simulated hourly sales and daily total as list using specified id
  this.writeUL = function(id){
    var list = document.getElementById(id);
    for (var i = 0; i < this.hourTotal.length; i++){
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(hourText[i] + ': ' + this.hourTotal[i] + ' cookies'));
      list.appendChild(item);
    }
    var item = document.createElement('li');
    item.appendChild(document.createTextNode('Total: ' + this.dayTotal + ' cookies'));
    list.appendChild(item); 
  };

  // combine writeLocation() and writeUL() - writing store location, hourly sales and daily total at once
  this.writeOnPage = function(id1, id2){
    this.writeLocation(id1);
    this.writeUL(id2);
  };

  this.writeTable = function(){
    var table = document.getElementById('summary');
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

    table.appendChild(row);
  };

  this.writeTable();

};

// create object for each store location
var pike = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seatac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var scenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);
 
