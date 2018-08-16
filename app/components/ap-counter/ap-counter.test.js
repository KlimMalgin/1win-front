/* eslint-env jest */
import { mount, createLocalVue } from 'vue-test-utils';
import apCounter from './ap-counter.vue';
import Vue from 'vue';
import Vuex from 'vuex';

// import sinon from 'sinon';

Vue.use( Vuex );

const createStore = () => new Vuex.Store( { getters: () => 0 } );

describe( 'ap-counter.vue', () => {
    let localVue;
    let wrapper;

    beforeAll( () => {
        localVue = createLocalVue();
        wrapper = mount( apCounter, {
            localVue,
            store : createStore(),
        } );
    } );

    it( 'snapshot. Проверяем соответствие шаблону', () => {
        expect( wrapper.element ).toMatchSnapshot();
    } );

} );
