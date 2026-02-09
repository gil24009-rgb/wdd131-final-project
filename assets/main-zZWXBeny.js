import{g as o,a,s as i,m as r}from"./setHeaderFooter-DWgclDoh.js";function s(n){const t=document.querySelector(".intro");t.innerHTML=`<h1>${n.fullName}</h1>
  <p>${n.description}</p>`}function c(n){const t=document.querySelector(".info"),e=n.map(r);t.insertAdjacentHTML("afterbegin",e.join(""))}async function m(){const n=await o(),t=a(n.images);i(n),s(n),c(t)}m();
