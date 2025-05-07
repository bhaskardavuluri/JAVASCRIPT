//creating an array
let a=[]
let b=[10,20,30,20.5];
let c=["rahul","gandhi","umesh"];
//reading the array
console.log(a);
console.log(b);
console.log(c);
//reading the array by using indexing
console.log(a[1]);
console.log(b[3],);
console.log(b[4]);
console.log(c[3]);
//reading array by using loops (for loop)
for(let i=0;i<=3;i=i+1){
    console.log(b[i]);
}
let eids=[101,121,234,45,67];
for(let i=0;i<=4;i=i+1){
    console.log(eids[i]);
}
//reading array by using loops (while loop)
let i=0;
while(i<=4){
    console.log(eids[i]);
    i=i+1
}
//iterating an array by using (for of)
let marks=[23,45,56,76,98,65]
for (mark  of marks) {
    console.log(mark);
    
}