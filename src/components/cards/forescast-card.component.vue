<template>
     <v-card>
          <h1 class="text-center" style="font-size: 50px">{{ forescast.temperature }}%</h1>
          <h4 class="text-center">{{ parseDate(forescast.date) }} - {{ forescast.description }}</h4>
          <div class="d-flex mt-3">
               <v-list-item>
                    <v-list-item-avatar color="info">
                         <v-icon color="white">mdi-water</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                         <v-list-item-title>Humedad</v-list-item-title>
                         <v-list-item-subtitle>{{ forescast.humidity }}%</v-list-item-subtitle>
                    </v-list-item-content>
               </v-list-item>
               <v-list-item>
                    <v-list-item-avatar color="warning">
                         <v-icon color="white">mdi-cloud</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                         <v-list-item-title>Viento</v-list-item-title>
                         <v-list-item-subtitle>{{ forescast.wind }} Km/h</v-list-item-subtitle>
                    </v-list-item-content>
               </v-list-item>
          </div>
     </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// Import helper
import { ParseDate } from "@/helpers/date.helper";
import { IWeatherForescast } from "@/services/weather/models/weather.models";

@Component
export default class ForescastCardComponent extends Vue {
     @Prop() forescast!: IWeatherForescast;

     /**
      * Format the date.
      */
     parseDate(timestamp: string | number) {
          return new ParseDate().parse(timestamp);
     }
}
</script>
