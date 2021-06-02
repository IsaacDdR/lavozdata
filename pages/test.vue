<template>
  <div id="app">
    <renderer ref="renderer" antialias orbit-ctrl resize="window">
      <camera :position="{ z: 10 }"></camera>
      <scene>
        <point-light :position="{ y: 50, z: 50 }"></point-light>
        <box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <lambert-material></lambert-material>
        </box>
      </scene>
    </renderer>
  </div>
</template>

<script type="module">
import { createApp } from "https://unpkg.com/troisjs@0.3.1/build/trois.module.cdn.min.js";
createApp({
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
}).mount("#app");
</script>
