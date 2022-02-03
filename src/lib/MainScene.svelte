<script>
  import { onMount } from 'svelte';
  import { createMainScene } from '../three-engine/MainScene';

  let canvas;
  onMount(() => {
    createMainScene(canvas);
  });
</script>

<main>
  <canvas bind:this={canvas}></canvas>
</main>

<style>
  canvas {
    width: 100vw;
    height: 100vh;
  }
</style>
