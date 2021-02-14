import axios from 'axios'
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
        user(state, newValue) {
            state.user = newValue;
        },
        token(state, newValue) {
            state.token = newValue;
        },
    },
    actions: {
        async loginUser({ dispatch }, data) {
            return await axios.post('/login', data)
                .then((response) => {
                    dispatch("setToken", response.data.token);
                })
        },
        async logout({ dispatch }) {
            dispatch('clean')
        },
        setToken({ commit }, token) {
            commit("token", token);
            let user = "asdasd"; // Se decodea el jwt para armar el usuario
            commit("user", user);
        },
        clean({ commit }) {
            commit('user', null)
            commit('token', null)
        }
    }
}