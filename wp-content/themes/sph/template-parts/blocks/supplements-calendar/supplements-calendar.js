!function(){"use strict";const e={MD:991};function t(){return window.matchMedia((t="max-width",i=e.MD,`(${t}: ${i}px)`)).matches;var t,i}function i(e,i,a,o){const c=e.querySelector(".pagination-template").content.cloneNode(!0);if(t()){let t=c.querySelector(".pagination-select-list");const n=e.querySelector(".tile-listing-with-filter__pagination_mobile"),l=c.querySelector(".tile-listing-with-filter__pagination_mobile"),s=c.querySelector(".pagination-center");if(c.querySelector(".current-page").innerHTML=a,n&&n.remove(),t){r(e,t);for(let e=0;e<o;e++)t.innerHTML+='<li class="pagination-item"><a class="pagination-link" href="#">'+(e+1)+"</a></li>";s.append(t)}e.appendChild(l),i[a-1].classList.add("active")}else!function(e,t,i,l){const a=e.querySelector(".pagination-template").content.cloneNode(!0),o=a.querySelector(".tile-listing-with-filter__pagination"),r=e.querySelector(".tile-listing-with-filter__pagination");let c=a.querySelector(".pagination-container");r&&r.remove();if(l>8){o.classList.add("multi");let a='<div class="pagination-left"><a href="#" class="previous-btn"></a></div>',r='<div class="pagination-right"><a href="#" class="next-btn"></a></div>',c=Math.round(l)-1,u='<li class="pagination-item first-pagination"><a class="pagination-link" href="#">1</a></li>',d="",p='<li class="pagination-item last-pagination"><a class="pagination-link" href="#">'+l+"</a></li>",m='<span class="first-expand hide">...</span>',g='<span class="last-expand hide">...</span>';for(let e=1;e<c;e++)d+='<li class="pagination-item hide"><a class="pagination-link" href="#">'+(e+1)+"</a></li>";let f="";f='<ul class="pagination-container">'+u+m+d+g+p+"</ul>",o.innerHTML=a+f+r,e.remove,e.appendChild(o),t[i-1].classList.add("active"),s(e,l),n(e,i,l)}else{for(let e=0;e<l;e++)c.innerHTML+='<li class="pagination-item"><a class="pagination-link" href="#">'+(e+1)+"</a></li>";o.append(c),e.appendChild(o),t[i-1].classList.add("active")}}(e,i,a,o),function(e,t,i,a){let o=e.querySelector(".container-xl.multi"),r=e.querySelector(".pagination-left"),c=e.querySelector(".pagination-right");i=e.querySelector(".pagination-item.active").textContent,o&&(o.addEventListener("click",(()=>{n(e,i,a)})),r.addEventListener("click",(t=>l(t,"previous",e,i,a))),c.addEventListener("click",(t=>l(t,"next",e,i,a))),s(e,a))}(e,0,a,o)}function n(e,t,i){let n=e.querySelector(".pagination-item.active").nextElementSibling,l=[],a=e.querySelector(".pagination-item.active").previousElementSibling,s=[];if((t=e.querySelector(".pagination-item.active").textContent)<=3){(u=document.querySelector(".pagination-container").querySelectorAll(".pagination-item"))[0].classList.remove("hide"),u[u.length-1].classList.remove("hide"),(u=document.querySelectorAll(".pagination-item")).forEach((function(e){e.classList.contains("pagination-item")&&!e.classList.contains("active")&&e.classList.add("hide")}));var o=document.querySelector(".first-expand");for(o&&!o.classList.contains("hide")&&o.classList.add("hide");n;)l.push(n),n=n.nextElementSibling;var r=0;for(l.forEach((function(e){r>=2||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)}));a;)s.push(a),a=a.previousElementSibling;r=0;s.forEach((function(e){r>=2||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)})),(c=document.querySelectorAll(".last-expand")).forEach((function(e){e.classList.remove("hide")})),(c=document.querySelectorAll(".last-expand")).forEach((function(e){e.classList.remove("hide")})),(u=document.querySelector(".pagination-container").querySelectorAll(".pagination-item"))[0].classList.remove("hide"),u[u.length-1].classList.remove("hide")}else if(t>3&&i-2>t){for((u=document.querySelectorAll(".pagination-item")).forEach((function(e){e.classList.contains("pagination-item")&&!e.classList.contains("active")&&e.classList.add("hide")})),document.querySelectorAll(".first-expand").forEach((function(e){e.classList.remove("hide")}));n;)l.push(n),n=n.nextElementSibling;r=0;for(l.forEach((function(e){r>=1||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)}));a;)s.push(a),a=a.previousElementSibling;r=0;s.forEach((function(e){r>=1||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)})),(c=document.querySelectorAll(".last-expand")).forEach((function(e){e.classList.remove("hide")})),(u=document.querySelector(".pagination-container").querySelectorAll(".pagination-item"))[0].classList.remove("hide"),u[u.length-1].classList.remove("hide")}else if(i-2<=t){for((u=document.querySelectorAll(".pagination-item")).forEach((function(e){e.classList.contains("pagination-item")&&!e.classList.contains("active")&&e.classList.add("hide")})),document.querySelectorAll(".first-expand").forEach((function(e){e.classList.remove("hide")}));n;)l.push(n),n=n.nextElementSibling;r=0;for(l.forEach((function(e){r>=1||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)}));a;)s.push(a),a=a.previousElementSibling;var c,u;r=0;s.forEach((function(e){r>=2||e.classList.contains("pagination-item")&&(e.classList.remove("hide"),r++)})),(c=document.querySelector(".last-expand"))&&!c.classList.contains("hide")&&c.classList.add("hide"),(u=document.querySelector(".pagination-container").querySelectorAll(".pagination-item"))[0].classList.remove("hide"),u[u.length-1].classList.remove("hide")}for(var d=document.querySelectorAll(".brand-listing__pagination.container-xl.multi"),p=1;p<d.length;p++)d[p].parentNode.removeChild(d[p])}function l(e,t,i,l,a){e.preventDefault();let o=i.querySelector(".pagination-item.active"),r=i.querySelector(".pagination-item.active").textContent;if("previous"===t&&r>1){l--,o.classList.remove("active"),o.previousElementSibling.classList.add("active");let e=o.previousElementSibling;e.classList.contains("last-expand")&&(e.classList.remove("active"),e.previousElementSibling.classList.add("active")),e.classList.contains("first-expand")&&(e.classList.remove("active"),e.previousElementSibling.classList.add("active"))}if("next"===t&&l<a){l++,o.classList.remove("active"),o.nextElementSibling.classList.add("active");let e=o.nextElementSibling;e.classList.contains("last-expand")&&(e.classList.remove("active"),e.nextElementSibling.classList.add("active")),e.classList.contains("first-expand")&&(e.classList.remove("active"),e.nextElementSibling.classList.add("active"))}i.querySelector(".pagination-item.active").click(),s(i,a),n(i,l,a),i.scrollIntoView()}function a(e,t){return Math.ceil(e.length/t)}function s(e,t){let i=e.querySelector(".pagination-left"),n=e.querySelector(".pagination-right"),l=e.querySelector(".pagination-item.active .pagination-link")?e.querySelector(".pagination-item.active .pagination-link").innerHTML:1;i&&n&&(1==l?i.classList.add("disable"):i.classList.remove("disable"),l==t?n.classList.add("disable"):n.classList.remove("disable"))}function o(e,t,i,n,l,a){let o=t.querySelector(".pagination-select"),c=t.querySelector(".pagination-left"),u=t.querySelector(".pagination-right"),d=t.querySelector(".pagination-item.active .pagination-link")?t.querySelector(".pagination-item.active .pagination-link").innerHTML:1;function p(o,r){let c;o.preventDefault();let u=t.querySelector(".pagination-item.active");d=t.querySelector(".pagination-item.active .pagination-link")?t.querySelector(".pagination-item.active .pagination-link").innerHTML:1,"previous"===r&&d>1&&(d--,u.classList.remove("active"),u.previousElementSibling.classList.add("active"),n.start=n.start-n.limit,n.end=n.end-n.limit),"next"===r&&d<a&&(d++,u.classList.remove("active"),u.nextElementSibling.classList.add("active"),n.start=n.start+n.limit,n.end=n.end+n.limit),s(t,a),c=d*l;let p=t.querySelector(".current-page");p&&(p.innerHTML=d),c>e.length&&(c=e.length-1),t.scrollIntoView(),i(e)}o&&(o.addEventListener("click",(()=>{let e=t.querySelector(".pagination-select-list");r(t,e),e.classList.toggle("toggle-select-type"),s(t,a)})),c.addEventListener("click",(e=>p(e,"previous"))),u.addEventListener("click",(e=>p(e,"next"))),s(t,a))}function r(e,t){const i=document.querySelector("footer"),n=i?i.offsetTop:0;e.offsetTop+e.offsetHeight>=n?t.classList.add("pagination-top"):t.classList.remove("pagination-top")}const c=[...document.querySelectorAll(".supplements-calendar")],u=e=>{const n=window.supplementsListData||[],l=window.supplementsListDataPagination||6,c={limit:l,start:0,end:l},u=e.getElementsByClassName("pagination-item"),m=e.querySelector(".supplements-calendar__table"),g=e.querySelector(".supplements-calendar-table-template"),f=e.querySelectorAll(".clear-filter-btn");let v=1,L=[];function h(t){q(t||n),function(e,t,i){const n=i.querySelector(".supplements-calendar__table"),l=i.querySelector(".supplements-calendar-table-template");n.innerHTML="";const a=e.slice(t.start,t.end),s=l.content.cloneNode(!0);s.querySelector("tbody tr").remove(),a.forEach(((e,t)=>{const i=d(l,e);if(i){const e=i.querySelector("tbody tr");s.querySelector("tbody").append(e),t>=a.length-1&&n.append(s)}}))}(t,c,e)}function y(e,t,i){m.innerHTML="";const n=i.slice(e,t),l=g.content.cloneNode(!0);l.querySelector("tbody tr").remove(),n.forEach(((e,t)=>{const i=d(g,e);if(i){const e=i.querySelector("tbody tr");l.querySelector("tbody").append(e),t>=n.length-1&&m.append(l)}}))}function S(t){let i,o;t.preventDefault();let c=L.length>0?L:n;m.style.opacity=0,e.classList.add("loading"),setTimeout((function(){e.classList.remove("loading"),m.style.opacity=1}),200);for(var d=0;d<u.length;d++)u[d].className="pagination-item";this.className="pagination-item active",i=this.children[0].innerHTML*l-l,o=this.children[0].innerHTML*l;let p=e.querySelector(".current-page");if(p){p.innerHTML=this.children[0].innerHTML;const t=e.querySelector(".pagination-select-list");t&&(r(e,t),t.classList.toggle("toggle-select-type"))}v=this.children[0].innerHTML,o>c.length&&(o=c.length),e.scrollIntoView(),y(i,o,c),s(e,a(L,l))}function q(e){e.sort((function(e,t){const i=e.filterPeriod.split("/"),n=new Date(i[2],i[1]-1,i[0]),l=t.filterPeriod.split("/"),a=new Date(l[2],l[1]-1,l[0]);return new Date(n)-new Date(a)}))}function b(e){const t=new Date,i=t.getMonth(),n=t.getFullYear();L=e.filter((e=>{const t=e.filterPeriod.split("/"),l=new Date(t[2],t[1]-1,t[0]);return l.getMonth()>=i&&l.getFullYear()>=n}))}if(b(n),q(L),a(L,l)>1){i(e,u,v,a(L,l));for(let e=0;e<u.length;e++)u[e].addEventListener("click",S);o(L,e,h,c,l,a(L,l))}h(L),function(e,t,i){const n=t.querySelector(".supplementsMonth"),l=t.querySelector(".supplementsCategory"),a=t.querySelector(".supplements-period-template"),s=t.querySelector(".supplements-category-template");let o=[],r=[];n.innerHTML="",l.innerHTML="",e.reduce(((e,t)=>(-1===e.findIndex((e=>e.period===t.period))&&(e.push(t),o.push({period:t.period,periodText:t.periodText})),e)),[]),e.flatMap((e=>e.category.split(","))).reduce(((e,t)=>(e[t.trim()]||(r.push(t.trim()),e[t.trim()]=!0),e)),{});const c=a.content.cloneNode(!0);o.forEach(((e,t)=>{const i=p(a,e,!1);if(i){const e=i.querySelector(".tab-item"),l=i.querySelector(".nav-link");e.classList.remove("active"),l.classList.remove("show"),c.querySelector(".selector-list ul").append(e),c.querySelector(".selector-dropdown .nav-link").after(l),t>=o.length-1&&n.append(c)}}));const u=s.content.cloneNode(!0);r.forEach(((e,t)=>{const i=p(s,!1,e);if(i){const e=i.querySelector(".tab-item"),n=i.querySelector(".nav-link");e.classList.remove("active"),n.classList.remove("show"),u.querySelector(".selector-list ul").append(e),u.querySelector(".selector-dropdown .nav-link").after(n),t>=r.length-1&&l.append(u)}})),i()}(L,e,(function(){const s=e.querySelectorAll(".nav-link"),r=e.querySelectorAll(".supplements-calendar__controller-selector");for(let e of s)e.addEventListener("click",(t=>{e.classList.contains("active")?(e.parentNode.querySelector(".selector-list").classList.remove("show"),e.classList.remove("active")):(s.forEach((e=>{e.classList.remove("active"),e.parentNode.querySelector(".selector-list").classList.remove("show")})),e.classList.remove("active"),e.parentNode.querySelector(".selector-list").classList.add("show"),e.classList.add("active"))}));for(let s of r)for(let r of s.querySelectorAll(".tab-item"))r.addEventListener("click",(d=>{d.preventDefault();const p=d.target.getAttribute("aria-controls"),m=r.closest(".selector-dropdown").querySelectorAll(".nav-link"),g=e.querySelector(".tile-listing-with-filter__pagination"),f=e.querySelector(".tile-listing-with-filter__pagination_mobile");for(let e of s.querySelectorAll(".tab-item"))e.getAttribute("aria-controls")===p?e.classList.add("active"):e.classList.remove("active");for(let e of m)e.classList.remove("active"),e.parentNode.querySelector(".selector-list").classList.remove("show"),e.getAttribute("aria-controls")===p?e.classList.add("show"):e.classList.remove("show");if(L=n.filter((t=>{const i=new Date,n=i.getMonth(),l=i.getFullYear(),a=t.filterPeriod.split("/"),s=new Date(a[2],a[1]-1,a[0]),o=s.toLocaleString("default",{month:"long"}).toLowerCase()+"-"+s.getFullYear().toString();let r=t.filterCategory.split(/,\s*/),c=e.querySelector(".supplementsMonth .nav-link.show").getAttribute("aria-controls"),u=e.querySelector(".supplementsCategory .nav-link.show").getAttribute("aria-controls");if(c&&u){let e=r.filter((e=>u==e))[0];return c==o&&u==e}{let e=r.filter((e=>u==e))[0];return e&&(e=e.toLowerCase().replace(/\s/g,"")),""==c&&""==u||(c==o||u==e&&s.getMonth()>=n&&s.getFullYear()>=l)}})),v=1,c.start=0,c.end=c.limit,!t()&&g?g.outerHTML="":t()&&f&&(f.outerHTML=""),h(L),a(L,l)>1){i(e,u,v,a(L,l));for(let e=0;e<u.length;e++)u[e].addEventListener("click",S);o(L,e,h,c,l,v,a(L,l))}y(0,l-1,L),L.length>=1?e.querySelector(".supplements-calendar .no-result-message").classList.remove("d-block"):e.querySelector(".supplements-calendar .no-result-message").classList.add("d-block")}));document.addEventListener("click",(e=>{if(!e.target.closest(".supplements-calendar__controller-selector"))for(let e of s)e.classList.remove("active"),e.parentNode.querySelector(".selector-list").classList.remove("show")})),f.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),L=[],v=1,b(n);for(let e of r){for(let[t,i]of e.querySelectorAll(".nav-link").entries())0==t?i.classList.add("show"):i.classList.remove("show");for(let[t,i]of e.querySelectorAll(".tab-item").entries())0==t?i.classList.add("active"):i.classList.remove("active")}if(e.querySelector(".supplements-calendar .no-result-message").classList.remove("d-block"),a(L,l)>1){i(e,u,v,a(L,l));for(let e=0;e<u.length;e++)u[e].addEventListener("click",S);o(L,e,h,c,l,a(L,l))}h(L)}))}))}))};function d(e,t){const i=e.content.cloneNode(!0),n=i.querySelector(".supplements-table__month"),l=i.querySelector(".supplements-table__title"),a=i.querySelector(".supplements-table__description"),s=i.querySelector(".supplements-table__category");return n.innerHTML=t.periodText,l.innerHTML=t.title,a.innerHTML=t.description,s.innerHTML=t.category,i||null}function p(e,t,i){const n=e.content.cloneNode(!0),l=n.querySelector(".nav-link"),a=n.querySelector(".tab-item");return t?(a.innerHTML=t.periodText,l.innerHTML=t.periodText,l.setAttribute("aria-controls",t.period.replace(/ /g,"-").toLowerCase()),a.setAttribute("aria-controls",t.period.replace(/ /g,"-").toLowerCase())):i&&(a.innerHTML=i,a.setAttribute("aria-controls",i.replace(/ /g,"-").toLowerCase()),l.innerHTML=i,l.setAttribute("aria-controls",i.replace(/ /g,"-").toLowerCase())),n||null}c.forEach((e=>{u(e)}))}();
