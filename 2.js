var fs = require("fs");
var two = require("./");

fs.readFile("./inputs/2", function(err, data) {
  if (err) {
    throw err;
  }

  var rawData = data.toString().split("\n");
  var rows = [];

  rawData.forEach(rawData => {
    rows.push(rawData.split("\t").map(number => parseInt(number)));
  });

  rows.pop();

  const sum1 = two.calculateChecksum1(rows);
  const sum2 = two.calculateChecksum2(rows);

  console.log("The checksum for the spreadsheet is ", sum1);
  console.log("The sum of each row's result is ", sum2);
});
