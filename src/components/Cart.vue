<script setup>
import { useCartStore } from '../stores/cart.js';
const cartStore = useCartStore();

const getTotalQuantity = () => {
  return cartStore.lines.map(i => i.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const getTotalPrice = () => { return cartStore.lines.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty), 0);
}
</script>

<template>
  <div class="carrello"> Carrello: {{ getTotalPrice() }} € </div>
  <div class="carrello"> Numero prodotti da acquistare: {{ getTotalQuantity() }}  </div>
  
</template>

<style>
.datiCarrello {
    margin-top: 50px;
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
