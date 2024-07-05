<script setup>
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'

</script>



<template>
  
 <Suspense>
   <Categories />
 </Suspense>

</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
