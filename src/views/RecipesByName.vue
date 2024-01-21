<template>
	<div class="p-5 pb-0">
		<input
			type="text"
			class="rounded border-2 border-gray-500 w-full"
			placeholder="Search for Recipes"
			v-model="keyword"
			@change="searchRecipes"
		/>
	</div>
	<div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
		<div
			v-for="recipe of recipes"
			:key="recipe.idMeal"
			class="mt-2 bg-white shadow rounded-xl pb-3"
		>
			<router-link
				:to="{ name: 'recipeDetails', params: { id: recipe.idMeal } }"
			>
				<img
					:src="recipe.strMealThumb"
					:alt="recipe.strMeal"
					class="rounded-t-xl h-60 w-full object-cover"
				/>
			</router-link>

			<div class="flex flex-col w-full px-3 py-3">
				<h2 class="font-semibold">{{ recipe.strMeal }}</h2>
				<h3 class="">Tags: {{ recipe.strTags }}</h3>
				<div class="mt-5 flex justify-between items-center">
					<a
						:href="recipe.strYoutube"
						target="_blank"
						class="border-2 bg-red-300 rounded px-3 py-3 hover:text-white hover:border-red-500 hover:rounded"
						>Youtube</a
					>
					<router-link
						to="/"
						class="border-2 bg-purple-300 rounded px-3 py-3 hover:text-white hover:border-purple-500 hover:rounded"
						>View</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const keyword = ref('');
const recipes = computed(() => store.getters.getRecipes);

function searchRecipes() {
	store.dispatch('searchRecipes', keyword.value);
	router.replace({ path: `/search-by-name/${keyword.value}` });
}

onMounted(() => {
	keyword.value = useRoute().params.name;
	searchRecipes();
});
</script>
<style scoped></style>
