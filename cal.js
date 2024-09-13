let num1 = 30;
let num2 = 70;
let num3 = 15;
let largestNum;

if (num1 > num2 && num1 > num3) {
  largestNum = num1;
} 
else if (num2 > num1 && num2 > num3) {
  largestNum = num2;
} 
else {
  largestNum = num3;
}

console.log(largestNum);