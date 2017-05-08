import Vue from 'vue'
import Vuex from 'vuex'
import weather from './modules/weather.js'
import rss from './modules/rss.js'
import todo from './modules/todos.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        weather,
        rss,
        todo
    },
})

export default store;