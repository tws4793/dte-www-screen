<template lang="pug">
  .columns
    .column
    .column.is-half
      .field
        label.label Enter Phone Number
        .control
          input.input.is-large.is-hovered(type='tel',placeholder='Enter Phone Number',v-model='phoneNo')
        p.help This phone number will be used to locate your child should he/she go missing.
      .field
        .control
          button.button.is-success.is-fullwidth.is-large(@click='search', :disabled='btndisabled') Search
    .column
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Prompt extends Vue {
  phoneNo = ''

  search() {
    this.$store.dispatch('queryTracker', this.phoneNo)
    this.$router.push('/locator')
  }
  get btndisabled() {
    return this.phoneNo.length == 0 || this.phoneNo.length > 8
  }
}
</script>