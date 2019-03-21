<template>
	<div style="color: red;height: 100%;">
		name+query传参测试页面
		<div>id:{{this.$route.query.id}}</div>
		<div>name:{{this.$route.query.name}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'ParamsTwo',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style>
</style>
