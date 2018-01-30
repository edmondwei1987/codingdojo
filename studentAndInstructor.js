
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
function studentAndInstructor(arr){
    for(var i in arr){
        console.log(arr[i].first_name+" "+arr[i].last_name);
    }
    document.body.innerHTML="<html>hello world</html>";
}

studentAndInstructor(students);