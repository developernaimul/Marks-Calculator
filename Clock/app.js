

const clock = document.querySelector('.clock');


setInterval(function(){

let date = new Date();


let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let ampm = h > 12 ? 'PM' : 'AM';


let hour = '';

if ( h == 0) {
    hour = 12;
}else if( h > 0 && h < 12){
    hour = h ;
}else{
    hour = h -12 ;
}


clock.innerHTML = `${naimul(hour)}:${naimul(m)}:${naimul(s)} ${ampm}`;


  
}, 1000);