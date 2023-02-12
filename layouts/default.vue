<template>
    <div class="bg-sky-100 py-2">
        <p class="px-4 py-2 text-2xl text-gray-700">這是預設的布局，全部頁面都會使用到</p>
        <slot name="header" />
        <slot />
        <slot name="footer" />
        <div class="mine-flex-center">
            <button
            class="my-2 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            @click="back"
            >
            回首頁
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const back = () => {
    router.push({ path: "/" });
}
</script>
