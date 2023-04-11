str=["anjali","hi","charumathiDevi"]
// let result=str.reduce((element1,element2)=>{
//       return element1.length>element2.length?element1:element2
// })
let result=str.reduce(function(element1,element2){
    return element1.length>element2.length?element1:element2
})
console.log(result)