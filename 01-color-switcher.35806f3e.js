!function(){const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.startBtn.disabled=!1,t.stopBtn.disabled=!0;const e={start(){this.intervalId=setInterval((()=>{console.log("start"),t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.startBtn.disabled=!0,t.stopBtn.disabled=!1}),1e3)},stop(){clearInterval(this.intervalId),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()}))}();
//# sourceMappingURL=01-color-switcher.35806f3e.js.map
