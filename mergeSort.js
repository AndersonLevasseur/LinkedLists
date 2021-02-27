const User = require('./User');
let box = [];
box.push(new User("Sarah", 2, 45));
box.push(new User("anderson", 13, 17));
box.push(new User("Dave", 61, 36));
box.push(new User("Beth", 23, 36));
box.push(new User("Ethan", 12, 11));
box.push(new User("Elyana", 99, 6));
box.push(new User("Bob", 5, 47));
box.push(new User("Dan", 1, 38));
box.push(new User("Lauren", 93, 35));


function mergeSort(list, compareFunction) {
    let mid = Math.floor(list.length / 2);
    if (list.length === 0) {
        throw "List is empty";
    }
    if (list.length === 1) {
        return list;
    } else if (list.length === 2) {
        return arrSort([list[0]], [list[1]], compareFunction);
    } else {
        const sortedArr = mergeSort(list.slice(0, mid), compareFunction);
        const sortedArr2 = mergeSort(list.slice(mid), compareFunction);
        return arrSort(sortedArr2, sortedArr, compareFunction);
    }

}

function arrSort(sortedArr1, sortedArr2, compareFunction) {
    let result = [];
    while (sortedArr1.length > 0 && sortedArr2.length > 0) {
        if (compareFunction(sortedArr1[0], sortedArr2[0]) < 0) {
            result.push(sortedArr1.shift());
        } else {
            result.push(sortedArr2.shift());
        }
    }


    if (sortedArr1.length === 0) {
        result = result.concat(sortedArr2);
    } else if (sortedArr2.length === 0) {
        result = result.concat(sortedArr1);
    }
    return result;
}
console.log(mergeSort(box, User.nameCompare));