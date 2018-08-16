import Vue from 'vue';

import App from './app/App.vue';
import router from './app/router/index.babel';
import store from './app/store/index.babel';

/* eslint-disable no-new */
new Vue( {
    el     : '#v-app',
    router : router,
    store  : store,
    render : h => h( App ),
} );
