//destructing in case of object

let state={
    ename:"rahul",
    product:{
        pname:"marker pen",
        price:30,
        discount:true
    },
    user:{
        uid:101,
        uname:"rahul"
    }
    

}
console.log(state.ename);//by using object.property name 
let {ename}=state        //by using destructuring concept
console.log(ename);