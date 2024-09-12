import { useEffect } from 'preact/hooks'
import { i18n } from "../i18next.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ChangeToFrench() {

  useEffect(()=>{
  if(IS_BROWSER){
    const urlParams = new URLSearchParams(window.location?.search)
    console.log(urlParams.get("lang"))
    i18n.changeLanguage(urlParams.get("lang") || "en")
    window.reload()
  }

  },[IS_BROWSER])

return !IS_BROWSER ? (
  <></>
) :  (
  <h1 class="text-4xl font-bold">{i18n.t("home.title")}</h1>
  );
}
