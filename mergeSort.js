const User = require('./User');
let box = [];
box.push(new User("Sarah", 2, 45));
box.push(new User("anderson", 13, 17));
box.push(new User("Bob", 5, 47));
box.push(new User("Ethan", 12, 11));
box.push(new User("Elyana", 99, 6));
box.push(new User("Dave", 61, 36));
box.push(new User("Beth", 23, 36));
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
console.log(mergeSort(box, User.idCompareLow));
/*



base case - arr with singular object inside
    returns arr

base + 1 split down to smaller case
    use split into 2 halves
    recurse
        send halves to be sorted - use function again(recursion)
        returns two sorted arrays
    write code that takes two sorted arrays and sorts them into an array
        seperate code
    return 1 sorted array


*/ /*

















function mergeSort(list, compareFunction) {
    let mid = [Math.ceil(list.length / 2)];
    let result = [];
    let splitCount = 0;
    // needs to split list down to a bunch of singular users ... Stored where?
    if (list.length > 2) {
        // takes the first half of the array all the way down to the first to obj
        // TODO: stores new smaller mergeSort in different arr
        splitCount++;
        result = result.concat(mergeSort(list.slice(0, mid), compareFunction));
    } else if (list.length === 2) {
        if (compareFunction(list[0], list[1]) === -1) {
            // add back to results array with no change
            result.push(list[0], list[1]);
        } else if (compareFunction(list[0], list[1]) === 0) {
            if (compareFunction === User.ageCompareLow || compareFunction === User.ageCompareHigh) {
                return mergeSort(list, nameCompare);
            } else if (compareFunction === User.nameCompare) {
                return mergeSort(list, idCompareHigh);
            } else {
                throw "Comparisons the same"
            }
        } else if (compareFunction(list[0], list[1]) === 1) {
            result.push(list[1], list[0]);
        } else {
            return result.push(list[0]);
        }

    } else if (list.length === 1) {
        result.push(list[0]);
    }
    for (let i = 0; i < splitCount; i++) {
        result = result.concat(mergeSort(list.slice(mid), compareFunction));

    }

    return result;
    // needs to call compareFunction to compare
}

function sortMerge(list1, list2, compareFunction) {
    if (compareFunction(list1[0], list2[0]) === -1) {
        result.push(list1[0]);
        list1.splice(0);
    } else if (compareFunction(list1[0], list2[0]) === 0) {
        //TODO: error? or do nothing depends on which compare
    } else {
        result.push(list2[0]);
        list2.splice(0);
    }

}

console.log(mergeSortUNO(box, User.ageCompareHigh));

function mergeSortUNO(list, compareFunction) {
   let arr = [mergeSort(list, compareFunction)];
}
*/
