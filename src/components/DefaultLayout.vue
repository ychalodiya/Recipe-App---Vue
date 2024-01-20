<template>
	<div class="bg-gray-100 h-100">
		<NavBar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>
