import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import VueGtag from "vue-gtag";
import router from "./router";

const app = createApp(App);

app.use(
  VueGtag,
  {
    config: { id: "UA-59985241-3" },
  },
  router
);
app.use(createPinia());
app.use(router);

app.mount("#app");
