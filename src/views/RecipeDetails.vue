<template>
	<div class="w-full md:w-[800px] mx-auto flex flex-col justify-center mt-5">
		<h1 class="text-5xl mb-5 font-bold text-center">{{ recipe.strMeal }}</h1>
		<img :src="recipe.strMealThumb" alt="recipe.strMeal" />
		<div class="px-2">
			<div><strong>Category:</strong> {{ recipe.strCategory }}</div>
			<div><strong>Area:</strong> {{ recipe.strArea }}</div>
			<div v-if="recipe.strTags">
				<strong>Tags:</strong> {{ recipe.strTags }}
			</div>
			<div v-if="recipe.strIngredient1">
				<strong>Ingredients: </strong>

				<template v-for="(_el, index) of new Array(20)">
					<span v-if="recipe[`strIngredient${index + 1}`]">
						{{ recipe[`strIngredient${index + 1}`] }} ({{
							recipe[`strMeasure${index + 1}`]
						}})<span v-if="recipe[`strIngredient${index + 2}`]">, </span>
					</span>
				</template>
			</div>
			<div v-if="recipe.strInstructions">
				<strong>Instructions:</strong> {{ recipe.strInstructions }}
			</div>
			<div class="my-5">
				<YouTubeButton :href="recipe.strYoutube">Go To Youtube</YouTubeButton>
				<a
					:href="recipe.strSource"
					target="_blank"
					class="px-3 py-2 ml-2 rounded border-2 text-white hover:text-purple-500 border-purple-500 bg-purple-500 hover:bg-white"
					>View Page Source</a
				>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const recipe = ref([]);

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
		recipe.value = data.meals[0] || {};
	});
});
</script>
