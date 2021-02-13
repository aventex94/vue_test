import http from '../../services/api/apiClient';

export default {
    state:{
        token:'',
        user:'',
    },
    getters:{
        user(state){
            return state.user;
        }
    },
    mutations:{
        SET_USER(state,user){
            state.user = user;
        }
    },
    actions:{
        getUser( {commit} ){
            http.get().then((response)=>{
                console.log(response.data);
                commit('SET_USER',response.data);
            })
        }
    }
}