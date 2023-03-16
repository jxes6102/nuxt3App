<template>
    <div>
      <div class="vr-iframe">
        <div class="iframe-box">
          <iframe id="show-iframe" width="100%" height="100%" frameborder=0 name="showHere" scrolling=no :src="url">
            你的瀏覽器不支援 iframe
          </iframe>
        </div>
      </div>
    </div>
</template>
<script setup>
    const url = ref('/test3D')
</script>
<style scoped>
  .vr-iframe{
    width: 100vw;
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .iframe-box{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
</style>
  