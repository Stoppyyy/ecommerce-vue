<script setup>
import { getProducts } from '../app.js'
const products = await getProducts();
</script>

<template>
<h2>Prodotti:</h2>
<ul v-for="prod in products" class="prodotti">
    <div class="desc">{{prod.id}} {{prod.title}} {{prod.price}}</div>
    <img class="immagini" :src="prod.image" alt="Product Image" />

</ul>
</template>
<style>
.prodotti {
    display: flex;
    flex-direction: column;
    align-items: right;
    max-width: 200px; 
    max-height: 200px;
  }
  .immagini
  {
    display: block; 
  margin-top: 10px; 
  }
  .desc{
    margin-bottom: 10px;
  }
  
</style>
