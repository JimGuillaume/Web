
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(offset) {
  
  showSlides(slideIndex += offset);
}

function currentSlide(current) {
  showSlides(slideIndex = current);
}

function showSlides(SlideNumber) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  //Sécurité pour rester dans 0 < slideIndex < slides.length
  if (SlideNumber > 4) {slideIndex = 1; SlideNumber = 1;}
  if (SlideNumber < 1) {slideIndex = 4; SlideNumber = 4;}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    if (slides[i].dataset.slideNumber == slideIndex) {
      slides[i].style.display = "block";
    }
  }
}