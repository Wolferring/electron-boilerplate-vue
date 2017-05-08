import api from '../api.js'
import * as types from '../types.js'

const state = {
	todos:[]
}

const actions = {
    todos:function({commit},data){
        commit(types.TODO_LIST,data)
    }
}
const getters = {
    getTodoList: state => state.todos,
}

const mutations = {
    [types.TODO_LIST](state,res){
    	state.todos = res;
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}