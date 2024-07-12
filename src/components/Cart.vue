<script setup>
import { ref } from 'vue';
import { getProducts } from '../app.js'
const products = await getProducts();
let sommaPrezzi = ref(0);
let count = ref(0);



</script>



<template>
<div class="carrello"> Carrello: {{sommaPrezzi.toFixed(2)}} € </div>
<div class="carrello"> Numero prodotti selezionati: {{count}}  </div>
<button class="clic">
<router-link to="/cart">Vai al carrello</router-link>
</button>

</template>



<style>
.datiCarrello{
    margin-top: 50px;
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