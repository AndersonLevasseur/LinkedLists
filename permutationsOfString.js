const str = "abcdefg"
function permutate(str) {
    if (str.trim().length === 0 || typeof (str) !== "string") {
        throw "invalid input";
    }
    if (str.length === 1) {
        return [str];
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const freeze = str[i];
        const firstUnfrozen = str.substring(0, i);
        const lastUnfrozen = str.substring(i + 1, str.length);
        const unfrozen = firstUnfrozen + lastUnfrozen;
        const permutations = permutate(unfrozen);
      
        for (const permutation of permutations) {
            result.push(freeze.concat(permutation));
        }
    }
    return result;

}
console.log(permutate(str)); 

