
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
  let dots = document.getElementsByClassName("dot");

  //Sécurité pour rester dans 0 < slideIndex < slides.length
  if (SlideNumber > slides.length) {slideIndex = 1}
  if (SlideNumber < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < slides.length; i++) {
    if (slides[i].dataset.slideNumber == slideIndex) {
      slides[i].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
  }
}