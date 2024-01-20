<template>
	<div>{{ recipe }}</div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';
const recipe = computed(() => store.state.recipes[0]);
</script>
