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
