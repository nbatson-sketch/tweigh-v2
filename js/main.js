// main.js - handles kiosk fullscreen button and small helpers
document.addEventListener('DOMContentLoaded', function(){
  const kioskBtn = document.getElementById('enterKiosk');
  if(kioskBtn){
    kioskBtn.addEventListener('click', async function(){
      try{
        if(document.documentElement.requestFullscreen){
          await document.documentElement.requestFullscreen();
        } else if(window.chrome && window.chrome.webview){
          // electron/webview may have other APIs
        }
      }catch(e){
        console.warn('Fullscreen request failed', e);
      }
    });
  }

  // attempt to request fullscreen once (may be blocked without user gesture)
  // wrapped in try/catch to silently fail
  try{
    if (!document.fullscreenElement){
      document.documentElement.requestFullscreen().catch(()=>{});
    }
  }catch(e){}
});
