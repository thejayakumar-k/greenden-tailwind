// Selecting Side Navbar, MenuIcon

let menuicon = document.getElementById("menuicon")
let sidenav = document.getElementById("sidenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

let closenav = document.getElementById("closenav")

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})