let users={
    uname:'rahul',
    city:'banglore',
    gmail:"sh@pm.com"
}
let user={
    user_name:"harish",
    loc:"guntur",
    gmail:"we@mh.com"
}
// console.log(users);
// console.log(user_details);
let user_details={...user,...users}
console.log(user_details);