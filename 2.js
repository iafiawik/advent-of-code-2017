var fs = require("fs");
var one = require("./");

fs.readFile("./inputs/2", function(err, data) {
  if (err) {
    throw err;
  }

  var ips = data.toString().split("\n");
  ips.pop();

  const sum1 = one.calculateSum1(ips);
  const sum2 = one.calculateSum2(ips);

  console.log("The solution to the captcha (version 1) is ", sum1);
  console.log("The solution to the captcha (version 2) is ", sum2);
});
