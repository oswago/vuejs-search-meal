<template>
  <div class="container mx-auto p-8">
        <div class="items-center justify-center p-8 bg-white shadow rounded-xl">
                <h3 class="text-5xl mb-5 font-bold">{{ meal.strMeal }}</h3>
                 <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-2xl object-cover w-full">

                <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-3">
                    <div>
                        <strong>Category:</strong>{{ meal.strCategory }}
                    </div>
                    <div>
                        <strong>Area:</strong>{{ meal.strArea }}
                    </div>
                    <div>
                        <strong>Tags:</strong>{{ meal.strTags }}
                    </div>
                </div>
         
                <div class="my-3">
                    {{ meal.strInstructions }}
                </div>

                <div class="grid grid-cols-3 md:grid-cols-2">
                    <div>
                        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                        <ul>
                            <template v-for="(el,ind) of new Array(20)" :key="ind">
                              <li v-if="meal[`strIngredient${ind+1}`]">
                                {{ind+1}}. {{ meal[`strIngredient${ind+1}`] }}
                              </li>
                            </template>
                        </ul>
                    </div> 

                    <div> 
                        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                        <ul>
                            <template v-for="(el,ind) of new Array(20)" :key="ind">
                              <li v-if="meal[`strMeasure${ind+1}`]">
                                {{ind+1}}. {{ meal[`strMeasure${ind+1}`] }}
                              </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="flex mt-4">
                    <YouButton :href="meal.strYoutube" class="mx-4" >YouTube</YouButton>
                    <a   :href="meal.strSource" target="_blank"  
                            class="py-2 px-3 rounded hover:text-white transition-colors hover:bg-blue-950 ">
                            View Original Source
                    </a>
                </div>

       </div>

  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouButton from '../components/YouButton.vue'

const meal=ref({});
const mealId=ref();
const route= useRoute();

const getMealById = async ()=>{
    try{
        const response= await axiosClient.get(`/lookup.php?i=${mealId.value}`);
         meal.value=response.data.meals[0] || {};
    }catch(error){
         console.log('Error:'+error);
    }

}

onMounted(()=>{
  mealId.value=route.params.id;
  getMealById();
})



</script>

