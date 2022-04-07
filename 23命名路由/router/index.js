import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Details from "../pages/Details"


export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: About
		},
		{
			path: "/home",
			component: Home,
			children: [
				{
					path: 'news', //此处一定不要写：/news
					component: News
				},
				{
					path: 'message',//此处一定不要写：/message
					component: Message,
					children: [
						{
							name:"xijie",
							path: "details",
							component: Details
						}
					]
				}
			]
		}
	]
})