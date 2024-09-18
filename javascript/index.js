//https://wbceqwohnppgnysnvrai.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc

//henter URL'en med data fra supabase

const url = "https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/tsl";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc";

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(bygKatNav);

function bygKatNav(data) {
  //den piller en af hver ud og kategoriserer, looper igennem og tager en af hver
  const katOnce = new Set(data.map((elm) => elm.category));
  console.log(katOnce);
  katOnce.forEach((kat) => {
    //med if laver den IKKE en tom knap
    if (kat != "") {
      let knap = document.createElement("a");
      knap.textContent = kat;
      knap.href = `liste.html?kategori=${kat}`;
      document.querySelector("#KatNav").appendChild(knap);
    }
  });
}
