<script setup>
import AllCategory from "../components/AllCategory.vue";

const props = defineProps(["name"]);
</script>

<template>
  <div class="prova">
    <div class="prod">
      <Suspense>
        <AllCategory :name="props.name" />
      </Suspense>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .cat {
    flex-direction: column;
  }
  .prod {
    display: flex;
    flex-direction: column;
    align-items: right;
    margin-left: 300px;
  }
  .prova {
    display: flex;
  }
}
</style>
