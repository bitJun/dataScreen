<script setup>
import { ref } from 'vue'
import Header from './Header/index';
import SiderBar from './SiderBar/index';
import Footer from './Footer/index';
import RightPanel from './RightPanel/index';
import Detail from './Detail/index';
import FilterInfo from './FilterInfo/index';
const msg = ref('Hello World!')
</script>

<template>
  <div class="background">
    <Header/>

    <SiderBar />
    <RightPanel />
    <Footer />
    <Detail />
    <FilterInfo />
  </div>
</template>



<style lang="scss" scoped>
  .background {
    display: relative;
    /* 设置背景图片并铺满整个屏幕 */
    width: 1920px;
    height: 100vh;
    background-image: url('/image/mapBg.png');
  }
</style>

