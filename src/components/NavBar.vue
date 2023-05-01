<template>
      <header class="flex justify-between items-stretch bg-white shadow h-16 px-3">
         <router-link :to="{name: 'home'}" class="inline-flex items-center h-full hover:bg-black hover:text-white py-3" >
            Home
         </router-link>
         <div class="flex items-center gap-1 ">
            <router-link :to="{name: 'byName' }" class="inline-flex items-center px-2 h-full transition-color-100 hover:bg-blue-300" >Search Meals</router-link>
            <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-color-100 hover:bg-blue-300"  >Meals by Letter</router-link>
            <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-color-100 hover:bg-blue-300"  >Meals by ingredients</router-link>
         </div>
    </header>
</template>

<script setup>

</script>

