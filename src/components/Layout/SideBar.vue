<template>
  <div class="sidebar text-sm">
    <ul>
      <SidebarItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :openIndex="openIndex"
        :index="index"
        @toggle="toggle"
        class="border-b border-gray-100"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SidebarItem from './SidebarItem.vue';

interface Item {
  name: string;
  children?: Item[];
}

const items = ref<Item[]>([
  { name: '全部商品' },
  {
    name: '特價商品',
    children: [{ name: '比基尼' }, { name: '春裝' }],
  },
  {
    name: '上衣',
    children: [{ name: '襯衫' }, { name: '小可愛' }],
  },
  { name: '下裝' },
]);

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 10px;
  cursor: pointer;
}

li ul {
  padding-left: 20px;
}
</style>
