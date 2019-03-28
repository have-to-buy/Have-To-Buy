console.log("Reload!");


var button = document.querySelector(".toggleSidebar");
var sidebar = document.querySelector(".sidebar");


button.addEventListener("click", function() {
    console.log("clicked!");
    sidebar.classList.toggle("active");
} );
