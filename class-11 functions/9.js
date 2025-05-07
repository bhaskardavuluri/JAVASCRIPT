function age(dob_year){
     current_year= new Date().toLocaleDateString();
    return current_year-dob_year;

}
age1=age(2004);
console.log(age1);
age2=age(2007);
console.log(age2);
