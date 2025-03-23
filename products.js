// Selecting Side Navbar, MenuIcon

let menuicon = document.getElementById("menuicon");
let sidenav = document.getElementById("sidenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

let closenav = document.getElementById("closenav");

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});  

// Product Search Functionality

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var output = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(output)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }

})
