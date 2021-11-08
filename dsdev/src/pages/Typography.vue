<template>
  <div class="typography-container nve-page-layout">
    <section></section>
    <section class="headings mt-3xl">
      <div>
        <!-- <h2>SemiBold</h2> -->
        <h3 class="nve-heading-xs">heading xs</h3>
        <h3 class="nve-heading-s">heading s</h3>
        <h3 class="nve-heading-m">heading m</h3>
        <h3 class="nve-heading-l">heading l</h3>
        <h3 class="nve-heading-xl">heading xl</h3>
        <h3 class="nve-heading-2xl">heading 2xl</h3>
        <h3 class="nve-heading-3xl">heading 3xl</h3>
      </div>
      <div>
        <!-- <h2>Bold</h2> -->
        <h3 class="heavy nve-heading-xs">heading xs</h3>
        <h3 class="heavy nve-heading-s">heading s</h3>
        <h3 class="heavy nve-heading-m">heading m</h3>
        <h3 class="heavy nve-heading-l">heading l</h3>
        <h3 class="heavy nve-heading-xl">heading xl</h3>
        <h3 class="heavy nve-heading-2xl">heading 2xl</h3>
        <h3 class="heavy nve-heading-3xl">heading 3xl</h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.typography-container {
  display: flex;
  section {
    display: flex;
    flex-direction: row;
    div:not(:last-child) {
      margin-right: $spacing-3xl;
    }
  }
}
</style>
