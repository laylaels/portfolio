<script lang="ts">
  import Title from "../component/title.svelte";
  import GlobalStyle from "../style/global.svelte";
</script>

<svelte:head>
  <title>Layla El-Sekaifi</title>
</svelte:head>

<header>
  <Title />
</header>

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
</style>
