// Import module
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

// Imports models
import { IAlert } from "./models/store.models";

@Module({ namespaced: true })
export class AlertStore extends VuexModule {
     alert: IAlert | null = null

     /**
      * Assign the new alert status.
      * @param data 
      */
     @Mutation
     private SET_ALERT(data: IAlert): void {
          this.alert = data;
     }

     /**
      * Modify the status of the alert.
      * @param data 
      */
     @Action
     UPDATE_ALERT(data: IAlert) {
          this.context.commit("SET_ALERT", data);

          // We change to the original state after 5 seconds.
          setTimeout(() => {
               this.context.commit("SET_ALERT", {});
          }, 5000);
     }
}
