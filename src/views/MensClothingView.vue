<script setup>
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'
import MensClothing from '../components/MensClothing.vue'
import Cart from '../components/Cart.vue'


</script>



<template>
  <div class="prova">
 <div class="prod">
  <Suspense>
   <MensClothing />
 </Suspense>
  </div>
  </div>
</template>



<style>
@media (min-width: 1024px) {
  .cat {
    flex-direction: column;
  }
  .prod {
    display: flex;
    flex-direction: column;
    align-items: right;
    margin-left: 300px;
  }
  .prova{
    display: flex;
  }
  
  
}
</style>