function loopyLighthouse (range, multiples, words) {
//range represents the start and end of a range of numbers (2 numbers)
//multiples represents the multiples to be replaced with words (2 numbers)
//words are replacing the values of the multiples

  for(var num = range[0]; num <= range[1]; num++) {
    if(num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(words.join(""));
    }
    else if(num % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if(num % multiples[1] === 0) {
      console.log(words[1]);
    }
    else{
      console.log(num);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

