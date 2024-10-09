window.onload = function () {
    // Reset scroll position
    window.scrollTo(0, 0);

    //
    // Navbar
    //

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        // Get the scroll position
        var scroll = window.scrollY;
        var height = window.innerHeight;
        var location = (scroll / height);

        // Change navbar based on scroll position
        navbar.style.backgroundColor = 'rgba(255, 255, 255, ' + (location * 0.7) + ')';
        navbar.style.backdropFilter = 'blur(' + (location * 1) + 'px)';
        navbar.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, ' + (location * 0.25) + ')';
    });
}