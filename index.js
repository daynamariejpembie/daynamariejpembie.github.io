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
        btnText.innerHTML = "Read less";
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
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline"; 
    }
}

function readMore3() {
    let dots3 = document.getElementById("dots-3");
    let moreText3 = document.getElementById("more-3");
    let btnText3 = document.getElementById("myBtn-3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline"; 
    }
}

function readMore4() {
    let dots4 = document.getElementById("dots-4");
    let moreText4 = document.getElementById("more-4");
    let btnText4 = document.getElementById("myBtn-4");

    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        btnText4.innerHTML = "Read more";
        moreText4.style.display = "none";
    } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "Read less";
        moreText4.style.display = "inline"; 
    }
}

function readMore5() {
    let dots5 = document.getElementById("dots-5");
    let moreText5 = document.getElementById("more-5");
    let btnText5 = document.getElementById("myBtn-5");

    if (dots5.style.display === "none") {
        dots5.style.display = "inline";
        btnText5.innerHTML = "Read more";
        moreText5.style.display = "none";
    } else {
        dots5.style.display = "none";
        btnText5.innerHTML = "Read less";
        moreText5.style.display = "inline"; 
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