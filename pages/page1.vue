<template>
    <div>
        <div class="mine-flex-center gap-5">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page1</p>
            <button @click="changeStatus" type="submit" class="mt-6 bg-blue-600 py-3 px-8 text-xl font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">動態元件開關</button>
        </div>
        <component :is="show ? DynamicComponent : 'div'" />
    </div>
</template>
<script lang="ts" setup>

// function changeStatus(): void {
//     show.value = !show.value
// }

const show = ref(false)
const DynamicComponent = resolveComponent('NuxtWelcome')

const changeStatus = ():void => {
    show.value = !show.value
    console.log('dodo')
}
</script>