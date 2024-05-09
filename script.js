//import Lenis from 'lenis';
//import { gsap } from "gsap";


const big_card = document.querySelector(".card.one");
const second_card = document.querySelector(".card.two");
const third_card = document.querySelector(".card.three");
let cardsOne = document.querySelectorAll('.card.one');
let cardsTwo = document.querySelectorAll('.card.two');
let cardsThree = document.querySelectorAll('.card.three');
const splitTypes = document.querySelectorAll('.scroll-project')

splitTypes.forEach((char,i) => {
  const text = new SplitType(char, { types: 'chars'} )

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false
    },
    opacity: 0,
    stagger: 0.1
  })

})


cardsTwo.forEach(cardTwo => {
  cardTwo.onmousemove = function(e){
    let xn = e.pageX - cardTwo.offsetLeft + 100;
    let yn = e.pageY - cardTwo.offsetTop - 270;
  
    cardTwo.style.setProperty('--xn', xn + 'px');
    cardTwo.style.setProperty('--yn', yn + 'px');
  }
})

cardsOne.forEach(cardOne => {
cardOne.onmousemove = function(e){
  let x = e.pageX - cardOne.offsetLeft - 700;
  let y = e.pageY - cardOne.offsetTop - 290;

  cardOne.style.setProperty('--x', x + 'px');
  cardOne.style.setProperty('--y', y + 'px');

  console.log(x + "   ", y)

}
})

cardsThree.forEach(cardThree => {
  cardThree.onmousemove = function(e){
      let xr = e.pageX - cardThree.offsetLeft + 80;
      let yr = e.pageY - cardThree.offsetTop - 270;
    
      cardThree.style.setProperty('--xr', xr + 'px');
      cardThree.style.setProperty('--yr', yr + 'px');

      console.log(xr + "   ", yr)
    }
})

/*
const circle = document.querySelector(".circle");

circle.x = 50;
circle.y = 50;

window.addEventListener("mousemove", function(e){
  circle.x = e.clientX;
  circle.y = e.clientY;
})

console.log("Hello")
*/



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else{
        entry.target.classList.remove("show");
      }
    });
});


const hiddenElementsOne = document.querySelector(".head.me");
observer.observe(hiddenElementsOne);

const hiddenElementsTwo = document.querySelector(".head.ph");
observer.observe(hiddenElementsTwo);
//hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsImage = document.querySelectorAll(".image");
//observer.observe(hiddenElementsImage);
hiddenElementsImage.forEach((el) => observer.observe(el));



let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: big_card,
    start: '-50% center',
    end: '50% center',
    scrub: true,

  }
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: second_card,
    start: '-50% center',
    end: '50% center',
    scrub: true,

  }
})

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: third_card,
    start: '-50% center',
    end: '50% center',
    scrub: true,

  }
})

tl1.to( big_card, {
    x: 400,
})

tl2.to( second_card, {
  x: -400,
})

tl2.to( third_card, {
  x: -400,
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
