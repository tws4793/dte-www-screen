<template lang="pug">
  .content
    .columns
      .column
      .column.is-two-fifths
        .field
          label.label Tracker ID
          .select.is-fullwidth.is-large
            select(v-model='form.beacon')
              option(v-for='b in beacons') {{ b }}
        .field
          label.label Phone Number
          .control
              input.input.is-large(type='text',placeholder='Enter Phone Number',v-model='form.phoneNo')
          p.help This phone number will be used to locate your child should he/she go missing.
        .field
          .control
            button.button.is-success.is-large.is-fullwidth(@click='writeTag', :disabled='btndisabled') Bind
      .column
    Message(:prompt='prompt', :status='status', @closeModal='closeModal')
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator'
import Message from '@/components/Message.vue'
import axios from 'axios'

@Component({
  components: {
    Message
  }
})
export default class Register extends Vue {
  form = {
    beacon: this.beacons[0],
    phoneNo: ''
  }
  prompt = false
  writeStatus = false

  writeTag() {
    axios
      .get(this.$store.state.webApiUrl + '/stone', {
        params: {
          number: this.form.phoneNo,
          stoneId: this.form.beacon
        }
      }).then(res => {
        this.writeStatus = true
      }).catch(err => {
        this.writeStatus = false
      }).finally(() => {
        this.prompt = !this.prompt
      })
  }
  closeModal() {
    this.prompt = false

    if (this.writeStatus) {
      this.$router.push('/')
    }
  }

  get beacons() {
    return this.$store.state.beacons;
  }
  get btndisabled() {
    return this.form.phoneNo.length == 0 || this.form.phoneNo.length > 8
  }
  get status() {
    return this.writeStatus ? {
      class: 'is-success',
      text: 'Successful',
      message: this.form.phoneNo + ' successfully tagged to ' + this.form.beacon + '!'
    } : {
      class: 'is-danger',
      text: 'Failed',
      message: 'Tagging of ' + this.form.phoneNo + ' to ' + this.form.beacon + ' failed! Please try again!'
    }
  }
}
</script>