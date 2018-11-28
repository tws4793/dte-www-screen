<template lang="pug">
  .modal(:class='isactive')
    .modal-background
    .modal-content
      .message(:class='status.class')
        .message-header
          span {{ status.text }}
          button.delete(aria-label='delete', @click='closeModal')
        .message-body
          p {{ status.message }}
          button.button.is-success.is-large.is-fullwidth(@click='closeModal') Close
    button.modal-close.is-large(aria-label='close', @click='closeModal')
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop({ default: false }) prompt!: boolean
  @Prop() status!: object

  closeModal() {
    this.prompt = false
    this.$emit('closeModal')
  }
  get isactive() {
    return this.prompt ? 'is-active' : ''
  }
}
</script>
