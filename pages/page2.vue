<template>
    <div>
        <div class="mine-flex-center">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page2</p>
        </div>
    </div>
    <div class="mine-flex-center">
        <span class="mt-8 text-4xl text-gray-700">{{ count }}</span>
    </div>
    <div class="mine-flex-center gap-3">
        <button
        class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        @click="increment"
        >
        加 1
        </button>
        <button
        class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        @click="subtraction"
        >
        減 1
        </button>
    </div>
</template>
<script lang="ts" setup>

const { count, increment,subtraction } = useCounter()

</script>