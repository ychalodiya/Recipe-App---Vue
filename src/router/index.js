import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import RecipeList from '../views/RecipeList.vue';
import RecipeByLetters from '../views//RecipesByLetters.vue';
import RecipeByIngredients from '../views//RecipesByIngredients.vue';
import RecipeByName from '../views/RecipesByName.vue';

const Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: DefaultLayout,
			children: [
				{
					path: '/',
					name: 'home',
					component: Home,
				},
				{
					path: '/search-by-letter/:letter?',
					name: 'recipeByLetter',
					component: RecipeByLetters,
				},
				{
					path: '/search-by-ingredients/:ingredients?',
					name: 'recipeByIngredients',
					component: RecipeByIngredients,
				},
				{
					path: '/search-by-name/:name?',
					name: 'recipeByName',
					component: RecipeByName,
				},
				{
					path: '/search/:letter',
					name: 'searchByLetter',
					component: RecipeList,
				},
			],
		},
	],
});

export default Router;
