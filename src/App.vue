<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || ''">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
