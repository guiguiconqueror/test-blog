function menuToggle(){window.matchMedia("(min-width:"+breakpoint+"px)").matches?menu.classList.remove("is-hidden"):menu.classList.add("is-hidden"),toggle.onclick=function(e){e.preventDefault(),menu.classList.toggle("is-hidden")}}var breakpoint=800,toggle=document.getElementById("main-menu-toggle"),menu=document.getElementById("main-menu");menuToggle(),window.addEventListener("resize",menuToggle);