const array1=[2,1,2,2,3,5,6,5,7,22,7,9,22]

const array2=[2,1,3,6,5,7]

// output [2,2,2,1,3,6,5,5,7,7,22,9]

const arrange=(arr1,arr2)=>{
 
    let newarray=[]
    let blancearry=[]
    for(i=0;i<arr2.length;i++){
      
        for(j=0;j<arr1.length;j++){
           
            if(arr2[i]==arr1[j]){
                newarray.push(arr1[j])
            }
        }
    }
    
    for(i=0;i<arr1.length;i++){
        console.log(newarray[i])
        if(newarray.indexOf(arr1[i])==-1){
            blancearry.push(arr1[i])
        }
    }
    
    const finalarray=newarray.concat(blancearry.sort())
    console.log(finalarray)
}

arrange(array1,array2)