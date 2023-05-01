<template>
    <div class="container mx-auto p-8">

        <div class="flex flex-col p-2 justify-center ">
            <input type="text"
            v-model="keyWord"
             class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals"
            @change="searchMeals"
            />
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
import {ref,computed, onMounted} from 'vue';
import store from '../store'
import {useRoute} from 'vue-router';
import YouButton from '../components/YouButton.vue'
import ItemMeal from '../components/ItemMeal.vue';


const keyWord=ref('');
const meals=computed(()=>store.state.searchedMeals);
const route = useRoute();

function  searchMeals(){
    try{
        if(keyWord.value){
            store.dispatch('searchMeals',keyWord.value)
        }else{
            store.commit('setSearchedMeals',[]);
        }

    }catch(error){
        console.log("Error:"+error)
    }
 }
onMounted(()=>{
    keyWord.value=route.params.name;
    if(keyWord.value){
        searchMeals();
    }
})

</script>

