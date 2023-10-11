<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Cards</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="primary">
      <div class="bg_circle"></div>

      <ion-row>
        <swiper
         :modules="swiperModules"
          :slidesPerView="1"
          :keyboard="true"
          :centerSlides="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="card in reactiveState.cards" :key="card.id">
            <div class="card_details">
              <img :src="card.company_img" />
              <div align="center">
                <ion-label>
                  <div class="acc-amt">
                    <ion-text color="white">{{
                      card.card_no
                    }}</ion-text>
                  </div>
                  <span>{{ card.card_holder }}</span>
                </ion-label>
              </div>
              <p class="exp ion-text-start">
                <ion-text color="white">{{
                  card.exp_date
                }}</ion-text>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-list class="transactions">
        <ion-list-header>
          <ion-label color="primary">Settings</ion-label>
        </ion-list-header>
        <ion-item-group>
          <ion-item lines="full">
            <ion-label color="primary">Enable Card</ion-label>
            <ion-toggle
             aria-label="enable"
              slot="end"
              v-model="reactiveState.isCardEnabled"
            ></ion-toggle>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item lines="full" >
            <ion-label color="primary">Change Pin</ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonToggle, IonListHeader, IonItemGroup, IonItem } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, reactive, ref } from "vue";
import MastercardPng from '@/assets/imgs/mastercard.png'
import VisaPng from '@/assets/imgs/visa.png'

const swiperModules = ref([]);
const reactiveState = reactive({
  isCardEnabled: true,
  cards: [ {
      id: 1,
      company_img: MastercardPng,
      card_no: "5786 8945 9098 1100",
      card_holder: "Nikhil Ag.",
      exp_date: "08/24",
    },
    {
      id: 2,
      company_img: VisaPng,
      card_no: "2006 7091 2014 8766",
      card_holder: "Nikhil Ag.",
      exp_date: "11/29",
    },
    {
      id: 3,
      company_img: MastercardPng,
      card_no: "4016 3081 2056 7890",
      card_holder: "Nikhil Ag.",
      exp_date: "06/25",
    },],
});

onMounted(() => {
 
});
</script>

<style scoped lang="scss">

.bg_circle {
  position: absolute;
  width: 33vh;
  height: 33vh;
  left: -8rem;
  top: 7vh;
  border-radius: 50%;
  background: rgba(117, 254, 172, 0.72);
}
    ion-row {
      margin: 5vh 1rem 6vh 1rem;
  }
ion-content {

    
ion-list {
    ion-item {
      ion-label {
        font-size: 1.1rem !important;
    }
    }
}
}
swiper {
  height: 37vh;
  width: -webkit-fill-available;
  swiper-slide {
    height: 32vh;
}
}
div.card_details {
  border-radius: 2.5rem;
  padding: 0 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(127, 212, 168, 0.2);
  img {
    align-self: start;
    width: 2.5rem;
    margin: 2rem 0 2rem 0;
  }
  ion-label {
    z-index: 999;
    div.acc-amt {
      margin: 0.2rem 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  p.exp {
    font-size: 1rem;
    font-weight: 500;
    align-self: start;
    margin: 2rem 0;
  }
}
</style>

