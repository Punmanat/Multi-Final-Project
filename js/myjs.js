function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//Navbar
var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
     } else {
         document.getElementById("navbar").style.top = "-50px";
     }
     prevScrollpos = currentScrollPos;
}