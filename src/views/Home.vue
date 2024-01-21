<template>
	<div class="flex flex-col p-8">
		<input
			type="text"
			class="rounded border-2 border-gray-500 w-full"
			placeholder="Search for Recipes"
		/>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([]);

onMounted(async () => {
	const response = await axiosClient.get('/list.php?i=list');
	ingredients.value = response.data;
});
</script>
