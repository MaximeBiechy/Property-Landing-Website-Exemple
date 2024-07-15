// CONSTANTS
const property = document.querySelectorAll(".property");
const menu_burger_btn = document.querySelector(".menu-burger-btn");
const close_btn = document.querySelector(".close-btn");
const navbar = document.querySelector(".navbar");

//
property.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    property.forEach((element) => { 
        if (element !== item) {
            element.classList.remove("active");
        }
        });
  });
});

// Event Listeners
menu_burger_btn.addEventListener("click", () => {
    navbar.classList.toggle("open");
    close_btn.style.display = 'block';
    menu_burger_btn.style.display = 'none';
});

close_btn.addEventListener("click", () => {
    navbar.classList.remove("open");
    close_btn.style.display = 'none';
    menu_burger_btn.style.display = 'block';
});

window.addEventListener('resize', resetNavDisplay);

// Reset the navbar display when resizing the window
function resetNavDisplay() {
    if (window.innerWidth > 920) {
        navbar.classList.remove('open');
        menu_burger_btn.style.display = 'none';
        close_btn.style.display = 'none';
    } else {
        menu_burger_btn.style.display = 'block';
        close_btn.style.display = 'none';
    }
}

// Close the navbar when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target !== navbar && e.target !== menu_burger_btn) {
        navbar.classList.remove('open');
        close_btn.style.display = 'none';
        menu_burger_btn.style.display = 'block';
    }
});

resetNavDisplay();
