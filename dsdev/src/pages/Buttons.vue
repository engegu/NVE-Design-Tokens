<template>
  <div class="buttons-page nve-page-layout">
    <h1>Knapper</h1>
    <section class="mt-l">
      <div>
        <h2>Solid knapper</h2>
        <button class="nve-button">Knapp</button>
        <button class="nve-button small-button">Knapp</button>
        <button class="nve-button loading-buttonStyle small-button">
          Knapp
        </button>
      </div>
      <div>
        <h2>Outline knapper</h2>
        <button class="nve-button outline-buttonStyle">Knapp</button>
        <button class="nve-button outline-buttonStyle small-button">
          Knapp
        </button>
        <button
          class="
            nve-button
            outline-buttonStyle
            loading-buttonStyle
            small-button
          "
        >
          Knapp
        </button>
      </div>
      <div>
        <h2>Ghost knapper</h2>
        <button class="nve-button ghost-buttonStyle">Knapp</button>
        <button class="nve-button ghost-buttonStyle small-button">Knapp</button>
        <button
          class="nve-button ghost-buttonStyle loading-buttonStyle small-button"
        >
          Knapp
        </button>
      </div>
    </section>
    <section class="contrast-section">
      <div>
        <h2>Kontraster</h2>
        <button class="nve-button">Knapp</button>
      </div>
    </section>
    <section>
      <div>
        <h2>Overflow</h2>
        <button class="nve-overflow-button"></button>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.buttons-page {
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

.contrast-section div {
  padding: 40px;
  margin-top: $spacing-xl;
  background-color: $colors-brand-500;
}
</style>
