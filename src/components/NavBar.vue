<template>
	<header class="bg-white shadow-md h-24 flex justify-between items-stretch">
		<router-link
			:to="{ name: 'home' }"
			class="inline-flex items-center px-5 font-medium"
			>Home</router-link
		>
		<div class="flex items-center gap-2">
			<router-link
				:to="{ name: 'recipeByName' }"
				class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
				>Search Recipes</router-link
			>
			<router-link
				:to="{ name: 'recipeByIngredients' }"
				class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
				>Search By ingredients</router-link
			>
			<router-link
				:to="{ name: 'recipeByLetter' }"
				class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
				>Recipes By letters</router-link
			>
		</div>
	</header>
</template>
