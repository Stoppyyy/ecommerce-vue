<script setup>
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'

</script>

<template>
 <div class="cat">
 <Suspense>
   <Categories />
 </Suspense>
  </div>
 
  <h2><center><router-link to="/about">Clicca qui per visualizzare tutti i prodotti</router-link></center></h2>
  
</template>


