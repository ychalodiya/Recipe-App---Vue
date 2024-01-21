import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import RecipeList from '../views/RecipeList.vue';
import RecipeByLetters from '../views//RecipesByLetters.vue';
import RecipeByIngredients from '../views//RecipesByIngredients.vue';
import RecipeByName from '../views/RecipesByName.vue';
import RecipeDetails from '../views/RecipeDetails.vue';

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
				{
					path: '/recipe/:id',
					name: 'recipeDetails',
					component: RecipeDetails,
				},
			],
		},
		{
			path: '/guest',
			name: 'guest',
			component: GuestLayout,
		},
	],
});

export default Router;
