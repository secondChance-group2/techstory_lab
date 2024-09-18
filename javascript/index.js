//https://wbceqwohnppgnysnvrai.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc

//henter URL'en med data fra supabase

const url =
  "https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl?select=category";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc";

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  console.log(cats);

  // we should filter categories here, to only show one
  cats.forEach(showCategory);
}

//Viser data

function showCategory(cat) {
  const template = document.querySelector("template").content;

  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `equipment.html?category${cat.category}`;

  document.querySelector("ol").appendChild(clone);
}
