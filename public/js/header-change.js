document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    
    const header = document.getElementById("header-og");
    const contentSection = document.getElementById("hero-main");
    const styleChangePoint = document.getElementById("ab");
    const specificPoint = styleChangePoint.offsetTop; // Y-coordinate of the specific point
    
    console.log("Specific point offsetTop:", specificPoint);
    
    window.addEventListener("scroll", function() {
      console.log("Scroll position:", window.scrollY);
      
      if (window.scrollY >= specificPoint) {
        console.log("Adding dark-header class");
        header.classList.add("dark-header");
      } else {
        console.log("Removing dark-header class");
        header.classList.remove("dark-header");
      }
    });
  });
  

