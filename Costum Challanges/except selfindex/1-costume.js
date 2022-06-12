const arr1 = [1,2,3,4,5]
const arr2 = []


for (const i of arr1) {
    let b = 1
    for (const j of arr1) {
        if (i == j){
            continue
        }else {
            b *= j
        }
    }
    arr2.push(b)
}

console.log(arr2);

function productOfArray(array){
    let all = array.reduce ((acc, curr) => acc * curr, 1)
    return array.map(index => all / index)
}
console.log(productOfArray([1,2,3,4,5]));