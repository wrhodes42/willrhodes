<template>
  <site-header></site-header>
  <router-view />
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
export default({
  components: {SiteHeader}
})
</script>
 