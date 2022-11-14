<script>
	import { base } from "$app/paths";
</script>

<h2>Creative</h2>
<h3>Art</h3>
{#each ["lj", "c", "i", "f", "a", "b"] as image}
	<img src="{base}/img/creative/art/{image}.webp" alt="Artwork" />
{/each}

<h3>Character Design</h3>
{#each Array(6) as _, i}
	<img src="{base}/img/creative/character/{i}.webp" alt="Character" />
{/each}

<style lang="scss">
	img {
		max-width: 100%;
	}
</style>
