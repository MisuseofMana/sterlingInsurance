<template>
  <div id="app">

      <HeaderBlock/>

      <main>
          <transition name="fade" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
          </transition>
      </main>

      <FooterComponent/>
   
  </div>
</template>

<script>
import './assets/styles/global.css'
import './assets/styles/transitions.css'

import HeaderBlock from "@/components/HeaderBlock";
import FooterComponent from "@/components/FooterComponent";


export default {
  name: 'app',
  components: {
    HeaderBlock,
    FooterComponent
  },
}
</script>

<style>

</style>
