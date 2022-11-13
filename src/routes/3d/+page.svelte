<script lang="ts">
	import { base } from "$app/paths";
	import BeforeAfter from "../../component/beforeAfter.svelte";

	const assets = [
		{ title: "Coffee Set", file: "coffee_set.png" },
		{ title: "Cups", file: "cups.png" },
		{ title: "Jug", file: "jug.png" },
	];

	const virtual_staging_count = 7;
</script>

<h2>3D</h2>

<h3>Virtual Staging</h3>
{#each Array(virtual_staging_count) as _, i}
	<BeforeAfter
		alt="Virtual Staging"
		before="{base}/img/3d/vstage/{i}b.jpg"
		after="{base}/img/3d/vstage/{i}a.jpg"
	/>
{/each}

<h3>Assets</h3>
{#each assets as { title, file }}
	<img src="{base}/img/3d/asset/{file}" alt={title} />
{/each}
