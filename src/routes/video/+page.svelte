<script lang="ts">
	const embedded = [
		{
			title: "Jackson Stops",
			src: "https://drive.google.com/file/d/177lBfnaL-uAaw27WH5TUjXvkEpb_9rPJ/preview",
		},
		{
			title: "The Big Draw",
			src: "https://drive.google.com/file/d/191L87hnBaCSW1VRxkS9lkh0xbxA2hQYo/preview",
		},
		{
			title: "Checkmate Trailer",
			src: "https://drive.google.com/file/d/1IWZnBYnSciK3KBU7ao77ch4S9G-TwBRf/preview",
		},
	];
</script>

<h2>Video</h2>
{#each embedded as { title, src }}
	<h3>{title}</h3>
	<iframe {title} {src} width="640" height="480" />
{/each}
