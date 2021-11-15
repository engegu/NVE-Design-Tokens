<template>
  <div class="nve-accordian">
    <button
      id="accordion1id"
      aria-expanded="true"
      class="accordion-trigger"
      aria-controls="sect1"
    >
      <span class="accordion-title">
        Personal Information
        <i class="nve-chevron-down-icon" />
      </span>
    </button>
    <div
      id="sect1"
      role="region"
      aria-labelledby="accordion1id"
      class="accordion-panel"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      lobortis metus. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vehicula
      tortor a dignissim vulputate. Praesent bibendum blandit faucibus. Praesent
      iaculis arcu in diam volutpat ultricies. Sed nec fermentum ante. Aliquam
      volutpat enim ligula, et mollis velit blandit euismod. Donec congue lacus
      nibh, vitae vulputate enim finibus sed. Quisque nec porta dolor. Nullam
      imperdiet, urna vel scelerisque lacinia, arcu nulla hendrerit odio, vel
      dictum est risus et tellus.
    </div>
    <button
      id="accordion2id"
      aria-expanded="false"
      class="accordion-trigger"
      aria-controls="sect2"
    >
      <span class="accordion-title">
        Personal Information
        <i class="nve-chevron-down-icon" />
      </span>
    </button>
    <div
      id="sect1"
      role="region"
      aria-labelledby="accordion1id"
      class="accordion-panel"
      hidden="true"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      lobortis metus. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vehicula
      tortor a dignissim vulputate. Praesent bibendum blandit faucibus. Praesent
      iaculis arcu in diam volutpat ultricies. Sed nec fermentum ante. Aliquam
      volutpat enim ligula, et mollis velit blandit euismod. Donec congue lacus
      nibh, vitae vulputate enim finibus sed. Quisque nec porta dolor. Nullam
      imperdiet, urna vel scelerisque lacinia, arcu nulla hendrerit odio, vel
      dictum est risus et tellus.
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss"></style>
