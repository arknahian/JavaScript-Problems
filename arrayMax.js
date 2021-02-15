var marks = [11, 31, 26, 76, 45, 88, 33, 69, 25, 90, 37, 83];
var highestMarks = marks[0];
for(var i = 0; i <= marks.length; i++){
    var element = marks[i];
    if (element > highestMarks) {
        highestMarks = element;
    }
}
console.log("highest marks is", highestMarks);