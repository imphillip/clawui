import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { useData } from "vitepress";
import HomeLayout from "./HomeLayout.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData();
    if (frontmatter.value.layout === "home-custom") {
      return h(HomeLayout);
    }
    return h(DefaultTheme.Layout);
  },
};
