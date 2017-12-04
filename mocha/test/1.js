var one = require("../../");
var assert = require("assert");
var should = require("should");

describe("--- Day 1: Inverse Captcha ---", function() {
  describe("#sayHello()", function() {
    it("should say hello", function() {
      one.sayHello().should.equal("hello one");
    });
  });

  describe("#splitData()", function() {
    it("should split data", function() {
      var splitted = one.splitData("1122");
      splitted.length.should.equal(4);
    });
  });

  describe("#calculateSum1()", function() {
    it("should calculate the sum of digits", function() {
      one.calculateSum1(1122).should.equal(3);
      one.calculateSum1(1111).should.equal(4);
      one.calculateSum1(1234).should.equal(0);
      one.calculateSum1(91212129).should.equal(9);
    });
  });

  describe("#calculateSum2()", function() {
    it("should calculate the sum of digits", function() {
      one.calculateSum2(1212).should.equal(6);
      one.calculateSum2(1221).should.equal(0);
      one.calculateSum2(123425).should.equal(4);
      one.calculateSum2(123123).should.equal(12);
      one.calculateSum2(12131415).should.equal(4);
    });
  });
});
