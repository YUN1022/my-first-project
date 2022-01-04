import {createApp} from 'vue'
import App from './App.vue'
import PutSomeDirt from "./components/PutSomeDirt";
import YunInput from "./assets/yvInput";
import Counter from "./assets/yvCcounter";
import YunSelect from "./assets/yvSelect";
import yunApi from "./assets/yvApi";

createApp(App).mount('#app')
createApp(PutSomeDirt).mount('#app2')
createApp(Counter).mount('#counter')
createApp({}).component("Yinput", YunInput).mount('#app3')
createApp(YunSelect).mount('#app4')
createApp(yunApi).mount('#app5')