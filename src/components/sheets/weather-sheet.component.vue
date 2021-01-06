<template>
     <v-sheet>
          <v-img
               gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)"
               src="https://source.unsplash.com/random/1600x900"
               class="align-center px-10 pt-sm-10 pt-lg-0"
               alt="Kampweather banner random"
               style="min-height: 100vh;"
               width="100%"
          >
               <v-layout wrap justify-center>
                    <!-- Current weather -->
                    <v-flex xs12 md6>
                         <WeatherCardComponent
                              v-bind:clime="clime"
                         />
                    </v-flex>
                    <!-- #End current weather -->

                    <!-- Weather forecast -->
                    <v-flex xs12 class="d-none d-md-block">
                         <ForescastSlidesComponent
                              v-bind:forescast="forescast"
                         />
                    </v-flex>
                    <!-- #End weather forecast -->
               </v-layout>
          </v-img>
     </v-sheet>
</template>

<script lang="ts">
// Import module
import { Vue, Component } from "vue-property-decorator";

// Import Vuex-Class
import { namespace } from "vuex-class";
const weatherStore = namespace("weather");

// Imports models
import { IWeather, IWeatherForescast } from "@/services/weather/models/weather.models";

// Imports components
import WeatherCardComponent from "@/components/cards/weather-card.component.vue";
import ForescastSlidesComponent from "@/components/slides-group/forescast-slides.component.vue";

@Component({
     components: {
          WeatherCardComponent,
          ForescastSlidesComponent
     }
})
export default class WeatherSheetComponent extends Vue {
     @weatherStore.State
     private weather!: IWeather;

     @weatherStore.State
     forescast!: IWeatherForescast[];

     get clime() {
          return this.weather || Object.assign({});
     }
}
</script>
