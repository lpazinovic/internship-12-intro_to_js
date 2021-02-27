companies = [];

function inputCompany() {
  companyName = prompt("Unesite ime firme.").trim();
  if (companyName == "") return;

  var company = {
    name: companyName,
    developers: [],
  };

  companies.push(company);
}

function addDeveloperToCompany(developer) {
  var company = companies.find(
    (element) => element.name == developer.companyName
  );
  company.developers.push(developer);
}
