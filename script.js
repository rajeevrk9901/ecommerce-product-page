const hambug = document.getElementById('ham-menu');

const menu = document.getElementById('mobile-nav');

const hambugcls = document.getElementById('ham-menu-close');


hambug.addEventListener('click', () => {

    console.log("working");
    menu.classList.toggle('active');
    // hambugcls.style.display = "block";
    // hambug.style.display = "none";
})


