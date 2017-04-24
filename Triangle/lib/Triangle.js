"use strict";
var Shape = require("shapes-kaku")
class Triangle extends Shape{
  constructor(options){
    super(options);
    this.width = options.width;
    this.height= options.height;
    this.area = 0;
    global.shape.Triangle = Triangle;
    this.constructor = "Triangle";
  }
  calcular(){
    this.area = .5 * this.width * this.height;
    return this.area;
  }
}
module.exports = Triangle;
