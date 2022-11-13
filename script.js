const form = document.querySelector('form');
const input = document.querySelector('input');
const btnAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('ul');

events();

function events() {

    form.addEventListener('submit',additems);
    taskList.addEventListener('click',deleteItem);
}

function additems(e) {
    e.preventDefault();

    if (input.value === '') {
        alert('add an item')
    }

    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(input.value))
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(a);
    taskList.appendChild(li);
    input.value = '';
}

function deleteItem(e) {
    e.preventDefault();
    if (e.target.className === 'fas fa-times') {

        e.target.parentElement.parentElement.remove();
    }
}

btnAll.addEventListener('click',(e) => {
    e.preventDefault();
    for(let i=0;i<taskList.children.length;i++){
        taskList.children.remove()
    }
})
