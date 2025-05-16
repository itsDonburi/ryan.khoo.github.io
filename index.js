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

    document.querySelector('.footer-social > a[aria-label="Whatsapp"]').addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = '0122342527';
        
        navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            UIkit.notification({message:`<div class='uk-flex uk-flex-middle'><span class='uk-flex-none uk-margin-small-right'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6fcb6f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span>Mobile nuber copied to clipboard!</div>`, timeout:5000, pos:'top-right'});
        })
        .catch(err => {
            console.error('Copy failed:', err);
        });
    });

    document.querySelector('.image-container-small').addEventListener('click', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        if (img1.classList.contains('visible')) {
            img1.classList.remove('visible');
            img2.classList.add('visible');
        } else {
            img2.classList.remove('visible');
            img1.classList.add('visible');
        }
    });

}())