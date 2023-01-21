const chai = require('chai')

//expect - BDD
const expect = chai.expect;

// SHOULD -BDD
const should = chai.should();

// Assert - TDD style
const assert = chai.assert; //not chainable


//expect examples
let a=1, b=1;
expect(a).to.be.equals(b, "a and b isn't equal");
//should example
a.should.be.equals(b, "a and b isn't equal")
// assert
assert.equal(a, b , "a and b isn't equal")

function myObj() {
    return {
        a:1212,
        b: true
    }
}

x= new myObj();
y= new myObj();

expect(x).to.be.an('object');
//expect(x).to.be.equals(y, "x and y are notg equal");

//deep equal for compare object
expect(x).to.be.deep.equals(y, "x and y are notg equal");
x.should.to.be.deep.equals(y, "x and y are notg equal");
assert.deepEqual(x, y)
//chaining expressions
expect(x).to.be.an('object').and.to.be.deep.equals(y, "x and y are notg equal");
(x).should.be.an('object').and.to.be.deep.equals(y, "x and y are notg equal");


//array
const numbers = [1, 3, 5, 9];
expect(numbers).to.be.an('array').that.include(3);
(numbers).should.be.an('array').that.include(3);
assert.isArray(numbers)

