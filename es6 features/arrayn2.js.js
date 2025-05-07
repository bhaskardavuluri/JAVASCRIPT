let numbers=[1,2,3,4,5,6]
//collect all even numbers into new array
 let evens=[]
 for (let num of numbers){             //by using for loop and without filter().
    if(num%2===0){ 
        evens.push(num);
    }
 }
 console.log(evens);
 console.log(numbers);