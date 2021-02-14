import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false
    },
    getters: {},
    mutations: {
        SWITCH_LOADING(state, newValue) {
            state.loading = newValue;
        }
    },
    actions: {
        startLoading({ commit }) {
            commit('SWITCH_LOADING', true);
        },
        stopLoading({ commit }) {
            commit('SWITCH_LOADING', false);
        },
    },
    plugins: [createPersistedState()],
    modules: {
        auth
    }
})

export default store;