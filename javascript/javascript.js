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
