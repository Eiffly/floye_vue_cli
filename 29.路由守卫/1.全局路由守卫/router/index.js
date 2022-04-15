import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Details from "../pages/Details"

const router = new VueRouter({
	routes: [
		{
			path: "/about",
			component: About,
			meta: { isAuth: false, name: "关于" }
		},
		{
			path: "/home",
			component: Home,
			meta: {
				isAuth: false, name: "主页"
			},
			children: [
				{
					path: 'news', //此处一定不要写：/news
					component: News,
					meta: {
						isAuth: true, name: "新闻"
					}
				},
				{
					path: 'message',//此处一定不要写：/message
					component: Message,
					meta: {
						isAuth: true, name: "消息"
					},
					children: [
						{
							name: "xijie",
							path: 'details/:id/:name',
							component: Details,
							meta: {
								isAuth: true, name: "详细"
							},
							props($route) {
								return {
									id: $route.params.id,
									name: $route.params.name,
								}
							}
						}
					]
				}
			]
		}
	]
})


router.beforeEach((to, from, next) => {
	console.log(to, from, this);
	// 路由元数据，要求进行检验
	if (to.meta.isAuth) {
		if (localStorage.getItem("name") === "floye") {
			next()
		} else {
			alert("你配吗？")
		}
	} else {
		next()
	}

})


router.afterEach((to, from) => {
	if (to.meta.name) {
		document.title = to.meta.name
	} else {
		document.title = "硅谷系统"
	}
})


export default router