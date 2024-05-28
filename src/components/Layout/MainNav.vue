<template>
  <div class="relative h-14 bg-gray-600 flex items-center justify-center">
    <i
      class="bi bi-list text-2xl text-gray-100 absolute left-2"
      @click="isSideBarShow = true"
    ></i>
    <img class="h-8" src="@/assets/logo-width-white.png" alt="logo" />
    <div class="flex items-center gap-4 absolute right-2 text-gray-100">
      <i class="bi bi-person text-2xl"></i>
      <i class="bi bi-cart4 text-2xl"></i>
    </div>
  </div>
  <van-popup
    v-model:show="isSideBarShow"
    position="left"
    :style="{ width: '70%', height: '100%' }"
  >
    <SideBar v-model="isSideBarShow" />
  </van-popup>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from './SideBar.vue';
const isSideBarShow = ref(false);
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
}
</style>
