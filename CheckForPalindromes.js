function palindrome(str) {
  //remove non-alphanumeric characters and make lower case
  str = str.replace(/[\W_]/gi, "").toLowerCase();
  console.log(str);
  
  //split str to individual letters
  var letters = str.split("");
  
  //reverse individual letters array
  letters = letters.reverse();
  
  //join letters into a new string
  var strReverse = letters.join("");
  
  //does the new string match the old string?
  if (str === strReverse){
    //return true
    return true;
  }
  else{
    return false;
  }
  
  return true;
}



palindrome("eye");