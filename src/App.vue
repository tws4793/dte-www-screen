<template lang="pug">
  section#app
    section.hero.is-info.is-fullheight
      .hero-head.is-centered
        h1.title Locate My Child
        .tabs.is-large.is-centered
          ul
            router-link(tag='li', exact-active-class='is-active', to='/')
              a Home
            router-link(tag='li', exact-active-class='is-active', to='/register')
              a Register
            router-link(tag='li', exact-active-class='is-active', to='/about')
              a About
      .hero-body
        .container
          router-view
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // background-color: #76b8e8;
  height: -webkit-fill-available;
}
.tabs {
  // background-color: #fbc968 !important;
}
.hero-head h1.title {
  margin-top: 1.5rem;
}
.hero-body {
  color: black;
  background-color: white;
  align-items: flex-start !important;
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
