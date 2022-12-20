<script lang="ts">
	import { onMount } from "svelte";
	import Navbar from "../component/navbar.svelte";
	import Title from "../component/title.svelte";
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
		margin-block-end: 1em;
		padding-block: 1em;
		position: sticky;
		top: 0;
		background: #1c1c1c;
	}

	header.mini {
		box-shadow: 0 5px 5px #161616;
	}

	header,
	header.mini {
		transition: box-shadow 0.1s;
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
