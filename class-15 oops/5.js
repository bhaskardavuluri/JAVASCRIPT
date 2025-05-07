class account{
    min_bal=500;
    acc_bal=0;
    deposit_amount(amount){ 
        this.acc_bal=this.acc_bal+amount
    

    }
    withdraw_bal(amount){
        this.acc_bal=this.acc_bal-amount
    }
    get_bal(){
        return this.acc_bal

    }
}
let a1=new account()
 a1.deposit_amount(500);
 a1.deposit_amount(50);
console.log(a1);
let a2=new account()
 a2.deposit_amount(150)
 a2.deposit_amount(501)
 a2.deposit_amount(15)
console.log(a2);
let a3=new account()
a3.withdraw_bal(300);
a3.withdraw_bal(300);
console.log(a3);
