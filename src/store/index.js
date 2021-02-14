import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import user from './modules/user'

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
        user
    }
})

export default store;