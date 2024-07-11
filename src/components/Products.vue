<script setup>
import { ref } from 'vue';
import { getProducts } from '../app.js'
const products = await getProducts();
let sommaPrezzi = ref(0);
let count = ref(0);


function handleClick(prezzo){

  sommaPrezzi.value += prezzo;

  count.value++;
  
  return sommaPrezzi;
}


 
</script>

<template>

<div class="carrello"> Carrello: {{sommaPrezzi.toFixed(2)}} € </div>
<button class="clic">
<router-link to="/cart">Vai al carrello</router-link>
</button>
<div class="carrello"> Numero prodotti selezionati: {{count}}  </div>
<h2>Prodotti:</h2>
<ul v-for="prod in products" class="prodotti">
    <div> {{prod.title}} </div>
    <div class="desc"> Prezzo: {{prod.price}} € </div>
    <img class="immagini" :src="prod.image" alt="Product Image" />
    <button class="clic" @click="handleClick(prod.price); increment" >Aggiungi al carrello</button>
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
