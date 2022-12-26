<script lang="ts">
  import Header from "../component/header.svelte";
  import { onMount } from "svelte";
  import GlobalStyle from "../style/global.svelte";

  export const ssr = false;
  export const prerender = true;

  let scrollY = 0;
  onMount(() => {
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    });
  });

  $: miniHeader = scrollY >= 40;
</script>

<svelte:head>
  <title>Layla El-Sekaifi</title>
</svelte:head>

<header class:mini={miniHeader}>
  <Header mini={miniHeader} />
</header>

<main>
  <slot />
</main>

<GlobalStyle />

<style lang="scss">
  header {
    flex-wrap: wrap;
    padding-block: 1em;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #1c1c1c;
    z-index: 999;
  }

  main {
    position: relative;
    top: 150px;
  }

  header.mini {
    box-shadow: 0 5px 5px #161616;
  }

  header,
  header.mini {
    transition: box-shadow 0.1s;
  }
</style>
