<template>
	<div style="color: red;height: 100%;">
		props组件路由默认传参测试页面
		<div>静态参数:{{staticParams}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'PropsTwo',
	  props:['staticParams'],
	}
</script>

<style>
</style>
