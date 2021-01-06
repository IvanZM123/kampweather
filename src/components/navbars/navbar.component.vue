<template>
     <v-toolbar
          color="transparent"
          class="py-2"
          width="100%"
          absolute
          flat
          dark
     >
          <!-- Logo -->
          <img
               src="@/assets/logo.svg"
               alt="Kampweather logo"
               width="35px"
               height="35px"
          >
          <!-- #End logo -->

          <v-spacer/>

          <!-- search bar -->
          <v-text-field
               label="Ejemplo: San Miguel, SV"
               @keyup.enter="search"
               autocomplete="off"
               v-model="keyword"
               solo-inverted
               hide-details
          />
          <!-- #End search bar -->
          <v-spacer />
     </v-toolbar>
</template>

<script lang="ts">
// Import module
import { Vue, Component } from "vue-property-decorator";

// Import vuex-class
import { namespace } from "vuex-class";
const weatherStore = namespace("weather");

@Component
export default class NavbarComponent extends Vue {
     keyword = "";

     /**
      * Responsible for shooting the event in the store, 
      * which brings us the weather around the city.
      */
     @weatherStore.Action
     private GET_WEATHER_BY_CITY!: (keyword: string) => void;

     /**
      * Method executed when the user presses << Enter >>
      */
     search() {
          this.GET_WEATHER_BY_CITY(this.keyword);
     }
}
</script>
