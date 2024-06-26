const numberarry=[22,33,2,8,9,10]

const numberreduce=numberarry.reduce((acc,cur,index,arry)=>{
       return acc +cur
},0)

console.log(numberreduce)


const objarry=[
    {name:"tamil",fess:20000,pending:15000},
    {name:"ashwitha",fess:20000,pending:10000},
    {name:"krithika",fess:20000,pending:5000},
    {name:"priyan",fess:20000,pending:0},
]


const totalpending=objarry.reduce((acc,cur)=>{
      return acc +cur.pending
},0)

console.log(totalpending);

const paidfess=objarry.filter((val,index)=>{
       if(val.pending===0){
              return val
       }
})
console.log(paidfess);
const fessnotpay=objarry.filter((val,index)=>{
       if(val.pending!==0){
              return val
       }
})
console.log(fessnotpay);