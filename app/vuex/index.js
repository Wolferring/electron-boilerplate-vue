import Vue from 'vue'
import Vuex from 'vuex'
import weather from './modules/weather.js'
import rss from './modules/rss.js'
import todo from './modules/todos.js'
import canvas from './modules/canvas.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        weather,
        rss,
        todo,
        canvas
    },
})

export default store;