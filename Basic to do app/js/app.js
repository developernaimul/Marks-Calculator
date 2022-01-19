const to_do = document.querySelector('#to_do');
const add_list = document.querySelector('#add_list');
const reset_list = document.querySelector('#reset_list');
const todo_list = document.querySelector('#todo_list');

add_list.addEventListener('click', () => {
    let to_do_value = to_do.value;
    let p = document.createElement('p');
    p.innerHTML = `
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
        ${to_do_value}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

    todo_list.appendChild(p);
    to_do.value = '';

    reset_list.addEventListener('click', () => {
        todo_list.removeChild(p);
    })

})
