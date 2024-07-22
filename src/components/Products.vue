<script setup>
import { ref } from 'vue';
import { getProducts } from '../app.js';
import { useRouter } from 'vue-router';
import Cart from '../components/Cart.vue';
import { useCartStore } from '../stores/cart.js';
const cartStore = useCartStore();

const products = await getProducts();
let sommaPrezzi = ref(0);
let count = ref(0);
const router = useRouter();
const emit = defineEmits(['sommaPrezzi']);

function handleClick(prod) {
  const existingIdx = cartStore.lines.findIndex(line => line.item.id === prod.id);

  if (existingIdx >= 0) {
    cartStore.lines[existingIdx].qty += 1;
    console.log(`Quantità del prodotto con id ${prod.id}  ${JSON.stringify(cartStore.lines[existingIdx].qty)}`);
  } else {
    cartStore.lines.push({ item: prod, qty: 1 });
    console.log(`Prodotto con id ${prod.id} aggiunto al carrello con quantità: 1`);
  }

  count = cartStore.lines.map(i => i.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log('Totale prodotti nel carrello:', cartStore.lines.map(i => i.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0))
}

</script>


<template>
<Cart :sommaPrezzi="sommaPrezzi" :count="count" />
<router-link
      :to="{ name: 'cart', params: { sommaPrezzi: sommaPrezzi, count: count } }" class="clic">
      Vai al carrello
    </router-link>
<h2>Prodotti:</h2>
<ul>
    <li v-for="prod in products" :key="prod.id" class="prodotti">
      <div>{{ prod.title }}</div>
      <div class="desc">Prezzo: {{ prod.price }} €</div>
      <img class="immagini" :src="prod.image" alt="Product Image" />
      <button class="clic" @click="handleClick(prod)">Aggiungi al carrello</button>
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
  .immagini{
    max-width: 200px; 
    max-height: 300px;
    display: block;
    float: left; 
  }
  .desc{
    font-weight: 500; 
    margin-top: 20px;
    font-size: 1.2em;
  }
  .carrello{

        font-weight: bold; 
        margin-top: 20px;
        font-size: 1.5em;
  }
  .clic{
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
  .clic:hover{
            background-color: #e0e0e0;
        }
  
</style>
