let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar")
menu.addEventListener("click", function () {
        if (sidebar.classList.contains("opened")) {
            sidebar.classList.remove("opened");
        }
        else {
            sidebar.classList.add("opened");
        }
})