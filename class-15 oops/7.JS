class account{
    acc_id;
    acc_name;
    acc_bal;
    min_bal=500;
    constructor(id,name,amount){
        this.acc_bal=amount;
        this.acc_id=id;
        this.acc_name=name;
        
    }
    open_account(){
        console.log("account opened successfully");
    }
    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    withdraw_amount(amount){
        this.acc_bal=this.acc_bal-amount;

    }
    get_bal(){
        return this.acc_bal-this.min_bal;
    }

}
let a1= new account(101,'rahul',450);
console.log(a1);
let a2= new account(102,'sreejith',400);
console.log(a2);
a1.open_account()
// a1.deposit_amount(500);
// a1.deposit_amount(100);
a1.withdraw_amount(250)
console.log(a1.acc_bal);
    