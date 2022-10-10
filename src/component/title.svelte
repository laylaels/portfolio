<script lang="ts">
  import { onMount } from "svelte";

  let icon: HTMLImageElement | null;

  function animateIcon() {
    const duration = 3000;
    icon!.style.visibility = "visible";
    icon!.animate(
      [
        { transform: "scale(5) rotate(100deg)", easing: "ease-in-out" },
        { transform: "scale(0.8) rotate(-10deg)", easing: "ease-in-out" },
        { transform: "rotate(0deg)", easing: "ease-in" },
      ],
      { duration, fill: "forwards" }
    );
  }

  onMount(() => {
    if (icon!.complete) animateIcon();
    else icon!.onload = animateIcon;
  });
</script>

<a href="/">
  <h1>
    <img bind:this={icon} alt="Icon" src="/layla.svg" />
    Layla El-Sekaifi
  </h1>
</a>

<style lang="scss">
  a {
    color: inherit;
    text-decoration: inherit;
  }

  h1 {
    font-family: Coquette Light, sans-serif;
    font-size: 3em;
    img {
      vertical-align: middle;
      height: 2em;
      visibility: hidden;
      transform-origin: 50% 0;
    }
    text-shadow: 0 0 10px;
  }
</style>
