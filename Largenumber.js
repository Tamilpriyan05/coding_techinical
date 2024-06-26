const array=[19,2,30,4,5,6,10,9,1]
const Largenumber=(array)=>{
     console.log(array)
    
     console.log(Math.max(...array))
     let largenumber=array[0]

     console.log(largenumber)

     for(i=0;i<array.length;i++){
          if(largenumber<array[i]){
               largenumber=array[i]
          }
         
     }
     console.log(largenumber)
}


Largenumber(array)

const smallnumber=(array)=>{
           console.log(array)

           let smallnumber=array[0]

           console.log(Math.min(...array))

           for(i=0;i<array.length;i++){
                 if(smallnumber>array[i]){
                     smallnumber=array[i]
                 }
           }
           console.log(smallnumber)
}

smallnumber(array)