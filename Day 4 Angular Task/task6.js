function filterThis(candidateFilter,candidates)
{
    result=[]
    for( x of candidates)
        if(candidateFilter(x))
            result.push(x)
    return result 
}
candidates = [
    {sno:1,name:"Jose",score:56},
    {sno:2,name:"Kiran",score:78},
    {sno:3,name:"Mohit",score:99},
    {sno:4,name:"Vinay",score:13},
    {sno:5,name:"Arjun",score:88},]
result=filterThis(function(candidate){
        if(candidate.score>70)
          return true
        return false  
},candidates)
console.log(result)