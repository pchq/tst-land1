document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector('.js-menu-btn');
    var menu = document.querySelector('.js-menu-container');

    menuBtn.addEventListener('click', function (evt) {
        console.log(evt);
        menuBtn.classList.toggle('is-open');
        menu.classList.toggle('is-open');
    })    
});
