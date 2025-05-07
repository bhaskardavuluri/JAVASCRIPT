class account{
    acc_id;
    acc_name;
    acc_bal=0;
    min_bal=100;
    
    constructor(id,name,amount){
        this.acc_id=id;
        this.acc_name=name;
       
        

    }
    open_account(){
        console.log("acc opened successfully");
    }
    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount;
    }
    withdraw_amount(amount){
        this.acc_bal=this.acc_bal-amount;
    }
    get_bal(){
        this.acc_bal=this.acc_bal;
    }

}
   let a1=new account(101,"jay",300);
   let a2=new account(102,"uday",200);
   a1.get_bal()
//   a1.open_account();
//  a1.deposit_amount(200);
//   a1.deposit_amount(300);
//   a1.withdraw_amount(300);
//   a2.deposit_amount(200);
//   a2.deposit_amount(200);
//   a2.deposit_amount(200);
//   a2.withdraw_amount(300);
  console.log(a1);
  console.log(a2);
