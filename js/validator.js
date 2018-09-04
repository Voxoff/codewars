// function validate(n){
//   n = n.toString().split("").map(Number)
//   if (n.length % 2 == 0){
//     n = mapper(n, 0)
//   } else{
//     n = mapper(n, 1)
//   }
//   n = n.map((e)=> { 
//   if (e > 9){
//     while(e > 0){ sum += e % 10;e=Math.floor(e)}
//   } else { return e}
//   })
//   return n.reduce((ac,cv)=> ac+cv) % 10 == 0
// }

// function mapper(arr, num){
//   arr = arr.map((e, i) => {
//   if (i % 2  == num ) {
//    return e * 2
//  }
//     else{ return e }
//   })
//   return arr
// }
// console.log(validate(123))
// console.log(validate(2121))

function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);
    
    var b = (n % 10) * 2;
    n = Math.floor(n / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}
