<template>
  <!-- Vue.js equivalent code for the ion-header -->
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-title mode="md" class="ion-no-padding">
          <ion-label>
            <ion-text color="tertiary">Welcome</ion-text>
            <p>
              <ion-text color="white"><strong>Ahmed SARMOUM.</strong></ion-text>
            </p>
          </ion-label>
        </ion-title>
        <ion-avatar slot="end">
          <img src="@/assets/imgs/img.png" alt="User Avatar" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <!-- Vue.js equivalent code for the ion-content -->
    <ion-content color="primary">
      <ion-row class="banners">
        <!-- Vue.js equivalent code for the swiper and ngFor loop -->
        <swiper
          :modules="swiperModules"
          :slidesPerView="1"
          :keyboard="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="account in accounts" :key="account.acc_no">
            <div align="center">
              <ion-label>
                <span>Total Balance</span>
                <p class="acc-amt">
                  <ion-text color="white">₹{{ account.balance }}</ion-text>
                </p>
                <span>{{ account.acc_no }}</span>
              </ion-label>
            </div>
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-row class="ion-text-center feature-list" v-if="features.length > 0">
        <!-- Vue.js equivalent code for the swiper and ngFor loop -->
        <swiper :modules="swiperModules" :slidesPerView="3.5">
          <swiper-slide v-for="feature in features" :key="feature.name">
            <div>
              <ion-button slot="icon-only" :color="feature.color">
                <ion-icon class="large-icon" :icon="feature.icon"></ion-icon>
              </ion-button>
              <ion-label>{{ feature.name }}</ion-label>
            </div>
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-list class="transactions" v-if="transactions.length > 0">
        <ion-list-header>
          <ion-label color="medium">Transactions</ion-label>
        </ion-list-header>
        <ion-item-group>
          <!-- Vue.js equivalent code for the ion-list and ngFor loop -->
          <ion-item
            lines="full"
            v-for="transaction in transactions"
            :key="transaction.to"
            @click="selectTrans(transaction)"
          >
            <ion-thumbnail slot="start" class="ion-text-center">
              <img
                v-if="transaction.amount >= 0"
                src="@/assets/imgs/up-right.png"
                alt="Transaction Icon"
              />
              <img
                v-else
                src="@/assets/imgs/down-left-arrow.png"
                alt="Transaction Icon"
              />
            </ion-thumbnail>
            <ion-label>
              <ion-text color="primary">{{ transaction.to }}</ion-text>
              <p>
                <ion-text color="primary">{{
                  new Date(transaction.date).toLocaleDateString()
                }}</ion-text>
              </p>
            </ion-label>
            <ion-text slot="end" color="primary">
              {{
                transaction.amount >= 0
                  ? "₹" + transaction.amount
                  : "₹" + -transaction.amount
              }}
            </ion-text>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { paperPlane, send, addCircle, newspaper, card } from "ionicons/icons";

import {
  IonListHeader,
  IonItemGroup,
  IonItem,
  IonList,
} from "@ionic/vue";
import { ref } from "vue";

const swiperModules = ref([]); // Initialize swiperModules as needed
const accounts = ref([
  { id: 1, acc_no: "57868945098", balance: "200000" },
  { id: 2, acc_no: "20067091201", balance: "50000" },
  { id: 3, acc_no: "40163081205", balance: "80000" },
  { id: 3, acc_no: "19963081123", balance: "120000" },
]); // Initialize accounts as needed
const features = ref([
  { id: 1, color: "tertiary", icon: paperPlane, name: "Send" },
  { id: 2, color: "white", icon: send, name: "Request" },
  { id: 3, color: "success", icon: addCircle, name: "Top-up" },
  { id: 4, color: "light", icon: newspaper, name: "Bills" },
  { id: 5, color: "warning", icon: card, name: "Cards" },
]); // Initialize features as needed
const transactions = ref([
  { id: 1, to: "Piyush Ag.", date: "2022-05-22", amount: 5000 },
  { id: 2, to: "Avinash", date: "2022-03-02", amount: 7000 },
  { id: 3, to: "Catherine", date: "2022-07-28", amount: -3250 },
  { id: 4, to: "Akhil Ag.", date: "2022-01-09", amount: 1000 },
  { id: 5, to: "Prem Ag.", date: "2022-04-13", amount: -800 },
]); // Initialize transactions as needed

const selectTrans = (transaction) => {
  console.log('====================================');
  console.log(transaction);
  console.log('====================================');
}
</script>

<style scoped lang="scss">
ion-header {
  ion-toolbar {
    --padding-start: 16px;
    --padding-end: 16px;
    ion-title {
      max-width: 40vh;
      ion-label {
        ion-text {
          font-size: 1rem;
        }
        p {
          ion-text {
            font-size: 1.3rem !important;
          }
        }
      }
    }
    ion-avatar {
      height: 2.5rem;
      width: 2.5rem;
      border: 1px solid var(--ion-color-tertiary);
      img {
        max-width: 100%;
      }
    }
  }
}

ion-content {
  ion-row.banners {
    position: relative;
    padding: 1.5rem;
    height: 34vh;
    background: linear-gradient(
      120.67deg,
      #03b5aa 17.45%,
      rgba(162, 167, 127, 0.09) 105.58%
    );
    border-radius: 2.5rem;
    margin: 6vh 1rem 0 1rem;
    swiper {
      width: -webkit-fill-available;
    }
  }
  p.acc-amt {
    margin: 1rem 0;
    font-size: 3rem;
    font-weight: 700;
  }
  ion-row.banners::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: #194648;
    border-radius: 2.5rem;
    z-index: 0;
    border: 2px solid transparent;
  }

  ion-row.feature-list {
    padding: 5vh 0;
  }
}
swiper {
  width: -webkit-fill-available;
}
swiper-slide {
  height: 15vh;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ion-button {
  --border-radius: 15px;
  height: 8vh;
  width: 8vh;
}
ion-label {
  font-size: 1rem;
}

.large-icon {
  font-size: 2rem; /* You can adjust the size as needed */
}
</style>