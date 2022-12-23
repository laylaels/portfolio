<script lang="ts">
	import { base } from "$app/paths";
	import Brand, * as brand from "../component/brand.svelte";

	const AGE =
		new Date(
			new Date().valueOf() - new Date("2000-07-14").valueOf()
		).getUTCFullYear() - 1970;
	const LOCATION = "West London";

	const categories = [
		{
			id: "retouch",
			tags: ["image:retouch"],
			name: "Retouch",
		},
		{
			id: "photo_manipulation",
			tags: ["image:manipulation"],
			name: "Photo Manipulation",
		},
		{
			id: "vstaging",
			tags: ["vstaging"],
			name: "Virtual Staging",
		},
		{
			id: "d3",
			tags: ["3d:model"],
			name: "3D",
		},
		{
			id: "video",
			path: "video",
			name: "Video",
		},
		{
			id: "illustration",
			tags: ["creative"],
			name: "Illustration",
		},
		{
			id: "photography",
			tags: ["photography"],
			name: "Photography",
		},
		{
			id: "fine_art",
			tags: ["creative"],
			name: "Fine Art",
		},
	];

	function categoryUrl(category: { tags: string[] } | { path: string }) {
		return "tags" in category
			? `${base}/portfolio?${category.tags.map(t => `tag=${t}`).join("&")}`
			: `${base}/${category.path}`;
	}
</script>

<svelte:head>
	<title>Layla El-Sekaifi</title>
</svelte:head>

<div class="root">
	<article id="about">
		<h2>Hi!</h2>
		<p>
			I'm Layla El-Sekaifi, a {AGE} years-old multidisciplinary artist, retoucher
			and video editor based in {LOCATION}.
		</p>
		<p>
			For the past eight years I have been familiarising myself with the Adobe
			Suite, mainly focusing on <Brand brand={brand.photoshop} /> but ranging through
			to
			<Brand brand={brand.lightroom} />,
			<Brand brand={brand.illustrator} />,
			<Brand brand={brand.premiere} />,
			<Brand brand={brand.after_effects} />, and <Brand
				brand={brand.indesign}
			/>.
		</p>
		<p>
			I have been working daily with <Brand brand={brand.lightroom} />
			and <Brand brand={brand.photoshop} /> since 2020 as a retoucher and designer
			for real estate clients bringing their properties to life and preparing their
			marketing materials.
		</p>
		<p>
			As of recent I have taken an interest in 3D, familiarising myself with the
			software, concepts and creating models in my free time.
		</p>
		<p>
			When I’m not working you can find me drawing, discovering new things,
			swimming, and having a good time with friends or family :)
		</p>
	</article>
	<article id="portfolio">
		<h2>Portfolio</h2>
		<div class="cats">
			{#each categories as cat}
				<a href={categoryUrl(cat)} class="iconlabel">
					<svg viewBox="0 0 200 200">
						<use xlink:href="{base}/category.svg#{cat.id}" />
					</svg>
					<span>{cat.name}</span>
				</a>
			{/each}
		</div>
	</article>
</div>
<article class="companies">
	{#each [["Dexters", "dexters.svg"], ["Fletchers", "fletchers.webp"], ["Jackson Stops", "jackson.svg"], ["Redlees Studios", "redlees.webp"], ["Snellers", "snellers.webp"], ["Wetherell", "wetherell.webp"]] as [alt, image]}
		<img {alt} src="company/{image}" />
	{/each}
</article>

<style lang="scss">
	.root {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
		article {
			max-width: 700px;
		}
	}

	p,
	h2 {
		margin: 0.5em 0;
	}

	.cats {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;

		> a {
			$size: 10em;
			width: $size;
			height: $size;
		}
	}

	.iconlabel {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.25em;
	}

	.iconlabel:hover {
		transition: transform 0.25s;
	}

	a.iconlabel {
		color: inherit;
		text-decoration: none;
	}

	.companies {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2em;
		width: 100%;
		background: #00000055;
		margin-block-start: 3em;
		padding-block: 1em;
		img {
			max-height: 90px;
			max-width: 100%;
		}
	}
</style>
