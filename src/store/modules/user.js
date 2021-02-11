import User from '../../rest/user'
import axios from 'axios'

export default {
    state:{
        token:'',
        user:'',
    },
    getters:{

    },
    mutations:{
        SET_ALL(state,user){
            state.user =  user;
        }
    },
    actions:{
        getAll( { commit } ){
            const user = new User(axios);
            user.getAll().then((response)=>{
                commit('SET_ALL',response.data);
            })
        }
    }
}