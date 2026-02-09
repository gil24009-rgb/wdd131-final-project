(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const l={images:[{credit:"NPS/Jim Peaco",title:"Grand Prismatic Spring",altText:"Brilliant blues and greens of a hot spring ringed by oranges, yellows, reds, and browns.",caption:"The bright colors found in Grand Prismatic Spring come from thermophiles—microorganisms that thrive in hot temperatures",url:"https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg"},{credit:"NPS/Jim Peaco",title:"Aurum Geyser",altText:"A crowd of people standing along a wooden boardwalk watches a geyser erupt.",caption:"Aurum Geyser erupting",url:"https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"},{credit:"NPS/Diane Renkin",title:"Black Pool",altText:"A visitor stands on a boardwalk near a hot spring and a lake.",caption:"Black Pool at the West Thumb Geyser Basin",url:"https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg"},{credit:"NPS/Jim Peaco",title:"Beehive Geyser",altText:"People on a wooden boardwalk watch a geyser erupt.",caption:"Visitors to the Upper Geyser Basin watch Beehive Geyser erupt.",url:"https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg"},{credit:"NPS/Jim Peaco",title:"Wolf howling",altText:"A wolf howls while standing on a snowy field.",caption:"Alpha male of the Canyon wolf pack",url:"https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg"},{credit:"NPS/Jim Peaco",title:"Fishing Bridge Trailside Museum",altText:"Visitors walk into a rustic, log and stone building.",caption:"The stone-and-log architecture of Fishing Bridge Trailside Museum became a prototype for park buildings all around the country",url:"https://www.nps.gov/common/uploads/structured_data/3C7D573E-1DD8-B71B-0B5C0DF5BB91D043.jpg"},{credit:"NPS/Diane Renkin",title:"Great Fountain Geyser",altText:"A geyser erupting in the middle of a large pool.",caption:"Great Fountain Geyser erupts against a blue summer sky",url:"https://www.nps.gov/common/uploads/structured_data/3C7D5AB4-1DD8-B71B-0BF91CF45345ED16.jpg"},{credit:"NPS/Jim Peaco",title:"Old Faithful Geyser in winter",altText:"A crowd in front of an erupting geyser during a snowy winter day.",caption:"Winter is a magical time to watch Old Faithful Geyser erupt",url:"https://www.nps.gov/common/uploads/structured_data/3C7D610A-1DD8-B71B-0BEF676112007818.jpg"},{credit:"NPS/Jim Peaco",title:"Palette Spring",altText:"Visitors walk in front of a brightly colored, terraced landscape.",caption:"The vibrant colors of Palette Springs are formed by thermophiles—heat-loving organisms",url:"https://www.nps.gov/common/uploads/structured_data/3C7D8903-1DD8-B71B-0BA8669AEEF74379.jpg"},{credit:"NPS/Peggy Olliff",title:"Bighorn sheep",altText:"Two bighorn sheep laying on the ground.",caption:"Two bighorn rams rest and chew their cud",url:"https://www.nps.gov/common/uploads/structured_data/3C7D95DD-1DD8-B71B-0BC4FA19BD72F0EC.jpg"},{credit:"NPS/Diane Renkin",title:"Lower Falls from Artist Point",altText:"A river plunges into a steep, barren canyon.",caption:"Lower Falls from Artist Point",url:"https://www.nps.gov/common/uploads/structured_data/8A729E5B-B263-9C49-7AD4C4B8E70064E0.jpg"},{credit:"NPS/Diane Renkin",title:"Bison herd in a thermal area",altText:"A herd of bison grazing through a barren and steaming thermal area.",caption:"Bison near Mud Volcano",url:"https://www.nps.gov/common/uploads/structured_data/8A869F85-FB2E-5EAF-11367EB2DB75963D.jpg"},{credit:"NPS/Jim Peaco",title:"Grizzly bear",altText:"A grizzly bear standing on a fallen tree.",caption:"Grizzly bear in the woods",url:"https://www.nps.gov/common/uploads/structured_data/8A902498-9D11-D06D-E352C073E3E85A58.jpg"},{credit:"NPS/Dave Krueger",title:"Yellowstone River",altText:"A greenish river meanders through a hilly river valley.",caption:"The Yellowstone River near Tower Fall",url:"https://www.nps.gov/common/uploads/structured_data/8AB8F1A3-D1A0-A6FB-E8E5CAA8B2937264.jpeg"}]},p=[{name:"Current Conditions &#x203A;",link:"conditions.html",image:l.images[2].url,description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",image:l.images[3].url,description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",image:l.images[9].url,description:"Learn about the visitor centers in the park."}],d="https://developer.nps.gov/api/v1/",m="sISriyvXC6KqXfVzZKpZRcpjeVgF2ZGyBqaxTVc4";async function i(e){const t={method:"GET",headers:{"X-Api-Key":m}};let r={};const n=await fetch(d+e,t);if(n.ok)r=await n.json();else throw new Error("response not ok");return r}function T(e){return p.map((r,n)=>(r.image=e[n+2].url,r))}async function $(){return(await i("parks?parkCode=yell ")).data[0]}async function k(e){return(await i(`alerts?parkCode=${e}`)).data}async function P(e){return(await i(`visitorcenters?parkCode=${e}`)).data}async function C(e){return(await i(`visitorcenters?id=${e}`)).data[0]}const g="/wdd131-final-project/assets/sprite.symbol-D5XSI_4v.svg";function h(e){return`<a href="/" class="hero-banner__title">${e.name}</a>
    <p class="hero-banner__subtitle">
      <span>${e.designation}</span>
      <span>${e.states}</span>
    </p>`}function _(e){return`<div class="media-card">
    <a href="${e.link}">
    <img src="${e.image}" alt="${e.name}" class="media-card__img">
    <h3 class="media-card__title">${e.name}</h3>
    </a>
   <p>${e.description}</p>
     </div>`}function f(e){return e.find(r=>r.type==="Mailing")}function w(e){return e.find(r=>r.type==="Voice").phoneNumber}function y(e){const t=f(e.addresses),r=w(e.contacts.phoneNumbers);return`<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${t.line1}<p>
    <p>${t.city}, ${t.stateCode} ${t.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${r}</p>
  </section>
    `}function S(e){let t="";switch(e.category){case"Park Closure":t="closure";break;default:t=e.category.toLowerCase()}return`<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${g}#alert-${t}"></use>
  </svg>
  <div>
    <h3 class="alert-${t}">${e.title}</h3>
    <p>${e.description}</p>
  </div></li>`}function E(e){return`<li class="visitor-center">
  <h4><a href="visitor-center.html?id=${e.id}">${e.name}</a></h4>
  <p>${e.description}</p>
  <p>${e.directionsInfo}</p>
  </li>`}function F(e){return e.map(t=>`<li>${t.name}</li>`).join("")}function u(e){return`<svg class="icon" role="presentation" focusable="false">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/images/sprite.symbol.svg#${e}"
            ></use>
          </svg>`}function x(e,t,r,n){return`<details name="vc-details" id="${e}">
          <summary>
            ${u(r)}
            ${t}
          </summary>
          ${n}
        </details>`}function N(e){return`${u("ranger-station")} ${e}`}function L(e){const t=e.images[0];return`<figure>
          <img src="${t.url}" alt="${t.altText}" />
          <figcaption>${t.caption} <span>${t.credit}</span></figcaption>
        </figure>
        <p>${e.description}</p>`}function j(e,t){return`<ul>${e.map(t).join("")}</ul>`}function c(e){return`<section>
            <h3>${e.type} Address</h3>
            <address>
              ${e.line1}<br />
              ${e.city}, ${e.stateCode} ${e.postalCode}
            </address>
          </section>`}function G(e){const t=e.find(a=>a.type==="Physical"),r=e.find(a=>a.type==="Mailing");let n=c(t);return r&&(n+=c(r)),n}function q(e){return`<li>${e}</li>`}function M(e){return`<p>${e}</p>`}function I(e){return`<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${e.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${e.phoneNumbers[0].phoneNumber}">${e.phoneNumbers[0].phoneNumber}</a>
          </section>`}function V(e){return`<li><img src="${e.url}" alt="${e.altText}" ><li>`}function v(e){let t=e.target;document.querySelector(".global-nav").classList.toggle("show"),t.tagName!="BUTTON"&&(t=t.closest("button")),document.querySelector(".global-nav").classList.contains("show")?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1),console.log("toggle")}function D(e){e.currentTarget.closest("li").querySelector(".global-nav__submenu").classList.toggle("show"),e.currentTarget.querySelector(".icon").classList.toggle("rotate")}function B(){const e=document.querySelector("#global-nav-toggle"),t=document.querySelectorAll(".global-nav__split-button__toggle");e.addEventListener("click",v),t.forEach(r=>{r.addEventListener("click",D)})}function b(e){const t=document.querySelector(".disclaimer > a");t.href=e.url,t.innerHTML=e.fullName,document.querySelector("head > title").textContent=e.fullName,document.querySelector(".hero-banner > img").src=e.images[0].url,document.querySelector(".hero-banner__content").innerHTML=h(e)}function A(e){document.querySelector("#park-footer").insertAdjacentHTML("afterbegin",y(e))}function O(e){b(e),A(e),B()}export{T as a,k as b,P as c,S as d,F as e,C as f,$ as g,N as h,L as i,G as j,x as k,M as l,_ as m,j as n,I as o,V as p,q,O as s,E as v};
