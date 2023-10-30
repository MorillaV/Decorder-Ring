const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputArray = input.toLowerCase().split("");
    const substituteAlphabet = alphabet.toLowerCase().split("");

    const uniqueCharacters = [...new Set(substituteAlphabet)];

    if (uniqueCharacters.length !== 26) {
      return false;
    }

    const encodeMessage = () => {
      return inputArray
        .map((letter) => (letter === " " ? " " : substituteAlphabet[actualAlphabet.indexOf(letter)]))
        .join("");
    };

    const decodeMessage = () => {
      return inputArray
        .map((letter) => (letter === " " ? " " : actualAlphabet[substituteAlphabet.indexOf(letter)]))
        .join("");
    };

    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
