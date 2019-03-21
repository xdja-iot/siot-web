import router from './router'

export default {
	install(Vue,options){
		Vue.prototype.routerTo = function(to){
			router.push(to);
		};	
		Vue.prototype.routerBack = function(){
			router.go(-1);
		};
	}
}