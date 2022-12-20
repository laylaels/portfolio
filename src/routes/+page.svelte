<script lang="ts">
	import { base } from "$app/paths";
	import Brand, * as brand from "../component/brand.svelte";
	import portfolio from "../portfolio";

	const AGE =
		new Date(
			new Date().valueOf() - new Date("2000-07-14").valueOf()
		).getUTCFullYear() - 1970;
	const LOCATION = "West London";
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
			For the past eight years I have been familiarising myself with the <Brand
				brand={brand.adobe}
				naming="Adobe Suite"
			/>, mainly focussing on <Brand brand={brand.photoshop} /> but ranging through
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

		<div class="picture">
			<img src="picture.webp" alt="Layla" />
		</div>
	</article>
	<article id="portfolio">
		<h2>Portfolio</h2>
		<div class="topcats">
			{#each portfolio.categories as topcat}
				<div class="topcat">
					<a class="iconlabel" href="{base}/{topcat.id}">
						<img src="category/{topcat.id}.png" alt={topcat.name} />
						{topcat.name}
					</a>
					<div class="cats">
						{#each topcat.contents as cat}
							<div class="cat">
								<a class="iconlabel" href="{base}/{topcat.id}#{cat.id}">
									<img src="category/{cat.id}.png" alt={cat.name} />
									{cat.name}
								</a>
							</div>
						{/each}
					</div>
				</div>
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

	.picture {
		text-align: center;
		margin-block-start: 2em;
		img {
			height: 250px;
			border-radius: 100%;
		}
	}

	.topcat img {
		$size: 7em;
		width: $size;
		height: $size;
	}
	.cat img {
		$size: 4.5em;
		width: $size;
		height: $size;
	}

	.iconlabel {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.25em;
	}

	.topcats {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	.topcat {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.cats {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
		.cat {
			flex: 1;
		}
	}

	.iconlabel img,
	.iconlabel:hover {
		transition: transform 0.25s;
	}
	.iconlabel:hover img {
		transform: scale(1.1);
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
