<script lang="ts">
  import Navbar from "../component/navbar.svelte";
  import Title from "../component/title.svelte";
  import GlobalStyle from "../style/global.svelte";

  export const ssr = false;
  export const prerender = true;
</script>

<svelte:head>
  <title>Layla El-Sekaifi</title>
</svelte:head>

<header>
  <Title />
</header>

<nav>
  <Navbar />
</nav>

<main>
  <slot />
</main>

<GlobalStyle />

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: auto;
  }

  nav {
    margin: 1em 0;
  }
</style>
