// Add and remove .active class on Navbar

const navItems = document.querySelectorAll('.nav-item');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', addActiveClass);
   }

function addActiveClass(e) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
    e.currentTarget.classList.add('active');
}

// Add and remove .navbar-scroll class on Navbar when scrolling

let scrollPos = window.scrollY;
const navbar = document.querySelector(".my-navbar");
const navbarHeight = navbar.offsetHeight

const add_class_on_scroll = () => navbar.classList.add("navbar-scroll")
const remove_class_on_scroll = () => navbar.classList.remove("navbar-scroll")

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;

  if (scrollPos >= navbarHeight) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

// Show up button when scroll is bigger than 100vh

const upBtn = document.getElementById('up-btn');

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;

  const add_content_on_scroll = () => upBtn.classList.add("hidden");
  const remove_content_on_scroll = () => upBtn.classList.remove("hidden");

  if (scrollPos >= window.innerHeight) { remove_content_on_scroll() }
  else { add_content_on_scroll() }
})

/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    // if (!cookieAlert) {
    //    return;
    // }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");

        // dispatch the accept event
        window.dispatchEvent(new Event("cookieAlertAccept"))
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
;
