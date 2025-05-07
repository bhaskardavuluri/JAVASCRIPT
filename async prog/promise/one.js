let employees=[
    {eid:101,ename:"rahul",esal:45000},
    {eid:102,ename:"harsha",esal:34000}
]
let create_employee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;//hardcoding value
            flag?resolve("data inserted"):reject("failed")
            employees.push(emp)
        },4000)

    });


}
let display_employee=()=>{
             
}
create_employee({eid:103,ename:"jay",esal:22000})
.then((msg)=>{console.log(msg);}) 
display_employee()
.catch((err)=>{console.log(err);})
