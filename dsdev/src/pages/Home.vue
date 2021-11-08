<template>
  <div class="home-page nve-page-layout">
    <h1>Hjem</h1>
    <section class="mt-xl">
      <div>
        <h2>Tooltip</h2>
        <span class="nve-tooltip">
          Noe tekst her
          <span class="nve-tooltiptext">Tooltip</span>
        </span>
      </div>
    </section>
    <!-- <section class="headings mt-3xl">
      <div>
        <h3 class="nve-heading-xs">heading xs</h3>
        <h3 class="nve-heading-s">heading s</h3>
        <h3 class="nve-heading-m">heading m</h3>
        <h3 class="nve-heading-l">heading l</h3>
        <h3 class="nve-heading-xl">heading xl</h3>
        <h3 class="nve-heading-2xl">heading 2xl</h3>
        <h3 class="nve-heading-3xl">heading 3xl</h3>
      </div>
      <div>
        <h3 class="heavy nve-heading-xs">heading xs</h3>
        <h3 class="heavy nve-heading-s">heading s</h3>
        <h3 class="heavy nve-heading-m">heading m</h3>
        <h3 class="heavy nve-heading-l">heading l</h3>
        <h3 class="heavy nve-heading-xl">heading xl</h3>
        <h3 class="heavy nve-heading-2xl">heading 2xl</h3>
        <h3 class="heavy nve-heading-3xl">heading 3xl</h3>
      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.home-page {
  padding: 0 $spacing-xl;
  section {
    display: flex;
    div {
      h2 {
        margin-bottom: $spacing-xl;
      }
      margin-right: $spacing-2xl;
      button:not(:last-child) {
        margin-bottom: $spacing-xl;
      }
    }
  }
}
.headings {
  display: flex;
  flex-direction: column;
}
</style>
