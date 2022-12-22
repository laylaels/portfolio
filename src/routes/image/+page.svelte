<script lang="ts">
	import { base } from "$app/paths";
	import BeforeAfter from "../../component/beforeAfter.svelte";

	const data = [
		{
			title: "Externals",
			count: 5,
			dir: "externals",
		},
		{
			title: "Internals",
			count: 3,
			dir: "internals",
		},
		{
			title: "Time of Day Conversion",
			count: 8,
			dir: "tod",
		},
		{
			title: "Visualisations",
			count: 1,
			dir: "viz",
		},
	];
</script>

<svelte:head>
	<title>Image Manipulation - Layla El-Sekaifi</title>
</svelte:head>

<div class="root">
	<h2>Image</h2>

	{#each data as { title, count, dir }}
		<h3>{title}</h3>
		<div class="ba">
			<div class="content">
				{#each Array(count) as _, i}
					<BeforeAfter
						before="{base}/img/image/{dir}/{i}b.webp"
						after="{base}/img/image/{dir}/{i}a.webp"
						alt={title}
						loading="lazy"
					/>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.root {
		max-width: 800px;
		margin: auto;
	}

	h3 {
		margin-block: 1em;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
