import userService from "../../services/api/userService";

export default {
    state: {
        user: { nombre: "juan", apellido: "gonzales", token: "añlskdjñlfkasjf"},
    },
    getters: {
        user: (state) => {
            return state.user;
        },
    },
    mutations: {
        user(state, newValue) {
            state.user = { ...state.user, ...newValue };
            userService.update(state.user)
            localStorage.setItem('tokenUser', state.user.token)
        },
    },
    actions: {

    }
}