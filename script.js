const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
})
 
const popular = document.querySelector('#popular')
const load = document.querySelector('#load')

load.addEventListener('click', () => {
    if(popular.classList.contains('hidden')){
        popular.classList.remove('hidden')
        load.classList.add('hidden')
    }
})
