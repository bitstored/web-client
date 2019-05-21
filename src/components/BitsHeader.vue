<template>
  <header slot="toolbar">
    <div class="header-banner" id="header-fixed">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/"><img id="logo-fixed" src="../assets/logo.png" alt="BitStored logo"></router-link>
        </div>
        <div class="col-md-6" id="slogan">
          <h2>A secure solution for your data</h2>
        </div>
        <div class="col-md-2" id="login-buttons">
          <router-link to="/login">Login</router-link>|
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
    <div class="header-nav" id="header-nav">
      <div class="header-title" id="header-title">
        <img id="logo" src="../assets/logo.png" alt="BitStored logo">
      </div>
    </div>
  </header>
</template>

<script>
document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 60) {
    document.getElementById('header-nav').classList.add('fixed-header')
    document.getElementById('header-title').classList.add('visible-title')
    // document.getElementById('sidebar').style.top = '60px'
  } else {
    document.getElementById('header-nav').classList.remove('fixed-header')
    document.getElementById('header-title').classList.remove('visible-title')
    // document.getElementById('sidebar').style.top = '0'
  }
})

export default {
  name: 'BitsHeader'
}
</script>

<style>
header {
  width: 100%;
}
.header-banner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  align-content: flex-start;
  background-color: #eeeeee;
  height: 65px;
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

#slogan {
  color: #555555;
  align-self: center;
}
#logo {
  max-width: 300px;
  height: auto;
  align-self: flex-start;
  position: relative;
}
#logo-fixed {
  max-width: 300px;
  height: auto;
  align-self: flex-start;
  left: 4%;
  top: 6%;
  position: relative;
}
h3 {
  align-content: center;
  color: #555555;
}
#login-buttons {
  align-self: center;
  color: #555555;
}
</style>
