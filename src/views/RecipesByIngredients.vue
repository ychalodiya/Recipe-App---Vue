<template>
	<div class="p-5 pb-0">
		<input
			type="text"
			class="rounded border-2 border-gray-500 w-full"
			placeholder="Search for Recipes"
			v-model="ingredient"
			@change="searchByIngredient"
		/>
	</div>

	<div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
		<Recipe v-for="recipe of recipes" :key="recipe.idMeal" :recipe="recipe" />
	</div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Recipe from '../components/Recipe.vue';
import store from '../store';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const ingredient = ref('');
const recipes = computed(() => store.getters.getRecipesByIngredients);

function searchByIngredient() {
	store.dispatch('searchRecipesByIngredient', ingredient.value);
	router.replace({ path: `/search-by-ingredients/${ingredient.value}` });
}

onMounted(() => {
	ingredient.value = useRoute().params.ingredients;
	searchByIngredient();
});
</script>
<style scoped></style>
