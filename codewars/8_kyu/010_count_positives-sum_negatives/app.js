function countPositivesSumNegatives(input) {
  if(input === null || input.length === 0){
    return [];
  }
  return  input.reduce((a, item) =>{
    if(item > 0){
      a[0]++;
    }else{
      a[1] += item;
    }    
    return [a[0], a[1]]
  },[0,0]);
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));