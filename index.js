`use strict`;

(function(){
    $('nav.uk-navbar-container .uk-navbar-nav li > a, nav.uk-navbar-container .uk-navbar-dropdown li > a').on('click', function(event){
        // let isDropbar = $(this).closest('.uk-navbar-dropdown-nav').length == 1
        // if (isDropbar){
        //     let isCurrentTabActive = $(this).parent().hasClass('uk-active');
        
        //     if (isCurrentTabActive){
        //         return;
        //     }
        
        //     $('nav.uk-navbar-container .uk-navbar-dropdown li.uk-active').removeClass('uk-active');
        //     $(this).parent().addClass('uk-active');
        // }

        // check if current event already contain uk-active, if exist then return, else remove current active and add to this event
        let isCurrentTabActive = $(this).parent().hasClass('uk-active');
    
        if (isCurrentTabActive){
            return;
        }
    
        $('nav.uk-navbar-container .uk-navbar-nav li.uk-active').removeClass('uk-active');
        $(this).parent().addClass('uk-active');
    });
}())