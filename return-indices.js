// # w1d3-counting-characters-assignment
// w1d3 Counting Characters Assignment

var userArg = process.argv.slice(2).join("").toLowerCase();

var countCharacters = function (string) {
  var letterIndex = {};

  for (var i of string) {
    if (!letterIndex[i]) {
      letterIndex[i] = [];
    }

    letterIndex[i].push([i]);

  }

  return letterIndex;
}

console.log(countCharacters(userArg));