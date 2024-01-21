export function setSearchedRecipes(state, recipes) {
	state.searchedRecipes = recipes || [];
}
export function setSearchedByLetter(state, recipes) {
	state.searchedByLetters = recipes || [];
}

export function setSearchedByIngredient(state, recipes) {
	state.searchedByIngredient = recipes || [];
}
