import Vue from "vue";
import Vuex from 'vuex'
import cats from './modules/cats'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},

    modules: {
        cats,
    }
})