/*
var a=18
const b=20
{
    let a=10
    console.log(a)
}
console.log(a,b)
*/

/*
function area(l,b){
    console.log("area is="+(l*b))
}
var length=10
var width=20
area(length,width)
*/

/*
var a
var b
function add(a,b){
    console.log(a+b)
}
add(10,10)
*/
/*
if (true){
    console.log("it is true")
}
else{
    console.log("it is false")
}*/
//logic and, or, not
/*
console.log(true && false) //and
console.log(true || false) //or
console.log(!true) //not
*/
/*
for(i=1;i<=10;i+=1){
    console.log(i)
}
*/
    //selecting num1, num2
    var box1=document.getElementById("num1")
    var box2=document.getElementById("num2")
    //selecting result
    var result=document.getElementById("result")
    //
    var box1value=Number(box1.value)
    var box2value=Number(box2.value)
    var total=box1value+box2value
    function resultfunc(){
        result.textContent=total
    }
