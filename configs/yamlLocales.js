const { basename } = require('path');

const { safeLoad } = require('js-yaml');

const NAMESPACE_RE = /^([\w-]+)\.js/;

module.exports = {
    process( src, path ) {
        const dict = safeLoad( src );
        const filename = basename( path );
        const ns = filename.match( NAMESPACE_RE );

        if ( !( ns && ns.length ) ) {
            throw new Error('dictionary name mismatch');
        }

        return { [ns[1]]: dict };
    },
};
