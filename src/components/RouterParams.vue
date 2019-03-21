<template>
	<div style="width: 100%;height: 100%;background: yellow;padding-top: 30px;">
		<ul style="background: grey;width: 100%;text-align: left;height: 30px;margin-top: -30px;">
			<li v-for="tab in tabs" :key="tab.name" style="display: inline-block;width: 160px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" @click="tabClick(tab)">
				{{tab.name}}
			</li>
			<li style="display: inline-block;width: 160px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" >
				<router-link :to="{name:'ParamsFive',params:{id:5,name:paramter1}}">router-link name传参</router-link>
			</li>
			<li style="display: inline-block;width: 160px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" >
				<router-link :to="{path:'/home/routerparams/ParamsTwo',query:{id:6,name:paramter2}}">router-link path传参</router-link>
			</li>
			<li style="display: inline-block;width: 160px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" @click="propsClick('dynamic')">
				props 动态
			</li>
			<li style="display: inline-block;width: 160px;line-height: 30px;background-color: #42B983;border: aqua 1px solid;text-align: center;cursor: pointer;" @click="propsClick('static')">
				props 静态
			</li>
			
		</ul>
			<router-view/>
	</div>
</template>

<script>
	export default {
	  name: 'RouterParams',
	  methods:{
		  tabClick:function(tab){
			  if(tab.id == 1){
				this.$router.push({path:'/home/routerparams/paramsone',query:{id:tab.id,name:tab.name}});
			  }
			  else if(tab.id == 2){
				this.$router.push({name:'ParamsTwo',query:{id:tab.id,name:tab.name}});
			  }
			  else if(tab.id == 3){
			  	this.$router.push({path:'/home/routerparams/ParamsThree',params:{id:tab.id,name:tab.name}});
			  }
			  else if(tab.id == 4){
			  	this.$router.push({name:'ParamsFour',params:{id:tab.id,name:tab.name}});
			  }
		  },
		  propsClick:function(flag){
			  if(flag == 'dynamic'){
				this.$router.push({name:'PropsOne',params:{id:'8',name:'propsName'}});
			  }
			  else{
				//this.$router.push({name:'PropsTwo',query:{staticParams:'1'}});
				this.$router.push({name:'PropsTwo',params:{staticParams:'1'}});
				//this.$router.push({path:'/home/routerparams/PropsTwo'});
				//this.$router.push({name:'PropsTwo'});
			  }
		  }
	  },
	  data () {
	    return {
	      tabs:[
					{name:'path + query传参',link:'/home/routerparams/ParamsOne',id:'1'},
					{name:'name + query传参',link:'/home/routerparams/ParamsTwo',id:'2'},
					{name:'path + params传参',link:'/home/routerparams/ParamsThree',id:'3'},
					{name:'name + params传参',link:'/home/routerparams/ParamsFour',id:'4'},
				],
		  paramter1:'router link name传参',
		  paramter2:'router link path传参'
	    }
	  }
	}
</script>

<style>
	a{
		color:black;
		text-decoration: none;
		padding: 0;
		margin: 0;
	}
	
</style>
