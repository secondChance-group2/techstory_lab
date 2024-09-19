window.addEventListener("DOMContentLoaded", init);
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

let productsURI = undefined;
let main;
let template;

function init() {
  main = document.querySelector("#equipment_container");
  template = document.querySelector("#equipmentTemplate").content;
  if (params.has("category")) {
    productsURI = `https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?category=${category}`;
  } else {
    productsURI = `https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?limit=10`;
  }
  fetch(
    `https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?limit=5&category=eq.${category}`,
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => handleData(data));
}

function handleData(json) {
  //looper og kalder showProduct
  json.forEach(showProduct);
}

function showProduct(product) {
  console.log("product", product);
  const copy = template.cloneNode(true);
  //ændre indhold

  document.querySelector("h1").textContent = product.category;

  copy.querySelector(".brand2").textContent = product.brand;
  copy.querySelector(".product_name").textContent = product.product_name_model;
  copy.querySelector(".type2").textContent = product.type;
  copy.querySelector("a").href = `singleview.html?ID=${product.ID}`;
  //placeholder billede
  copy.querySelector("img").src = `img/kat_eks_camera.webp`;
  //appende
  main.appendChild(copy);
}
