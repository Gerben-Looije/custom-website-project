// A $( document ).ready() block.
$( document ).ready(function() {
    

    $(".hamburger-button").click(function(){
        
        $(this).toggleClass('active');
        $(".mobile-menu").slideToggle();
        
    });


    // Animate on scroll -Activate // 
    AOS.init();
});
