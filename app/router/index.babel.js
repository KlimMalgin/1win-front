import Vue from 'vue';
import VueRouter from 'vue-router';

import BooksPage from '../pages/books-page.vue';

// import TestPage from '../pages/test-page.vue';

Vue.use( VueRouter );

const router = new VueRouter( {

    routes : [
        {
            path      : '/books',
            component : BooksPage,
        }, /* {
            path      : '/test',
            component : TestPage,
        }, */ {
            path     : '*',
            redirect : '/books',
        },
    ],

} );

export default router;
