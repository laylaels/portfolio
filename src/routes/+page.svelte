<script lang="ts">
	import Brand, * as brand from "../component/brand.svelte";

	const AGE =
		new Date(
			new Date().valueOf() - new Date("2000-07-14").valueOf()
		).getUTCFullYear() - 1970;
	const LOCATION = "West London";
</script>

<svelte:head>
	<title>Layla El-Sekaifi</title>
</svelte:head>

<h2>Hi!</h2>
<p>
	I'm Layla El-Sekaifi, a {AGE} years-old multidisciplinary artist, retoucher and
	video editor based in {LOCATION}.
</p>
<p>
	For the past eight years I have been familiarising myself with the <Brand
		brand={brand.adobe}
		naming="Adobe Suite"
	/>, mainly focussing on <Brand brand={brand.photoshop} /> but ranging through to
	<Brand brand={brand.lightroom} />,
	<Brand brand={brand.illustrator} />,
	<Brand brand={brand.premiere} />,
	<Brand brand={brand.after_effects} />, and <Brand brand={brand.indesign} />.
</p>
<p>
	I have been working daily with <Brand brand={brand.lightroom} />
	and <Brand brand={brand.photoshop} /> since 2020 as a retoucher and designer for
	real estate clients bringing their properties to life and preparing their marketing
	materials.
</p>
<p>
	As of recent I have taken an interest in 3D, familiarising myself with the
	software, concepts and creating models in my free time.
</p>
<p>
	When I’m not working you can find me drawing, discovering new things,
	swimming, and having a good time with friends or family :)
</p>
