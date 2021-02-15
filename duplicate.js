var name = [11, 22, 32, 33, 22, 324, 42, 32, 65, 11, 34, 75];
var unique = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = unique.indexOf(element);
    if (index == -1) {
        unique.push(element)
    }
}
console.log(unique)