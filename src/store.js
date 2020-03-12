import Vue from 'vue'
import Vuex from 'vuex'
const jwtDecode = require('jwt-decode')
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const Store = new Vuex.Store({
    plugins: [createPersistedState()],
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