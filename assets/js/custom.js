// Navbar scroll color change
$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// Navbar mobile color change on expand
$(document).ready(function(){
    $('#navbar button').on('click', function(){
        $('#navbar').toggleClass('color-changed');
    });
});