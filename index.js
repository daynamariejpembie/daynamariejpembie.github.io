function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline"; 
    }
}

function readMore2() {
    let dots2 = document.getElementById("dots-2");
    let moreText2 = document.getElementById("more-2");
    let btnText2 = document.getElementById("myBtn-2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read Less";
        moreText2.style.display = "inline"; 
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