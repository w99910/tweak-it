export function open() {
    const userAgent = navigator.userAgent;
    // let storeUrl = "https://addons.mozilla.org/en-US/firefox/addon/tweak-it/";
    let storeUrl =
      "https://chromewebstore.google.com/detail/tweak-it/gkeoohnfijokalcjimhnodjlbdgfbibb";

    if (userAgent.includes("Firefox")) {
      storeUrl = "https://addons.mozilla.org/en-US/firefox/addon/tweak-it/";
    }

    window.open(storeUrl, "_blank");
}