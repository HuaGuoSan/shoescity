<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center-nav>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name: "Home",
    components: {
      NavBar
    }
	}
</script>

<style>
  .home-nav {
    background-color: pink;
    color: white;
  }
</style>
