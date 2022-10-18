'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.close-modal')
const btns = document.querySelectorAll('.show-modal')
const btnUp = document.querySelector('.plus')
const spanMod = document.querySelector('.num')
const btnDown = document.querySelector('.minus')
const closeModal = document.querySelector('.closseModal')
const btnsOpenModal = document.querySelectorAll('.info')
const orderModal = document.querySelector('.modal--1')
const overlay1 = document.querySelector('.overlay1')
const closeModal1 = document.querySelector('.close-modal1')
const minus = document.querySelector('.minus1')
const plus = document.querySelector('.plus1')
const number = document.querySelector('.number1')
const orderButton = document.querySelector('.Orderr')



for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}


const closseModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
}

btn.addEventListener('click', closseModal);
overlay.addEventListener('click', closseModal)
closeModal.addEventListener('click', () =>{
  alert('Thank You For Your Order!')
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closseModal();

        }
    }
});

document.querySelector('.main-nav-list').addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav-links')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
})


//Section Reveal:

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right')
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');

let currentSilde = 0;
const maxSlide = slides.length;
slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`)  


const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

const createDots = function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend', 
    `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`)

  })
}



createDots();
activateDot(0);

const goToSlide = function(slide){
  slides.forEach((s,i)=> (s.style.transform= `translateX(${100 * (i - slide)}%)`))
}

const nextSlide = function(){
  if(currentSilde === maxSlide - 1){
    currentSilde =0
  }else{
    currentSilde ++
  }
  goToSlide(currentSilde);
  activateDot(currentSilde);
}

setInterval(nextSlide , 3000);
const previousSlide = function(){
  if(currentSilde === 0){
    currentSilde = maxSlide - 1
  }else{
    currentSilde--;
  }
  goToSlide(currentSilde);
  activateDot(currentSilde);
}
btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click', previousSlide)

document.addEventListener('keydown', function(e){
  if(e.key == 'ArrowLeft')previousSlide();
  e.key == 'ArrowRight' && nextSlide(); 
})

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide)
    activateDot(slide)
  }
})


let span = 1;
btnUp.addEventListener('click',function(e){
  span++
  span = (span < 10)? "0" + span : span;
  spanMod.textContent = span
})

btnDown.addEventListener('click',function(x){
  x.preventDefault()
  if(span > 1){
    span--;
    span = (span < 10) ? '0' + span : span;
    spanMod.textContent = span
  }
  
})


// Information Modal
const openModal = function () {
  orderModal.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};
const closseOrder = function(){
  orderModal.classList.add('hidden');
  overlay.classList.add('hidden')
}



for(let i = 0; i< btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', openModal)
}
closeModal1.addEventListener('click', function(){
  orderModal.classList.add('hidden');
  overlay1.classList.add('hidden')
})
overlay1.addEventListener('click',function(){
  orderModal.classList.add('hidden');
  overlay1.classList.add('hidden')
} )

plus.addEventListener('click', function(e){
  span++
  span = (span < 10)? "0" + span : span;
  number.textContent = span

})



minus.addEventListener('click', function(e){
  e.preventDefault()
  if(span > 1){
    span--
    span = (span < 10)? '0' + span: span;
    number.textContent = span
  }
})

orderButton.addEventListener('click',function(){
  alert('Thank You For Your Order!')
  orderModal.classList.add('hidden');
  overlay1.classList.add('hidden')
  
})

