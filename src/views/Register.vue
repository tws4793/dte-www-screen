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
            button.button.is-success.is-large.is-fullwidth(@click='writeTag', :disabled='btndisabled') Bind
      .field
        label(v-show='prompt') Number successfully registered
    .column
    .modal(:class='isactive')
      .modal-content
        p Successfully registered
      button.modal-close.is-large(aria-label='close', @click='show-modal')
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator"
import axios from 'axios'

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
  showModal() {
    console.log(this.prompt)
    return this.prompt ? !this.prompt : this.prompt
  }
  writeTag() {
    axios
      .get(this.$store.state.webApiUrl + '/stone',{
        params: {
          number: this.form.phoneNo,
          stoneId: this.form.beacon
        }
      }).then(res => {
        console.log(res)
        this.showModal()
      })
  }

  get beacons() {
    return this.$store.state.beacons
  }
  get btndisabled() {
    return this.form.phoneNo.length == 0 || this.form.phoneNo.length > 8
  }

  /* set trackerID(value) {
    this.$store.commit("SET_TRACKER_ID", value);
  } */
}
</script>