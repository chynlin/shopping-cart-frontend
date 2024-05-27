<template>
  <MainNav />
  <div class="view">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import MainNav from '@/components/Layout/MainNav.vue';
import Footer from '@/components/Layout/Footer.vue';
</script>

<style scoped>
.view {
  height: calc(100vh - 3.5rem);
  overflow-y: scroll;
}
</style>
