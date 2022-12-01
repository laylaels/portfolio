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
	<div class="title"><Title /></div>
	<nav><Navbar /></nav>
</header>

<main>
	<slot />
</main>

<GlobalStyle />

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
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
		flex: 1;
	}

	@media only screen and (min-width: 1440px) {
		.title {
			margin-inline-start: 3.25em;
		}
	}
</style>
