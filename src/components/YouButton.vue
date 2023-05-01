<template>
                <div class="flex items-center justify-between"> 
                        <a :href="href" target="_blank" 
                             class="py-2 px-3 rounded border hover:text-white hover:bg-red-950 transition-colors bg-red-400">
                             <slot></slot>
                        </a>
                </div>

</template>

<script setup>
const props=defineProps({
    href: String,

});

</script>
