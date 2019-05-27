<template>
  <div class="DefaultLayout">
    <div>
      <bits-header></bits-header>
    </div>

    <div>
      <main class="DefaultLayoutMain">
        <slot/>
      </main>
    </div>

    <div>
      <bits-footer></bits-footer>
    </div>
  </div>
</template>

<script>
import BitsHeader from "../components/BitsHeader";
import BitsFooter from "../components/BitsFooter";

export default {
  name: "DefaultLayout",
  components: {
    BitsHeader,
    BitsFooter
  }
};
</script>
<style>
footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  align-content: left;
  background-color: #eeeeee;
}
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
  margin-left: 0;
  position: relative;
  align-self: left;
}
</style>
