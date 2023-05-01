<template>
    <div  class="bg-white shadow rounded-xl hover:scale-110">
        <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="" class="rounded-t-2xl h-48 w-full object-cover">
        </router-link>

        <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa quae!
                Culpa quas nemo quasi voluptate, laborum
        </p>
        <div class="flex items-center justify-between">
            <YouButton :href="meal.strYoutube" >GO YouTube</YouButton>
        </div>
        </div>
    </div>
  
</template>

<script setup>
import YouButton from './YouButton.vue';
const props=defineProps({
    meal: {
        type: Object,
        required: true
    }

});

</script>
