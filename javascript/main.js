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
    var userChoice = prompt("Unos (0), izmjena (1), ispis (2), brisanje (3) ili izlazak (4)?");

    switch (userChoice) {
      case "0":
        input(developers, companies, languages, job, type);
        break;
      case "1":
        edit(developers, companies, languages, job, type);
        break;
      case "2":
        read();
        break;
      case "3":
        delete();
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
