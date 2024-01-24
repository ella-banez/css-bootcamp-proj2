function BannerNavigation(){

    const dotOne = document.getElementById("dot-1");
    const dotTwo = document.getElementById("dot-2");
    const dotThree = document.getElementById("dot-3");
    const dotFour = document.getElementById("dot-4");
    const slide = document.querySelector('.slide-wrapper');


    dotOne.addEventListener('click', () =>{
        slide.style.animation = 'none';
        slide.style.left = 0;
        
    });

    dotTwo.addEventListener('click', () =>{
        slide.style.animation = 'none';
        slide.style.left = '-100%';
    });
            

    dotThree.addEventListener('click', () =>{
        slide.style.animation = 'none';
        slide.style.left = '-200%';
        
    });


    dotFour.addEventListener('click', () =>{
        slide.style.animation = 'none';
        slide.style.left = '-300%';
        
    });
}


function Dropdown(){

    let dropdown = document.getElementsByClassName('dropdown');
    
    if(dropdown.item(0).classList.contains('dd-close')){
        dropdown.item(0).classList.remove('dd-close');
    } else{
        dropdown.item(0).classList.add('dd-close');
    };
   
}

let menuFirst = document.getElementById('menu-1');
menuFirst.addEventListener('click', Dropdown)





const menuEl = document.querySelector('.menu-icon');
const lines = document.querySelectorAll('.line');

let check = 0;

function toggleNavigation(){
    const mainNav = document.querySelector('.nav-main-list');
    
    if(mainNav.classList.contains('show')){
        mainNav.classList.remove('show');
    }else{
        mainNav.classList.add('show');
    };

    // console.log(mainNav);

    lines.forEach(line => line.classList.toggle('x'));
};


menuEl.addEventListener('click', toggleNavigation);


BannerNavigation();