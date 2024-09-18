// Funktion til at vise/skjule søgefeltet
function toggleSearch() {
  const searchField = document.getElementById("search-field");
  if (searchField.style.display === "none" || searchField.style.display === "") {
    searchField.style.display = "block"; // Vis søgefeltet
  } else {
    searchField.style.display = "none"; // Skjul søgefeltet
  }
}
