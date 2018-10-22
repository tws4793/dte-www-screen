<template lang="pug">
  .container
    .section
      h1.title Locate My Child
    .section
      Map
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Map from "@/components/Map.vue";
import Prompt from "@/components/Prompt.vue";

@Component({
  components: {
    HelloWorld,
    Prompt,
    Map
  }
})
export default class Locator extends Vue {}
</script>