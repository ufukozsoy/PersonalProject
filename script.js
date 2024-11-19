window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".back-to-top").style.display = "block";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
}

document.querySelector(".back-to-top").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"});
});

AOS.init({
    duration: 1000,  // Animation duration in milliseconds
    easing: 'ease-in-out',  // Animation easing function
    once: true  
  });