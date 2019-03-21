<template>
	<div style="color: red;height: 100%;">
		name+params传参测试页面
		<div>id:{{this.$route.params.id}}</div>
		<div>name:{{this.$route.params.name}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'ParamsFour',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style>
</style>
