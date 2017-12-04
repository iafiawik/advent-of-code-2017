var two = exports;

two.sayHello = function() {
  return "hello two";
};

two.splitData = string => {
  string = string.replace(/ /g, "");
  var digits = string.toString().split("");

  digits = digits.map(digit => parseInt(digit));

  return digits;
};

two.calculateDiff = numbers => {
  var largest = numbers.reduce((a, b) => {
    return Math.max(a, b);
  });
  var smallest = numbers.reduce((a, b) => {
    return Math.min(a, b);
  });

  return largest - smallest;
};

two.findEvenlyDivisibleValuesDiff = numbers => {
  var hasFound = false;

  for (var i = 0; i < numbers.length; i++) {
    var curr = numbers[i];
    for (var j = 0; j < numbers.length; j++) {
      if (i !== j) {
        if (curr % numbers[j] === 0) {
          var largest = Math.max(curr, numbers[j]);
          var smallest = Math.min(curr, numbers[j]);

          return largest / smallest;
        }
      }
    }
  }
};

two.calculateChecksum1 = rows => {
  var checksum = 0;
  for (var i = 0; i < rows.length; i++) {
    const row = rows[i];
    const diff = two.calculateDiff(row);
    checksum += diff;
  }

  return checksum;
};

two.calculateChecksum2 = rows => {
  var checksum = 0;
  for (var i = 0; i < rows.length; i++) {
    const row = rows[i];
    const diff = two.findEvenlyDivisibleValuesDiff(row);
    checksum += diff;
  }

  return checksum;
};
