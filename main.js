//DOM Document Object Model

// ABre e fecha o menu quando clicar no icone: hamburguer e X

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da p[agina quando der scroll

function WhenHeaderStaysBehind() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll eh maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Botao voltar para o topo */

function BackToTop() {
  const back = document.querySelector('.back-to-top')
  if (window.scrollY >= 1200) {
    // scroll eh maior que a altura do header
    back.classList.add('show')
  } else {
    //menor que a altura do header
    back.classList.remove('show')
  }
}

/* TESTIMONIALS SLIDER/CARROSEL SWIPER */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
    #about .image, #about .text,
    #service header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`,
  { interval: 100 }
)

// Chama as funcoes de scroll

window.addEventListener('scroll', function () {
  WhenHeaderStaysBehind()
  BackToTop()
})
