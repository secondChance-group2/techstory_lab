window.addEventListener("DOMContentLoaded", init);
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("ID");

function init() {
  fetch(`https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?ID=eq.${id}`, {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc",
    },
  })
    .then((res) => res.json())
    .then((data) => showProduct(data));
}

function showProduct(items) {
  const item = items[0];
  document.querySelector(".modelName").textContent = item.product_name_model;
  document.querySelector(".type").textContent = item.type;
  document.querySelector(".brand").textContent = item.brand;
  document.querySelector(".single_img").src = `img/kat_eks_udstyr.webp`;
}

//function showProduct(product) {
//document.querySelector("h3").textContent = product.productdisplayname;
//document.querySelector(".brand").textContent = product.brandname;
//document.querySelector(".model").textContent = product.variantname;
//document.querySelector(".color").textContent = product.colour1;
//document.querySelector(".id-number").textContent = product.id;
//document.querySelector(".brandbio").textContent = product.brandbio;
//document.querySelector(
//"img"
//).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
//}
