<template>
  <v-app>
    <!-- Navbar -->
    <NavbarComponent />
    <!-- #End navbar -->
    
    <!-- Content dinamic -->
    <v-main>
      <router-view />
    </v-main>
    <!-- #End content dinamic -->

    <!-- Alert -->
    <AlertSnackbarComponent v-bind:alert="notify" />
    <!-- #End alert -->
  </v-app>
</template>

<script lang="ts">
// Import modules
import { Vue, Component } from "vue-property-decorator";

// Import vuex-class
import { namespace } from "vuex-class";
const alertStore = namespace("alert");

// Imports components
import NavbarComponent from "@/components/navbars/navbar.component.vue";
import AlertSnackbarComponent from "@/components/snackbars/alert-snackbar.component.vue";

@Component({
  components: {
    NavbarComponent,
    AlertSnackbarComponent
  }
})
export default class App extends Vue {
  @alertStore.State
  alert!: any;

  get notify() {
    return Object.assign({}, this.alert);
  }
}
</script>