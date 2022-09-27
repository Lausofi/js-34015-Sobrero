const addForm = document.querySelector('.add');
 
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newToDo = addForm.add.value;
    console.log(newToDo);
});

const newToDo = addForm.add.value.trim();

const list = document.querySelector('.to-dos');
const generateTemplate = toDo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newToDo = addForm.add.value.trim();
    generateTemplate(newToDo);
});

if(newToDo.length) {
    generateTemplate(newToDo);
    addForm.reset();
}