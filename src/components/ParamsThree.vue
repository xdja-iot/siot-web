<template>
	<div style="color: red;height: 100%;">
		path+params传参测试页面
		<div>id:{{this.$route.params.id}}</div>
		<div>name:{{this.$route.params.name}}</div>
		
		结果证明使用params时，必须使用name
	</div>
</template>

<script>
	export default {
	  name: 'ParamsThree',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style>
</style>
