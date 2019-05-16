<template>
  <nav class="App__nav" id="sidebar" slot="sidebar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li>Secure solution to store your data</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BitsSideBar'
}
</script>

<style>
  nav {
    white-space: nowrap;
    background: #37474F;
  }
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: sticky;
    top: 0;
  }
  nav ul li a {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
  }
</style>
