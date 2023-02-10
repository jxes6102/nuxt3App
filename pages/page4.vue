<template>
    <div class="my-24 flex flex-col items-center">
      <p class="text-4xl text-gray-600">use api data</p>
      <p class="text-4xl text-gray-600">瀏覽次數</p>
      <span class="mt-4 text-6xl font-semibold text-sky-400">{{ data }}</span> 
    </div>
</template>
<script lang="ts" setup>
// const apiData = $fetch('/api/test').then((data)=> {
//     console.log('data',data)
// })

const { data, pending, error, refresh } = useAsyncData('count', () => $fetch('/api/count'))
// console.log('data',data)
// console.log('pending',pending)
// console.log('error',error)
// console.log('refresh',refresh)

</script>