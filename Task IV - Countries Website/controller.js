import View from "./view.js";
import * as Model from "./model.js";

function showAll(filter = "", search = "") {
  const allCountries = Model.getAll(filter, search);
  View.renderAllCountries(allCountries);
}

async function showCountry() {
  const hash = document.location.hash.slice(1);
  if (!hash) return View.renderAllCountries(Model.countries);

  const country = await Model.getCountry(hash);
  View.renderResult(country);
  View.backHandler();
}

async function init() {
  View.handlers(showCountry, Model.saveAll);
  View.renderFilteredValue(showAll);
  View.renderSearchedValue(showAll);
}

init();
