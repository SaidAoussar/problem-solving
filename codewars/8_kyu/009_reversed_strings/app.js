function reverseString(str){
  let arrStr = Array.from(str)
  let arr = [];
  for(let i = arrStr.length - 1 ; i >= 0 ; i--){
    arr.push(arrStr[i])
  }
  return arr.join("");
}



console.log(solution("said"));