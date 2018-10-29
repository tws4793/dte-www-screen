<template lang="pug">
  section#app
    .columns.is-gapless
      .column
      .column.is-two-thirds
        section.hero.is-light.is-fullheight
          .hero-head
            .tabs.is-large.is-centered
              ul
                router-link(tag='li', exact-active-class='is-active', to='/')
                  a Home
                router-link(tag='li', exact-active-class='is-active', to='/register')
                  a Register
                router-link(tag='li', exact-active-class='is-active', to='/about')
                  a About
            h1.title Locate My Child
          .hero-body
            .container
              router-view
      .column
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #76b8e8;
  height: -webkit-fill-available;
}
.tabs {
  background-color: #fbc968 !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
