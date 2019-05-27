<template>
  <nav class="App__nav" id="header" slot="toolbar">
    <div>
      <table style="width: 50%">
        <tr>
          <td>
            <img id="logo" src="../assets/logo.png">
          </td>
          <td>
            <router-link to="/">Home</router-link>
          </td>
          <td>
            <router-link to="/about">About</router-link>
          </td>
        </tr>
        <tr>
          <td>Secure solution to store your data</td>
        </tr>
      </table>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BitsSideBar"
};
</script>

<style >
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  align-content: left;
  background-color: #eeeeee;
}
#logo {
  max-width: 30%;
  height: auto;
  align-self: left;
}
</style>
