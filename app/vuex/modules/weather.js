import api from '../api.js'
import * as types from '../types.js'

const state = {
	weather:Object
}

const actions = {
    getWeatherConfig:function({commit},id){
        api.getWeatherConfig(id,function(res){
            commit(types.WEATHER_CONFIG,res);
        })
    },
    weather:function({commit},data){
        commit(types.WEATHER_CONFIG,data)
    }
}
const getters = {
    getWeatherConfig: state => state.weather,
}

const mutations = {
    [types.WEATHER_CONFIG](state,res){
        state.weather = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}