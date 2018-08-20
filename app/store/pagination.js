import constants from './constants';
import cfg from '../../configs/api';
import axios from 'axios';

let { SET_BOOKS_PER_PAGE, SET_CURRENT_PAGE, RESPONSE_BOOKS_SUCCESS } = constants;

const json = response => response.data;

export default {

    state : {
        currentPage  : 0,
        booksPerPage : 5,
        booksPage    : [],
    },
    mutations : {
        [SET_CURRENT_PAGE](state, pageNumber) {
            state.currentPage = pageNumber;
        },
        [SET_BOOKS_PER_PAGE](state, bpp) {
            state.booksPerPage = bpp;
        },
        [RESPONSE_BOOKS_SUCCESS](state, data) {
            state.booksPage = data;
        },
    },
    actions : {
        getBooksPage : ({ commit, getters }) => {
            axios.get( `${cfg.apiHost}/books?offset=${getters.offset}&count=${getters.booksPerPage}` ).then(json).then(response => {
                commit('RESPONSE_BOOKS_SUCCESS', response.data.rows || []);
            });
        },
        setBooksPerPage : ({ commit, dispatch }, bpp) => {
            console.log('setBooksPerPage');
            commit(SET_BOOKS_PER_PAGE, bpp);
            dispatch('getBooksPage');
        },
        setPage : ({ commit, dispatch }, pageNumber) => {
            console.log('setPage');
            commit('SET_CURRENT_PAGE', pageNumber);
            dispatch('getBooksPage');
        },
    },
    getters : {
        page         : state => state.currentPage < 1 ? 1 : state.currentPage,
        offset       : (state, getters) => (getters.page - 1) * getters.booksPerPage,
        books        : state => state.booksPage,
        booksPerPage : state => state.booksPerPage,
    },

};
