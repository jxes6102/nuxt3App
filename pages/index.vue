<template>
<div>
    <!-- <NuxtWelcome /> -->
    <app-test></app-test>
    <div class="mine-flex-center">
        <p class="mt-4 text-2xl font-bold text-gray-900">is index</p>
    </div>
    <div class="mine-flex-center gap-4">
        <NuxtLink to="/page1">前往 page1</NuxtLink>
        <NuxtLink to="/page2">前往 page2</NuxtLink>
        <NuxtLink to="/page3">前往 page3</NuxtLink>
        <NuxtLink to="/page4">前往 page4</NuxtLink>
        <NuxtLink to="/page5">前往 page5</NuxtLink>
        <NuxtLink to="/page6">前往 page6</NuxtLink>
    </div>
    <!-- <div class="mine-flex-center">{{ $route.params }}</div> -->
</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('is mounted');
})
// console.log('a')
// const route = useRoute()
// const { id } = route.params
// console.log('b')
</script>