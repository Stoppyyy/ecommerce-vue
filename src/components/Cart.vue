<script setup>
import { useCartStore } from "../stores/cart.js";
const cartStore = useCartStore();

const getTotalQuantity = () => {
  return cartStore.lines
    .map((i) => i.qty)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const getTotalPrice = () => {
  const total = cartStore.lines.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.item.price * currentValue.qty,
    0,
  );
  return total.toFixed(2);
};
function changeQty(line, offset) {
  line.qty += offset;
  if (line.qty < 1) {
    const idx = cartStore.lines.findIndex((l) => l.item.id === line.item.id);
    if (idx > -1) {
      cartStore.lines.splice(idx, 1);
    }
  }
}
</script>

<template>
  <div class="carrello">Carrello: {{ getTotalPrice() }} €</div>
  <div class="carrello">
    Numero prodotti da acquistare: {{ getTotalQuantity() }}
  </div>
  <ul>
    <li v-for="line in cartStore.lines">
      {{ line.item.title }} - {{ line.qty }}
      <button v-show="line.qty > 0" @click="changeQty(line, 1)">
        Incrementa
      </button>
      <button v-show="line.qty > 0" @click="changeQty(line, -1)">
        Decrementa
      </button>
    </li>
  </ul>
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
