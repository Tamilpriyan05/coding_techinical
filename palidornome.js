
const palindronme=(string)=>{
  
// console.log(string)
    //   frst method
let a=string.split('').reverse().join('')
// console.log(string===a)
// second method
let reversestring=''
for(i=string.length-1;i>=0;i--){
   reversestring +=string[i]
}
// console.log(string===reversestring)
}
palindronme("racecar")
palindronme("racecarh")