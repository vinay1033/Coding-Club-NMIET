$(document).ready(function(){
    $(window).bind('scroll',function(){
        var gap=50;
        if($(window).scrollTop()>gap){
            $('.navigation').addClass('nav_b')
        }else{
            $('.navigation').removeClass('nav_b')
        }  
});
});



const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



