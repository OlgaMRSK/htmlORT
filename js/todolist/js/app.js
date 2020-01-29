function createTODO(todoTxt){  
//---------1iere methode---------
//const divTodo = document.createElement('div');
//const chekTodo = document.createElement('input');
//const labTodo = document.createElement('label');
//const butTodo = document.createElement('button');

//divTodo.className ='todo';
//chekTodo.type='checkbox';
//chekTodo.id='checkbox';
//labTodo.htmlFor= 'checkbox' ;
//labTodo.textContent= 'Lorem ipsum' ;
//butTodo.className='btclose';
//butTodo.innerHTML= '&times;';

//divTodo.appendChild(chekTodo);
//divTodo.appendChild(labTodo);
//divTodo.appendChild(butTodo);


//document.querySelector('#todolist').appendChild(divTodo);

        // 2ieme methode
        const todoHTML= `
    <div class="todo">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">${todoTxt}</label>
        <button onclick="closeTodo"
        (this.previousElementSibling.previousElementSibling,this.parentNode)" class="btclose">&times;</button>
    </div>`
    ;
    document.querySelector('#todolist').innerHTML += todoHTML;
}
//createTODO();
//createTODO();
//createTODO();

function checkValue(val) {
    return val.length > 2;
}
function closeTodo(checkboxTag, todoTag){
    if (checkboxTag.checked) {
       const response = confirm('Tu veux vraiment supprimer?');
       if (!response) return;
    }
     document.querySelector('#todolist').removeChild(todoTag)
}

document.forms['form-add-todo'].addEventListener (
    'submit',
    function(e) {
        e.preventDefault();
        if (checkValue(this.todoTxt.value)) { 
        createTODO(this.todoTxt.value); 
    }
        else {
            const errorTxt = document.querySelector('.error');
            errorTxt.style.display= 'block';
            setTimeout(() => {
                errorTxt.style.display = 'none';
            }, 2500);
        }
    });



