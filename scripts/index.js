let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("bate_slide");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let quoteIndex = 1;
quoteSlide(quoteIndex);

function plusSlides(n) {
  quoteSlide((quoteIndex += n));
}
function cSlide(q) {
  quoteSlide((quoteIndex = q));
}

function quoteSlide(q) {
  let i;
  let quote = document.getElementsByClassName("quotes");
  let dotes = document.getElementsByClassName("dot");

  if (q > quote.length) {
    quoteIndex = 1;
  }
  if (q < 1) {
    quoteIndex = quote.length;
  }
  for (i = 0; i < quote.length; i++) {
    quote[i].style.display = "none";
  }
  for (i = 0; i < dotes.length; i++) {
    dotes[i].className = dotes[i].className.replace("active", "");
  }
  quote[quoteIndex - 1].style.display = "block";
  dotes[quoteIndex - 1].className += " active";
}
