import Vue from 'vue';
import VueRouter from 'vue-router';

import BooksPage from '../pages/books-page.vue';

// import TestPage from '../pages/test-page.vue';

Vue.use( VueRouter );

const router = new VueRouter( {

    mode : 'history',

    routes : [
        {
            path      : '/',
            component : BooksPage,
        }, {
            path     : '*',
            redirect : '/',
        },
    ],

} );

export default router;
