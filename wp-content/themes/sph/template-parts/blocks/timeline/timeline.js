!function(){"use strict";const e="click",t="scroll",l="change",r="load",o="resize",i=992,s={MD:i-1},c={MD:600,LG:i,XL:1366},n=100,a=64;function d(e,t){return`(${e}: ${t}px)`}function f(){return window.matchMedia(d("max-width",s.MD)).matches}function u(e){return""===e}function y(e){return e.offsetTop+(e.offsetParent&&y(e.offsetParent))}function h(e,t=0){if(e){const l=y(e)-(window.matchMedia(d("min-width",c.LG)).matches?n:a)-t;document.documentElement.scrollTo({top:l,behavior:"smooth"})}}const m=document.querySelector(".navbar")?document.querySelector(".navbar").clientHeight:0;let p=n+m+500;document.querySelectorAll(".timeline").forEach((i=>{const s=i.querySelector(".sticky-left-timeline"),c=s.querySelector(".list-group"),n=i.querySelector(".arrow-left"),d=i.querySelector(".arrow-right");i.offsetTop;const y=e=>{e.preventDefault();const t=e.target.hash;if(t){i.querySelectorAll(".list-content").forEach((e=>{e.querySelectorAll("*[id]").forEach((e=>{const l="#"+e.id;t==l?e.classList.add("active"):t!==l&&e.classList.remove("active")}))}))}const l=i.querySelector(t);window.location.hash=t,v(l)},g=()=>{const e=window.location.hash;if(!u(e)){const t=i.querySelector(e);v(t)}},v=e=>{h(e,f()?s.clientHeight+m:0)},w=()=>{i.querySelectorAll(".list-group").forEach((e=>{e.firstElementChild.classList.remove("active");((e,t)=>{t.style.width="0px",t.style.flex="0 0 auto",e.style.transform="translateX(0px)",e.lastElementChild.style.marginRight="0px"})(e,e.firstElementChild)}));i.querySelectorAll(".tabs").forEach((e=>{const t=i.querySelectorAll(".list-content");e.classList.remove("fixed-scroll"),e.style.top="0px",t.forEach((e=>{e.style.marginTop="0px"}))}))},S=e=>{i.querySelectorAll(".list-content").forEach((t=>{const l=t.clientHeight,r=645-645*(e.currentTarget.scrollY/l*100)/100;i.querySelectorAll(".progress-circle svg circle:nth-child(2)").forEach((e=>{r>0&&(e.style.strokeDashoffset=r)}));const o=i.querySelector(".progress-circle");i.querySelectorAll(".list-group-item.active").forEach((e=>{o.style.top=-106+e.offsetTop+"px",i.querySelectorAll(".list-group-item.active")}))}))},E=()=>{f()?s.after(i.querySelector(".progress-circle")):s.append(i.querySelector(".progress-circle"))},q=()=>{const t=window.location.hash,l=i.querySelectorAll(".list-group");if(u(t)){const e=i.querySelectorAll(".list-content");l.forEach((t=>{t.firstElementChild.classList.add("active"),e.forEach((e=>{e&&e.firstElementChild.classList.add("active")}))}))}else{i.querySelectorAll(".list-content").forEach((e=>{e.querySelectorAll(".list-item-wrapper").forEach((r=>{const o="#"+r.id;t==o?(r.classList.add("active"),setTimeout((function(){A(),x()}),500)):t!==o&&(r.classList.remove("active"),setTimeout((function(){i.querySelector(".list-group-item.active")||l.forEach((t=>{t.firstElementChild.classList.add("active"),e.firstElementChild.classList.add("active");const l=i.querySelector(".tabs").offsetWidth,r=t.firstElementChild,o=(l-r.offsetWidth)/2;r.style.width=o+r.clientWidth+"px",r.style.flex="0 0 auto";const s=-1*(r.offsetLeft-o/2);t.style.transform="translateX("+s+"px)",t.lastElementChild.style.marginRight=s+"px"}))}),1e3))}))}))}l.forEach((t=>{const l=i.querySelector(".tabs").offsetWidth;if(t.firstElementChild.className.includes("active")){i.querySelector(".arrow-left").style.display="none";const e=t.firstElementChild;((e,t,l)=>{const r=(l-t.offsetWidth)/2,o=r+t.clientWidth+"px";e.querySelectorAll(".list-group-item").forEach((e=>{e.style.width=o})),t.style.flex="0 0 auto";const i=t.offsetLeft+r/2;e.style.transform="translateX("+i+"px)",e.lastElementChild.style.marginRight=i+"px"})(t,e,l)}t.addEventListener(e,(e=>{if(e){e.target.style.flex="0 0 auto";const l=t.querySelector(".active");l&&l.classList.remove("active"),e.target.classList.add("active"),x(),L()}})),L()}))},L=e=>{if(i.querySelector(".list-group-item-action.active")){let e=i.querySelector(".list-group-item-action.active").offsetLeft;const t=i.querySelectorAll(".list-group-item");for(let l=0;l<t.length;l++)if(t[l].classList.contains("active")){let r=e;i.querySelector(".sticky-left-timeline").scrollLeft=r,t[l]===t[0]?i.querySelector(".arrow-left").style.display="none":i.querySelector(".arrow-left").style.display="block",t[l]===t[t.length-1]?i.querySelector(".arrow-right").style.display="none":i.querySelector(".arrow-right").style.display="block"}}const t=i.querySelectorAll(".tabs"),l=i.querySelectorAll(".list-group-item")?i.querySelectorAll(".list-group-item").length:0;t.forEach((e=>{const t=e.getBoundingClientRect().top+window.pageYOffset,l=i.getBoundingClientRect().top+window.pageYOffset,r=i.querySelectorAll(".list-content");window.pageYOffset>t&&i.querySelectorAll(".tabs:not([fixed-scroll])")&&(e.classList.add("fixed-scroll"),e.style.top=m+"px",r.forEach((t=>{t.style.marginTop=e.offsetHeight+"px"}))),window.pageYOffset<l&&(e.classList.remove("fixed-scroll"),e.style.top="0",r.forEach((e=>{e.style.marginTop="0"})))})),setTimeout((function(){const e=i.querySelectorAll(".list-group-item.active"),t=i.querySelectorAll(".list-group"),r=i.querySelectorAll(".list-content");t.forEach((e=>{const t=e.querySelectorAll(".list-group-item");for(let e=0;e<t.length;e++)t[e].classList.contains("active")&&r.forEach((t=>{const l=t.querySelectorAll(".list-item-wrapper");l.forEach((e=>{e.classList.remove("active")})),l[e].classList.add("active")}))})),e.forEach((e=>{if(e){const t=e.parentNode;if(t){const r=Array.prototype.findIndex.call(t.children,(t=>t===e)),o=r/l*100,s=(1+r)/l*100,c=i.querySelector(".list-item-wrapper.active").getBoundingClientRect().height,n=i.querySelector(".list-item-wrapper.active").getBoundingClientRect().top;if(c>i.querySelector(".list-item-wrapper.active").getBoundingClientRect().bottom){const e=-n/c*100;if(e<=100&&e>=0){const t=312-312*(o+e*(s-o)/100)/100;i.querySelectorAll(".progress-circle svg circle:nth-child(2)").forEach((e=>{t>=0&&(e.style.strokeDashoffset=t)}))}}else{const e=312-312*o/100;i.querySelectorAll(".progress-circle svg circle:nth-child(2)").forEach((t=>{e>=0&&(t.style.strokeDashoffset=e)}))}}}}))}),200)},A=()=>{const e=i.querySelectorAll(".list-group-item.active"),t=i.querySelector(".tabs").offsetWidth,l=i.querySelectorAll(".list-group");e.forEach((e=>{const r=e,o=(t-r.offsetWidth)/2,s=o+r.clientWidth+"px";i.querySelectorAll(".list-group-item").forEach((e=>{e.style.width=s})),r.style.flex="0 0 auto",l.forEach((e=>{const t=e.firstElementChild.offsetLeft+o/2;e.style.transform="translateX("+t+"px)",e.lastElementChild.style.marginRight=t+"px"}))}))},x=()=>{const e=i.querySelectorAll(".list-group-item.active");i.querySelectorAll(".list-group").forEach((e=>{const t=e.firstElementChild.className,l=e.lastElementChild.className;t.includes("active")?i.querySelector(".arrow-left").style.display="none":i.querySelector(".arrow-left").style.display="block",l.includes("active")?i.querySelector(".arrow-right").style.display="none":i.querySelector(".arrow-right").style.display="block"})),e.forEach((e=>{window.location.hash=e.hash}))};f()&&(p=a+m+500),document.body.setAttribute("data-bs-spy",t),document.body.setAttribute("data-bs-offset",p.toString()),window.addEventListener(r,g),[...c.querySelectorAll(".list-group-item")].forEach((t=>{t.addEventListener(e,(e=>{y(e)}))})),f()?(q(),window.addEventListener(t,L),n.addEventListener("click",(function(){const e=i.querySelector(".list-group .list-group-item.active");if(e){e.classList.remove("active");const t=e.previousElementSibling;t&&t.click()}})),d.addEventListener("click",(function(){const e=i.querySelector(".list-group .list-group-item.active");if(e){e.classList.remove("active");const t=e.nextElementSibling;t&&t.click()}}))):window.addEventListener(t,S),E(),window.addEventListener(o,(function(e){w(),E(),window.removeEventListener(t,S),window.removeEventListener(t,L),i.querySelector(".progress-circle").removeAttribute("style"),f()?(q(),window.removeEventListener(t,S),window.addEventListener(t,L)):(window.removeEventListener(t,L),window.addEventListener(t,S))})),window.matchMedia("(orientation: landscape)").addEventListener(l,(function(e){e.matches&&(w(),E(),window.removeEventListener(t,S),window.removeEventListener(t,L),i.querySelector(".progress-circle").removeAttribute("style"),f()?(q(),window.removeEventListener(t,S),window.addEventListener(t,L)):(window.removeEventListener(t,L),window.addEventListener(t,S)))}))}))}();