<template lang="pug">
  #app
    nav.navbar.is-success(role='navigation', aria-label='main navigation')
      .navbar-brand
        router-link.navbar-item(to='/')
          img(src='https://bulma.io/images/bulma-logo.png', alt='Bulma: a modern CSS framework based on Flexbox', width='112', height='28')
        a.navbar-burger(role='button', aria-label='menu', aria-expanded='false')
          span(aria-hidden='true')
          span(aria-hidden='true')
          span(aria-hidden='true')
      .navbar-menu
        .navbar-start
          router-link.navbar-item(active-class='is-active', to='/') Home
          router-link.navbar-item(active-class='is-active', to='/about') About
          router-link.navbar-item(active-class='is-active', to='/vue') Vue
    section.section
      router-view
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
