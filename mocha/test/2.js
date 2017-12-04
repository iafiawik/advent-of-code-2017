var two = require("../../");
var assert = require("assert");
var should = require("should");

describe("--- Day 2: Corruption Checksum ---", function() {
  describe("#sayHello()", function() {
    it("should say hello", function() {
      two.sayHello().should.equal("hello two");
    });
  });
  describe("#splitData()", function() {
    it("should split data", function() {
      two.splitData("5195").length.should.equal(4);
    });
  });
  describe("#calculateDiff()", function() {
    it("should calculate diff between numbers", function() {
      two.calculateDiff(two.splitData("5195")).should.equal(8);
    });
  });
  describe("#findEvenlyDivisibleValuesDiff()", function() {
    it("should find the evenly divisible values", function() {
      two.findEvenlyDivisibleValuesDiff([5, 9, 2, 8]).should.equal(4);
      two.findEvenlyDivisibleValuesDiff([9, 4, 7, 3]).should.equal(3);
      two.findEvenlyDivisibleValuesDiff([3, 8, 6, 5]).should.equal(2);
    });
  });
});
