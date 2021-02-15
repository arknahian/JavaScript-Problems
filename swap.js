//swap with temp
var a = 15;
var b = 13; 
console.log("before swap a =", a ,"," ,"b=", b);

//swap
var temp = a;
var a = b;
var b = temp;

console.log("after swap a =", a ,"," ,"b=", b);




//By minus something 
var x = 12;
var y = 19;
console.log("Another before Swap x=", x, ",", "y =", y);
x = x + y; //31
y = x-y; // 12 
x = x-y; //  19 

console.log("Another after Swap x=", x, ",", "y =", y);



//Java Scrip[t] Special!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var p = 23;
var q = 97;
console.log("In JS Style before Swap p=", p, ",", "q =", q);
[p,q] = [q,p];
console.log("In JS Style before Swap p=", p, ",", "q =", q);





//this is another wrong way
// var a = 6 ;
// var b = 5 ;
// var a = b;
// var b = a;
// console.log(a, b)