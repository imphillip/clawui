<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import HomeLayout from "./HomeLayout.vue";

const { frontmatter } = useData();
const { Layout } = DefaultTheme;
</script>

<template>
  <HomeLayout v-if="frontmatter.layout === 'home-custom'" />
  <Layout v-else>
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </Layout>
</template>
