$(document).ready(function() {
    $('nav a').on('click', function() {
        //Current Class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //Set Heading Text
        $('h1#heading').text($(this).text());
        
        //Get & filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        //Remove hidden class if 'all-projects' is selected
        if(category === 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function() {
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        
        //stop link behavior
        return false;
    });
    
    //Mouse enter overlay effect
    $('ul#gallery li').on('mouseenter', function() {
        //get data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        if(desc === null) {
            desc = 'Click to Enlarge';
        }
        
        if(title === null) {
            title = '';
        }
        
        //create an overlay div
        $(this).append('<div class="overlay"></div>');
        //get overlay div
        var overlay = $(this).children('.overlay');
        
        //add html to overlay
        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');
        
        //fade in overlay
        overlay.fadeIn(800);
    });
    
    //Mouse leave overlay effect
    $('ul#gallery li').on('mouseleave', function() {
        //create an overlay div
        $(this).append('<div class="overlay"></div>');
        //get overlay div
        var overlay = $(this).children('.overlay');
        
        //fade out overlay
        overlay.fadeOut(800);
    });
});