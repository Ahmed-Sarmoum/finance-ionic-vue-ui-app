<template>
  <ion-page>
    <ion-content color="secondary">
      <div align="center">
        <ion-avatar>
          <img src="@/assets/imgs/img.png" />
        </ion-avatar>
        <ion-label color="primary">Nikhil Agarwal</ion-label>
      </div>
      <ion-list>
        <ion-item lines="full">
          <ion-icon color="primary"  slot="start" :icon="notificationsOutline"></ion-icon>
          <ion-label color="primary">
            Push Notifications
          </ion-label>
          <ion-toggle slot="end" aria-label="enable" v-model="reactiveState.pushNotificationsEnabled"></ion-toggle>
        </ion-item>
        <ion-item lines="full">
          <ion-icon color="primary"  slot="start" :icon="fingerPrintOutline"></ion-icon>
          <ion-label color="primary">
            Touch ID Lock
          </ion-label>
          <ion-toggle slot="end"  aria-label="enable" v-model="reactiveState.touchIDEnabled"></ion-toggle>
        </ion-item>
        <ion-item lines="full" detail>
          <ion-icon color="primary"  slot="start" :icon="keyOutline"></ion-icon>
          <ion-label color="primary">
            Change Password
          </ion-label>
        </ion-item>
        <ion-item lines="full" detail>
          <ion-icon color="primary"  slot="start" :icon="helpBuoyOutline"></ion-icon>
          <ion-label color="primary">
            Get Support
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-button fill="clear" class="ion-margin" color="danger" @click="logout">
        <ion-icon color="danger"  :icon="logOut" slot="start"></ion-icon> 
            Logout
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { notificationsOutline, logOut, fingerPrintOutline, helpBuoyOutline, keyOutline } from "ionicons/icons";
import { reactive } from "vue"
import { IonToggle } from "@ionic/vue";
const reactiveState= reactive({
    pushNotificationsEnabled: true,
    touchIDEnabled: true,
})
const logout = () => {
    // Add the logic to handle user logout here
}
</script>

<style scoped lang="scss">

ion-label {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    margin-top: 0.6rem;
}
div {
    margin-top: 2rem;
}
ion-avatar {
    border-radius: 50%;
    border: 1px solid var(--ion-color-tertiary);
    height: 4.5rem;
    width: 4.5rem;
}
ion-button {
    margin-bottom: 10vh;
}
ion-list {
    background: transparent;
    padding: 2rem 1.5rem 1rem 1.5rem;
}
ion-item {
    --background: transparent;
    --border-style: dashed;
    --border-color: var(--ion-color-tertiary);
    --padding-bottom: 1rem;
    --padding-top: 1rem;
    --padding-start: 0;
    --padding-end: 0;
}
ion-toggle {
    margin-right: -0.6rem;
}
</style>
