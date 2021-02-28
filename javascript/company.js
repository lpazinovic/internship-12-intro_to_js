function inputCompany(companies) {
  companyName = prompt("Unesite ime firme.").trim();
  if (companyName == "") return;

  var company = {
    name: companyName,
    developers: [],
  };

  companies.push(company);
  companies.sort();
}

function addDeveloperToCompany(developer, companies) {
  var company = companies.find((element) => element == developer.company);
  company.developers.push(developer);
}

function removeDeveloperFromCompany(developer, companies) {
  var company = companies.find((element) => element == developer.company);
  company.developers = company.developers.filter(function (
    value,
    index,
    array
  ) {
    return value != developer;
  });
}

function editCompany(companies) {
  companyName = prompt("Unesite ime firme koju treba urediti.").trim();
  if (companyName == "") return;
  var company = companies.find((element) => element.name == companyName);
  if (company != undefined) {
    alert("Uređivanje firme. Ostaviti prazno za ne spremiti promjene.");
    var newName = prompt("Unesite novo ime firme.");
    if (newName != "" && newName != null) company.name = newName;
    companies.sort();
  } else {
    alert("Firma ne postoji.");
  }
}

function removeCompany(developers, companies, job) {
  var companyName = prompt("Unesite ime firme koju želite ukloniti.");

  var company = companies.find((element) => (element.name = companyName));

  if (company != undefined && confirmDelete()) {
    companies = companies.filter(function (value, index, array) {
      return value != company;
    });

    var developersToRemove = developers.filter(
      (element) => element.company == company
    );
    for (let developer of developersToRemove) {
      developer.company = null;
      developer.job = job.UNEMPLOYED;
    }
  }
}
