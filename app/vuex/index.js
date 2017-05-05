import Vue from 'vue'
import Vuex from 'vuex'
import weather from './modules/weather.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        weather
    },
})

export default store;