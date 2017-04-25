var Triangle = require("../lib/Triangle.js");
	describe("Triangulo", function() {	
		it("En un objeto triangulo se calcula correctamente el area", function(){
			var obj = new Triangle({ width: 100, height: 100 })
			obj.getArea().should.equal(5000);
		});
	});

