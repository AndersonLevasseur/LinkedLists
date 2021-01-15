let i = 0
const array = ["a", "b"];
let newPermutation;

function permutate(array) {
    let original = array
    let left = array[i];
    let right = array[array.length - 1];
    if (left === right) {
        return `${array.toString()}; ${newPermutation}`;
    } else {
        i++
        let permutation = array;
        let delObj = permutation[1];
        do {
            permutation.splice(1, 1);
            permutation.push(delObj);
        } while (array !== permutation) {
            oldPermutation = permutation.toString();
            delObj = permutation[1];
            permutation.splice(1, 1);
            permutation.push(delObj);
            newPermutation = `${oldPermutation}; ${newPermutation}`;         
        } 
        delObj = permutation[0];
        permutation.splice(0, 1);
        permutation.push(delObj);

        // Before move to next cycle to the next letter 
        // abc, bac
    }
    return newPermutation, permutate(array)
    // continue until left reaches right 
    // https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif
    // return multiple strings
}
console.log(permutate(array));
console.log(typeof(permutate(array)));