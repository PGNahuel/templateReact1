/**
 * Credits
 * Isotope with paging: https://codepen.io/TimRizzo/details/ervrRq
 */

$(document).on("ready",function () {

    /*************** Navigation *****************/

    $("#tm-main-nav").singlePageNav({
        filter: ':not(.external)'
    });

    $(".navbar-toggler").on("click", function(e) {
        $(".tm-sidebar").toggleClass("show");
        e.stopPropagation();
    });

    $("html").on("click",function(e) {
        var sidebar = document.getElementById("tm-sidebar");

        /*if (!sidebar.contains(e.target)) {
            $(".tm-sidebar").removeClass("show");
        }*/
    });

    $("#tm-sidebar .nav-link").click(function(e) {
        $(".tm-sidebar").removeClass("show");
    });
});
