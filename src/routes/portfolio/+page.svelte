<script lang="ts" context="module">
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import BeforeAfterView from "../../component/beforeAfter.svelte";

	type Tag = string;
	type Item = {
		tags: Tag[];
		data: Image | BeforeAfter;
	};
	type Image = { type: "image"; src: string };
	type BeforeAfter = {
		type: "before-after";
		before: string;
		after: string;
	};

	function seqImages(
		dir: string,
		count: number,
		tags: Tag[]
	): (Item & { data: Image })[] {
		return Array.from({ length: count }, (_, i) => ({
			tags,
			data: { type: "image", src: `${base}/portfolio/${dir}/${i}.webp` },
		}));
	}

	function seqBeforeAfter(
		dir: string,
		count: number,
		tags: Tag[]
	): (Item & { data: BeforeAfter })[] {
		return Array.from({ length: count }, (_, i) => ({
			tags,
			data: {
				type: "before-after",
				before: `${base}/portfolio/${dir}/${i}b.webp`,
				after: `${base}/portfolio/${dir}/${i}a.webp`,
			},
		}));
	}

	const data: Item[] = [
		...seqImages("3d/asset", 3, ["3d", "3d:model"]),
		...seqBeforeAfter("3d/vstage", 12, ["3d", "vstaging"]),
		...seqBeforeAfter("image/exterior", 5, [
			"image",
			"image:manipulation",
			"exterior",
		]),
		...seqBeforeAfter("image/interior", 3, [
			"image",
			"image:manipulation",
			"interior",
		]),
		...seqBeforeAfter("image/tod", 8, ["image", "image:manipulation", "tod"]),
		...seqBeforeAfter("image/viz", 8, [
			"image",
			"image:manipulation",
			"visualisation",
		]),
		...seqImages("creative/art", 6, ["creative", "art"]),
		...seqImages("creative/character", 6, ["creative", "art", "character"]),
	];

	function filterData(filter_tags: Tag[]): Item[] {
		return filter_tags.length
			? data.filter(item =>
					filter_tags.every(filter_tag =>
						item.tags.some(item_tag => item_tag === filter_tag)
					)
			  )
			: data;
	}
</script>

<script lang="ts">
	$: tags = $page.url.searchParams.getAll("tag");
	$: data_filtered = filterData(tags);
</script>

<div class="root">
	<h2>Portfolio</h2>
	{#each data_filtered as item}
		{#if item.data.type === "image"}
			<img src={item.data.src} alt="Item" loading="lazy" />
		{:else}
			<div class="ba">
				<BeforeAfterView
					before={item.data.before}
					after={item.data.after}
					alt="Item"
					loading="lazy"
				/>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	img,
	.ba {
		max-width: 800px;
	}
</style>
