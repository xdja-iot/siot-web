<template>
	<div style="width: 100%;height: 100%;background-color: #42B983;">
		<button @click="routerBack">返回</button>
		<button @click="routerTo('/home')">跳转至Home页</button>
		<div style="margin: auto;">全息大屏页面</div>
	</div>
</template>

<script>
	export default {
	  name: 'FullScreen',
		methods:{
			back: function(event){
				this.$router.go(-1);
			}
		},
	  data () {
	    return {
	    }
	  }
	}
</script>

<style>
</style>
