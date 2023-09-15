import English from "@/localization/en-US/master.json"
import Norwegian from "@/localization/no-NO/master.json"
import { createI18n } from "vue-i18n"

const messages = {
  nb: Norwegian,
  en: English,
}

let langFromLocalStorage = window.localStorage.getItem("app-language")
if (langFromLocalStorage === null) {
  const browserLang = navigator.language.substring(0, 2)
  if (browserLang === "en") {
    langFromLocalStorage = "en"
  } else {
    langFromLocalStorage = "nb"
  }
  langFromLocalStorage = "nb"
  window.localStorage.setItem("app-language", langFromLocalStorage)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: langFromLocalStorage,
  fallbackLocale: "nb",
  silentFallbackWarn: true,
  messages,
})

const t = i18n.global.t
export { t }
