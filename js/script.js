$(document).ready(function() {
    $("#nav-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".header-collapse").toggleClass("active");


    });
    /* Carrosel Principal */

    $('.owl-carousel').owlCarousel({
        items: 1, // para mostrar 1 imagem por vez
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });


});