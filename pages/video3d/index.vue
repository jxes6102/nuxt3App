<template>
    <div>
        <ClientOnly>
            <testPicture></testPicture>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: false
})
</script>