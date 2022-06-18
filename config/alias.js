import path from 'path';

const list = [
    [ '@global', 'src/global' ],
    [ '@component', 'src/components' ],
    [ '@data', 'src/data' ]
].map( ( [ from, to ] ) => [ from, path.resolve( to ) ] );

export default Object.fromEntries( new Map( list ) );