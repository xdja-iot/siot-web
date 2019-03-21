<template>
	<div style="width: 100%;height: 100%;background: yellow;padding-top: 30px;">
		<ul style="background: grey;width: 100%;text-align: left;height: 30px;margin-top: -30px;">
			<li v-for="tab in tabs" :key="tab.name" style="display: inline-block;width: 100px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" @click="routerTo(tab.link)">
				{{tab.name}}
			</li>
		</ul>
			<router-view/>
	</div>
</template>

<script>
	export default {
	  name: 'Tab',
	  data () {
	    return {
	      tabs:[
					{name:'标签一',link:'/home/tab/TabContentOne'},
					{name:'标签二',link:'/home/tab/TabContentTwo'},
					{name:'标签三',link:'/home/tab/TabContentThree'},
				]
	    }
	  }
	}
</script>

<style>
</style>
