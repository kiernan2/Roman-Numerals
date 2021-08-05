// Business Logic
function romanNumerals(userNumber) {
  let number = parseInt(userNumber);
  const symbols = ["M",   "CM", "D",  "CD",  "C", "XC","L", "XL","X","IX","V","IV","I"]
  const numbers = ["1000","900","500","400","100","90","50","40","10","9","5","4","1"]
  let answer = ""
  
  if (number > 3999 || number < 1 || typeof(number) !== "number") {
    return "Error";
  }

  for(let i = 0; i < numbers.length; i++) {
    if (number >= numbers[i]) {
      number = number - numbers[i];
      answer = answer + symbols[i];
      i = -1
    }
  }
  return answer;
}

// UI Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let input = ($("input#input").val());
    $("#output").html(romanNumerals(input));
  })
})