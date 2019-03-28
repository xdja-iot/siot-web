<template>
	<div style="position: absolute;bottom: 0;top: 0;left: 0;right: 0;background-color:burlywood;">
		<button @click="doLogin">登陆</button>
		<div style="margin: auto;">登陆页面</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: 'Login',
		methods:{
			doLogin(){
				//登陆请求
				this.$store.commit('updateCookie',{
					loginState:true,
					userId:'cxx',
					userName:'陈星星'
				},);
				
				this.routerTo('/home/tab/TabContentOne');
			},
		}
	}
	
</script>

<style>
</style>
