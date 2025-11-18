import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'

const routes = [
  { path: '/homework12/', name: 'Home', component: HomePage },
  { path: '/homework12/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/homework12/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/homework12/by-ingredient/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
  { path: '/homework12/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/homework12/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/homework12/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
