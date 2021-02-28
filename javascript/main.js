(function main() {
  var companies = [];
  var languages = [];
  var developers = [];
  var companies = [];
  var languages = [];

  const job = {
    EMPLOYED: "radi u firmi",
    UNEMPLOYED: "nezaposlen",
    FREELANCER: "freelancer",
  };

  const type = {
    FRONTEND: "frontend",
    BACKEND: "backend",
    FULLSTACK: "fullstack",
  };

  var validInput = false;

  while (!validInput) {
    var userChoice = prompt(
      "Unos (0), izmjena (1), ispis (2), brisanje (3) ili izlazak (4)?"
    );

    switch (userChoice) {
      case "0":
        input(developers, companies, languages, job, type);
        break;
      case "1":
        edit(developers, companies, languages, job, type);
        break;
      case "2":
        read(developers, companies, languages);
        break;
      case "3":
        remove(developers, companies, languages, job);
        break;
      case "4":
        validInput = true;
        break;
      default:
        validInput = false;
        break;
    }
  }

  console.log(developers);
})();

function input(developers, companies, languages, job, type) {
  var validInput = false;

  while (!validInput) {
    var userChoice = prompt("Unos developera (0), firmi (1) ili jezika (2)?");
    validInput = true;

    switch (userChoice) {
      case "0":
        inputDeveloper(developers, job, type, companies, languages);
        break;
      case "1":
        inputCompany(companies);
        break;
      case "2":
        inputLanguage(languages);
        break;
      default:
        validInput = false;
        break;
    }
  }
}

function edit(developers, companies, languages, job, type) {
  var validInput = false;

  while (!validInput) {
    var userChoice = prompt(
      "Izmjena developera (0), firmi (1) ili jezika (2)?"
    );
    validInput = true;

    switch (userChoice) {
      case "0":
        editDeveloper(developers, job, type, companies, languages);
        break;
      case "1":
        editCompany(companies);
        break;
      case "2":
        inputLanguage(languages);
        break;
      default:
        validInput = false;
        break;
    }
  }
}

function remove(developers, companies, languages, job) {
  var validInput = false;

  while (!validInput) {
    var userChoice = prompt(
      "Brisanje developera (0), firmi (1) ili jezika (2)?"
    );

    validInput = true;

    switch (userChoice) {
      case "0":
        removeDeveloper(developers, companies);
        break;
      case "1":
        removeCompany(developers, companies, job);
        break;
      case "2":
        removeLanguage(languages, developers);
        break;
      default:
        validInput = false;
        break;
    }
  }
}

function read(developers, companies, languages) {
  var validInput = false;

  while (!validInput) {
    var userChoice = prompt("Ispis developera (0), firmi (1) ili jezika (2)?");

    validInput = true;

    switch (userChoice) {
      case "0":
        var devChoice = prompt(
          "Običan ispis (0), po tipu (1), po programskom jeziku (2) ili po radnom odnosu (3)?"
        );
        switch (devChoice) {
          case "0":
            readDevelopers(developers);
            break;
          case "1":
            readDevelopersByType(developers);
          case "2":
            readDevelopersByLanguage(developers, languages);
          case "3":
            readDevelopersByJob(developers);
          default:
            break;
        }
        break;
      case "1":
        readCompanies(companies);
        break;
      case "2":
        readLanguages(languages);
        break;
      default:
        validInput = false;
        break;
    }
  }
}
