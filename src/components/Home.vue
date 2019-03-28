<template>
	<div style="width: 100%;height: 100%;background-color: #42B983;padding-top: 50px;">
		<div style="background-color: antiquewhite;height: 50px;line-height: 50px;margin-top: -50px;position: relative;">
			<span style="line-height: 3.125rem;color: #42B983;font-size: 20px;">Vue操作练习平台</span>
			<button @click="routerTo('/login')" style="float: right;cursor: pointer;margin-top: 15px;margin-right: 0.625rem;padding: 0.3125rem;">logout</button>
		</div>
		<div style="height: 100%;padding-left: 200px;background-color: yellow;width: 100%;">
			<div style="background-color: aquamarine;width: 200px;height: 100%;margin-left: -200px;float: left;">
				<ul>
					<li v-for=" item in items" :key="item.name" style="line-height: 50px;border-bottom: #42B983 1px solid;background: pink;cursor: pointer;" @click="routerTo(item.link)">
						{{item.name}}
					</li>
				</ul>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Home',
/* 	  watch:{
		  $route (to,from){
		  },
	  }, */
	  beforeRouteEnter (to, from, next) {
		next();
	  },
	  beforeRouteUpdate(to, from, next) {
		next();
	  },
	  beforeRouteLeave(to, from, next) {
		next();
	  },
	  data () {
	    return {
			items:[
				{name:'路由跳转',link:'/home/tab'},
				{name:'路由传参',link:'/home/routerparams'},
				{name:'路由拦截',link:'/home/intercept'},
				{name:'Vuex使用',link:'/home/VuexTest'},
			],
	    }
	  }
	}
</script>

<style>
</style>
