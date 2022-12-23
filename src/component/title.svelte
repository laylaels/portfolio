<script lang="ts">
	import { base } from "$app/paths";
</script>

<a href="{base}/">
	<img alt="Logo" src="{base}/logo.svg" />
	<h1>Layla El-Sekaifi</h1>
	<span>Designer</span>
</a>

<style lang="scss">
	a {
		display: grid;
		grid-template: 1fr / 100px 1fr;

		img {
			justify-self: center;
			grid-row: span 2;
			height: 100%;
		}
		span {
			font-size: 1.5em;
			justify-self: center;
		}
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	h1 {
		font-size: 3em;
		text-shadow: 0 0 10px;
		align-self: center;
	}
</style>
