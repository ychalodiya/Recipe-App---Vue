import { createRouter, createWebHistory } from 'vue-router';

const Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
	],
});

export default Router;
