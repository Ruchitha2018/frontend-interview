const arr1 = [4,5,6];
// const result = arr1.map((data, index) => {
//     return data*2;
// })
// console.log(result)

Array.prototype.myMap = function(func){
    const newArr = [];
    console.log(func)
  for(let i=0; i<this.length;i++) {
    newArr.push(func(this[i], i))
  }
  return newArr;
}

const result1 = arr1.myMap((data, index, arr) => {
    return data*4;
})
console.log(result1)

const result2 = arr1.filter((data) => {
    return data > 4
})

console.log(result2)

Array.prototype.myFilter = function(cb) {
    const newArr = [];
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i)) {
           newArr.push(this[i])
        } 
    }
    return newArr;
}

const result3 = arr1.myFilter((data) => {
    return data > 4
})

console.log(result3)


