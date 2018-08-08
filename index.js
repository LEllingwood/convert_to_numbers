function numWords(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
    
    let hundreds = ['','one hundred', 'two hundred', 'three hundred','four hundred', 'five hundred']
  
    var numString = num.toString();
  
    if (num < 0) throw new Error('I can\'t handle that number.');
  
    //the case of 1 - 20numnu
    if (num < 20) {
      return ones[num] + "  ";
    }
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred ';
      
      else {
        // debugger
          // if 1-19 something (use return statement here to git it together)
           if (numString[1] === "0" || numString[1] === "1") {
             return ones[numString[0]] + ' hundred ' + ones[Number(numString[1] + numString[2])]

           }
          
          // if 20-99 do something diferent (use return statement here to git it together)
           else {
             return ones[numString[0]] + " hundred " + tens[numString[1]] + " " + ones[numString[2]]
           }
          }
      }
  
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
      return ones[numString[0]] + ' thousand ' + convert(end);
    }

  }


  const destination = document.getElementById("number1");
  
  for (let i = 0; i <= 1000; i++){
    let num = numWords(i);
    const newParagraph = document.createElement("p");
newParagraph.appendChild(document.createTextNode(num));
destination.appendChild(newParagraph);


}
  