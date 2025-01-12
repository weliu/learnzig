import { defineComponent, h } from "vue";

import { useData, useRoute } from "vitepress";
import Giscus from "@giscus/vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const { isDark } = useData();

    return () =>
      h(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        h(Giscus, {
          repo: "learnzig/learnzig",
          repoId: "R_kgDOKRsb5Q",
          category: "Comments",
          categoryId: "DIC_kwDOKRsb5c4Cbx2i",
          mapping: "pathname",
          strict: "1",
          reactionsEnabled: "1",
          emitMetadata: "0",
          inputPosition: "top",
          theme: isDark.value ? "dark" : "light",
          lang: "zh-CN",
          term: route.path,
        }),
      );
  },
});
