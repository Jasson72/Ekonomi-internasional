document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });

    const toggleBtn = document.querySelector('.togglebtn');
    const toggleBtnIcon = document.querySelector('.togglebtn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const menuItems = document.querySelectorAll('.dropdown_menu li a');
    const navLinks = document.querySelectorAll('.navbar .links li a');

    toggleBtn.onclick = function() {
        console.log('Toggle button clicked');
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
    
        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
    
    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }

    menuItems.forEach(item => {
        item.onclick = function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        };
    });

    navLinks.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        };
    });
});
