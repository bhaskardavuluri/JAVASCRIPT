class account{ 
    constructor (id,name){
        this.id=id;
        this.name=name;
       
    }
    deposit_amount(){
        console.log("deposited successfully");

    }
    
    
}
let a1=new account(101,"rahul")
console.log(a1);
let a2=new account(102,"hari")
let a3=new account(103,"jay")
a1.deposit_amount()
a2.deposit_amount()

console.log(a2);
