<template>
<ion-page>
    <ion-header class="ion-no-border" translucent>
      <ion-toolbar>
        <ion-title color="primary" mode="ios">Transactions</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment mode="ios" v-model="reactiveState.segmentValue" @ionChange="segmentChanged">
          <ion-segment-button value="in">
            <ion-label>In-flow</ion-label>
          </ion-segment-button>
          <ion-segment-button value="out">
            <ion-label>Out-flow</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
  
    <ion-content color="secondary" fullscreen>
      <ion-list class="transactions" v-if="reactiveState.transactions.length > 0">
        <ion-item-group>
          <ion-item lines="full" v-for="transaction in reactiveState.transactions" :key="transaction.id">
            <ion-thumbnail slot="start" class="ion-text-center">
              <img v-if="transaction.amount >= 0" src="@/assets/imgs/up-right.png" />
              <img v-else src="@/assets/imgs/down-left-arrow.png" />
            </ion-thumbnail>
            <ion-label>
              <ion-text color="primary">{{ transaction.to }}</ion-text>
              <p>
                <ion-text color="primary">
                  {{ transaction.date  }}
                </ion-text>
              </p>
            </ion-label>
            <ion-text slot="end" color="primary">
              {{ transaction.amount >= 0 ? '₹' + transaction.amount : '-₹' + (-transaction.amount) }}
            </ion-text>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
</ion-page>
</template>

<script setup>
import { 
    IonSegment,
    IonSegmentButton,
    IonItemGroup,
    IonItem,
 } from '@ionic/vue'
import { onMounted, reactive } from "vue";

const reactiveState =  reactive({
    segmentValue: 'in', // You'll need to initialize this with the default value
    allTransactions: [] ,
    transactions: [] // Initialize with your data
})

const segmentChanged = (event) => {
     console.log(event);
    reactiveState.segmentValue = event.detail.value;
    filterTransactions();
}

const filterTransactions = () => {
    if(reactiveState.segmentValue == 'in') {
      reactiveState.transactions = reactiveState.allTransactions.filter(x => x.amount >= 0);
    } else {
      reactiveState.transactions = reactiveState.allTransactions.filter(x => x.amount < 0);
    }
  }

onMounted(() => {
    reactiveState.allTransactions = [
      { id: 1, to: 'Piyush SA.', date: '2022-05-22', amount: 5000 },
      { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Akhil SA.', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Prem SA.', date: '2022-04-13', amount: -800 },
    ];
    filterTransactions();
})
</script>

<style scoped lang="scss">
.md {
    ion-segment {
        width: 60%;
        margin: auto;
    }
}

ion-header {
    ion-toolbar {
        --background: var(--ion-color-secondary);
        ion-segment {
            --background: var(--ion-color-primary);
            ion-segment-button {
                --color: var(--ion-color-secondary);
                --color-checked: var(--ion-color-primary);
                --background-checked: var(--ion-color-secondary) !important;
            }
        }
    }
}

ion-content {
    ion-list {
        margin-top: 2rem;
    }
}

</style>
