import Vue from "vue"
import App from './App.vue'
import { Input, Button, Select, Option, Row } from 'element-ui';
// import { Button } from 'element-ui';



Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
// Vue.component(Input.name, Input);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Option.name, Option);
// Vue.component(Row.name, Row);

new Vue({
	el: '#app',
	render: h => h(App),

})