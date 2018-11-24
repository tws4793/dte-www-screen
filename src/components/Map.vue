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
import { Component, Prop, Provide, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Map extends Vue {
  mounted() {
    const qInterval = setInterval(this.$store.dispatch('queryTracker', this.lastSeen.phoneNo), 5000)
  }
  get lastSeen() {
    return this.$store.state.lastSeen
  }
  get mapCoordinates() {
    return this.zones[this.lastSeen.zone]
  }
  get overlayArea() {
    const coordinates = this.zones[this.lastSeen.zone]
    return (
      "transform: translate(" + coordinates[0] + "%," + coordinates[1] + "%)"
    );
  }

  zones: any = {
    1: [88, -203.4],
    2: [88, -102.4],
    3: [0, -102.4],
    4: [0, -203.4]
  }
}
</script>

<style lang='scss'>
#map > .overlay {
  width: 35%;
  height: 40%;
}

#map .overlay {
  position: absolute;
  background: rgba(255, 0, 0, 0.5); /* Red see-through */
  transition: 0.5s ease;
  opacity: 1;
  transform: translate(0, -102.4%); /* max 88%, -203.4% */
}
</style>