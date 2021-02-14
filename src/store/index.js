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
        START_LOADING(state) {
            state.loading = true
        },
        STOP_LOADING(state) {
            state.loading = false;
        },
    },
    actions: {},
    plugins: [createPersistedState()],
    modules: {
        auth
    },
    http: "hola"
})

export default store;