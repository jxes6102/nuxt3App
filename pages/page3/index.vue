<template>
    <div>
        <div class="mine-flex-center flex-col">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page3 use plugin</p>
            <p v-if="title" class="mt-4 text-2xl font-bold text-gray-900">{{ title }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
const title = ref('')

onMounted(() => {
    //   console.log('is mounted')
    // plugin need use after onMounted
    const { $hello } = useNuxtApp()
    title.value = $hello('doge')
})
</script>