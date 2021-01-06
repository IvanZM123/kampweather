<template>
     <v-sheet color="transparent">
          <v-img
               gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)"
               alt="Kampweather banner presentation"
               class="text-center white--text"
               src="@/assets/banner.jpg"
               height="100vh"
               width="100%"
          >
               <div class="mt-10">
                    <v-layout wrap align-center style="height: 100vh">
                         <v-flex xs12 md6 class="px-10">
                              <h1 class="title-banner">
                                   <strong>Kampweather, conoce el tiempo del mundo con solo dar un clic.</strong>
                              </h1>
                              <v-btn
                                   @click="getMyUbication"
                                   color="light"
                                   class="my-3"
                                   rounded
                              >Obtener mi ubicacion</v-btn>
                         </v-flex>

                         <v-flex xs12 md6 class="d-none d-md-block">
                              <img src="@/assets/logo.svg" width="60%">
                         </v-flex>
                    </v-layout>
               </div>
          </v-img>
     </v-sheet>
</template>

<script lang="ts">
// Import module
import { Vue, Component } from "vue-property-decorator";

// Imports models
import { IWeatherParams } from "@/store/modules/models/store.models";

// Imports vuex-class
import { namespace } from "vuex-class";
const weatherStore = namespace("weather");

@Component
export default class WelcomeSheetComponent extends Vue {
     /**
      * Responsible for shooting the event in the store, 
      * which brings us the weather by latitude and longitude.
      */
     @weatherStore.Action
     private GET_WEATHER_BY_LAT_AND_LON!: (data: IWeatherParams) => void;

     /**
      * We get the weather from our location.
     */
     getMyUbication(): void {
          navigator.geolocation.getCurrentPosition(
               position => {
                    const { latitude, longitude } = position.coords;
                    this.GET_WEATHER_BY_LAT_AND_LON({ latitude, longitude });
               },
               failure => console.error(failure)
          );
     }
}
</script>

<style scoped>
     .title-banner {
          font-size: 20px;
     }

     @media screen and (min-width: 640px) {
          .title-banner {
               font-size: 40px;
          }
     }

     @media screen and (min-width: 1200px) {
          .title-banner {
               font-size: 50px;
          }
     }
</style>
