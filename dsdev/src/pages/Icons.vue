<template>
  <div class="icons-page nve-page-layout">
    <h1>Ikoner</h1>
    <section class="mt-xl">
      <h2>Generelt</h2>
      <div>
        <i class="nve-menu-icon" />
        <i class="nve-chevron-down-icon" />
        <i class="nve-trash-icon" />
        <i class="nve-more-vertical-icon" />
        <i class="nve-plus-icon" />
        <i class="nve-calendar-icon" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
section {
  div {
    margin-top: $spacing-xl;
    display: flex;
    align-items: center;
    i:not(:last-child) {
      margin-right: $spacing-l;
    }
  }
}
</style>
