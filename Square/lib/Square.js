"use strict"
var Shape = require("shapes-kaku")
module.exports = class Square extends Shape{
  constructor(options){
    super(options);
    this.width = options.width;
    this.area = 0;

    shape.Square = Square;

    this.constructor = "Square";
  }
  calcular(){
    this.area =  Math.pow(this.width, 2);;
    return this.area;
  }
}
