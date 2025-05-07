class account{
    acc_id;
    acc_name;
    min_bal=500;
    acc_bal=0;
    open_acc(){
        console.log("account opened ");

    }
    withdraw_amount(){
        console.log("insuffiecient balance");

    }
    deposit_amount(){
        console.log("amount deposited");

    }
    get_bal(){
        console.log("server busy");

    }
}
let a1=new account()
a1.open_acc()
a1.withdraw_amount()
a1.deposit_amount()
a1.get_bal()
let a2=new account()
a2.open_acc()
a2.withdraw_amount()
a2.deposit_amount()
a2.get_bal()
