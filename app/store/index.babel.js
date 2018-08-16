import Vue from 'vue';
import Vuex from 'vuex';
import constants from './constants.babel';

// import test from './test.babel';


let { INCREMENT } = constants;

Vue.use( Vuex );


const state = { counter: 0 };

const mutations = {
    [INCREMENT]( state ) {
        state.counter++;
    },
};

const actions = { increment: ( { commit } ) => commit(INCREMENT) };

const getters = { increment: ( state ) => state.counter };

let storeObjects = {
    state,
    mutations,
    actions,
    getters,

    // modules : { test },
};

export default new Vuex.Store( storeObjects );
