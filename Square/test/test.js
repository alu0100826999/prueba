var Square = require("../lib/Square.js");
describe("Square", function() {
	it("En un objeto cuadrado calcula correctamente el area", function(){
                var obj = new Square({ width: 100})
                obj.getArea().should.equal(10000);
        })
})
