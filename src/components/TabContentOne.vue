<template>
	<div style="color: red;border: red 1px solid;height: 100%;">
		TabContentOne
		<button @click="routerTo('/fullScreen')">全息大屏</button>
	</div>
</template>

<script>
	export default {
	  name: 'TabContentOne',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style>
</style>
