// https://github.com/ssarunyu
// Don't forget to 'npm install' before 'npm test'
function isPasswordValid(password) {
    // Check if password null or undefined
    if(password === undefined || password === null) {
      return false
    }
  
    // Check if password less than 8 not check validation
    if(password.length < 8) {
      return false
    }
  
    // Create variable
    // Idea =
    // use variable to check it have that letter(uppercase, lower, special, digit) or not
    // ++ variable when find if variable = 0 it mean not have so it also mean passwork is invalid
    let checkUpper = 0
    let checkLower = 0
    let checkSpecial = 0
    let checkDegit = 0
    // Defind new variable to split string to letters and collect letters in array
    // we need to check every letters [...] help to split long string to letters
    // It's have other ways to do but don't know kub haha
    let a = [...password]
  
    // Loop every single letters
    for(i = 0; i < a.length; i++) {
        // Check degit if >= 0 it mean that letter is integer if true ++ checkDigit to collect data
        // Maybe can use Number() or Math() but don't know how to do💀
        if (a[i] >= 0) {
        checkDegit++
      }
    // Check special character (I think it have other ways but also don't know how to do💀)
        else if (a[i] === '@'
          || a[i] === '#'
          || a[i] === '$'
          || a[i] === '%'
          || a[i] === '^'
          || a[i] === '&'
          || a[i] === '*'
          || a[i] === '!') {
        checkSpecial++
        }
    // Check uppercase
        else if(a[i] === a[i].toUpperCase()) {
        checkUpper++
        }
    // Check lowercase
        else if (a[i] === a[i].toLowerCase()) {
        checkLower++
        }
    // If nothing return false
        else {
        return false
        }
    }

    // This IF is important
    // Now we need to check password is valid or not
    // Idea = if checkUpper, checkLower, checkSpecial, checkDegit have value
    // That mean forloop check letters and ++ variable in if or else if
    // Otherwise if it = 0 it's mean nothing
    // * Maybe this wrong because we check and return false in line 54 this line maybe repeat same logic
    if (checkUpper === 0 || checkLower === 0 || checkSpecial === 0 || checkDegit === 0) {
      return false
    } else {
      return true
    }
  }
  module.exports = isPasswordValid