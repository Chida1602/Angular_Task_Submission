function filterThis(arrayFilter,array){
    result=[]
    for(let x of array)
        if(arrayFilter(x))
            result.push(x)
    return result        
}
fresult=filterThis(function(x){
    for(let i=2;i<=x;i++)
    {
        if(x%i==0)
            return false
        return true
    }
},[12,7,3,2,24])
console.log(fresult)
