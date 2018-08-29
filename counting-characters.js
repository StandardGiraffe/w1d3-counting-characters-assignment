// # w1d3-counting-characters-assignment
// w1d3 Counting Characters Assignment

var userArg = process.argv.slice(2).join("").toLowerCase();

var countCharacters = function (string) {
  var letterCount = {};

  for (var i of string) {
    if (!letterCount[i]) {
      letterCount[i] = 0;
    }

    letterCount[i] += 1;

  }

  return letterCount;
}

console.log(countCharacters(userArg));