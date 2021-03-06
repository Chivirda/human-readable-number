module.exports = function toReadable (number) {
  if (number < 21) {
    return readableNumbers.get(number);
  }

  else return `${number % 100 ? readableNumbers.get(number % 100) : ''} ${number % 10 ? readableNumbers.get(number % 10) : ''}`
}


var readableNumbers = new Map();
  
readableNumbers.set(0, 'zero');
readableNumbers.set(1, 'one');
readableNumbers.set(2, 'two');
readableNumbers.set(3, 'three');
readableNumbers.set(4, 'four');
readableNumbers.set(5, 'five');
readableNumbers.set(6, 'six');
readableNumbers.set(7, 'seven');
readableNumbers.set(8, 'eight');
readableNumbers.set(9, 'nine');
readableNumbers.set(10, 'ten');
readableNumbers.set(11, 'eleven');
readableNumbers.set(12, 'twelve');
readableNumbers.set(13, 'thirteen');
readableNumbers.set(14, 'fourteen');
readableNumbers.set(15, 'fifteen');
readableNumbers.set(16, 'sixteen');
readableNumbers.set(17, 'seventeen');
readableNumbers.set(18, 'eighteen');
readableNumbers.set(19, 'nineteen');
readableNumbers.set(20, 'twenty');
readableNumbers.set(30, 'thirty');
readableNumbers.set(40, 'forty');
readableNumbers.set(50, 'fifty');
readableNumbers.set(60, 'sixty');
readableNumbers.set(70, 'seventy');
readableNumbers.set(80, 'eighty');
readableNumbers.set(90, 'ninety');
readableNumbers.set(100, 'one hundred');
readableNumbers.set(200, 'two hundred');
readableNumbers.set(300, 'three hundred');
readableNumbers.set(400, 'four hundred');
readableNumbers.set(500, 'five hundred');
readableNumbers.set(600, 'six hundred');
readableNumbers.set(700, 'seven hundred');
readableNumbers.set(800, 'eight hundred');
readableNumbers.set(900, 'nine hundred');
