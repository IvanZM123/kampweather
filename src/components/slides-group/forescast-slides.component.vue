<template>
     <v-slide-group
          class="pa-0 ma-0"
          show-arrows
          multiple
     >
          <v-slide-item
               v-for="(item, index) in forescast"
               :key="index"
               class="mx-2"
          >
               <ForescastCardComponent v-bind:forescast="item" />
          </v-slide-item>
     </v-slide-group>
</template>
<script lang="ts">
// Import module
import { Vue, Component, Prop } from "vue-property-decorator";

// Imports modules
import { IWeatherForescast } from "@/services/weather/models/weather.models";

// Import component
import ForescastCardComponent from "@/components/cards/forescast-card.component.vue";

@Component({
     components: { ForescastCardComponent }
})
export default class ForescastSlidesComponent extends Vue {
     @Prop() forescast!: IWeatherForescast[];
}
</script>
