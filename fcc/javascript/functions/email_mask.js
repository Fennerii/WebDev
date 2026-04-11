function maskEmail(email){

  let atSign = email.indexOf("@");
  let slice = email.slice(1,atSign - 1);
  let legnthOfString = slice.length; //5
  let atsterikReplacement = slice.replace(slice,"*").repeat(legnthOfString)
  let firstChar = email.at(0);
  let lastchar = email.at(atSign-1);
  let emailAddress = email.slice(atSign);

  return firstChar + atsterikReplacement + lastchar + emailAddress

}

let email = "apple.pie@example.com"

console.log(maskEmail(email))
