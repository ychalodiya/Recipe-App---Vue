import axiosClient from '../axiosClient';

export function searchRecipes({ commit }, keyword) {
	axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
		commit('setSearchedRecipes', data.meals);
	});
}
export function searchRecipesByLetter({ commit }, letter) {
	axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
		commit('setSearchedByLetter', data.meals);
	});
}
export function searchRecipesByIngredient({ commit }, ingredient) {
	axiosClient.get(`/search.php?i =${ingredient}`).then(({ data }) => {
		commit('setSearchedByIngredient', data.meals);
	});
}
