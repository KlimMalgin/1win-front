import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '../pages/main-page.vue';
import TestPage from '../pages/test-page.vue';

Vue.use( VueRouter );

const router = new VueRouter( {

    routes : [
        {
            path      : '/main',
            component : MainPage,
        }, {
            path      : '/test',
            component : TestPage,
        }, {
            path     : '*',
            redirect : '/main',
        },
    ],

} );

export default router;
