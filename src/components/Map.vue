<template lang="pug">
  .container
    .section
      h2 Phone Number: {{ phoneNo }}
    .section
      router-link.button.is-success(to='/') Back
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component
export default class Map extends Vue {
  get phoneNo() {
    return this.$store.state.phoneNumber;
  }
}
</script>