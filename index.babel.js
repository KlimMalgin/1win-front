import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './app/App.vue';
import router from './app/router/index.babel';
import store from './app/store/index.babel';

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue( {
    el     : '#v-app',
    router : router,
    store  : store,
    render : h => h( App ),
} );
