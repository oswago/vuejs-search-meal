<template>
    <div class="container mx-auto p-8">
        <h3 class="text-4xl mb-3 font-semibold">Random Meals</h3>

        <div class="p-3 grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <item-meal v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
        </div>

        <div v-if="!meals.length" class="flex justify-center text-gray-950 shadow bg-white">
          There are no meals {{ keyWord }}
        </div>
        
    </div>
 

</template>

<script setup>
import { onMounted,computed,ref,watch } from "vue";
import {useRoute} from "vue-router";
import store from '../store';
import ItemMeal from "../components/ItemMeal.vue";
   
   const route=useRoute();
   const keyWord=ref('');
   const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

   const meals=computed(()=>{
    return store.state.mealsByLetter;
   });

   function getMealByLetter(){      
        keyWord.value=letters[Math.floor(Math.random() * letters.length)];
        if(!keyWord.value){
            keyWord.value='A';
        }
        try{
        store.dispatch('searchByLetter',keyWord.value);
        }catch(error){
            console.log('Error:'+error);
        }
   }

   onMounted(()=>{
     getMealByLetter()
   });

</script>
