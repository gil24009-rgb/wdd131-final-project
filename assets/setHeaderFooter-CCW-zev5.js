(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const p="https://developer.nps.gov/api/v1/",d="sISriyvXC6KqXfVzZKpZRcpjeVgF2ZGyBqaxTVc4",f="yell",m=[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}];async function a(e){const t={method:"GET",headers:{"X-Api-Key":d}},n=await fetch(p+e,t);if(!n.ok)throw new Error("response not ok");return n.json()}async function v(){return(await a(`parks?parkCode=${f}&limit=1`)).data[0]}function b(e=[]){return m.map((n,o)=>{const r=e[2+o];return{...n,image:(r==null?void 0:r.url)||"/images/topo_pattern.png",alt:(r==null?void 0:r.altText)||"Park information image"}})}async function k(e){return(await a(`alerts?parkCode=${e}&limit=10`)).data||[]}async function _(e){return(await a(`visitorcenters?parkCode=${e}&limit=50`)).data||[]}function C(e){return`<article class="media-card">
    <a class="media-card__link" href="${e.link}">
      <img class="media-card__img" src="${e.image}" alt="${e.alt||""}" loading="lazy" />
      <h2 class="media-card__title">${e.name}</h2>
      <p class="media-card__desc">${e.description}</p>
    </a>
  </article>`}function h(e){var o,r,s,i;const t=((r=(o=e.images)==null?void 0:o[0])==null?void 0:r.url)||"/images/topo_pattern.png",n=((i=(s=e.images)==null?void 0:s[0])==null?void 0:i.altText)||e.fullName;return`<section class="hero-banner">
    <img class="hero-banner__image" src="${t}" alt="${n}" />
    <div class="hero-banner__content">
      <div>
        <p class="hero-banner__subtitle">National Park Service</p>
        <p class="hero-banner__subtitle">${e.states}</p>
      </div>
      <h1 class="hero-banner__title">${e.fullName}</h1>
    </div>
  </section>`}function g(e){var r,s,i,c,l;const t=((r=e.addresses)==null?void 0:r.find(u=>u.type==="Physical"))||((s=e.addresses)==null?void 0:s[0]),n=t?`${t.line1||""} ${t.line2||""}`.trim():"",o=t?`${t.city||""}, ${t.stateCode||""} ${t.postalCode||""}`.trim():"";return`<div class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <p>${n}</p>
    <p>${o}</p>
    <h4>Phone:</h4>
    <p>${((l=(c=(i=e.contacts)==null?void 0:i.phoneNumbers)==null?void 0:c[0])==null?void 0:l.phoneNumber)||"Not Available"}</p>
  </div>`}function T(e){let t="information";switch(e.category){case"Park Closure":t="closure";break;case"Caution":t="caution";break;case"Danger":t="danger";break;case"Information":t="information";break;default:t=(e.category||"information").toLowerCase()}return`<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${`/wdd131-final-project/images/sprite.symbol.svg#alert-${t}`}"></use>
    </svg>
    <div>
      <h3 class="alert-${t}">${e.title}</h3>
      <p>${e.description}</p>
    </div>
  </li>`}function x(e){const t=e.description||"No description provided.",n=e.directionsInfo||"";return`<li class="visitor-center">
    <h3>${e.name}</h3>
    <p>${t}</p>
    ${n?`<p class="directions">${n}</p>`:""}
  </li>`}function I(e){return`<li>${e.name}</li>`}function y(e){const t=document.querySelector(".disclaimer > a");t&&(t.href=e.url,t.innerHTML=e.fullName),document.querySelector("head > title").textContent=e.fullName;const n=document.querySelector(".hero-banner > img");n&&Array.isArray(e.images)&&e.images[0]&&(n.src=e.images[0].url,n.alt=e.images[0].altText||`${e.fullName} hero image`);const o=document.querySelector(".hero-banner__content");o&&(o.innerHTML=h(e))}function $(e){const t=document.querySelector("#park-footer");t&&(t.innerHTML=g(e))}function L(e){y(e),$(e)}export{b as a,k as b,_ as c,T as d,I as e,v as g,C as m,L as s,x as v};
