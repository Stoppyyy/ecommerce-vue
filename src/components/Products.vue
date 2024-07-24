<script setup>
import { ref } from "vue";
import Cart from "../components/Cart.vue";
import { getProducts } from "../app.js";
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart.js";
import { handleClick } from "../app.js";

const products = await getProducts();
let count = ref(0);
const router = useRouter();
</script>

<template>
  <Cart />
  <ul>
    <li v-for="prod in products" :key="prod.id" class="prodotti">
      <h4>{{ prod.title }}</h4>
      <div class="desc">Prezzo: {{ prod.price }} €</div>
      <router-link :to="`/product/${prod.id}`"
        ><img class="immagini" :src="prod.image" alt="Product Image"
      /></router-link>
      <button class="clic" @click="handleClick(prod)">
        Aggiungi al carrello
      </button>
    </li>
  </ul>
</template>

<style>
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
