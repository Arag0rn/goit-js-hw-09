!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=null;a.disabled=!0,e.addEventListener("click",(function(){d=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}),1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1f871c60.js.map
