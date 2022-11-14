<script lang="ts">
	import { base } from "$app/paths";
	import BeforeAfter from "../../component/beforeAfter.svelte";

	const assets = [
		{ title: "Coffee Set", file: "coffee_set" },
		{ title: "Cups", file: "cups" },
		{ title: "Jug", file: "jug" },
	];

	const virtual_staging_count = 11;
</script>

<h2>3D</h2>

<h3>Virtual Staging</h3>
{#each Array(virtual_staging_count) as _, i}
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
