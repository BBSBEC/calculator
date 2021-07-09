'use strict'
const icon = document.querySelector('.icon')
const fas = document.querySelector('.fas');
const body = document.body;
const cantainer = document.getElementById('cantainer');
const display = document.getElementById('display');
const btn = document.getElementsByClassName('btn');
const h1 = document.getElementById('cal');
const input = document.querySelectorAll('input');
let value = '';
const rmwhitetheme = () => {
    for (let i = 0; i < btn.length; i++){
        btn[i].classList.remove('btn--white');
        btn[i].classList.add("btn--dark");
    }
    h1.style.color = 'white';
}
const rmdarktheme = () => {
    for (let i = 0; i < btn.length; i++){
        btn[i].classList.remove("btn--dark");
        btn[i].classList.add('btn--white');
    }
    h1.style.color = 'black';
}
const addmoonicon = () => {
    fas.classList.remove('fa-sun');
    fas.classList.add('fa-moon');
}
const addsunicon = () => {
    fas.classList.remove('fa-moon');
    fas.classList.add('fa-sun');
}
const displaytheme = (background,color) => {
    display.style.background = background;
    display.style.color = color;
}
const cantainertheme = (boxShadow, background) => {
    cantainer.style.boxShadow = boxShadow;
    cantainer.style.backgroundColor = background;
}
const darkmode = () => {
    rmwhitetheme();
    addsunicon();
    body.style.backgroundColor = '#333333';
    cantainertheme('0 1.2rem 2rem 0.5rem #262626','#333333');
    displaytheme('#ffffff', '#333333');    
}
const lightmode = () => {
    rmdarktheme();
    addmoonicon();
    body.style.backgroundColor = '#ffffff';
    cantainertheme('0 1.2rem 3rem 0.5rem rgba(0,0,0,0.2)', '#ffffff');
    displaytheme('#333333', 'white');
    
}
const displayvalue = (value) => {
    display.value = value;
}

fas.addEventListener("click", function () {
    fas.classList.contains('fa-moon') ? darkmode() : lightmode();
})
 input.forEach((e) => {
    e.addEventListener('click', (event)=>{
        if (event.target.value == '=') {
            if (value.length != 0) {
                let newval = eval(value);
                value = ' '+newval;
                displayvalue(value);
            }
        }
        else if (event.target.value == 'C') {
            value = '';
            displayvalue(value);
        }
        else {
            value += event.target.value;
            console.log(value);
            displayvalue(' '+ value);
        }
    })
})
document.addEventListener('keydown', function (e) {
    if (!isNaN(e.key)) {
        value += e.key;
        displayvalue(' '+value);
    }
    else if (e.key ==='-'||e.key==='*'||e.key==='/'||e.key==='+'||e.key===".") {
        value += e.key;
       displayvalue(' '+value);
    }
    else if (e.key === 'Enter') {
        let newval = eval(value);
        value = newval;
        displayvalue(' '+value);
    }
})
