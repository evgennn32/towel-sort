
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix && matrix.length){


    let i = 1;
    let arr = [];
    matrix.forEach((currentValue)=>{
        if(i){
            currentValue =  sortArr(currentValue, i)
            i = 0;
        }else{
            currentValue =  sortArr(currentValue, i)
            i = 1;
        }
        arr.push(...currentValue);
    })

    return arr;
    }
    return [];
}
function sortArr(arr, ind) {
    if(ind){
        return arr.sort((a, b) => a - b);

    }else{
        return arr.sort((a, b) => b - a);
    }
}
