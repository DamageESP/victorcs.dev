import { defineStore } from "pinia";
import { event } from "vue-gtag";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    darkMode: localStorage.getItem("dark-mode")
      ? localStorage.getItem("dark-mode") === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
    showTopNav: false,
    cookies: localStorage.getItem("cookie-consent") === "true",
    contactForm: false,
  }),
  actions: {
    toggleDarkMode() {
      event("trackDarkMode", {
        event_label: this.darkMode ? "Disable" : "Enable",
      });
      this.darkMode = !this.darkMode;
      localStorage.setItem("dark-mode", this.darkMode ? "true" : "false");
    },
    toggleContactForm() {
      event("trackContact", { event_label: "Start - TopNav" });
      this.contactForm = !this.contactForm;
    },
  },
});
