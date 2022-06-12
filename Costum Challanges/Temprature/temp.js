const temp = [7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7]

function computeClosestToZero(ts){
    if (ts.length == 0){
        return 0
    }
    const positive = []
    const negative = []
    for (const i of temp) {
        if (i <= 0) {
            negative.push(i)
        }else positive.push(i)
    }
    positive.sort()
    negative.sort()
    if (positive[0] < (-1 * negative[0])){
        return positive[0]
    }else if ((-1 * negative[0]) < positive[0]){
        return negative[0]
    }else if ((-1 * negative[0] == positive[0])){
        return positive[0]
    }
}
console.log(computeClosestToZero(temp));

