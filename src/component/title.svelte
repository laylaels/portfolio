<script lang="ts">
  import { base } from "$app/paths";
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

<a href="{base}/">
  <img bind:this={icon} alt="Icon" src="/layla.svg" />
  <h1>Layla El-Sekaifi</h1>
  <span>Graphics Editor</span>
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
      font-family: Coquette Light, sans-serif;
      font-size: 1.5em;
      justify-self: center;
    }
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img {
    vertical-align: middle;
    visibility: hidden;
    transform-origin: 50% 0;
  }

  h1 {
    font-family: Coquette Light, sans-serif;
    font-size: 3em;
    text-shadow: 0 0 10px;
  }
</style>
