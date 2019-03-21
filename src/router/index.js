import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Tab from '@/components/Tab'
import TabContentOne from '@/components/TabContentOne'
import FullScreen from '@/components/FullScreen'
import RouterParams from '@/components/RouterParams'
import ParamsOne from '@/components/ParamsOne'
import ParamsTwo from '@/components/ParamsTwo'
import ParamsThree from '@/components/ParamsThree'
import ParamsFour from '@/components/ParamsFour'
import ParamsFive from '@/components/ParamsFive'
import PropsOne from '@/components/PropsOne'
import PropsTwo from '@/components/PropsTwo'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/',
			name: 'default',
			redirect:'/Login'
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			children:[
				{
					path:'tab',
					component:Tab,
					children:[
						{
							path:'TabContentOne',
							component:TabContentOne
						}
					]
				},
				{
					path:'routerparams',
					name:'RouterParams',
					component:RouterParams,
					children:[
						{
							path:'paramsOne',
							name:'paramsOne',
							component:ParamsOne
						},
						{
							path:'paramsTwo',
							name:'ParamsTwo',
							component:ParamsTwo
						},
						{
							path:'paramsThree',
							name:'ParamsThree',
							component:ParamsThree
						},
						{
							path:'paramsFour',
							name:'ParamsFour',
							component:ParamsFour
						},
						{
							path:'paramsFive',
							name:'ParamsFive',
							component:ParamsFive
						},
						{
							path:'propsOne/:id/:name',
							name:'PropsOne',
							component:PropsOne,
							props:true,
						},
						{
							path:'propsTwo',
							name:'PropsTwo',
							component:PropsTwo,
							props:(route) => {
								if(!route.query.staticParams){
									if(!route.params.staticParams){
										route.query.staticParams = '我是默认静态参数';
										return route.query;
									}
									else{
										return route.params;
									}
								}
								return route.query;
							} ,
						},
					]
				},
			]
		},
		{
			path: '/fullScreen',
			name: 'FullScreen',
			component: FullScreen
		},
		
	]
})
