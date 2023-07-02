let sidebar = document.querySelector(".sidebar");
let sidebarToggle = document.querySelector(".toggle");

sidebarToggle.addEventListener("click", function () {
    if (sidebar.style.display !== "block") {
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    }
});