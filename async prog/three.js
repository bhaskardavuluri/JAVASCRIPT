let calc=(a,b,op)=>{
    if(op=="sum"){
        return a+b;
    }
    if(op=="mul"){
        return a*b;
    }

}
let r1=calc(10,20,"sum")
console.log(r1);
let r2=calc(10,20,"mul")
console.log(r2);