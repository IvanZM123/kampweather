<template>
     <div>
          <WeatherSheetComponent v-if="weather" />
          <WelcomeSheetComponent v-else />
     </div>
</template>

<script lang="ts">
// Import module
import { Vue, Component } from "vue-property-decorator";

// Import Vuex-Class
import { namespace } from "vuex-class";
const weatherStore = namespace("weather");

// Imports models
import { IWeather } from "@/services/weather/models/weather.models";

// Imports components
import WeatherSheetComponent from "@/components/sheets/weather-sheet.component.vue";
import WelcomeSheetComponent from "@/components/sheets/welcome-sheet.component.vue";

@Component({
     components: {
          WelcomeSheetComponent,
          WeatherSheetComponent
     }
})
export default class HomeBannerComponent extends Vue {
     @weatherStore.State
     weather!: IWeather;
}
</script>
