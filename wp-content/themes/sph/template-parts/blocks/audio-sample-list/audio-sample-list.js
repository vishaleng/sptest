!function(){"use strict";const e=document.querySelectorAll(".audio-sample-list"),a=e=>{const a=e.querySelectorAll(".audio-sample-list__audio-item"),t=e.querySelectorAll(".audio-sample-list__audio-item-platform"),o=e.querySelectorAll("audio");let l,s,i=0;a.forEach((e=>{const t=e.querySelector(".audio-sample-list__audio-item-icon");t.addEventListener("click",(()=>{setTimeout((()=>{l=t.querySelector("audio"),t.classList.contains("play")?(l!==s?(s=0,a.forEach((e=>{const a=e.querySelector(".audio-sample-list__audio-item-icon");a.classList.add("play"),a.classList.remove("pause")})),o.forEach((e=>{e.pause(),e.currentTime=0})),t.querySelector("audio").play()):(t.querySelector("audio").play(),s=t.querySelector("audio")),t.classList.remove("play"),t.classList.add("pause")):(t.classList.add("play"),t.classList.remove("pause"),t.querySelector("audio").pause(),s=t.querySelector("audio"))}),100)}))})),t.forEach(((e,a)=>{e.offsetWidth>=i&&(i=e.offsetWidth),t.length-1==a&&t.forEach((e=>{e.style.width=i+"px"}))}))};e.forEach((e=>{a(e)}))}();