import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import {authRef} from "./firebase/config";

let app;

authRef.onAuthStateChanged(() => {
	if (app === undefined) {
		app = createApp(App)
			.use(router)
			.mount('#app');
	}
})


