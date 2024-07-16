// Change navbar theme when scroll down
let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if(document.body.scrollTop>40 ||this.document.documentElement.scrollTop>40){
        navbarDiv.classList.add("navbar-cng");        
    }else{
        navbarDiv.classList.remove("navbar-cng");
    }
})

// Navbar collapse show
const navbarCollapseDiv = document.getElementById("navbar-collapse");
const navbarShowBtn = document.getElementById("navbar-show-btn");
const navbarCloseBtn = document.getElementById("navbar-close-btn");

navbarShowBtn.addEventListener("click", function() {
    navbarCollapseDiv.classList.add("navbar-collapse-rmw");
})

// Navbar show collapse dengan klik X
navbarCloseBtn.addEventListener("click", function(){
    navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
})

// Navbar show collapse dengan klik body
document.addEventListener("click",function(e){
    // console.log(e.target.parentElement.classList);
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove("navbar-collapse-rmw")
    }});

// Stop transition and animation during window resizing
let resizedTimer;
window.addEventListener("resize",function() {
    document.body.classList.add("resize-animation-stopper");
    this.clearTimeout(resizedTimer);
    resizedTimer = setTimeout(function() {
        document.body.classList.remove("resize-animation-stopper");
    },400)
})




// Gallery
