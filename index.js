const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }

    });
});




const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));



const secondhiddenElements = document.querySelectorAll('.lhidden');

secondhiddenElements.forEach((el) => observer.observe(el));



var menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = "0px"

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}



