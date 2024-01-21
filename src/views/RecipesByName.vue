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
		<Recipe v-for="recipe of recipes" :key="recipe.idMeal" :recipe="recipe" />
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Recipe from '../components/Recipe.vue';
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
