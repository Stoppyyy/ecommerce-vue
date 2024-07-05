<script setup>
import { getProducts } from '../app.js'
const products = await getProducts();
</script>

<template>
<h2>Prodotti</h2>
 <ul v-for="prod in products">
  <li>{{prod.title}}</li>
 </ul>
</template>
