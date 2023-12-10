$('.my-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    }
  ]
});


$('.main-slick-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});


const accodian = document.getElementsByClassName("accordian-box");
for(i = 0; i<accodian.length; i++ ){
  accodian[i].addEventListener("click", function(){
    this.classList.toggle("active")
  })
}