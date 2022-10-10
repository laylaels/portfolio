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