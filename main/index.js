global.geom ={};
//var getArea = require('./shapesarea.js');
var Triangle = require("triangle-kaku");
var Rectangle = require("rectangle-kaku");
var Square = require("square-kaku");
var t = new Triangle({ width: 100, height: 100 });
var s = new Square( { width: 100 });
var r = new Rectangle({ width: 100, height: 100 });
console.log(t.getArea());
console.log(s.getArea());
console.log(r.getArea());
/*
try {
  var t = getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = getArea('Bogus');
  console.log(b);
}
catch (e) {
  console.log(e);
}
*/
