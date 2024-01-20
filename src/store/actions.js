import axiosClient from '../axiosClient';

export function searchRecipes({ commit }, keyword) {
	axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
		commit('setSearchedRecipes', data.meals);
	});
}
