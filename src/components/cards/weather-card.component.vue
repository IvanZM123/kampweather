<template>
     <v-card flat dark color="transparent" class="text-center">
          <div>
               <h1 class="text-center white--text" style="font-weight: 100">{{ clime.city }}, {{ clime.country }}</h1>
               <h1 style="font-size: 100px">{{ clime.temperature }}°</h1>
               <h1 style="font-weight: 300">{{ clime.clime }}</h1>
          </div>
          <div class="d-flex align-center justify-center py-5">
               <div class="px-10 text-center">
                    <h2 style="font-weight: 100">Humedad</h2>
                    <h3>{{ clime.humidity }}%</h3>
               </div>
               <v-divider vertical class="mx-5" />
               <div class="px-10 text-center">
                    <h2 style="font-weight: 100">Viento</h2>
                    <h3>{{ clime.wind }} Km/h</h3>
               </div>
          </div>
     </v-card>
</template>

<script lang="ts">
// Import model
import { Vue, Component, Prop } from "vue-property-decorator";

// Import models
import { IWeather } from "@/services/weather/models/weather.models";

@Component
export default class WeatherCardComponent extends Vue {
     @Prop() clime!: IWeather;
}
</script>
