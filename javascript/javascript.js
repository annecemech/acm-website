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
