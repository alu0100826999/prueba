var Rectangle = require("../lib/Rectangle.js");

describe("Rectangle", function() {
	 it("En un objeto rectangle calcula correctamente el area", function(){
                var obj = new Rectangle({ width: 100, height: 100 })
                obj.getArea().should.equal(10000);
        })
	
})
