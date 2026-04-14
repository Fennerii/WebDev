function truncateString(string,num){
  let sl = string.length;
  if(sl > num){
    return string.slice(0,num) + "..."
  } else if (sl <= num){
    return string
  }
}
