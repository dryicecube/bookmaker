const img_alt_process = string => {
    const [ alt, meta ] = string.split( '>>' );

    const params = new URLSearchParams( meta );
    params.get( "abc" );

    const css = {
        maxHeight: params.get( "mh" ),
        height: params.get( "h" ),
        width: params.get( "w" )
    }

    return {
        alt,
        css,
    }
};

ƒA( 'img' ).map( e => {
    const img = img_alt_process( e.alt );
    e.alt = img.alt;

    for ( const atom in img.css ) {
        console.log( atom, e.style.atom, img.css[ atom ] );
        e.style.atom = img.css[ atom ];
        console.log( atom, e.style.atom );
    }
} )