<template>
	<div style="color: red;height: 100%;">
		普通共享变量读取

		<div>使用Vuex的getters方法</div>
		<div>loginState:{{this.$store.getters.cookie.loginState}}</div>
		<div>userId:{{this.$store.getters.cookie.userId}}</div>
		<div>userName:{{this.$store.getters.cookie.userName}}</div>

		<div>使用计算属性</div>
		<div>loginState:{{cookie.loginState}}</div>
		<div>userId:{{cookie.userId}}</div>
		<div>userName:{{cookie.userName}}</div>

		<div>直接使用state,此种场景适用于变量不需要二次计算的场景。</div>
		<div>loginState:{{this.$store.state.cookie.loginState}}</div>
		<div>userId:{{this.$store.state.cookie.userId}}</div>
		<div>userName:{{this.$store.state.cookie.userName}}</div>

		<div>mapGetters使用，注意：重命名的方式不能对对象重命名</div>
		<div>baseUrl:{{baseUrl}}</div>
		<div>mybaseUrl:{{mybaseUrl}}</div>
		<div>myCookie:{{myloginTime}}</div>
		
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'

	export default {
		name: 'VuexTestComponentsOne',
		data() {
			return {}
		},
		computed: {
			/* cookie(){
			  return this.$store.state.cookie;
		  }, */
			...mapGetters([
				'cookie',
				'baseUrl',
			]),
			...mapGetters({
				mybaseUrl: 'baseUrl',
				myloginTime: 'loginTime',
			}),
		}
	}
</script>

<style>
</style>
