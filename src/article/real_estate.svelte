<script lang="ts">
  import BeforeAfter from "../component/beforeAfter.svelte";

  const software = ["blender", "photoshop", "visualstager"];

  const conversions = [
    {
      kind: "Night",
      images: [
        {
          before:
            "https://static.wixstatic.com/media/dc5a07_c73dd6d8313d48d88b57e6fc1d7d72a2~mv2.jpg/v1/fill/w_163,h_109,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC01019.jpg",
          after:
            "https://static.wixstatic.com/media/dc5a07_dbb7a53f3754451baa0839ec563b6d41~mv2.jpg/v1/fill/w_422,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/balcony%20shotfinal.jpg",
        },
        {
          before:
            "https://static.wixstatic.com/media/dc5a07_56828a5708994f33b4f2b5e227fab0fc~mv2.jpg/v1/fill/w_163,h_109,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC01059.jpg",
          after:
            "https://static.wixstatic.com/media/dc5a07_ae8a1de38124454d8d55964f2f0e6424~mv2.jpg/v1/fill/w_423,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC01059%20copy.jpg",
        },
      ],
    },
    {
      kind: "Dusk",
      images: [
        {
          before:
            "https://static.wixstatic.com/media/dc5a07_45e0ea30ee494139997dd608041cc868~mv2.jpg/v1/fill/w_259,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/INTERIOR%203%20-.jpg",
          after:
            "https://static.wixstatic.com/media/dc5a07_f2d80c5d0b9f4f3eafee80f55873efc0~mv2.jpg/v1/fill/w_439,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/INTERIOR%203x2%20copy%20(1).jpg",
        },
        {
          before:
            "https://static.wixstatic.com/media/dc5a07_0f6568d962504dd79bcd58e19e00f730~mv2.jpg/v1/fill/w_218,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B63%20Chelsea%20Island%202.jpg",
          after:
            "https://static.wixstatic.com/media/dc5a07_c2c7072701ee40359fc0a010e32e5976~mv2.jpg/v1/fill/w_423,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B63%20Chelsea%20Island%202%20copy.jpg",
        },
      ],
    },
  ];

  const cars = [
    {
      before:
        "https://static.wixstatic.com/media/dc5a07_31fc27d1f9774b5294b7e49321964748~mv2.jpg/v1/fill/w_370,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC01827%2011.jpg",
      after:
        "https://static.wixstatic.com/media/dc5a07_92a4656972b843dea262a8611adb5e15~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC01827%2011%20copy%20(1).jpg",
    },
    {
      before:
        "https://static.wixstatic.com/media/dc5a07_313ec1473c984f2baa91b1b5ac916f13~mv2.jpg/v1/fill/w_370,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_7968.jpg",
      after:
        "https://static.wixstatic.com/media/dc5a07_db630ddd53f74a4087382ae92f4692c6~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_7968%20car%20removal%20copy.jpg",
    },
    {
      before:
        "https://static.wixstatic.com/media/dc5a07_b9b3f1feda464170bc286105e3b93c52~mv2.jpg/v1/fill/w_370,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Holland%20Park.jpg",
      after:
        "https://static.wixstatic.com/media/dc5a07_80ba55adbea34d5baf846f9a2a864510~mv2.jpg/v1/fill/w_559,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Holland%20Park%20copy%201.jpg",
    },
  ];
</script>

<ul class="software">
  {#each software as software}
    <li><img src="/software/{software}.svg" alt={software} /></li>
  {/each}
</ul>

<h2>Time Conversions</h2>

{#each conversions as { kind, images }}
  <h3>{kind}</h3>
  {#each images as { before, after }}
    <BeforeAfter {before} {after} alt="{kind} Conversion" />
  {/each}
{/each}

<h3>Transformations</h3>
<BeforeAfter
  before="https://static.wixstatic.com/media/dc5a07_cdb42127d25c4f309bfd00007fa00d84~mv2.jpg/v1/fill/w_445,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3-IMG_0824.jpg"
  after="https://static.wixstatic.com/media/dc5a07_d07c020ec9ce436c9b530cac7dae3990~mv2.jpg/v1/fill/w_465,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LAYLA%20FINAL.jpg"
  alt="Transformation"
/>

<h3>Removals</h3>
{#each cars as { before, after }}
  <BeforeAfter {before} {after} alt="Cars Removal" />
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
