import{g as o,a as i,s as r,m as a}from"./setHeaderFooter-CCW-zev5.js";function s(n){const t=document.querySelector(".intro");t&&(t.innerHTML=`<h1>${n.fullName}</h1>
    <p>${n.description}</p>`)}function c(n){const t=document.querySelector(".info");if(!t)return;const e=n.map(a);t.insertAdjacentHTML("afterbegin",e.join(""))}async function f(){const n=await o(),t=i(n.images);r(n),s(n),c(t)}f();
