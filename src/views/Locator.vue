<template lang="pug">
  .content
    .columns
      .column
      .column.is-four-fifths
        .tile.is-ancestor
          .tile.is-4.is-vertical.is-parent
            .tile.is-child
              router-link.button.is-success.is-large.is-fullwidth(to='/') Back
            .tile.is-child.desc
              p.heading Phone Number
              p.title #[strong {{ lastSeen.phoneNo }}]
            .tile-is-child.desc
              p.heading Last updated
              p.title #[strong {{ lastSeen.time }}]
            .tile.is-child.is-hidden-mobile
            .tile-is-child.is-hidden-mobile
          .tile.is-parent
            .tile.is-child.box
              p.heading Your child was last seen here
              #map
                img.img(src='../assets/smu-labs-01.jpg')
                .overlay(:style='overlayArea')
      .column
    Message(:prompt='prompt', :status='errMsg', @closeModal='returnToHome')
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
export default class Locator extends Vue {
  zones = {
    1: {right: 0, top: 0},
    2: {right: 0, bottom: '7px'},
    3: {left: 0, bottom: '7px'},
    4: {left: 0, top: 0},
  }
  lastSeen = {
    phoneNo: '91234567',
    zone: 1,
    time: '2018-11-28 07:57:28.0'
  }
  prompt = false

  mounted() {
    this.lastSeen.phoneNo = this.$route.params.phoneNo
    setInterval(this.pollLocation, 5000)
  }
  pollLocation() {
    axios
      .get(this.$store.state.webApiUrl + '/tracker', {
        params: {
          number: this.lastSeen.phoneNo
        }
      }).then(res => {
        const zone = res.data.id.charAt(1)
        const time = res.data.lastSeen
        const notFound = (zone.length == 0 && time.length == 0)

        if(notFound) {
          this.prompt = true
        } else {
          this.prompt = false
          this.lastSeen = {
            phoneNo: this.lastSeen.phoneNo,
            zone: zone,
            time: time
          }
        }
      }).catch(err => {
        this.prompt = true
        this.lastSeen = {
          phoneNo: this.lastSeen.phoneNo,
          zone: 2,
          time: '2018-11-28 07:57:28.0'
        }
      })
  }
  returnToHome() {
    this.$router.push('/')
  }
  get errMsg() {
    return {
      class: 'is-danger',
      text: 'Not Found',
      message: 'Phone number ' + this.lastSeen.phoneNo + ' was not found! Please try again!'
    }
  }
  get overlayArea() {
    return this.zones[this.lastSeen.zone]
  }
}
</script>

<style lang='scss'>
#map {
  position: relative;
}
.desc p {
  color:black !important;
}
.overlay {
  position: absolute;
  background: rgba(255, 0, 0, 0.5); /* Red see-through */
  transition: 0.5s ease;
  opacity: 1;
  width: 50%;
  height: 50%;
}
</style>