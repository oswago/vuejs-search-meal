<template>
    <div class="container mx-auto p-8">
       <h3 class="text-4xl font-bold mb-3 my-3">Meals by Ingredients :{{ keyWord }}</h3>
       <div class="p-3 grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <item-meal v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
        </div>

        <div v-if="!meals.length" class="flex justify-center text-gray-950 shadow bg-white">
          There are no meals {{ keyWord }}
        </div>
    </div>
   
</template>

<script setup>
import { ref,onMounted,computed } from "vue";
import {useRoute} from 'vue-router';
import store from '../store';
import ItemMeal from "../components/ItemMeal.vue";

const keyWord=ref('');
const route=useRoute();

const meals=computed(()=>{
   return store.state.mealsByIngredients;
});

const getMeals=()=>{
    keyWord.value=route.params.ingredient;
   return  store.dispatch('searchByIngredients',keyWord.value);
}

onMounted(()=>{
    getMeals();
});

</script>

