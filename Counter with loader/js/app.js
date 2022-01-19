const progress_bar = document.querySelector('.load');
const input_number = document.querySelector('#input_number');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const counter_result = document.querySelector('#counter_result');




let counter;
let clear_count;

start.addEventListener('click', () => {

    counter = input_number.value;

    clear_count = setInterval(() => {

        let width = coun_load(input_number.value, counter);

        counter_result.innerHTML = `<h1> ${counter}</h1>`;

        progress_bar.innerHTML = `<div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style="width: ${coun_load(input_number.value, counter)}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>`;

        if (counter < 10) {
            counter_result.innerHTML = `<h1> 0${counter}</h1>`;
        } else {
            counter_result.innerHTML = `<h1> ${counter}</h1>`;
        }

        if ( counter == 0 ) {
            clearTimeout(clear_count)
        }

        counter--;
    
    }, 1000);

})

stop.addEventListener('click', () => {
    clearTimeout(clear_count);
    })


reset.addEventListener('click', () => {
    counter = "00";
    counter_result.innerHTML=`<h1>${counter}</h1>`;
    clearTimeout(clear_count);
    progress_bar.innerHTML = ``;
    })