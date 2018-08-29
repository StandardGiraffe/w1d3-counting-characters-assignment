// # w1d3-counting-characters-assignment
// w1d3 Counting Characters Assignment

var userArg = process.argv.slice(2).join("").toLowerCase();

var countCharacters = function (string) {
  var letterIndex = {};
  var i = 0;

  for (var letter of string) {

    if (!letterIndex[letter]) {
      letterIndex[letter] = [];
    }
    letterIndex[letter].push(i);
    i += 1;
  }

  return letterIndex;
}

console.log(countCharacters(userArg));