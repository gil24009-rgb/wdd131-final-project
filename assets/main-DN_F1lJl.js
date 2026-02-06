(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const a="https://developer.nps.gov/api/v1/",c="sISriyvXC6KqXfVzZKpZRcpjeVgF2ZGyBqaxTVc4",l="yell",u=[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}];async function p(e){const t={method:"GET",headers:{"X-Api-Key":c}},r=await fetch(a+e,t);if(!r.ok)throw new Error("response not ok");return r.json()}async function d(){return(await p(`parks?parkCode=${l}&limit=1`)).data[0]}function m(e=[]){return u.map((r,i)=>{const n=e[2+i];return{...r,image:(n==null?void 0:n.url)||"/images/topo_pattern.png",alt:(n==null?void 0:n.altText)||"Park information image"}})}function f(e){return`
    <a href="/" class="hero-banner__title">${e.name}</a>
    <p class="hero-banner__subtitle">
      <span>${e.designation}</span>
      <span>${e.states}</span>
    </p>
  `}function h(e){return`<div class="media-card">
    <a class="media-card__link" href="${e.link}">
      <img src="${e.image}" alt="${_(e.name)}" class="media-card__img">
      <h3 class="media-card__title">${e.name}</h3>
    </a>
    <p class="media-card__desc">${e.description}</p>
  </div>`}function g(e){return e.find(r=>r.type==="Mailing")}function y(e){const t=e.find(r=>r.type==="Voice");return t?t.phoneNumber:""}function k(e){const t=g(e.addresses||[]),r=y(e.contacts&&e.contacts.phoneNumbers||[]),i=t?t.line1:"",n=t?t.city:"",o=t?t.stateCode:"",s=t?t.postalCode:"";return`<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div class="contact__address">
      <p>${i}</p>
      <p>${n}, ${o} ${s}</p>
    </div>
    <h4>Phone:</h4>
    <p class="contact__phone">${r}</p>
  </section>`}function _(e){return String(e).replace(/<[^>]*>/g,"").trim()}function $(e){const t=document.querySelector(".disclaimer > a");t&&(t.href=e.url,t.innerHTML=e.fullName),document.querySelector("head > title").textContent=e.fullName;const r=document.querySelector(".hero-banner > img");r&&Array.isArray(e.images)&&e.images[0]&&(r.src=e.images[0].url,r.alt=e.images[0].altText||`${e.fullName} hero image`);const i=document.querySelector(".hero-banner__content");i&&(i.innerHTML=f(e))}function v(e){const t=document.querySelector("#park-footer");t&&(t.innerHTML=k(e))}function L(e){$(e),v(e)}function b(e){const t=document.querySelector(".intro");t&&(t.innerHTML=`<h1>${e.fullName}</h1>
    <p>${e.description}</p>`)}function C(e){const t=document.querySelector(".info");if(!t)return;const r=e.map(h);t.insertAdjacentHTML("afterbegin",r.join(""))}async function I(){const e=await d(),t=m(e.images);L(e),b(e),C(t)}I();
