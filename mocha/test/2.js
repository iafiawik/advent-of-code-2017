var two = require("../../");
var assert = require("assert");
var should = require("should");

describe("--- Day 2: Corruption Checksum ---", function() {
  describe("#sayHello()", function() {
    it("should say hello", function() {
      two.sayHello().should.equal("hello two");
    });
  });
});
