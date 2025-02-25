let slideIndex = 1;
showSlides(slideIndex);


setInterval(()=>{
  plusSlides(1)

},6000)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
     
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  cssMode: true,
  

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
    
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
    
  },
  mousewheel: true,
  keyboard: false,
});



document.querySelector('.swiper-button-next').style = 'color: #383838; margin-right:25px;';
document.querySelector('.swiper-button-prev').style = 'color: #383838; margin-left:25px;';
document.querySelector('.swiper-pagination').style = 'color: #383838;';





let scroll = document.querySelector('#icon')
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 500){
    scroll.classList.add('show')
  }

  else{
    scroll.classList.remove('show')
  }
})

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth' 
  });
});




const swiperSix = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  loop:true,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.button-next' ,
    prevEl: '.button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// document.querySelector('.swiper-button-prev').style = 'margin-left: 80px; color:rgb(255, 255, 255);';
// document.querySelector('.swiper-button-next').style = 'color:rgb(255, 255, 255); margin-right:25px;';


// search

let searchBar = document.querySelector('#searchBar')
let closeIcon = document.querySelector('#closeIcon')
let search  = document.querySelector('.search-flex')

searchBar.addEventListener('click', ()=>{
  if(search.classList.contains('active')){
    search.classList.remove('active')
    search.style.opacity = '0';
    search.style.height = '0';
    
  
  }

  
  else{
    search.classList.add('active')
    search.style.display = 'flex'
    setTimeout(() => {
      search.style.opacity = '1';
      search.style.height = 'auto';
      
    }, 10);
    
  }
  
})


closeIcon.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    search.classList.remove('active');
    search.style.opacity = '0';
    search.style.height = '0';
    setTimeout(() => {
      search.style.display = 'none';
    }, 1000); 
  }
});



let head = document.querySelector('#head');
let menu = document.querySelector('.menu')
let logo = document.querySelector('.logo')
let logoBlack = document.querySelector('.logo-black')
let headBorder = document.querySelector('.headBorder')
let changeColor = document.querySelector('.change-color')
let borderColor = document.querySelector('.border-color')
let searchWhite = document.querySelector('.search-white')





window.addEventListener('scroll', () => {
  if (window.scrollY > 750) {
    head.classList.add('fixed-header');
    menu.style.color = '#383838'
    logo.style.display = 'none'
    logoBlack.style.display = 'flex' 
    logoBlack.style.width = '200px' 
    logoBlack.style.marginRight = '500px'
    borderColor.style.border = 'solid rgba(0, 0, 0, 0.58) 0.5px'
    searchWhite.innerHTML = `<svg width="18" height="18" viewBox="0 0 14 14" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path d="M13 13L10.1047 10.1047M10.1047 10.1047C10.6 9.60945 10.9928 9.0215 11.2608 8.37442C11.5289 7.72734 11.6668 7.0338 11.6668 6.33341C11.6668 5.63302 11.5289 4.93948 11.2608 4.2924C10.9928 3.64532 10.6 3.05737 10.1047 2.56212C9.60945 2.06687 9.0215 1.67401 8.37442 1.40598C7.72734 1.13795 7.0338 1 6.33341 1C5.63302 1 4.93948 1.13795 4.2924 1.40598C3.64532 1.67401 3.05737 2.06687 2.56212 2.56212C1.56191 3.56233 1 4.9189 1 6.33341C1 7.74792 1.56191 9.10449 2.56212 10.1047C3.56233 11.1049 4.9189 11.6668 6.33341 11.6668C7.74792 11.6668 9.10449 11.1049 10.1047 10.1047Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    



    

  } else {
    head.classList.remove('fixed-header');
        menu.style.color = '#ffffff'
        logo.style.display = 'flex'
        logoBlack.style.display = 'none' 
        borderColor.style.border = 'solid rgba(255, 255, 255, 0.58) 0.5px'
        searchWhite.innerHTML = `<svg width="18" height="18" viewBox="0 0 14 14" fill="none"  xmlns="http://www.w3.org/2000/svg">
        <path d="M13 13L10.1047 10.1047M10.1047 10.1047C10.6 9.60945 10.9928 9.0215 11.2608 8.37442C11.5289 7.72734 11.6668 7.0338 11.6668 6.33341C11.6668 5.63302 11.5289 4.93948 11.2608 4.2924C10.9928 3.64532 10.6 3.05737 10.1047 2.56212C9.60945 2.06687 9.0215 1.67401 8.37442 1.40598C7.72734 1.13795 7.0338 1 6.33341 1C5.63302 1 4.93948 1.13795 4.2924 1.40598C3.64532 1.67401 3.05737 2.06687 2.56212 2.56212C1.56191 3.56233 1 4.9189 1 6.33341C1 7.74792 1.56191 9.10449 2.56212 10.1047C3.56233 11.1049 4.9189 11.6668 6.33341 11.6668C7.74792 11.6668 9.10449 11.1049 10.1047 10.1047Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`

  }
});



// let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
      
//     } x``
//   });
// } 


let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all other accordions
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) { // Skip the current accordion
        acc[j].classList.remove("actives");
        let otherPanel = acc[j].nextElementSibling;
        if (otherPanel.style.maxHeight) {
          otherPanel.style.maxHeight = null;
        }
      }
    }

    // Toggle the current accordion
    this.classList.toggle("actives");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



  $(document).ready(function () {
    $("#check").change(function () {
      if ($(this).is(":checked")) {
        $(".menu-bar").slideDown(300);
      } else {
        $(".menu-bar").slideUp(300);
      }
    });
  });



