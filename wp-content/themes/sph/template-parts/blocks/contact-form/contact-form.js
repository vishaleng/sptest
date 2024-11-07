!function(){"use strict";const e={MD:600,LG:992,XL:1366},t="is-valid",o="is-empty",n="is-invalid",r=100,c=64;function s(e){return e.offsetTop+(e.offsetParent&&s(e.offsetParent))}function a(t,o=0){if(t){const i=s(t)-(window.matchMedia((n="min-width",a=e.LG,`(${n}: ${a}px)`)).matches?r:c)-o;document.documentElement.scrollTo({top:i,behavior:"smooth"})}var n,a}function i(e){e.addEventListener("change",(function(){l(e)}))}function l(e){const t=e.closest(".form-input"),r=e.closest(".form-mobile"),c=e.closest(".form-file"),s=e.classList.contains("g-recaptcha-response"),a=t||r||c;!e.required&&!s||e.value?(e.classList.remove(o),a&&a.classList.remove(o)):(e.classList.add(o),a&&a.classList.add(o)),c?!function(e){const t=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf"],o=10485760;if(e){if(!t.includes(e.type))return!1;if(e.size>o)return!1}return!0}(e.files[0])?(e.classList.add(n),a&&a.classList.add(n)):(e.classList.remove(n),a&&a.classList.remove(n)):r||(e.checkValidity()?(e.classList.remove(n),a&&a.classList.remove(n)):(e.classList.add(n),a&&a.classList.add(n)))}function u(e){let n=!1;return e.forEach((e=>{const r=e.closest(".form-mobile");if(r){if(e.required&&""==e.value)return r.classList.add(o),void(n=!1);if(!function(e){let o=!1;e.classList.contains(t)&&(o=!0);return o}(r)&&e.value)return void(n=!1);n=!0}})),n}function d(e,t){const o=new URLSearchParams(window.location.search);o.set(e,t),history.pushState&&window.history.pushState(null,"","?"+o.toString())}function m(e){const t=new URLSearchParams(window.location.search);t.delete(e),history.pushState&&window.history.pushState(null,"","?"+t.toString())}const f=[...document.querySelectorAll(".contact-form")],p="has-active-subjects",y="d-none",v=".hidden-form-field",h="#oid",S="#retURL",q="#lead_source",L="#contactUsName",E="#contactUsEmail",b=".iti__selected-dial-code",w="#phone",g="#contactUsIndustry",U="#contactUsCompany",C="#contactUsDesignation",A="#contactUsMessage",j="#contactUs_csrf_token",_=".g-recaptcha-response",T="#contact-details",R='.cta[type="submit"]',O="ctopic",x="csubject",I=e=>{const t=window.dropdownCombinations,n=e.querySelector("#topic"),r=e.querySelector("#subject"),c=e.querySelector("#api-form-url").value,s=e.querySelector(".hidden-html-template-basic"),f=e.querySelector(".hidden-html-template-company");let I=!1,M="",N="",P="",H=[],D=[];s&&(H=JSON.parse(s.innerHTML)),f&&(D=JSON.parse(f.innerHTML));const k=e=>Object.entries(t).filter((([t,o])=>!!o.value.includes(e)&&o))[0],G=t=>{t?e.querySelectorAll(v).forEach((e=>{e.classList.remove(y),e.querySelector(".hidden-required")&&e.querySelector(".hidden-required").setAttribute("required","true")})):e.querySelectorAll(v).forEach((e=>{e.classList.add(y),e.querySelector(".hidden-required")&&e.querySelector(".hidden-required").removeAttribute("required")}))},F=t=>{const o=e.querySelector(".contact-form-body");let n="";if(M=t,"api_form"==t&&(n=c),""!=n&&o&&(async e=>{const t=await fetch(e,{type:"GET",contentType:"text/html",headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0});return await t.text()})(n).then((e=>{e&&(o.innerHTML=e,J(t))})),"sales_force"==t){const n=e.querySelector("#salesforce-form").content.cloneNode(!0).querySelector("form");o.innerHTML="",o.append(n),J(t)}},J=t=>{setTimeout((()=>{const o=e.querySelector(".contact-form-body").querySelector("form");if(o){o.querySelectorAll("script").forEach((e=>{const t=document.createElement("script");let n=e.src;t.src=n,t.type=e.type||"text/javascript",o.appendChild(t)})),function(e){e.querySelectorAll(".form-input:not(.d-none) input").forEach((e=>i(e)))}(o),function(e){e.querySelectorAll(".form-input:not(.d-none) select").forEach((e=>i(e)))}(o),function(e){e.querySelectorAll(".form-input:not(.d-none) textarea").forEach((e=>i(e)))}(o),$(o,t,e)}}))};function Y(e){const t=e.querySelector(R);t&&t.classList.remove("disabled")}function V(e){const t=e.querySelector(".contact-form__innerContent"),o=e.querySelector(".contact-form__success_innerContent");t.classList.add("d-none"),o.classList.remove("d-none"),a(e);const n=new CustomEvent("GAFormSubmitSuccess",{detail:{name:"ContactUs"}});window.dispatchEvent(n)}const $=(e,t,n)=>{const r=e.querySelectorAll("#phone");e.addEventListener("submit",(function(c){c.preventDefault(),function(e){const t=e.querySelector(R);t&&t.classList.add("disabled")}(e),function(e){e.querySelectorAll(".form-input:not(.d-none) input").forEach((e=>l(e)))}(e),function(e){e.querySelectorAll(".form-input:not(.d-none) select").forEach((e=>l(e)))}(e),function(e){e.querySelectorAll(".form-input:not(.d-none) textarea").forEach((e=>l(e)))}(e),function(e){const t=e.querySelector(".g-recaptcha-response");if(t){const e=t.closest(".g-recaptcha"),n=t.closest(".form-input");t.value?(n&&n.classList.remove(o),e&&e.classList.remove(o)):(n&&n.classList.add(o),e&&e.classList.add(o))}}(e);let s=0;for(const t of e.elements)("hidden"===t.type||null!==t.offsetParent)&&(t.checkValidity()||s++);return 0===s&&function(e){const t=e.querySelector(_),o=t?t.value:"";return Boolean(o)}(e)&&u(r)?(!function(e){const t=e.querySelector(R);t&&t.parentElement.classList.add("loading")}(e),(async(e,t)=>{let o="",n="",r="";if("api_form"==t){o=e.action;const t=e.querySelector(L).value,c=e.querySelector(E).value,s=e.querySelector(b).textContent,a=e.querySelector(w).value,i=e.querySelector(g).value,l=e.querySelector(U).value,u=e.querySelector(C).value,d=e.querySelector(A).value,m=e.querySelector(_).value,f=e.querySelector(j).value;n={typeOfEnquiry:N,subjectOfEnquiry:P,contactUsName:t,contactUsEmail:c,contactUsPhone:a?s+" "+a:"",contactUsIsForCompany:I?"Yes":"No",contactUsIndustry:i,contactUsCompany:l,contactUsDesignation:u,contactUsMessage:d,contactUs_csrf_token:f,"g-recaptcha-response":m},r={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)};const p=await fetch(o,r);return await p.json()}if("sales_force"==t){const t=e.querySelector(h).value,n=e.querySelector(S).value,c=e.querySelector(q).value,s=e.querySelector(L).value,a=e.querySelector(E).value,i=e.querySelector(b).textContent,l=e.querySelector(w).value,u=I?"Yes":"No",d=e.querySelector(g).value||"",m=e.querySelector(U).value||"",f=e.querySelector(C).value||"",p=e.querySelector(A).value,y=e.querySelector(T),v=y.getAttribute("name"),j=e.querySelector(A).getAttribute("name");let _="";if(I){const e={name:s.trim(),email:a.trim(),mobile:l?i.trim()+l.trim():"",iscompany:u,industry:d.trim(),company:m.trim(),designation:f.trim(),message:p.trim()};_=X(D.map((t=>{if(e[t.id]){const o=encodeURIComponent(e[t.id]);return B(K(t.title)+":"+z(o))}return""})).join(""))}else{const e={name:s.trim(),email:a.trim(),mobile:l?i.trim()+l.trim():"",iscompany:u,message:p.trim()};_=X(H.map((t=>{if(e[t.id]){const o=encodeURIComponent(e[t.id]);return B(K(t.title)+":"+z(o))}return""})).join(""))}y.value=_;const R=encodeURIComponent(m),O=encodeURIComponent(p.trim());r={method:"POST",mode:"no-cors"};const x=l?i+" "+l:"";return o=e.action+"&oid="+t+"&retURL="+n+"&lead_source="+c+"&last_name="+s+"&email="+a+"&mobile="+x+"&company="+R+"&"+v+"="+O+"&"+j+"="+y.value,await fetch(o,r)}})(e,t).then((t=>{"sales_force"==M||t&&"success"==t.message?V(n):Y(e)}))):(!function(e){const t=e.querySelector(R);t&&t.parentElement.classList.remove("loading")}(e),Y(e)),!1}))};function z(e){return Q("span",e)}function B(e){return Q("p",e)}function X(e){return Q("div",e)}function K(e){return Q("strong",e)}function Q(e,t){return encodeURIComponent("<"+e+">")+t+encodeURIComponent("</"+e+">")}(()=>{let e=n.querySelectorAll(".form-option");for(const t of e)t.remove();Object.entries(t).forEach((e=>{let t=document.createElement("option");t.className="form-option",t.value=e[1].value,t.textContent=e[0],n.append(t)}))})(),n.addEventListener("change",(t=>{const o=e.querySelector(".contact-form-body");let n=t.target.value;if(o.innerHTML="",N=n,P="",""!=n){let t=k(n);if(t[1].hasSubject)(e=>{let t=r.querySelectorAll(".form-option"),o=k(e);for(const e of t)e.remove();o[1].subjects.forEach((e=>{let t=document.createElement("option");t.className="form-option",t.value=e.value,t.textContent=e.name,r.append(t)}))})(n),e.classList.add(p);else{let o=t[1].form;e.classList.remove(p),F(o)}d(O,n)}else e.classList.remove(p),m(O);m(x)})),r.addEventListener("change",(t=>{const o=e.querySelector(".contact-form-body");let r=n.value,c=t.target.value;if(P=c,""!=c){let e=((e,t)=>{let o=k(e),n=!1;return o[1].hasSubject&&(n=o[1].subjects.filter((e=>!!e.value.includes(t)&&e))[0].form),n})(r,c);F(e),d(x,c)}else o.innerHTML="",m(x)})),document.addEventListener("change",(function(t){e.querySelectorAll(".isForCompany").forEach((e=>{t.target==e&&("Yes"==e.value?(I=!0,G(!0)):(I=!1,G(!1)))}))})),(()=>{const o=new URL(window.location.href).searchParams;let c="",s="",i="",l=o.get(O),u=o.get(x);l=decodeURIComponent(l),u=decodeURIComponent(u),l&&Object.entries(t).forEach((e=>{e[1].value.toLowerCase()===l.toLowerCase()&&(n.value=e[1].value,n.dispatchEvent(new Event("change")),c=e[1].value,i=k(c))})),u&&c&&i[1].hasSubject&&i[1].subjects.forEach((e=>{e.value.toLowerCase()===u.toLowerCase()&&(r.value=e.value,r.dispatchEvent(new Event("change")),s=e.name)})),(c&&!i[1].hasSubject||c&&i[1].hasSubject&&s)&&setTimeout((()=>{a(e)}),1e3)})()};f.forEach((e=>{I(e)}))}();