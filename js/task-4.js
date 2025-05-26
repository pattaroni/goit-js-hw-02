"use strict";

function getShippingCost(country) {
  const costChina = 150;
  const costChile = 250;
  const costAustralia = 170;
  const costJamaica = 120;
  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${costChina} credits`;
    case "Chile":
      return `Shipping to ${country} will cost ${costChile} credits`;
    case "Australia":
      return `Shipping to ${country} will cost ${costAustralia} credits`;
    case "Jamaica":
      return `Shipping to ${country} will cost ${costJamaica} credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
