<script setup>
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'
import WomensClothing from '../components/WomensClothing.vue'
import Cart from '../components/Cart.vue'


</script>



<template>
  <div class="prova">
 <div class="prod">
  <Suspense>
   <WomensClothing />
 </Suspense>
  </div>
  </div>

<h2><center><router-link to="/">Home</router-link></center></h2>

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