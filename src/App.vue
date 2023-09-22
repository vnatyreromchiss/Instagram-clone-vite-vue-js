<script setup>
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';

import HomePage from '../src/pages/HomePage.vue';
import MessengerPage from '../src/pages/MessengerPage.vue';

import { RouterLink, RouterView } from 'vue-router';


import { ref } from 'vue';

const selectedImageUrl = ref(null);

function updateImageUrl(imageUrl) {
  selectedImageUrl.value = imageUrl;
}


</script>

<template>
    <div class="app"> 
      <Header></Header>

      <RouterView  />
    </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
