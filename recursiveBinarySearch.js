const arr = []
for (i = 0; i < 25; i++) {
    arr.push(String.fromCharCode(97 + i));
}
function binarySearch(list, value) {
    const max = list.length;
    const min = 0;
    const middle = Math.floor(list.length / 2);
    let result = 0;

    if (list[middle] === value) {
        result += middle;
    } else if (list.length <= 1) {
        return "object not found"
        // really needs to return location of middle
    } else if (value > list[middle]) {
        result += middle + 1;
        result += binarySearch(list.splice(middle + 1, max), value);
    } else {
        result = binarySearch(list.splice(min, middle), value);
    }
    return result;
}

console.log(arr.indexOf("y"));
console.log(binarySearch(arr, "y"));