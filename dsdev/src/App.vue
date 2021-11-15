<template>
  <header class="nve-header">
    <div>
      <h1 class="nve-header-logo">
        <router-link class="nve-logo-background" to="/">
          <img
            class="nve-icon-sizing-medium nve-icon-colors-white"
            src="./nveDesignSystem/assets/icons/nve/nveLogo.svg"
          />
        </router-link>
        <span>Design system</span>
      </h1>
      <div class="ml-xl flex">
        <router-link to="/buttons" class="nve-header-links">
          Knapper
        </router-link>
        <router-link to="/typography" class="nve-header-links">
          Typography
        </router-link>
        <router-link to="/advanced" class="nve-header-links">
          Avansert
        </router-link>
        <router-link to="/icons" class="nve-header-links">Ikoner</router-link>
      </div>
    </div>
    <div></div>
  </header>
  <main class="main-container">
    <router-view />
  </main>
</template>

<style lang="scss">
.main-container {
  margin-top: $nve-header-height + $spacing-xl;
}
.nve-header-links:not(:last-child) {
  margin-right: $spacing-l;
}
</style>
