<script>
  import GlobalStyle from "../style/global.svelte";

</script>
<svelte:head>
    <title>Layla El-Sekaifi</title>
</svelte:head>

<header>
<h1>Layla El-Sekaifi</h1>
</header>

<main>
<slot></slot>
</main>

<GlobalStyle />

<style lang="scss">
:root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>