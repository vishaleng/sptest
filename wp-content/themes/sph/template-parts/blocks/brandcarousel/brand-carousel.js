!function(){"use strict";const e="mouseenter",t="mouseleave",n="scroll";function o(e){const t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}const r=document.querySelectorAll(".brand-carousel"),c=(n,o)=>{const r=n;let c=o,d=1;const l=r.querySelector(".brand-carousel-slider-wrapper"),i=l.offsetWidth;let s=l.cloneNode(!0);r.appendChild(s),function e(){d-=c,d<=-1*i&&(d=0),r.style.transform="translateX("+d+"px)",window.requestAnimationFrame(e)}(),n.addEventListener(e,(()=>{c=.3})),n.addEventListener(t,(()=>{c=o}))};r.forEach((e=>{(e=>{const t=e.querySelector("h2"),r=e.querySelectorAll(".brand-carousel-slider"),d=()=>{o(t)&&t.classList.add("scrolled")};d(),window.addEventListener(n,d),r.forEach((e=>{const t=e.getAttribute("data-speed");c(e,t)}))})(e)}))}();