<template>
	<div class="flex gap-5 mt-2 justify-center">
		<router-link
			v-for="letter of letters"
			:to="{ name: 'searchByLetter', params: { letter } }"
			:key="letter"
		>
			{{ letter }}
		</router-link>
	</div>
	<div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
		<Recipe v-for="recipe of recipes" :key="recipe.idMeal" :recipe="recipe" />
	</div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue';
import Recipe from '../components/Recipe.vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const recipes = computed(() => store.getters.getRecipesByLetters);

watch(route, () => {
	store.dispatch('searchRecipesByLetter', route.params.letter);
});

onMounted(() => {
	store.dispatch('searchRecipesByLetter', route.params.letter);
});
</script>
<style scoped></style>
