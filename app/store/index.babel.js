import Vue from 'vue';
import Vuex from 'vuex';
import pagination from './pagination';

Vue.use( Vuex );

const state = {};
const mutations = {};
const actions = {};
const getters = {};

let storeObjects = {
    state,
    mutations,
    actions,
    getters,

    modules : { pagination },
};

export default new Vuex.Store( storeObjects );
