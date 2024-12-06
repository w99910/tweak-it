export function open() {
    const userAgent = navigator.userAgent;
    let storeUrl = "https://chrome.google.com/webstore/category/extensions";

    if (userAgent.includes("Chrome")) {
        storeUrl = "https://chrome.google.com/webstore/category/extensions";
    } else if (userAgent.includes("Firefox")) {
        storeUrl = "https://addons.mozilla.org/en-US/firefox/tweakit";
    }
    //  else if (userAgent.includes("Edg")) {
    //     storeUrl = "https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home";
    // }

    window.open(storeUrl, "_blank");
}