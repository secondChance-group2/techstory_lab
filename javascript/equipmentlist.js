window.addEventListener("DOMContentLoaded", init);
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

let productsURI = undefined;
let main;
let template;

function init() {
  main = document.querySelector("main");
  template = document.querySelector("#equipmentTemplate").content;
  if (params.has("category")) {
    productsURI = `https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?category=${category}`;
  } else {
    productsURI = `https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?limit=10`;
  }
  fetch(productsURI)
    .then((res) => res.json())
    .then(handleData);
}

function handleData(json) {
  //looper og kalder showProduct
  json.forEach(showProduct);
}

function showProduct(product) {
  console.log("product", product);
  const copy = template.cloneNode(true);
  //ændre indhold

  copy.querySelector("h3").textContent = tsl.category;

  //appende
  main.appendChild(copy);
}
