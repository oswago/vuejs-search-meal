<template>
    <div class="container mx-auto p-8">
        <h1 class="font-bold mb-4 text-4xl">Ingredients</h1>

        <div class="flex flex-col p-2 justify-center mb-2">
            <input type="text"
            v-model="keyWord"
             class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Ingredient"
            />
        </div>

        <router-link :to="{name: 'byIngredient', params:{ingredient:ingredient.strIngredient}}" 
              v-for="ingredient in computedIngredients" :key="ingredient.idIngredient" 
              class="block bg-white rounded p-3 mb-3 shadow">
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient}}</h3>
             <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { ref,onMounted,computed } from "vue";
import axiosClient from "../axiosClient";
//import {useRoute } from 'vue-router';

const ingredients=ref([]);
const keyWord=ref('');

const computedIngredients = computed(()=>{
    if(!computedIngredients) return ingredients;
  return ingredients.value.filter(s=>
  (s.strIngredient || '').toLowerCase().includes(keyWord.value.toLowerCase())  
 // || s.strDescription.toLowerCase().includes(keyWord.value.toLowerCase())
  );
});

const getIngredients= async ()=>{
    try{
        const response=await axiosClient.get('/list.php?i=list');
        console.log(response.data);
        ingredients.value=response.data.meals;
    }catch(error){
         console.log("Error:"+error);
    }

}


onMounted(()=>{
     getIngredients();
});

</script>

