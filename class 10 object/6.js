//printing the key va;ues pairs in the array object by using for of loop 
let employees=[
    {eid:101,ename:'jay'},
    {eid:102,ename:'harish'},
    {eid:103,ename:'hussain'}
]
for (let emp of employees) {
    console.log(emp.ename);
    console.log(emp.eid);
}