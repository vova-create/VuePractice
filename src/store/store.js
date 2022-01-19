import Vue from "vue";
import Vuex from 'vuex'
import cats from './modules/cats'
import download from "@/store/modules/download";

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},

    modules: {
        cats,
        download
    }
})