import Vue from 'vue';
import Vuex from 'vuex';
import pagination from './pagination';
import constants from './constants';
import cfg from '../../configs/api';
import axios from 'axios';

let {
    SET_EDITABLE_ITEM,
    RESET_EDITABLE_ITEM,
    CHANGE_TITLE,
    CHANGE_DATE,
    CHANGE_DESCRIPTION,
    CHANGE_AUTHOR,
    CHANGE_IMAGE,
    SAVE_BOOK,
    SAVE_BOOK_SUCCESS,
    SAVE_BOOK_FAIL,
 } = constants;

Vue.use( Vuex );

const json = response => response.data;

const formatter = item => {
    Vue.set(item, 'date', item.date.substr(0, 10));

    return item;
};

const defaultEditableItem = () => ({
    id          : -1,
    title       : '',
    date        : '',
    description : '',
    author      : '',
    image       : '',
});

const state = {
    editable           : defaultEditableItem(),
    saveBookInProgress : false,
};
const mutations = {
    [SET_EDITABLE_ITEM](state, item) {
        state.editable = formatter(item);
    },
    [RESET_EDITABLE_ITEM](state) {
        state.editable = defaultEditableItem();
    },
    [CHANGE_TITLE](state, value) {
        state.editable.title = value;
    },
    [CHANGE_DATE](state, value) {
        state.editable.date = value;
    },
    [CHANGE_DESCRIPTION](state, value) {
        state.editable.description = value;
    },
    [CHANGE_IMAGE](state, value) {
        state.editable.image = value;
    },
    [CHANGE_AUTHOR](state, value) {
        state.editable.author = value;
    },
    [SAVE_BOOK](state) {
        state.saveBookInProgress = true;
    },
    [SAVE_BOOK_SUCCESS](state) {
        state.saveBookInProgress = false;
    },
    [SAVE_BOOK_FAIL](state) {
        state.saveBookInProgress = false;
    },
};
const actions = {
    setEditableItem : ({ commit }, item) => {
        commit(SET_EDITABLE_ITEM, item);
    },
    saveBookItem : ({ commit, getters }) => {
        commit(SAVE_BOOK);

        axios.put( `${cfg.apiHost}/books`, getters.editable )
            .then(json)
            .then(() => {
                commit(SAVE_BOOK_SUCCESS);
            })
            .catch(() => {
                commit(SAVE_BOOK_FAIL);
            });
    },
};
const getters = {
    editable           : state => state.editable,
    saveBookInProgress : state => state.saveBookInProgress, 
};

let storeObjects = {
    state,
    mutations,
    actions,
    getters,

    modules : { pagination },
};

export default new Vuex.Store( storeObjects );
