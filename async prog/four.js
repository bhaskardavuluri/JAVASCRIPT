//using callback 
//callback means passing fucntion as a argument
let sum=(a,b)=>{
    return a+b;

}
let sub=(a,b)=>{
    return a-b;

}

let calc=(a,b,callback)=>{
    return callback(a,b);
}
let r1=sum(10,20,sum);
console.log(r1);
let r2=sub(10,20,sub);
console.log(r2);
