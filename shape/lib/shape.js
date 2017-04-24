"use strict"
global.shape={};

module.exports = class Shape {
  constructor(options){
    this.options = options
  }

  getArea(){
    console.log(this.constructor);
    var geom = new global.shape[this.constructor](this.options)
    return geom.calcular();
  }
}
