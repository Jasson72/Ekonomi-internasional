const toggleBtn = document.querySelector('.togglebtn');
const toggleBtnIcon = document.querySelector('.togglebtn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const menuItems = document.querySelectorAll('.dropdown_menu li a');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};

menuItems.forEach(item => {
    item.onclick = function() {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    };
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
         
        easing: 'ease-in-out', 
        once: true,  
    });
});
