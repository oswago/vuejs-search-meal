<template>
    <div class="container mx-auto p-8">
        <div class="flex flex-col p-2 justify-center ">
            <div class="flex p-2 gap-3 justify-center mx-2">
                <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter in letters" :key="letter">
                    {{ letter }}
                </router-link>
          </div>
        </div>

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
        keyWord.value=route.params.letter;
        if(!keyWord.value){
            keyWord.value='A';
        }
        try{
        store.dispatch('searchByLetter',keyWord.value);
        }catch(error){
            console.log('Error:'+error);
        }
   }

   watch(route,()=>{
    keyWord.value=route.params.letter;
    store.dispatch('searchByLetter',keyWord.value);
   });

   onMounted(()=>{
     getMealByLetter()
   });


</script>

