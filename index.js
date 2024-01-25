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

    const dropdown = document.getElementsByClassName('dropdown');
    
    if(dropdown.item(0).classList.contains('dd-close')){
        dropdown.item(0).classList.remove('dd-close');
    } else{
        dropdown.item(0).classList.add('dd-close');
    };
   
}


function EventListeners(){

    const menuFirst = document.getElementById('menu-1');
    const menuEl = document.querySelector('.menu-icon');
    const btnSignup = document.getElementById('btn-signup');
    const btnLogin = document.getElementById('btn-login');
    const btnClose = document.getElementsByClassName('btn-close');
    const btnModal = document.getElementById('btn-login-signup');

    menuFirst.addEventListener('click', Dropdown)
    menuEl.addEventListener('click', toggleNavigation);

    btnSignup.addEventListener('click', OpenForm);
    btnLogin.addEventListener('click', OpenForm);
    btnClose[0].addEventListener('click', CloseModal);
    btnModal.addEventListener('click', OpenModal);
}


function toggleNavigation(){
    const lines = document.querySelectorAll('.line');
    const mainNav = document.querySelector('.nav-main-list');
    
    if(mainNav.classList.contains('show')){
        mainNav.classList.remove('show');
    }else{
        mainNav.classList.add('show');
    };

    lines.forEach(line => line.classList.toggle('x'));
};

const modal = document.getElementsByClassName('modal');

function OpenForm() {

    let i;
    const tablinks = document.getElementsByClassName('tablinks');
    const tabContent = document.getElementsByClassName('tabcontent');

    for (i=0; i < tablinks.length; i++){
       if(tablinks[i].classList.contains('active')){
            tablinks[i].classList.remove('active');
       }else{
        tablinks[i].classList.add('active');
       }
    }

    for (i=0; i < tabContent.length; i++){
        if(tabContent[i].classList.contains('hide')){
             tabContent[i].classList.remove('hide');
        }else{
         tabContent[i].classList.add('hide');
        }
     }
  }

function CloseModal(){
    modal[0].classList.add('hide');
}

function OpenModal(){
   modal[0].classList.toggle('hide');
}




BannerNavigation();
EventListeners();
