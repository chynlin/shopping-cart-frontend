<template>
  <div v-for="product of list" :key="product.id">
    <img :src="product.image" alt="" />
    <p>{{ product.name }}</p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
const store = useStore();
const list = ref([]);
onMounted(async () => {
  const res = await store.dispatch('get_products_list');
  console.log(res);
  list.value = res;
});
</script>

<style></style>
