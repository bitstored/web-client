<template>
  <div class="DefaultLayout">
    <bits-header></bits-header>

    <bits-side-bar></bits-side-bar>
    <main class="DefaultLayoutMain">
      <slot/>
    </main>

    <bits-footer></bits-footer>
  </div>
</template>

<script>
import BitsHeader from '../components/BitsHeader'
import BitsFooter from '../components/BitsFooter'
import BitsSideBar from '../components/BitsSideBar'

export default {
  name: 'DefaultLayout',
  components: {
    BitsHeader,
    BitsFooter,
    BitsSideBar
  }
}
</script>
