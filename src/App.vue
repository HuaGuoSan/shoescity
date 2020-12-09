<template>
  <div id="nav">
    <tab-bar-show></tab-bar-show>
  </div>
</template>

<script>
  import TabBarShow from 'components/content/tabbar/TabBarShow.vue'

  export default {
    name: 'app',
    components: {
      TabBarShow
    }
  }
</script>

<style>
	@import url("assets/css/base.css");
</style>
