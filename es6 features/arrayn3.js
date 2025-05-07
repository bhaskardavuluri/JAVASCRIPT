let numbers=[10,20,34,45,56,89] 
//collect all even numbers from the array.
let evens=numbers.filter((num)=>{                       //by using filter function.
    return num%2===0;                                                     
})
console.log(numbers);
console.log(evens);
