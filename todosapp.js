let todos =[]
   
let add = document.getElementById('add');



function displayuser(){
    let border = document.getElementById('border');
    border.innerHTML=' ';
    todos.map((a) => {
        let userdiv = document.createElement('div');
        userdiv.classList.add('border');
        let ol = document.createElement('ol');
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute("id","checkbox");
        let result = document.createElement('p');
        result.innerText = a.result;
        result.setAttribute("id","result");
        let dateresult= document.createElement('p');
        dateresult.innerText = a.dateresult;
        dateresult.setAttribute("id","result1");
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.setAttribute("id","del"); 
        border.appendChild(userdiv);
        userdiv.appendChild(ol);
        ol.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(result);
        li.appendChild(dateresult)
        userdiv.appendChild(span);

        let del = document.getElementById('del')
        del.addEventListener('click', function(e) {
            border.parentNode.removeChild(border);
        }, false);
    })
}


function Add(){

    
let border = document.getElementById('border');
let result = document.getElementById('result');
let dateresult= document.getElementById('dateresult');
let checkbox = document.getElementById('checkbox');

let  user = {
   result:result.value,
   dateresult:dateresult.value,
}
todos.push(user);
displayuser();
console.log(todos);

}


