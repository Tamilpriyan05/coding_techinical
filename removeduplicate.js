const removeduplicate=(array)=>{
//  const data= array.split('')
    // console.log(array)
    // frst method
    let unquieelements=[]

    for(i=0;i<array.length;i++){
        // console.log(array[i])
        if(unquieelements.indexOf(array[i])===-1){
            unquieelements.push(array[i])
        }
    }
    console.log(unquieelements)

    // second method
}

const array=[1,2,3,4,5,6,7,8,3,4,2,10,11,12,2,3];
const data1="abcabcbb"

removeduplicate(array)


const remove = array.filter((val,index,arr)=>{
  
   return arr.indexOf(val)!==index
   
})

console.log(remove)
