const property = document.querySelectorAll(".property");

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