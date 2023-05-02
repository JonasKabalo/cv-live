<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineComponent } from 'vue';

import HeaderCv from '../components/HeaderCv.vue'
import MainCv from '../components/MainCv.vue'
import FooterCv from '../components/FooterCv.vue'

defineComponent({
  components: {
    HeaderCv,
    MainCv,
    FooterCv,
  },
});
</script>

<template>
  <HeaderCv />
  <MainCv />
  <FooterCv />
</template>
