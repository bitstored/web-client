<template>
  <nav class="App__nav" id="header" slot="toolbar">
    <div class="row">
      <div class="col-md-4">
        <img id="logo" src="../assets/logo.png">
      </div>
      <div class="col-md-4">Secure solution to store your data</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BitsHeader"
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
  position: relative;
}
</style>
