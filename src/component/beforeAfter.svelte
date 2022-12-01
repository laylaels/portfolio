<script lang="ts">
	import { onMount } from "svelte";
	import type { Options } from "image-compare-viewer";

	export let before: string;
	export let after: string;
	export let alt: string;
	export let options: Partial<Options> | undefined = undefined;

	let root: HTMLDivElement;
	onMount(async () => {
		import("image-compare-viewer/dist/image-compare-viewer.min.css");
		const ImageCompare = (await import("image-compare-viewer")).default;
		new ImageCompare(root, options).mount();
		root.style.visibility = "visible";
	});
</script>

<div bind:this={root}>
	<img src={before} alt="{alt} (before)" />
	<img src={after} alt="{alt} (after)" />
</div>

<style lang="scss">
	div {
		visibility: collapse;
	}
</style>
