<template>
  <li>
    <div @click="toggle" class="!py-2">
      {{ item.name }}
      <span v-if="item.children && item.children.length">
        <i
          class="bi text-gray-600 text-xs"
          :class="isOpen ? 'bi-chevron-up' : 'bi-chevron-down'"
        ></i>
      </span>
    </div>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <ul
        v-show="isOpen"
        v-if="item.children && item.children.length"
        ref="submenu"
        class="!pl-4"
      >
        <SidebarItem
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          :openIndex="openIndex"
          :index="index"
          @toggle="toggleChild"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';

interface Item {
  name: string;
  children?: Item[];
}

const props = defineProps<{
  item: Item;
  openIndex: number | null;
  index: number;
}>();
const emits = defineEmits(['toggle']);

const isOpen = computed(() => props.openIndex === props.index);
const submenu = ref<HTMLElement | null>(null);

const toggle = () => {
  emits('toggle', props.index);
};

const toggleChild = (index: number) => {
  emits('toggle', index);
};

const beforeEnter = (el: HTMLElement) => {
  el.style.height = '0';
};

const enter = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`;
};

const afterEnter = (el: HTMLElement) => {
  el.style.height = 'auto';
};

const beforeLeave = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`;
};

const leave = (el: HTMLElement) => {
  el.style.height = '0';
};

const afterLeave = (el: HTMLElement) => {
  el.style.height = '0';
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  overflow: hidden;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
  height: 0;
}
</style>
