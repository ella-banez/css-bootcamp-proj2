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
