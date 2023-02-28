//const sum = (a,b)=> a + b

//module.exports = sum

// const stringLength = (string) => {
//    return string.length
// }


// const reverseString = (string)=> {
    
// return string.split('').reverse().join('')
// }
// module.exports = reverseString
class Calculator {
    static add = (a,b) =>{
       return a + b
    }
    static subtract = (a,b)=>{
      return  a - b
    }
    static divide = (a,b) => {
        return a/b
    }
    static multiply = (a,b) => {
        return a * b
    }
    static capitalize = (string) => {
      const array = string.split('')
      array[0] = array[0].toUpperCase()
      return array.join('')
    }
}
module.exports = Calculator