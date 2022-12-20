<script lang="ts">
	import { base } from "$app/paths";

	export let pages = [
		["About", "#about"],
		["Portfolio", "#portfolio"],
		["Contact", "contact"],
	];
</script>

<div class="root">
	<ul>
		{#each pages as [label, url]}
			<li><a href="{base}/{url}">{label}</a></li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@import "../style/palette.scss";
	.root {
		border: solid $colorFg;
		border-width: 1px 0;
		margin: 0 2em;
		padding: 0.75em 0;
	}

	ul {
		display: flex;
		justify-content: space-around;
		gap: 1em;
		align-items: center;
	}
	@media only screen and (max-width: 480px) {
		.root {
			margin: 0;
		}
		ul {
			flex-direction: column;
			gap: 1em;
		}
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}
</style>
