export default function createTask() {
const toDoList = document.querySelector('.lists_container');
    const list = document.querySelector('#columns');
    const liDescription = document.createElement('li');
    liDescription.classList.add('column');
    liDescription.setAttribute('draggable', true);
    liDescription.innerHTML = '<input type="checkbox" class="task_name"><a href="#" class="edit"><i class="fas fa-ellipsis-v"></i></a>';
    alert(2);
}