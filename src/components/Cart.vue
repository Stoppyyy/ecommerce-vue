<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  sommaPrezzi: {
    type: Number,
    required: true,
    default: 0,
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

const sommaPrezziRounded = computed(() => {
  return props.sommaPrezzi.toFixed(2);
});

</script>

<template>
  <div class="carrello"> Carrello: {{ sommaPrezziRounded }} € </div>
  <div class="carrello"> Numero prodotti selezionati: {{ count }}  </div>
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
