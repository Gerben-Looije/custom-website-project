// A $( document ).ready() block.
$( document ).ready(function() {
    

    $(".hamburger-button").click(function(){
        
        $(this).toggleClass('active');
        $(".mobile-menu").slideToggle();
        
    });


    // Animate on scroll -Activate // 
    AOS.init();
});

lightGallery(document.getElementById('lightgallery'), {
    download: true,
    controls: true,
    enableSwipe: true,
    escKey: true
});

lightGallery(document.getElementById('lightgallery-2'), {
    download: true,
    controls: true,
    enableSwipe: true,
    escKey: true
});

