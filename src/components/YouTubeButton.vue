<template>
	<a
		:href="href"
		target="_blank"
		class="px-3 py-2 rounded border-2 text-white hover:text-red-500 border-red-500 bg-red-500 hover:bg-white"
		><slot></slot
	></a>
</template>
<script setup>
const props = defineProps({
	href: String,
});
</script>
