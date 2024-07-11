<script setup>
import { getCategories } from '../app.js'
const categories = await getCategories();
</script>

<template>
<h1>Categorie:</h1>
<div class="cat">
 <ul >
  <h2><router-link to="/electronics"> 1 </router-link></h2>
 </ul>
</div>
</template>
