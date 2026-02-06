(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const p="https://developer.nps.gov/api/v1/",d="sISriyvXC6KqXfVzZKpZRcpjeVgF2ZGyBqaxTVc4",f="yell",m=[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}];async function a(e){const t={method:"GET",headers:{"X-Api-Key":d}},n=await fetch(p+e,t);if(!n.ok)throw new Error("response not ok");return n.json()}async function $(){return(await a(`parks?parkCode=${f}&limit=1`)).data[0]}function b(e=[]){return m.map((n,s)=>{const r=e[2+s];return{...n,image:(r==null?void 0:r.url)||"/images/topo_pattern.png",alt:(r==null?void 0:r.altText)||"Park information image"}})}async function _(e){return(await a(`alerts?parkCode=${e}&limit=10`)).data||[]}async function k(e){return(await a(`visitorcenters?parkCode=${e}&limit=50`)).data||[]}function C(e){return`<article class="media-card">
    <a class="media-card__link" href="${e.link}">
      <img class="media-card__img" src="${e.image}" alt="${e.alt||""}" loading="lazy" />
      <h2 class="media-card__title">${e.name}</h2>
      <p class="media-card__desc">${e.description}</p>
    </a>
  </article>`}function h(e){var s,r,o,i;const t=((r=(s=e.images)==null?void 0:s[0])==null?void 0:r.url)||"/images/topo_pattern.png",n=((i=(o=e.images)==null?void 0:o[0])==null?void 0:i.altText)||e.fullName;return`<section class="hero-banner">
    <img class="hero-banner__image" src="${t}" alt="${n}" />
    <div class="hero-banner__content">
      <div>
        <p class="hero-banner__subtitle">National Park Service</p>
        <p class="hero-banner__subtitle">${e.states}</p>
      </div>
      <h1 class="hero-banner__title">${e.fullName}</h1>
    </div>
  </section>`}function g(e){var r,o,i,c,l;const t=((r=e.addresses)==null?void 0:r.find(u=>u.type==="Physical"))||((o=e.addresses)==null?void 0:o[0]),n=t?`${t.line1||""} ${t.line2||""}`.trim():"",s=t?`${t.city||""}, ${t.stateCode||""} ${t.postalCode||""}`.trim():"";return`<div class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <p>${n}</p>
    <p>${s}</p>
    <h4>Phone:</h4>
    <p>${((l=(c=(i=e.contacts)==null?void 0:i.phoneNumbers)==null?void 0:c[0])==null?void 0:l.phoneNumber)||"Not Available"}</p>
  </div>`}function N(e){let t;return e.category==="Park Closure"?t="closure":t=e.category.toLowerCase(),`<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${`/wdd131-final-project/images/sprite.symbol.svg#alert-${t}`}"></use>
    </svg>
    <div>
      <h3 class="alert-${t}">${e.title}</h3>
      <p>${e.description}</p>
    </div>
  </li>`}function T(e){const t=e.description||"No description provided.",n=e.directionsInfo||"";return`<li class="visitor-center">
    <h3>${e.name}</h3>
    <p>${t}</p>
    ${n?`<p class="directions">${n}</p>`:""}
  </li>`}function L(e){return`<li>${e.name}</li>`}function y(e){const t=document.querySelector(".disclaimer > a");t&&(t.href=e.url,t.innerHTML=e.fullName),document.querySelector("head > title").textContent=e.fullName;const n=document.querySelector(".hero-banner > img");n&&Array.isArray(e.images)&&e.images[0]&&(n.src=e.images[0].url,n.alt=e.images[0].altText||`${e.fullName} hero image`);const s=document.querySelector(".hero-banner__content");s&&(s.innerHTML=h(e))}function v(e){const t=document.querySelector("#park-footer");t&&(t.innerHTML=g(e))}function x(e){y(e),v(e)}function A(){const e=document.querySelector("#global-nav-toggle"),t=document.querySelector(".global-nav");!e||!t||e.addEventListener("click",n=>{let s=n.target;t.classList.toggle("show"),s.tagName!=="BUTTON"&&(s=s.closest("button"));const r=t.classList.contains("show");s.setAttribute("aria-expanded",String(r)),s.setAttribute("aria-label",r?"Close Menu":"Open Menu")})}export{b as a,_ as b,k as c,N as d,A as e,L as f,$ as g,C as m,x as s,T as v};
