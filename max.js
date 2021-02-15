var business = 450;
var minister = 350;
var secretary = 250;
if(business > minister && business > secretary) {
    console.log("Business is Bigger")
}
else if(secretary > minister && secretary > business){
    console.log("secretary is bigger")
}
else{
    console.log("Minister Is bigger");
}

//In another way @=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var business2 = 450;
var minister2 = 350;
var secretary2 = 750;
if (business2 > minister2) {
    if (business2 > secretary2) {
        console.log("Business2 is bigger");
    }
else{
    if (minister2 > secretary2) {
            console.log("minister2 is bigger");
    }   
    else{
        console.log("secretary2 is bigger");
    }
    }
}
//max value with simple code 
var maxValue = Math.max(minister2, business2, secretary2);
console.log(maxValue);