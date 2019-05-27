<template>
  <vue-ads-bar id="footer" slot="footer" :footer="true">
    <div>
      <h1>footer</h1>
    </div>
  </vue-ads-bar>
</template>

<script>
export default {
  name: "BitsFooter"
};
</script>

<style>
#footer {
  padding: 0 0 10px 0;
  margin: 0;
  position: absolute;
  width: 100%;
  background-color: #eeeeee;
}
</style>
