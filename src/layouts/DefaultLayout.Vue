<template>
  <div class="DefaultLayout">
    <div class="row">
      <bits-header></bits-header>
    </div>
    <div class="row">
      <div class="col-md-4">
        <bits-side-bar></bits-side-bar>
      </div>
      <div class="col-md-8">
        <main class="DefaultLayoutMain">
          <slot/>
        </main>
      </div>
    </div>
    <div class="row">
      <bits-footer></bits-footer>
    </div>
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
