// 🔴Create a function that will receive two arrays and will return an array withelements that are in the first array but not in the second
// Code is => DONE✅

function arrayOneSingleNumber(array1, array2) {
    let newArray = [];
        for (let index = 0; index < array1.length; index++) {
            const element = array1[index];
            if (!array2.includes(element)) {
                newArray.push(element)
            }
        }
    return newArray;
}

console.log(arrayOneSingleNumber([1, 2, 3, 5, 22, 35, 45], [5, 1, 6, 3, 10]))