
const array=[
    {name:"priyan",age:21},
    {name:"ashwitha",age:17},
    {name:"krithika",age:22},
    {name:"tamil",age:18}
]

const filter=array.filter((val,index,arry)=>{
    if(val.age!=18){
         console.log(val)
    }
})