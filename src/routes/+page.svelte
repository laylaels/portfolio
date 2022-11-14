<script lang="ts">
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
	I'm Layla El-Sekaifi, a {AGE} years-old creative and graphics editor from {LOCATION}.
</p>
