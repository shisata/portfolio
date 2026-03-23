// Source - https://stackoverflow.com/a/77507334
// Posted by Aria Noorghorbani
// Retrieved 2026-03-24, License - CC BY-SA 4.0

export const checkUserIsMobile = () => {
    // Check if the user is accessing the page on a mobile device
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // if (isMobile) {
    //     // User is accessing the page on a mobile device
    //     console.log("Mobile device detected");
    // } else {
    //     // User is accessing the page on a desktop device
    //     console.log("Desktop device detected");
    // }
    return isMobile;
}
