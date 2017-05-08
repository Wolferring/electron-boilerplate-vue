import api from '../api.js'
import * as types from '../types.js'

const state = {
	rss:[]
}

const actions = {
    rss:function({commit},data){
        commit(types.RSS_LIST,data)
    }
}
const getters = {
    getRSSList: state => state.rss,
}

const mutations = {
    [types.RSS_LIST](state,res){
    	var rssLen = res.length+state.rss.length;
    	if(rssLen>10&&rssLen<=20){
    		var result = state.rss.concat(res)
    		state.rss = result.slice(result.length-10,result.length+1)
    		return false;
    	}
    	if(rssLen<10){
	        state.rss = state.rss.concat(res)
	        return false;
    	}
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}