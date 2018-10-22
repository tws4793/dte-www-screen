<template lang="pug">
  .home
    img(alt='Vue logo',src='../assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Prompt from '@/components/Prompt.vue'

@Component({
    components: {
        Prompt,
        HelloWorld
    },
})

export default class Test extends Vue {}
</script>
