import axios from 'axios'
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
        async loginUser({ commit }, data) {
            return await axios.post('/login', data)
                .then((response) => {
                    commit("SET_TOKEN", response.data.token);
                    let payload = jwt_decode(response.data.token);
                    commit("SET_USER", payload);
                })
        },
        async updateProfile({ state, commit }, data) {
            await axios.put(`/user/${state.user.id}`, data)
                .then((response) => {
                    commit("SET_USER", response.data);
                })
        },
        async createUser(data) {
            return await axios.post('/user', data)
        },
        logout({ commit }) {
            commit('SET_USER', null)
            commit('SET_TOKEN', null)
        }
    }
}