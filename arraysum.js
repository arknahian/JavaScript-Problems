function arraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
var num = [11, 32, 43];
var result = arraySum(num);
console.log(result);

var num2 = arraySum([21, 324, 424, 4243, 42423 ,2442]);
console.log(num2);
