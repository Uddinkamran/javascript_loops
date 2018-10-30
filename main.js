/*for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}*/


var prices = [33,26,99,120,12,45];
var sum = 0;
/*
for(let i=0;i<6;i++){
  sum=sum+prices[i];
}
console.log("The sum is: ", sum);
*/

/*
let j = 99;
while(j > 1){
  console.log(j + " crows on the wall.", j + " crows.");
  console.log(1 + " fell down and became a wight.");
  j--;

  console.log(j + " crows on the wall");
  console.log("<br\>");
}

if(j==1){
  console.log(1+ " crow on the wall.", 1+ " single crow.")
  console.log(" It fell down and became a wight.")
  console.log("")
  console.log(" There's no one left to defend Westeros now.")

}
*/


for(let crow=99; crow >= 1; crow--){
  if ( crow === 1){
  console.log(1, "crow on the wall.", 1, "single crow.")
  console.log("It fell down and became a wight.")
  console.log("")
  console.log("There's no one left to defend Westeros now.")
}else {
  console.log(crow,"crows on the wall.", crow , "crows.");
  console.log(1, "fell down and became a wight.");
  console.log(crow-1, "crows on the wall");
  console.log("<br\>");
}
}
