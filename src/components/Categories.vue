<script setup>
import { getCategories } from '../app.js'
const categories = await getCategories();
</script>

<template>
<h1>Categorie:</h1>
<div class="cat">
 <ul v-for="category in categories">
  <h1>{{category}}</h1>
 </ul>
</div>
</template>
