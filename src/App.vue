
<template>
  <vue-ads-layout
    :full-bar="false"
  >
    <default-layout>
      <div class="Home">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </default-layout>
  </vue-ads-layout>
</template>

<script>
import { VueAdsLayout } from 'vue-ads-layout'
import FirstPage from './pages/FirstPage'
import About from './pages/About'
import { mapState, mapActions } from 'vuex'
import DefaultLayout from './layouts/DefaultLayout'

export default {
  name: 'App',
  components: {
    FirstPage,
    DefaultLayout,
    About,
    VueAdsLayout
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
      // clear alert on location change
      this.clearAlert()
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.catalog {
  display: flex;
}

.catalog {
  flex: 3;
  order: 2;
}
</style>
