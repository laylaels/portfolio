<script>
	import { base } from "$app/paths";
</script>

<h2>Creative</h2>
<h3>Art</h3>
{#each ["lj", "c", "i", "f", "a", "b"] as image}
	<img src="{base}/img/creative/art/{image}.webp" alt="Artwork" />
{/each}
