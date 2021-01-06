<template>
  <div class="home">
    <HomeBannerComponent />
  </div>
</template>

<script lang="ts">
// Import modules
import { Component, Vue } from 'vue-property-decorator';

// Import component
import HomeBannerComponent from "@/components/banners/home-banner.component.vue";

@Component({
  components: { HomeBannerComponent }
})
export default class Home extends Vue {}
</script>
