<script setup>
import { getCategories } from '../app.js'
const categories = await getCategories();
</script>

<template>
<h1>Filtra per categorie:</h1>
<div class="cat">
 <ul >
  <h2><router-link to="/electronics"> electronics </router-link></h2>
  <h2><router-link to="/jewelery"> jewerely </router-link></h2>
  <h2><router-link to="/mens-clothing"> men's clothing </router-link></h2>
  <h2><router-link to="/womens-clothing"> women's clothing </router-link></h2>
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
