const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift >= alphabet.length || shift <= -alphabet.length) {
      return false;
    }

    if (!encode) {
      shift = -shift;
    }

    input = input.toLowerCase();
    let encodedMessage = "";

    for (let i = 0; i < input.length; i++) {
      const letter = input[i];

      if (!alphabet.includes(letter)) {
        encodedMessage += letter;
      } else {
        const index = (alphabet.indexOf(letter) + shift + alphabet.length) % alphabet.length;
        encodedMessage += alphabet[index];
      }
    }

    return encodedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };