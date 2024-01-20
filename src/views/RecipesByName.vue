<template>
	<div class="p-5">
		<input
			type="text"
			class="rounded border-2 border-gray-500 w-full"
			placeholder="Search for Recipes"
			v-model="keyword"
			@change="searchRecipes"
		/>
	</div>
	<div class="p-5">
		<div v-for="recipe of recipes" :key="recipe.idMeal" class="mt-2 flex">
			<img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
			<div class="flex flex-col w-full px-5">
				<h2 class="font-medium">{{ recipe.strMeal }}</h2>
				<h3 class="">Tags: {{ recipe.strTags }}</h3>
				<h3 class="">
					Source:
					<a
						:href="recipe.strSource"
						target="_blank"
						class="hover:to-blue-600 hover:underline"
						>{{ recipe.strSource }}</a
					>
				</h3>
				<div>
					<p>Instructions: {{ recipe.strInstructions }}</p>
				</div>
				<div class="mt-5">
					<a
						:href="recipe.strYoutube"
						target="_blank"
						class="border-2 bg-red-300 px-3 py-3"
						>Youtube</a
					>
					<router-link to="/">View</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from '../store';

const keyword = ref('');
const recipes = computed(() => store.getters.getRecipes);

function searchRecipes() {
	store.dispatch('searchRecipes', keyword.value);
}
</script>
<style scoped></style>
