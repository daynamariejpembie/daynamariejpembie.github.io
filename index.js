function readMore(id) {
const dots = document.getElementById(`dots-${id}`);
const more = document.getElementById(`more-${id}`);
const btn = document.getElementById(`myBtn-${id}`);


if (more.style.display === "inline") {
more.style.display = "none";
dots.style.display = "inline";
btn.innerHTML = "Read more";
} else {
more.style.display = "inline";
dots.style.display = "none";
btn.innerHTML = "Read less";
}
}




// Mobile NavBar

function navMobile() {
    const toggleButton = document.getElementById("navBtn");
    const navBar = document.getElementById("navItems");

    toggleButton.addEventListener('click', () => {
      
        if (navBar.style.display === "block") {
            navBar.style.display = "none";
        } else {
            navBar.style.display = "block";
        }
    });
}

navMobile();