$(document).ready(() => {
  console.log("loaded.");
  // Get the user agent string
  const userAgent = navigator.userAgent;
  // Check if the user is on a desktop or laptop
  const isDesktop = userAgent.match(/Windows NT|Macintosh/i) !== null;
  // Check if the user is on an iPad
  const isIpad = userAgent.match(/iPad/i) !== null;
  // Redirect the user based on their device type
  if (isDesktop || isIpad) {
   console.log("redirecting to desktop view...");
   window.location.href = "./views/desktop.html";
  } else {
   console.log("redirecting to mobile view...");
    window.location.href = "./views/mobile.html";
  }
});