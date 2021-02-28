function inputCompany(companies) {
  companyName = prompt("Unesite ime firme.").trim();
  if (companyName == "") return;

  var company = {
    id: null,
    name: companyName,
    developers: [],
  };

  companies.push(company);
  companies.sort();
}

function addDeveloperToCompany(developer, companies) {
  var company = companies.find((element) => element == developer.company);
  if (company != undefined) company.developers.push(developer);
}

function removeDeveloperFromCompany(developer, companies) {
  var company = companies.find((element) => element == developer.company);
  if (company != undefined) {
    company.developers = company.developers.filter(function (
      value,
      index,
      array
    ) {
      return value != developer;
    });
  }
}

function readCompanies(companies) {
  for (company of companies) {
    let developers = "";
    for (developer of company.developers) {
      developers += `${developer.name} `;
    }
    developers.trim();
    alert(`${company.id}: ${company.name}: ${developers}`);
  }
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
  } else {
    alert("Brisanje otkazano.");
  }
}
