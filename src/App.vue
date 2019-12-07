<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="css">
  @import './assets/libs/css/bootstrap-rtl.min.css';
  @import './assets/libs/css/bootstrap-float-label.min.css';
  @import './assets/libs/css/font-awesome/fontawesome.min.css';
  @import './assets/libs/css/font-awesome/fontawesome.min.css';
  @import './assets/css/main.css';
</style>
<style lang="css">
  @font-face {
    font-family: "Iransans_Bold";
    font-style: normal;
    font-weight: 300;
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Bold.eot");
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Bold.woff2") format("woff2"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Bold.woff") format("woff"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Iransans';
    font-style: normal;
    font-weight: bold;
    src: url("./assets/fonts/IRANSansWeb(FaNum).eot");
    src: url("./assets/fonts/IRANSansWeb(FaNum).woff2") format("woff2"),
    url("./assets/fonts/IRANSansWeb(FaNum).woff") format("woff"),
    url("./assets/fonts/IRANSansWeb(FaNum).ttf") format("truetype");
  }
  @font-face {
    font-family: "Iransans_Medium";
    font-style: normal;
    font-weight: 500;
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Medium.eot");
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Medium.woff2") format("woff2"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Medium.woff") format("woff"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Iransans_Light";
    font-style: normal;
    font-weight: 500;
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Light.eot");
    src: url("./assets/fonts/IRANSansWeb(FaNum)_Light.woff2") format("woff2"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Light.woff") format("woff"),
    url("./assets/fonts/IRANSansWeb(FaNum)_Light.ttf") format("truetype");
  }
</style>
