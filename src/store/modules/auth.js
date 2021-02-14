import axios from 'axios'
import formData from '../../helpers/formHelper.js';
import jwt_decode from "jwt-decode";
export default {
    state: {
        user: undefined,
        token: undefined
    },
    getters: {
        user: state => state.user,
        token: state => state.token,
        isAuth: state => !!state.token
    },
    mutations: {
        SET_USER(state, newValue) {
            state.user = newValue;
        },
        SET_TOKEN(state, newValue) {
            state.token = newValue;
        },
    },
    actions: {
        async loginUser({ dispatch, commit }, data) {
            commit('START_LOADING')
            return await axios.post('/login', formData(data))
                .then((response) => {
                    dispatch("setToken", response.data.token)
                }).finally(() => {
                    commit('STOP_LOADING')
                })
        },
        async updateUser({ commit }, data) {
            commit('START_LOADING')
            return await axios.post('/test', formData(data))
                .then((response) => {
                    commit("SET_USER", response.data);
                }).finally(() => {
                    commit('STOP_LOADING')
                })
        },
        logout({ commit }) {
            commit('SET_USER', null)
            commit('SET_TOKEN', null)
        },
        setToken({ commit }, token) {
            commit("SET_TOKEN", token);
            let payload = jwt_decode(token);
            commit("SET_USER", payload.user);
        }
    }
}