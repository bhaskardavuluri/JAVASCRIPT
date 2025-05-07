//finding sum of all numbers in the array by using for of loop
let numbers=[12,14,56,67]
let sum=0;
for (let num of numbers) {
    sum=sum+num;
}
console.log("sum of array:",sum);