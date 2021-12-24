jQuery(document).ready(function() {

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });

    // Background
    $('.top-content').backstretch("images/jumbotron-home.png");
});