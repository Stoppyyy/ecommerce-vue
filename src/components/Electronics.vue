<script setup>
import { ref, computed } from 'vue';
import Cart from '../components/Cart.vue';
import { getProducts, getCategories } from '../app.js';

const products = ref([]);
const categories = ref([]);
let sommaPrezzi = ref(0);
let count = ref(0);

(async () => {
  products.value = await getProducts();
  categories.value = await getCategories();
})();

// Computed property per filtrare i prodotti
const filteredProducts = computed(() => {
  return products.value.filter(prod => prod.category === 'electronics');
});

const emit = defineEmits(['sommaPrezzi']);

function handleClick(prezzo){
      sommaPrezzi.value += prezzo;
      count.value++;
      emit('sommaPrezzi', sommaPrezzi.value);
    }
</script>

<template>
  <Cart :sommaPrezzi="sommaPrezzi" :count="count" />
  <div>
    <button class="clic">
    <router-link to="/cart">Vai al carrello</router-link>
    </button>
    <h2>Prodotti:</h2>
    <ul v-for="prod in filteredProducts" :key="prod.id" class="prodotti">
      <div> {{ prod.title }} </div>
      <div class="desc"> Prezzo: {{ prod.price }} € </div>
      <img class="immagini" :src="prod.image" alt="Product Image" />
      <button class="clic" @click="handleClick(prod.price)">Aggiungi al carrello</button>
    </ul>
  </div>
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
