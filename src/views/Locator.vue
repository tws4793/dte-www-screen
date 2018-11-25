<template lang="pug">
  .columns
    .column
    .column.is-two-thirds
      h2 Phone Number: #[strong {{ lastSeen.phoneNo }}]
      h2 Your child was last seen at #[strong {{ lastSeen.time }}]
      #map
        img.img(src='../assets/smu-labs-01.jpg')
        .overlay(:style='overlayArea')
      router-link.button.is-success.is-large(to='/') Back
    .column
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Locator extends Vue {
  zones = {
    1: {right: 0, top: 0},
    2: {right: 0, bottom: '7px'},
    3: {left: 0, bottom: '7px'},
    4: {left: 0, top: 0},
  }

  mounted() {
    const qInterval = setInterval(this.$store.dispatch('queryTracker', this.lastSeen.phoneNo), 5000)
  }
  get lastSeen() {
    return this.$store.state.lastSeen
  }
  get overlayArea() {
    return this.zones[this.lastSeen.zone]
  }
}
</script>

<style lang='scss'>
#map {
  position: relative;
}
.overlay {
  position: absolute;
  background: rgba(255, 0, 0, 0.5); /* Red see-through */
  transition: 0.5s ease;
  opacity: 1;
  width: 50%;
  height: 50%;
}
</style>