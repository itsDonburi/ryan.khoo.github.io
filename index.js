`use strict`;

(function(){
    $('nav.uk-navbar-container li > a').on('click', function(event){
        // check if current event already contain uk-active, if exist then return, else remove current active and add to this event
        let isCurrentTabActive = $(this).parent().hasClass('uk-active');
    
        if (isCurrentTabActive){
            return;
        }
    
        $('nav.uk-navbar-container li.uk-active').removeClass('uk-active');
        $(this).parent().addClass('uk-active');
    });
}())