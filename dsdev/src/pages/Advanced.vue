<template>
  <div class="advanced-page nve-page-layout">
    <h1>Avanserte komponenter</h1>
    <section class="mt-xl">
      <div>
        <h2>Accordian</h2>
        <Accordan />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Accordan from "../components/Accordian.vue";

export default {
  components: { Accordan },
};
</script>

<style lang="scss">
.advanced-page {
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
