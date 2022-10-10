<div class="root">
  <ul>
    <li><a href="/real-estate">Real Estate</a></li>
    <li><a href={"#"}>Video</a></li>
    <li><a href={"#"}>Creative</a></li>
    <li><a href={"#"}>About</a></li>
    <li><a href={"#"}>Contact</a></li>
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
