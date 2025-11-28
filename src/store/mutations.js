export function setSearchedMeals(state, meals) {
    state.setSearchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.setMealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.setMealsByIngredients = meals || []
}