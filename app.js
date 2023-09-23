let users =[]

function adduser(addinguser){
    let adduser = users.filter((CurrentUser)=>{
        return CurrentUser.email == addinguser.email;
    })
    if(adduser.length == 0){
        users.push(addinguser);
    }
}