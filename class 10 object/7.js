//printing the key values pairs by using while loop.
let employees=[
    {eid:101,ename:'jay'},
    {eid:102,ename:'harish'},
    {eid:103,ename:'balayya'}
    ]
    let i=0;
    while(i<=2){
        console.log("employees names:",employees[i].ename);
        console.log("employees names:",employees[i].eid);
        i=i+1;
    }