import api from '../api.js'
import * as types from '../types.js'

const state = {
    info:Object
}

const actions = {
    canvas:function({commit},data){
        console.log(data)
        commit(types.CANVAS_INFO,data)
    }
}
const getters = {
    getCanvas: state => state.info,
}

const mutations = {
    [types.CANVAS_INFO](state,res){
        state.info = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}