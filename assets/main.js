
let burger = document.querySelector('.burger');
let firstLevelMenu = document.querySelector('.first-level');
let secondLevelMenu = document.querySelectorAll('.second-level');
let arrow = document.querySelectorAll('.arrow');
let arrows = document.querySelectorAll('.fa-angle-up');



// function openContent(a){
//     a.nextElementSibling.classList.toggle('block-open');
// }
// function closeSecondMenu(){
//     for(let i=0;i<secondLevelMenu.length;i++){
//         secondLevelMenu[i].style.display=none;
//     }
// }

function openContent(a){
    for(let i=0;i < secondLevelMenu.length; i++){
        secondLevelMenu[i].classList.remove("block-open");
    }
    a.nextElementSibling.classList.toggle("block-open");
    a.scrollIntoView()
}
function toggleFirstLevelMenu() {
    firstLevelMenu.classList.toggle("block-open");
}

function openMenu(){
    burger.addEventListener('click', toggleFirstLevelMenu);
}


openMenu();

