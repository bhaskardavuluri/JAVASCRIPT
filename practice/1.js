/*function mouseover(){
    document.getElementById('abc').style.backgroundColor="red";
}
function mouseout(){
    document.getElementById("def").style.backgroundColor="red";
}
function jai(){
    document.getElementById("ghi").style.backgroundColor="red";
}
function senior(){
    document.getElementById("jkl").style.backgroundColor="red";
}
function junior(){
    document.getElementById("mno").style.backgroundColor="red";
}
function supersenior(){
    document.getElementById("pqr").style.backgroundcolor="red";
}*/
let date=new Date();
console.log(date);
let year= new Date().getFullYear();
console.log(year);
let time=new Date().toLocaleTimeString();
console.log(time);
let c_date=new Date().toDateString();
console.log(c_date);
setTimeout(()=>{console.log("balayya babu");},4000);
setInterval(()=>{console.log("rajini kanth");},2000);