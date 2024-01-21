<template>
	<div class="mt-2 bg-white shadow rounded-xl pb-3">
		<router-link :to="{ name: 'recipeDetails', params: { id: recipe.idMeal } }">
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
</template>

<script setup>
const { recipe } = defineProps({
	recipe: Object,
});
</script>
