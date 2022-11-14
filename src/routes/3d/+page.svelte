<script lang="ts">
	import { base } from "$app/paths";
	import BeforeAfter from "../../component/beforeAfter.svelte";

	const assets = [
		{ title: "Coffee Set", file: "coffee_set" },
		{ title: "Cups", file: "cups" },
		{ title: "Jug", file: "jug" },
	];
</script>

<svelte:head>
	<title>3D - Layla El-Sekaifi</title>
</svelte:head>

<h2>3D</h2>

<h3>Virtual Staging</h3>
{#each Array(14) as _, i}
	<BeforeAfter
		alt="Virtual Staging"
		before="{base}/img/3d/vstage/{i}b.webp"
		after="{base}/img/3d/vstage/{i}a.webp"
	/>
{/each}

<h3>Assets</h3>
{#each assets as { title, file }}
	<img src="{base}/img/3d/asset/{file}.webp" alt={title} />
{/each}

<style lang="scss">
	img {
		max-width: 100%;
	}
</style>
