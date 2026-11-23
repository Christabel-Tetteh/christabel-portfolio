JavaScript

// Welcome message

window.addEventListener("load", function() {

    console.log(
        "Welcome to Christabel Tetteh's Portfolio!"
    );

});

// Navigation link interaction

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "You selected: " + link.textContent
        );

    });

});