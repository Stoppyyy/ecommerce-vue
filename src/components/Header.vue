<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
<h2><router-link to="/"> Negozio online </router-link></h2>

<router-link v-if="!route.path.includes('cart')"
      :to="{ name: 'cart' }" class="clic">
      Vai al carrello
    </router-link>
</template>

<style scoped>
a {
  color: inherit; 
  text-decoration: none; 
}
a:hover {
  color: blue; 
  text-decoration: none; 
}
</style>