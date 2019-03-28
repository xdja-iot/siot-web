import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	cookie:{
		loginState:false,
		userId:'',
		userName:''
	},
	baseUrl:'http://safecenter.xdja.com',
	loginTime:'11111111'
}

const mutations = {
	updateCookie(state,cookie){
		state.cookie = cookie;
	},
}

const getters = {
	cookie:state => state.cookie,
	baseUrl:state => state.baseUrl,
	loginTime:state => state.loginTime,
}

const actions = {
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
})
