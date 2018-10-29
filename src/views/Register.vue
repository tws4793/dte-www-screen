<template lang="pug">
  .columns
    .column
    .column.is-half
      .field
        label.label Tracker ID
        .select.is-fullwidth.is-large
          select(v-model='form.beacon')
            option(v-for='b in beacons') {{ b }}
      .field
        label.label Phone Number
        .control
            input.input.is-large(type='text',placeholder='Enter Phone Number',v-model='form.phoneNo')
      .field
        .control
            button.button.is-success.is-large.is-fullwidth(@click='show-modal') Bind
    .column
    .modal(:class='isactive')
      .modal-content
        p Successfully registered
      button.modal-close.is-large(aria-label='close', @click='show-modal')
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  form = {
    beacon: this.beacons[0],
    phoneNo: ''
  }
  prompt = false

  isactive() {
    return this.prompt ? 'is-active' : ''
  }
  get beacons() {
    return this.$store.state.beacons
  }

  showModal() {
    console.log(this.prompt)
    return this.prompt ? !this.prompt : this.prompt
  }

  /* set trackerID(value) {
    this.$store.commit("SET_TRACKER_ID", value);
  } */
}
</script>