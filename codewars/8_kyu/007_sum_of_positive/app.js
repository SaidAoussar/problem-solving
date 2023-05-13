function positiveSum(arr){
  // let sum = 0;
  // for(let i = 0 ; i < arr.length ; i++){
  //   if(arr[i] > 0){
  //     sum += arr[i];
  //   }
  // }

  return arr.reduce((accumulator,itemArr)=>itemArr > 0 ? accumulator + itemArr : accumulator,0)
}


console.log(positiveSum([-1, 2, 3, -4]))


/*
reduce is a built in method on array. It takes two arguments, The first one being the function that will ran for each item in the array, and the second being the accumulator that will be passed to that function. In the reducer function, you would usually perform some sort of operation on the array item and then add it to the accumlator. The new value of the accumulator is then used on the next array item and that process continues until you go through all the array items.

it makes more sense if written out like this:

var arr = [1, 2, 3, 4];

var arrSum = arr.reduce(reducerFunction, 5);
 
function reducerFunction(accumulator, itemInArr){
  return accumulator + itemInArr;
} 
In the above code, the arrSum variable would start from 5 and add each item of the array to that.
*/