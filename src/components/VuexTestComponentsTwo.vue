<template>
	<div style="color: red;height: 100%;">
		mutation测试
		<div>获取全局状态，loginState:{{loginState}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'ParamsOne',
	  data () {
	    return {
	    }
	  },
	  computed:{
		  loginState(){
			return this.$store.state.loginState;  
		  },
	  }
	}
</script>

<style>
</style>
