!function(){"use strict";const{createApp:t,ref:e}=Vue;[...document.querySelectorAll("footer")].forEach((a=>{const o=a.getAttribute("data-api-url"),u=e(null),c=e(null);fetch(o).then((t=>t.json())).then((t=>{u.value=t})).catch((t=>c.value=t)),t({data:()=>({data:u})}).mount("#footer")}))}();
