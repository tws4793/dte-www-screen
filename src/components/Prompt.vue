<template lang="pug">
  .container
    .columns
      .column
      .column
        .field
          label.label Enter Phone Number
          .control
              input.input(type='text',placeholder='Phone Number',v-model='phoneNo')
        .field
          .control
              router-link.button.is-success.is-fullwidth(to='/locator') Search
      .column
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Prompt extends Vue {
  get phoneNo() {
    return this.$store.state.phoneNumber;
  }
  set phoneNo(value) {
    this.$store.commit("SET_PHONE_NO", value);
  }
}
</script>