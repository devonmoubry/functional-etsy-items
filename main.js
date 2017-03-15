/****************Answer 1****************/
//The average price is $23.63
for (i in items)
var prices = items.map(function(currentValue, index, array) {
  return currentValue.price;
})
var total = prices.reduce(function(a, b){return a+b;});
var average = total / items.length;
output = document.querySelector('li#one');
output.innerHTML = 'The average price is $' + average.toFixed(2);

/****************Answer 2****************/
//1970s Coors Banquet Glass Beer Pitcher
//The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//Hand Painted Colorful Feather Glass

var pricesBtwn = items.filter(function (element, index, array) {
    return element.price > 14.00 && element.price < 18.00;
});

var titles = pricesBtwn.map(function(item, index, array) {
  return '<li>' + item.title + '</li>';
});

titles.forEach(function(item, index, array) {
  var output = document.querySelector('ul#twol');
  output.innerHTML += item;
});

/****************Answer 3****************/
//1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var currencySearch = items.filter(function (element, index, array) {
    return element.currency_code === 'GBP';
});

var infoBritish = currencySearch.map(function(item, index, array) {
  return item.title  + 'costs ' + '&#163;' + item.price;
});

infoBritish.forEach(function(item, index, array) {
  var output = document.querySelector('li#three');
  output.innerHTML += item;
});

/****************Answer 4****************/
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

var wooden = items.filter(function (element, index, array) {
    return element.materials.some(function(element, index, array) {
      return element === 'wood';
    });
});

var hasWood = wooden.map(function(item, index, array) {
  return '<li>' + item.title + ' is made of wood.</li>';
});

hasWood.forEach(function(item, index, array) {
  var output = document.querySelector('ul#fourl');
  output.innerHTML += item;
});

/****************Answer 5****************/
//Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//wall mount bottle opener
//wedding
//man cave
//christmas gift
//guy gift
//fathers day
//home bar
//beer
//bar
//The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//glass
//sandblast cabinet
//vinyl
//beer glass
//pint glass
//etched pint glass
//etched glass
//etched beer glass
//16 oz pint
//beer gift
//etched harry potter glass
//the three broomsticks glass
//personalized harry potter glass

var manyMaterials = items.filter(function (element, index, array) {
  return element.materials.length >= 8;
});

var hasMany = manyMaterials.map(function(item, index, array) {
  return '<li>' + item.title + ' has ' + item.materials.length + ' materials:' + item.materials + '</li>';
});

hasMany.forEach(function(item, index, array) {
  var output = document.querySelector('ul#fivel');
  output.innerHTML += item;
});

/****************Answer 6****************/
//18 were made by their sellers

var madeBySellers = items.filter(function (element, index, array) {
    return element.who_made === 'i_did';
});

  var output = document.querySelector('li#six');
  output.innerHTML += madeBySellers.length + ' were made by their sellers';
