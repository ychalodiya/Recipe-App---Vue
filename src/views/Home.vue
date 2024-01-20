<template>
	<div class="flex flex-col p-8">
		<input
			type="text"
			class="rounded border-2 border-gray-500 w-full"
			placeholder="Search for Recipes"
		/>

		<div class="flex gap-2 mt-2 justify-center">
			<router-link
				v-for="letter of letters"
				:to="{ name: 'searchByLetter', params: { letter } }"
				:key="letter"
			>
				{{ letter }}
			</router-link>
		</div>
		<pre>{{ ingredients }}</pre>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const recipe = computed(() => store.state.recipes[0]);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
	const response = await axiosClient.get('/list.php?i=list');
	ingredients.value = response.data;
	console.log(response.data);
});
</script>
