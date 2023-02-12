<template>
    <div class="bg-white py-2">
        <div class="mine-flex-center flex-col">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page6 use Pinia</p>
        </div>
        <div class="flex flex-col items-center">
            <span class="text-9xl font-semibold text-sky-600">{{ counterStore.count }}</span>
            <span class="text-9xl font-semibold text-sky-600">{{ counterStore.doubleCount }}</span>
            <div class="mt-8 flex flex-row">
                <button
                class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                @click="counterStore.increment"
                >
                增加
                </button>
                <button
                class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                @click="counterStore.decrement"
                >
                減少
                </button>
                <button
                class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                @click="counterStore.squared"
                >
                平方
                </button>
                <button
                class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                @click="counterStore.clear"
                >
                歸零
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/stores/pinia'

const counterStore = useCounterStore()
counterStore.clear()
</script>