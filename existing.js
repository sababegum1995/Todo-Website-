// function store() {
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('pw', pw.value);
// }
let todos =[]
function add(){


let border = document.getElementById('border');
let result = document.getElementById('result');
let dateresult= document.getElementById('dateresult');
let checkbox = document.getElementById('checkbox');

let  user = {
   result:result.value,
   dateresult:dateresult.value,
}
todos.push(user);

function adduser(addinguser){
    let adduser = todos.filter((CurrentUser)=>{
        return CurrentUser.email == addinguser.email;
    })
    if(adduser.length == 0){
        todos.push(addinguser);
    }
    else{
        alert('fffsfs');
    }
   
}
}