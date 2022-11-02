<script lang="ts">
  import BeforeAfter from "../component/beforeAfter.svelte";
  const software = ["blender", "photoshop", "visualstager"];
</script>

<ul class="software">
  {#each software as software}
    <li><img src="/software/{software}.svg" alt={software} /></li>
  {/each}
</ul>

<h2>Time Conversions</h2>
{#each Array(8) as _, i}
<BeforeAfter
  before="/img/tod/{i + 1}b.jpg"
  after="/img/tod/{i + 1}a.jpg"
  alt="Time of Day Conversion"
/>
{/each}

<h3>Transformations</h3>
<BeforeAfter
  before="/img/xf/front-b.jpg"
  after="/img/xf/front-a.jpg"
  alt="Front"
/>

<h3>Virtual Staging</h3>
{#each Array(7) as _, i}
<BeforeAfter
  before="/img/vstage/{i + 1}b.jpg"
  after="/img/vstage/{i + 1}a.jpg"
  alt="Before & After"
/>
{/each}

<style lang="scss">
  .software {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      height: 3em;
    }
  }
</style>
