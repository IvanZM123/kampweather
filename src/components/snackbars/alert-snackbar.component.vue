<template>
     <v-snackbar
          v-model="alert.status"
          :color="alert.status"
          timeout="-1"
     >
          <v-icon class="mr-2">{{ alert.icon }}</v-icon>
          {{ alert.text }}
     </v-snackbar>
</template>

<script lang="ts">
// Import modules
import { Vue, Component, Prop } from "vue-property-decorator";

// Imports vuex-class
import { namespace } from "vuex-class";
const alertStore = namespace("alert");

@Component
export default class AlertSnackbarComponent extends Vue {
     @Prop() alert!: any;
}
</script>
