//https://wbceqwohnppgnysnvrai.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc

//henter URL'en med data fra supabase

fetch(
  "https://wbceqwohnppgnysnvrai.supabase.co/rest/v1/products?brand=eq.Canon",
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Vxd29obnBwZ255c252cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU5NTIsImV4cCI6MjA0MTU0MTk1Mn0.Pd99gTQP-qyB1L2B6oiqnON_HDXMovH-FgbFuDLpscc",
    },
  }
)
  .then((res) => res.json())
  .then(showData);

//Viser data

function showData(items) {
  console.log(items);
}

//Data ud i console
