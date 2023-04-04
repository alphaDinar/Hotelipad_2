window.onload =()=>{
  makeHostelSwiper()
}
window.onresize =()=>{
  makeHostelSwiper()
}

const makeHostelSwiper =()=>{
  if(window.innerWidth < 840 && window.innerWidth >  480){var slideNum = 2}else if(window.innerWidth  < 480){var slideNum = 1}else{var slideNum = 3}
    var hostel_swiper = new Swiper(".hostel_swiper", {
      slidesPerView: slideNum,
      spaceBetween: 20,
      loop:true,
    speed: 1000,
    autoplay:{
      delay:3500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  hostel_swiper.el.onmouseenter =()=>{
    hostel_swiper.autoplay.stop()
  }
}   