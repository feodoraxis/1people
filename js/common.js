function is_mobile() {return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));}
function is_OSX() {return navigator.platform.match(/(Mac|iPhone|iPod|iPad|Android)/i) ? true : false;}

$(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
});

function left( parameters ) {

    if ( parameters.length < 1 )
        return;

    var windowWidth = $(window).width(),
        maxWidth = 1140, left = 20, key, params = {};

    if ( windowWidth > maxWidth ) {
        left = (windowWidth - maxWidth) / 2;
    }
    params['margin-left'] = left

    for ( i = 0; i < parameters.length; i++ ) {
        if ( i < 1 )
            key = '0';
        else
            key = i;

        if ( !parameters[ key ]['element'] )
            return;

        if ( parameters[ key ]['moreLeft'] )
            params['margin-left'] += parameters[ key ]['moreLeft'];

        $( parameters[ key ]['element'] ).css( params );

        params['margin-left'] = left;
    }

    return;
}

function right( parameters ) {

    if ( parameters.length < 1 )
        return;

    var windowWidth = $(window).width(),
        maxWidth = 1140, right = 20, key;

    if ( windowWidth > maxWidth ) {
        right = (windowWidth - maxWidth) / 2;
    }

    for ( i = 0; i < parameters.length; i++ ) {
        if ( i < 1 )
            key = '0';
        else
            key = i;

        if ( !parameters[ key ] )
            return;

        $( parameters[ key ] ).css({
            'right': right
        });
    }

    return;
}
