import Vue from 'vue'
import Vuex from 'vuex'
const jwtDecode = require('jwt-decode')

Vue.use(Vuex)

const Store = new Vuex.Store({
    state : {
        token: false,
        data_user : ""
    },
    
    mutations : {
        setToken(state, token) {
            state.token = token
            state.data_user = jwtDecode(token)
        },
        clearUser(state) {
            state.token = false
        }
    },
    
    actions : {
        setToken({ commit }, token) {
            commit('setToken', token);
        },
        clearUser({ commit }) {
            commit('clearUser');
        }
    },
    
    getters : {

    }
    











})




export default Store;