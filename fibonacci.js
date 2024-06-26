
// const fibonacci=(number)=>{
     
//     console.log(number)
//     let n=0
//     let fibonacci=0
//     for(i=1;i<=number;i++){
//         for(j=1;j<=number;j++){
           

//         }
   
//     }

//     console.log(n)
//     console.log(fibonacci)
// }

// fibonacci(6)

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;

    if (n === 0) {
        return a;
    }

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example usage:
console.log(fibonacci(5));


function sortNumbers(numbers) {
    return numbers.sort();
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log(sortNumbers(numbers)); 