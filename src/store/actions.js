import axiosClient from '../axiosClient.js';

export function searchMeals({commit},keyword){
    axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data})=>{
       // debugger;
        commit('setSearchedMeals',data.meals)
    })
}

export function searchByLetter({commit},letter){
    axiosClient.get(`/search.php?f=${letter}`)
    .then(({data})=>{
       // debugger;
        commit('setMealsByLetter',data.meals)
    })
}

export function searchByIngredients({commit},ingredients){
    axiosClient.get(`/filter.php?i=${ingredients}`)
    .then(({data})=>{
        debugger;
        commit('setMealsByIngredients',data.meals)
    })
}