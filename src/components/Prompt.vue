<template lang="pug">
  .columns
    .column
    .column.is-half
      .field
        .control
          input.input.is-large.is-hovered(type='tel',placeholder='Enter Phone Number',v-model='phoneNo')
      .field
        .control
          router-link.button.is-success.is-fullwidth.is-large(tag='button', to='/locator', :disabled='btndisabled') Search
    .column
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Prompt extends Vue {
  get phoneNo() {
    return this.$store.state.phoneNo
  }
  set phoneNo(value) {
    this.$store.commit("SET_PHONE_NO", value)
  }
  get btndisabled() {
    return this.phoneNo.length == 0 || this.phoneNo.length > 8
  }
}
</script>