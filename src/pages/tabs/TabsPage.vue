<template>
  <ion-page>
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>;
      <ion-tab-bar>
        <ion-tab-button @click="setCurrentTab('home')" :tab="reactiveState.tabs.home" href="/tabs/home">
          <ion-icon
            :icon="
              reactiveState.selectedTab === reactiveState.tabs.home
                ? home
                : homeOutline
            "
          ></ion-icon>
        </ion-tab-button>
        <ion-tab-button
        @click="setCurrentTab('transactions')"
          :tab="reactiveState.tabs.transactions"
          href="/tabs/transactions"
        >
          <ion-icon
            :icon="
              reactiveState.selectedTab === reactiveState.tabs.transactions
                ? pieChart
                : pieChartOutline
            "
          ></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          @click="setCurrentTab('card')"
          :tab="reactiveState.tabs.card" href="/tabs/card"
        >
          <ion-icon
            :icon="
              reactiveState.selectedTab === reactiveState.tabs.card
                ? card
                : cardOutline
            "
          ></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          @click="setCurrentTab('settings')"
          :tab="reactiveState.tabs.settings"
          href="/tabs/settings"
        >
          <ion-icon
            :icon="
              reactiveState.selectedTab === reactiveState.tabs.settings
                ? settings
                : settingsOutline
            "
          ></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  pieChart,
  pieChartOutline,
  homeOutline,
  home,
  settings,
  settingsOutline,
  card,
  cardOutline,
} from "ionicons/icons";

const reactiveState = reactive({
  selectedTab: "home", // Set the default selected tab
  tabs: {
    home: "home",
    transactions: "transactions",
    card: "card",
    settings: "settings",
  },
});

const setCurrentTab = (tab) => {
  console.log('tab >>>>', tab);
  reactiveState.selectedTab = tab;
};
</script>

<style lang="scss">
ion-tabs {
    background: var(--ion-color-secondary);
    ion-tab-bar {
        position: relative;
        width: 90%;
        transform: translate(-50%, -50%);
        left: 50%;
        border-radius: 30px;
        padding-bottom: 0;
        border: 1px solid rgba(2, 52, 54, 0.08);
        overflow: hidden;
        box-shadow: 0px -5px 10px rgb(3 181 170 / 8%);
        height: 80px;
        --background: var(--ion-color-light);
        ion-tab-button {
            --background: var(--ion-color-light);
            --color: #BEC2C6;
            ion-icon {
                font-size: 1.9rem;
            }
        }
    }
}
.tab-selected {
    color: var(--ion-color-secondary-shade) !important;
}
</style>