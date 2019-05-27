
<template>
  <default-layout>
    <div class="Home">
      <div class="container">
        <first-page></first-page>
      </div>
    </div>
  </default-layout>
</template>

<script>
import FirstPage from "./pages/FirstPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    FirstPage,
    DefaultLayout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  max-width: 30%;
  height: auto;
}
.catalog {
  display: flex;
}

.catalog {
  flex: 3;
  order: 2;
}
</style>
