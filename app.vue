<template>
  <div>
      <NuxtLayout name="default">
        <template #header>
          <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
        </template>
        <template #default>
          <p class="px-6 pt-4 text-xl text-cyan-500">
            被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot(default) 中
          </p>
        </template>
        <template #footer>
          <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p>
        </template>
      </NuxtLayout>
      <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
</script>