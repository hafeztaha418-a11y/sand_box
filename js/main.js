window.addEventListener("scroll" , function(){
    let navbar = document.getElementById("basic-nav");
    if(window.scrollY >= 150){
        navbar.classList.add("navbar-scrolled");

    }else{
        navbar.classList.remove("navbar-scrolled");
    }
});

let iconlist = document.querySelector(".list-nav");
let listmenu = document.querySelector(".list-nav-menu");
let closelist = document.querySelector(".close-btn");
iconlist.addEventListener("click" , function(){
  if(listmenu.style.display ==='none'){
     listmenu.style.display = "block";
  }else{
    listmenu.style.display="none";
  }
});

closelist.addEventListener("click" , function(){
     
    listmenu.style.display ="none" ;
  }
);
