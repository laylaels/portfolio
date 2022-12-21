<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/stores";

	const items = [
		{
			id: "jackson",
			title: "Jackson Stops",
			src: "https://drive.google.com/file/d/177lBfnaL-uAaw27WH5TUjXvkEpb_9rPJ/preview",
			roles: "composition",
		},
		{
			id: "draw",
			title: "The Big Draw",
			src: "https://drive.google.com/file/d/191L87hnBaCSW1VRxkS9lkh0xbxA2hQYo/preview",
			roles: "film and lighting",
		},
		{
			id: "checkmate",
			title: "Checkmate Trailer",
			src: "https://drive.google.com/file/d/1IWZnBYnSciK3KBU7ao77ch4S9G-TwBRf/preview",
			roles: "co-film and editing",
		},
	];

	let selected: typeof items[number] = items[0];
	$: $page,
		(selected =
			items.find(item => item.id === $page.url.hash.substring(1)) ?? items[0]);
</script>

<svelte:head>
	<title>Video - Layla El-Sekaifi</title>
</svelte:head>

<div class="root">
	<h2>{selected.title}</h2>
	{selected.roles}
	<object type="text/html" data={selected.src} title={selected.title} />
	<div class="reel">
		{#each items as item}
			<a href="{base}/video#{item.id}">
				<video autoplay muted loop>
					<source src="video/{item.id}.mp4" type="video/mp4" />
				</video>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	.reel {
		display: flex;
		max-width: 100%;
		video {
			aspect-ratio: 16 / 9;
			max-width: 320px;
			height: 180px;
			border-radius: 8px;
		}
	}

	object {
		width: 100%;
		max-width: 720px;
		aspect-ratio: 16 / 9;
	}
</style>
