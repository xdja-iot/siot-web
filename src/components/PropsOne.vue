<template>
	<div style="color: red;height: 100%;">
		props组件动态传参测试页面
		<div>id:{{id}}</div>
		<div>name:{{name}}</div>
		<div>msg:{{initMsg}}</div>
		<div>msg:{{initMsg}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'PropsOne',
	  props:['id','name'],
	  data () {
	    return {
			msg: parseInt(this.id) +1,
	    }
	  },
	  computed:{
		  initMsg: function(){
			  return parseInt(this.id) +1;
		  }
	  }
	}
</script>

<style>
</style>
