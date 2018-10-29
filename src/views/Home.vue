<template lang="pug">
  Prompt
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Prompt from '@/components/Prompt.vue'

@Component({
  components: {
    HelloWorld,
    Prompt
  },
})
export default class Home extends Vue {}
</script>
