<script lang="ts" context="module">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import BeforeAfterView from "../../component/beforeAfter.svelte";

  type Tag = string;
  type Item = {
    tags: Tag[];
    data: Image | Video | BeforeAfter;
  };
  type Image = { type: "image"; src: string };
  type Video = { type: "video"; src: string };
  type BeforeAfter = {
    type: "before-after";
    before: string;
    after: string;
  };

  function seqImages(
    dir: string,
    count: number,
    tags: Tag[]
  ): (Item & { data: Image })[] {
    return Array.from({ length: count }, (_, i) => ({
      tags,
      data: { type: "image", src: `${base}/portfolio/${dir}/${i}.webp` },
    }));
  }

  function seqBeforeAfter(
    dir: string,
    count: number,
    tags: Tag[]
  ): (Item & { data: BeforeAfter })[] {
    return Array.from({ length: count }, (_, i) => ({
      tags,
      data: {
        type: "before-after",
        before: `${base}/portfolio/${dir}/${i}b.webp`,
        after: `${base}/portfolio/${dir}/${i}a.webp`,
      },
    }));
  }

  const tagNames: { [tag: string]: string } = {
    retouch: "Retouching",
    image: "Image Editing",
    "3d": "3D",
    "3d_model": "3D Modeling",
    vstage: "Virtual Staging",
    exterior: "Exterior",
    interior: "Interior",
    "image:manipulation": "Image Manipulation",
    tod: "Time of Day Conversion",
    visualisation: "Visualisation",
    illustration: "Illustration",
    art: "Art",
    fine_art: "Fine Art",
    photography: "Photography",
  };

  const data: Item[] = [
    ...seqImages("retouch", 1, ["image", "retouch"]),
    ...seqBeforeAfter("retouch", 12, ["image", "retouch"]),
    ...seqImages("3d_model", 5, ["3d", "3d:model"]),
    ...seqBeforeAfter("vstage", 12, ["3d", "vstaging"]),
    ...seqBeforeAfter("image/exterior", 5, [
      "image",
      "image:manipulation",
      "exterior",
    ]),
    ...seqBeforeAfter("image/interior", 3, [
      "image",
      "image:manipulation",
      "interior",
    ]),
    ...seqBeforeAfter("image/tod", 8, ["image", "image:manipulation", "tod"]),
    ...seqBeforeAfter("image/viz", 1, [
      "image",
      "image:manipulation",
      "visualisation",
    ]),
    ...seqImages("art", 8, ["art", "fine_art"]),
    ...seqImages("illustrations", 8, ["illustration", "art"]),
    ...seqImages("photography", 7, ["art", "photography"]),
    {
      tags: ["illustration", "animation"],
      data: {
        type: "video",
        src: `${base}/portfolio/illustrations/eye.webm`,
      },
    },
    {
      tags: ["illustration", "animation"],
      data: {
        type: "video",
        src: `${base}/portfolio/illustrations/a.webm`,
      },
    },
  ];

  function filterData(filter_tags: Tag[]): Item[] {
    return filter_tags.length
      ? data.filter((item) =>
          filter_tags.every((filter_tag) =>
            item.tags.some((item_tag) => item_tag === filter_tag)
          )
        )
      : data;
  }
</script>

<script lang="ts">
  $: tags = $page.url.searchParams.getAll("tag");
  $: data_filtered = filterData(tags);
  $: tagsDisplay = tags.length
    ? tags.map((tag) => tagNames[tag]).join(", ")
    : "all";
</script>

<div class="root">
  <h2>Portfolio</h2>
  {#if data_filtered.length}
    {tagsDisplay} - {data_filtered.length} items
    {#each data_filtered as item}
      {#if item.data.type === "image"}
        <img src={item.data.src} alt="Item" loading="lazy" />
      {:else if item.data.type === "video"}
        <video src={item.data.src} autoplay muted loop />
      {:else}
        <div class="ba">
          <BeforeAfterView
            before={item.data.before}
            after={item.data.after}
            alt="Item"
            loading="lazy"
          />
        </div>
      {/if}
    {/each}
  {:else}
    no results
  {/if}
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  img,
  .ba,
  video {
    max-width: 800px;
  }
</style>
