function numbersToLetters(numbers) {
  let letters = '';
  numbers.split('.').forEach(function(num) {
    let letter = String.fromCharCode('a'.charCodeAt(0) + parseInt(num) - 1);
    letters += letter;
  });
  return letters;
}

function convertNumbers() {
  let numbers = document.getElementById('numbers').value;
  let result = numbersToLetters(numbers);
  document.getElementById('result').innerHTML = result;
}
