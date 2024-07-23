<script setup>
import { getCategories } from '../app.js'
const categories = await getCategories();
</script>

<template>
<h1>Filtra per categorie:</h1>
<div class="cat">
 <ul>
  <li v-for="category in categories"><router-link :to="`/category/${category}`"> {{ category }} </router-link></li>
 </ul>
</div>
</template>

<style scoped>
a {
  color: inherit; 
  text-decoration: none; 
}
a:hover {
  color: blue; /* Change color to blue on hover */
  text-decoration: none; /* Keep underline removed on hover */
}
</style>
