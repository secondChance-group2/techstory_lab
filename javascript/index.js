window.addEventListener("DOMContentLoaded", init);

//https://wbceqwohnppgnysnvrai.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc

//henter URL'en med data fra supabase

const categoriesGrid = document.querySelector(".categoriesGrid");

function init() {
  fetch(`https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/bob`, {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc",
    },
  })
    .then((res) => res.json())
    .then((data) => handleData(data));

  console.log("cat");
  console.log(data);
}

function handleData(info) {
  info.forEach(show);
}

function show(item) {
  const categoriesGrid = document.querySelector(".categoriesGrid");
  const templateCat = document.querySelector("template").content;
  const clone = templateCat.cloneNode(true);
  console.log("cat");
  console.log(info.category);
  categoriesGrid.appendChild(clone);
}

// function bygKatNav(data) {
//   //den piller en af hver ud og kategoriserer, looper igennem og tager en af hver
//   const katOnce = new Set(data.map((elm) => elm.category));
//   console.log(katOnce);
//   katOnce.forEach((kat) => {
//     //med if laver den IKKE en tom knap
//     if (kat != "") {
//       let knap = document.createElement("a");
//       knap.textContent = kat;
//       knap.href = `equipmentlist.html?category=${kat}`;
//       document.querySelector("#KatNav").appendChild(knap);
//     }
//   });
// }
