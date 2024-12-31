<script setup lang="ts">
import PageLayout from "@/layouts/PageLayout.vue"
import HeroSection from "@/components/HeroSection.vue"
import TopProducts from "@/components/TopProducts.vue"
import TopDesign from "@/components/TopDesign.vue"
import StatisticalNumber from "@/components/StatisticalNumber.vue"
import Testimonial from "@/components/Testimonial.vue"
</script>

<template>
  <PageLayout>
    <HeroSection></HeroSection>
    <TopProducts></TopProducts>
    <TopDesign></TopDesign>
    <StatisticalNumber></StatisticalNumber>
    <Testimonial></Testimonial>
  </PageLayout>
</template>
