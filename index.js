// let night = document.querySelector('.bi-moon-fill');

let menu = document.querySelector('#btn');
menu.onclick = () => {
    anscontant.classList.toggle('active')
}


let accordions = document.querySelectorAll('.row');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})
