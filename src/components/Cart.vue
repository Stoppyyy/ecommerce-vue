<script setup>
import { ref } from 'vue';

</script>



<template>
<h1><center>Carrello:</center></h1>
<div class="datiCarrello">
<h3><center><button class="clic"> </button></center></h3>
</div>

</template>



<style>
.datiCarrello{
    .margin-top: 50px;
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