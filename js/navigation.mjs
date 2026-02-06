// navigation.mjs
// Enables the main global navigation toggle for mobile.

export function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav");

  if (!menuButton || !globalNav) return;

  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;

    globalNav.classList.toggle("show");

    // Ensure we set attributes on the actual button element
    if (target.tagName !== "BUTTON") {
      target = target.closest("button");
    }

    const isOpen = globalNav.classList.contains("show");
    target.setAttribute("aria-expanded", String(isOpen));
    target.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
  });
}