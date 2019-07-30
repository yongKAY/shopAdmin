import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSwitchMenu: false
    },
    getters:{
        isSwitchMenu: state => state.isSwitchMenu,
    },
    mutations: {
        SWITCH_MENU_CHANGE(state){
            state.isSwitchMenu = !state.isSwitchMenu
            return state.isSwitchMenu
        }
    },
    actions: {

    }
})