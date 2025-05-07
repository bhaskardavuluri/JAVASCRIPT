//normal function with return keyword and parameter
/*function add(a,b){
    return a+b+2;
}
let r1=add(100,200);
console.log(r1);
let r2=add(20,22);
console.log(r2);*/
//fat arrow function with return keyword and parameter 
/*let add=(a,b,c)=>{
    return a+b+c;

}
let r1=add(10,20,30);
console.log(r1);
let r2=add(20,29,2);
console.log(r2);*/
//fat arrow function without return keyword by using implict return 
let add=(a,b)=>a+b+4;   //implict return
let r1=add(20,20);
let r2=add(20,40);
console.log(r1);
console.log(r2);