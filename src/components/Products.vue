<script setup>
import { ref } from 'vue';
import { getProducts } from '../app.js'
const products = await getProducts();
let sommaPrezzi = ref(0);

function handleClick(prezzo){

  sommaPrezzi.value += prezzo;
 }
 
</script>

<template>
<div class="carrello"> Carrello: {{sommaPrezzi.toFixed(2)}} € </div>
<button class="clic" @click="">Vai al carrello</button>
<h2>Prodotti:</h2>
<ul v-for="prod in products" class="prodotti">
    <div>{{prod.id}} {{prod.title}} </div>
    <div class="desc"> Prezzo: {{prod.price}} € </div>
    <img class="immagini" :src="prod.image" alt="Product Image" />
    <button class="clic" @click="handleClick(prod.price)">Acquista</button>
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

        font-weight: bold; /* Rende il testo in grassetto */
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
