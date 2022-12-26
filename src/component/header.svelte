<script>
  import { base } from "$app/paths";
</script>

<div class="root">
  <div class="title">
    <h1>Layla El-Sekaifi</h1>
    <span>Designer</span>
  </div>

  <nav>
    <a href="{base}/">About</a>
    <a href="{base}/portfolio">Portfolio</a>
    <a href="{base}/contact">Contact</a>
  </nav>
</div>

<style lang="scss">
  @import "../style/palette.scss";

  .root {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 2em;
    }
    span {
      font-size: 1.5em;
    }
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1em;

    flex-grow: 1;

    border: solid $colorFg;
    border-width: 1px 0;
    margin: 0 2em;
    padding: 0.75em 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
</style>
