var getArea = require("../shapesarea.js");

describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = getArea('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^5000$/);
  })
});
