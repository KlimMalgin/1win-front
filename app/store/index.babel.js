import Vue from 'vue';
import Vuex from 'vuex';
import pagination from './pagination';
import constants from './constants';

let {
    SET_EDITABLE_ITEM,
    RESET_EDITABLE_ITEM,
    CHANGE_TITLE,
    CHANGE_DATE,
    CHANGE_DESCRIPTION,
    CHANGE_AUTHOR,
    CHANGE_IMAGE,
 } = constants;

Vue.use( Vuex );

const state = {
    editable : {
        id          : -1,
        title       : '',
        date        : '',
        description : '',
        author      : '',
        image       : '',
    },
};
const mutations = {
    [SET_EDITABLE_ITEM](state, item) {
        state.editable = item;
    },
    [RESET_EDITABLE_ITEM](state) {
        state.editable = {
            id          : -1,
            title       : '',
            date        : '',
            description : '',
            image       : '',
        };
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
};
const actions = {
    setEditableItem : ({ commit }, item) => {
        commit(SET_EDITABLE_ITEM, item);
    },
};
const getters = { editable: state => state.editable };

let storeObjects = {
    state,
    mutations,
    actions,
    getters,

    modules : { pagination },
};

export default new Vuex.Store( storeObjects );
