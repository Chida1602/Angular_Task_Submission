Students = [

    {sno:1,name:"Anjali",marks:56},
    
    {sno:2,name:"Charu",marks:78},
    
    {sno:3,name:"Vamsi",marks:99},
    
    {sno:4,name:"Nivitha",marks:13},
    
    {sno:5,name:"Jay",marks:88},] 
    
    result=Students.reduce(function(Student1,Student2){
return Student1.marks>Student2.marks?Student1:Student2
    
    })
    
    console.log(result)