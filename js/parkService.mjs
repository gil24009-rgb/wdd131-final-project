// parkService.mjs
// Fetches data from the NPS API for the site.

const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

// Keep Yellowstone for this project
const parkCode = "yell";

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    description: "Learn about the visitor centers in the park."
  }
];

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };

  const response = await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error("response not ok");
  }

  return response.json();
}

export async function getParkData() {
  const parkData = await getJson(`parks?parkCode=${parkCode}&limit=1`);
  return parkData.data[0];
}

export function getInfoLinks(images = []) {
  const startIndex = 2;

  return parkInfoLinks.map((item, index) => {
    const imageObj = images[startIndex + index];

    return {
      ...item,
      image: imageObj?.url || "/images/topo_pattern.png",
      alt: imageObj?.altText || "Park information image"
    };
  });
}

export async function getAlertsData(parkCodeParam) {
  const result = await getJson(`alerts?parkCode=${parkCodeParam}&limit=10`);
  return result.data || [];
}

export async function getVisitorCenterData(parkCodeParam) {
  const result = await getJson(`visitorcenters?parkCode=${parkCodeParam}&limit=50`);
  return result.data || [];
}