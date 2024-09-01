let arr = [2, 3, 4, 2, 1, 2]
let k = 2
let count = 0;

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]===k){
//         count++
//     }
// }

// console.log(`${count} of ${k} in the array`)

arr.forEach(arrele => {  //not dependening on the index of the element
    if (arrele === k) {
        count++
    }
});

console.log(`${count} of ${k} in the array`)

//filter in array

let newArr = arr.filter(value => value === k)
console.log(newArr)

//map -->callback function to write logic into it

let mult = arr.map(value => {
    if (value % 2 == 0) {
     return value = value * 2
    }
    else {
   return value = false
    }
    
})
console.log(mult)

//arr[0]=4