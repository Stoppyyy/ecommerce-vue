<script setup>
import Cart from '../components/Cart.vue';
import { handleClick } from '../app.js';
import { getProductsByCategory } from '../app.js';

const props = defineProps(['name']);
const products = await getProductsByCategory(props.name);
</script>

<template>
  <Cart />
    <ul v-for="prod in products" :key="prod.id" class="prodotti">
      <div> {{ prod.title }} </div>
      <div class="desc"> Prezzo: {{ prod.price }} € </div>
      <img class="immagini" :src="prod.image" alt="Product Image" />
      <button class="clic" @click="handleClick(prod)">Aggiungi al carrello</button>
    </ul>
    
</template>

<style scoped>
.prodotti {
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-top: 50px;
  font-weight: 500;
  font-size: 1.5em;
}
.immagini {
  max-width: 200px;
  max-height: 300px;
  display: block;
  float: left;
}
.desc {
  font-weight: 500;
  margin-top: 20px;
  font-size: 1.2em;
}
.carrello {
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.5em;
}
.clic {
  display: block;
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-top: 20px;
  cursor: pointer;
}
.clic:hover {
  background-color: #e0e0e0;
}
</style>
