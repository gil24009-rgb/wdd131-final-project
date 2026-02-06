// templates.mjs
// HTML template helpers

export function mediaCardTemplate(item) {
  return `<article class="media-card">
    <a class="media-card__link" href="${item.link}">
      <img class="media-card__img" src="${item.image}" alt="${item.alt || ""}" loading="lazy" />
      <h2 class="media-card__title">${item.name}</h2>
      <p class="media-card__desc">${item.description}</p>
    </a>
  </article>`;
}

export function parkInfoTemplate(data) {
  const heroImage = data.images?.[0]?.url || "/images/topo_pattern.png";
  const heroAlt = data.images?.[0]?.altText || data.fullName;

  return `<section class="hero-banner">
    <img class="hero-banner__image" src="${heroImage}" alt="${heroAlt}" />
    <div class="hero-banner__content">
      <div>
        <p class="hero-banner__subtitle">National Park Service</p>
        <p class="hero-banner__subtitle">${data.states}</p>
      </div>
      <h1 class="hero-banner__title">${data.fullName}</h1>
    </div>
  </section>`;
}

export function footerTemplate(data) {
  const addr = data.addresses?.find((a) => a.type === "Physical") || data.addresses?.[0];

  const street = addr ? `${addr.line1 || ""} ${addr.line2 || ""}`.trim() : "";
  const cityStateZip = addr ? `${addr.city || ""}, ${addr.stateCode || ""} ${addr.postalCode || ""}`.trim() : "";

  return `<div class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <p>${street}</p>
    <p>${cityStateZip}</p>
    <h4>Phone:</h4>
    <p>${data.contacts?.phoneNumbers?.[0]?.phoneNumber || "Not Available"}</p>
  </div>`;
}

export function alertTemplate(alert) {
  let alertType;

  if (alert.category === "Park Closure") {
    alertType = "closure";
  } else {
    alertType = alert.category.toLowerCase();
  }

  const spriteHref = `${import.meta.env.BASE_URL}images/sprite.symbol.svg#alert-${alertType}`;

  return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spriteHref}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center) {
  const desc = center.description || "No description provided.";
  const directions = center.directionsInfo || "";

  return `<li class="visitor-center">
    <h3>${center.name}</h3>
    <p>${desc}</p>
    ${directions ? `<p class="directions">${directions}</p>` : ""}
  </li>`;
}

export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`;
}