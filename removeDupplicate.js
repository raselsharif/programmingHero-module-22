const nameList = ["Alice", "Bob", "Charlie", "Alice", "David", "Eve", "Bob", "Frank", "Alice", "Bob", "Charlie", "Alice", "David", "Eve", "Bob", "Frank"];
// console.log(nameList);
function removeDuplicate(names) {
    // console.log(names);
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i]);
        if(unique.includes(names[i]) === false){
            unique.push(names[i]);
        }

    }
    return unique;
}

const addNamesToArray = removeDuplicate(nameList);
console.log(addNamesToArray);