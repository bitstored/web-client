<template>
  <header slot="toolbar">
    <div class="header-banner">
      <div class="row">
        <div class="col-md-4">
          <img id="logo" src="../assets/logo.png" alt="BitStored logo">
        </div>
        <div class="col-md-4">Secure solution to store your data</div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="header-nav" id="header-nav">
      <div class="header-title" id="header-title">BitStored</div>
    </div>
  </header>

</template>

<script>
document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 100) {
    document.getElementById('header-nav').classList.add('fixed-header')
    document.getElementById('header-title').classList.add('visible-title')
  } else {
    document.getElementById('header-nav').classList.remove('fixed-header')
    document.getElementById('header-title').classList.remove('visible-title')
  }
})

export default {
  name: 'BitsHeader'
}
</script>

<style>
.header-banner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  align-content: flex-start;
  background-color: #eeeeee;
  height: 100px;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header-nav {
  position: fixed;
  background: #eeeeee;
  height: 60px;
}
.header-nav div {
  font-size: 2rem;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 2%;
  visibility: hidden;
}
.visible-title {
  visibility: visible !important;
}
#logo {
  max-width: 300px;
  height: auto;
  align-self: flex-start;
  position: relative;
}
</style>
