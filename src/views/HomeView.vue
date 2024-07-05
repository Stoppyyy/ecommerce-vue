<script setup>
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'

</script>

<template>
 
 <Suspense>
   <Categories />
 </Suspense>

 <router-link to="/about">Info sito</router-link>
  
</template>
