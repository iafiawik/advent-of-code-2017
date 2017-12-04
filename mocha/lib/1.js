var one = exports;

one.sayHello = function() {
  return "hello one";
};

one.splitData = string => {
  var digits = string.toString().split("");

  digits = digits.map(digit => parseInt(digit));

  return digits;
};

one.calculateSum1 = digits => {
  digits = one.splitData(digits);

  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    var curr = digits[i];
    var next = i === digits.length - 1 ? digits[0] : digits[i + 1];

    if (curr === next) {
      sum += curr;
    }
  }

  return sum;
};

one.calculateSum2 = digits => {
  digits = one.splitData(digits);

  var sum = 0;
  var length = digits.length;
  var numberOfSteps = length / 2;

  for (var i = 0; i < digits.length; i++) {
    var curr = digits[i];
    var nextIndex = i + numberOfSteps;

    if (nextIndex >= length) {
      nextIndex = nextIndex - length;
      console.log("nextIndex is too large");
    }

    console.log("currIndex: ", i, " nextIndex: ", nextIndex);

    var next = digits[nextIndex];

    if (curr === next) {
      sum += curr;
    }
  }

  return sum;
};
