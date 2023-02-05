<template>
    <div class="my-4 flex flex-col items-center gap-5">
      <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterData++"
        >
          增加
        </button>
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterData--"
        >
          減少
        </button>
        <span class="mt-4 text-6xl font-semibold text-sky-400">{{ counterData }}</span>
        <span class="mt-4 text-6xl font-semibold text-sky-400">{{ color }}</span>
    </div>
</template>
<script lang="ts" setup>
const counterData = useState('countstatus', () => Math.round(Math.random() * 1000))
const color = useColor()
</script>