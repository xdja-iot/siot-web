import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	cookie:null,
	baseUrl:'http://safecenter.xdja.com',
	loginTime:'11111111'
}

const mutations = {
	updateCookie(state,cookie){
		state.cookie = cookie;
		sessionStorage.setItem('cookie',JSON.stringify(cookie));
	},
	getGoods:function(){
		//获取商品。
	}
}

const getters = {
	cookie:state => {
		debugger;
		if(!state.cookie){
			let cookieStr = sessionStorage.getItem('cookie');
			if(cookieStr){
				return JSON.parse(sessionStorage.getItem('cookie'));
			}
			else{
				return {};
			}
		}
		return state.cookie;
	},
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
