//creating a new array based on existing array
let eids=[101,102,103,104]
let id=eids;// aliasing the array this is  wrong
console.log(id);
//creating a new array based upon existing array
let enames=["rg","sg","pg","hg","as"];
let new_enames=[]
for(let ename of enames){      //by usimg for of  method creating an new array by using existing array
    new_enames.push(ename)
}
console.log(new_enames);
//creating a new array based upon existing array by using map()
let enames=["rg","sg","hg","as"]
let new_enames=enames.map((ename)=>{             //creating an new array by using an existing array by mapo new es6function.
    return ename ;
})
console.log(enames);
console.log(new_enames);