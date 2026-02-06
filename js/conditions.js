// conditions.js
import "../css/style.css";
import "../css/conditions.css";

import { getParkData, getAlertsData, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activityTemplate } from "./templates.mjs";

function setAlerts(alerts) {
  const list = document.querySelector(".alerts-list");
  if (!list) return;

  if (!alerts || alerts.length === 0) {
    list.innerHTML = `<li class="alert"><div><h3>No alerts at this time</h3><p>Check back later for updates.</p></div></li>`;
    return;
  }

  list.innerHTML = alerts.map(alertTemplate).join("");
}

function setVisitorCenters(centers) {
  const list = document.querySelector(".visitor-centers");
  if (!list) return;

  if (!centers || centers.length === 0) {
    list.innerHTML = `<li class="visitor-center"><h3>No visitor center data</h3><p>There are no visitor centers listed for this park.</p></li>`;
    return;
  }

  list.innerHTML = centers.map(visitorCenterTemplate).join("");
}

function setActivities(activities) {
  const list = document.querySelector(".activities-list");
  if (!list) return;

  if (!activities || activities.length === 0) {
    list.innerHTML = `<li>No activities listed.</li>`;
    return;
  }

  list.innerHTML = activities.map(activityTemplate).join("");
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  const alerts = await getAlertsData(parkData.parkCode);
  setAlerts(alerts);

  const centers = await getVisitorCenterData(parkData.parkCode);
  setVisitorCenters(centers);

  setActivities(parkData.activities);
}

init();