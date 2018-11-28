<template lang="pug">
  .content
    .columns
      .column
      .column.is-two-fifths
        Prompt
      .column
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Prompt from '@/components/Prompt.vue'

@Component({
  components: {
    Prompt
  },
})
export default class Home extends Vue {}
</script>
