function inputDeveloper(developers, job, type, companies, languages) {
  var devName = prompt("Unesite puno ime developera.");
  if (devName == "") return;

  devName = devName.trim().replace(/\s+/g, " ").toLowerCase();
  const devNameArray = devName.split(" ");
  for (let i = 0; i < devNameArray.length; i++) {
    devNameArray[i] =
      devNameArray[i][0].toUpperCase() + devNameArray[i].substr(1);
  }
  devName = devNameArray.join(" ");

  var devJob = null;

  while (devJob == null) {
    devJob = prompt(
      "Unesite radni odnos developera (nezaposlen, freelancer, radi u firmi)."
    )
      .trim()
      .toLowerCase();
    if (devJob == "") return;
    switch (devJob) {
      case "nezaposlen":
        devJob = job.UNEMPLOYED;
        break;
      case "freelancer":
        devJob = job.FREELANCER;
        break;
      case "radi u firmi":
        devJob = job.EMPLOYED;
        break;
      default:
        devJob = null;
        break;
    }
  }

  var devCompanyName = null;

  if (devJob == job.EMPLOYED) {
    while (devCompanyName == null) {
      devCompanyName = prompt("Unesite ime firme.");
      if (devCompanyName == "") return;
      if (
        companies.find((element) => element.name == devCompanyName) == undefined
      ) {
        devCompanyName = null;
        alert("Firma ne postoji.");
      }
    }
  }

  var devType = null;

  while (devType == null) {
    devType = prompt("Unesite tip developera (frontend, backend, fullstack).")
      .trim()
      .toLowerCase();
    if (devType == "") return;
    switch (devType) {
      case "frontend":
        devType = type.FRONTEND;
        break;
      case "backend":
        devType = type.BACKEND;
        break;
      case "fullstack":
        devType = type.FULLSTACK;
        break;
      default:
        devType = null;
        break;
    }
  }

  var devLanguage = null;
  var devLanguages = [];

  while (devLanguage != "") {
    devLanguage = prompt(
      "Unesite jezike koje developer poznaje (ostaviti prazno za prekid)"
    ).trim();
    if (devLanguage != "") {
      let language = {
        name: devLanguage,
      };

      devLanguages.push(language);

      if (languages.find((element) => element == language) == undefined)
        languages.push(language);
    }
  }

  var devCompany = companies.find((element) => element.name == devCompanyName);

  var developer = {
    name: devName,
    job: devJob,
    company: devCompany,
    type: devType,
    languages: devLanguages,
  };

  developers.push(developer);
  if (developer.job == job.EMPLOYED)
    addDeveloperToCompany(developer, companies);
  developers.sort();
}

function editDeveloper(developers, job, type, companies, languages) {
  var devName = prompt("Unesite ime developera kojeg treba urediti.").trim();

  if (devName == "") return;
  var developer = developers.find((element) => element.name == devName);
  if (developer != undefined) {
    alert("Uređivanje developera. Ostaviti prazno za ne spremanje promjena.");
    var newName = prompt("Unesite novo ime developera.");
    if (newName != "" && newName != null) {
      newName = newName.trim().replace(/\s+/g, " ").toLowerCase();
      const newNameArray = newName.split(" ");
      for (let i = 0; i < devNameArray.length; i++) {
        newNameArray[i] =
          newNameArray[i][0].toUpperCase() + newNameArray[i].substr(1);
      }
      devName = devNameArray.join(" ");
    }

    var newJob = null;

    while (newJob == null) {
      newJob = prompt(
        "Unesite novi radni odnos developera (nezaposlen, freelancer, radi u firmi)."
      )
        .trim()
        .toLowerCase();
      if (newJob == "") newJob = developer.job;
      switch (newJob) {
        case "nezaposlen":
          newJob = job.UNEMPLOYED;
          break;
        case "freelancer":
          newJob = job.FREELANCER;
          break;
        case "radi u firmi":
          newJob = job.EMPLOYED;
          break;
        default:
          newJob = null;
          break;
      }
    }

    var newCompanyName = null;

    if (newJob == job.EMPLOYED) {
      while (newCompanyName == null) {
        newCompanyName = prompt("Unesite ime nove firme.");
        if (newCompanyName == "") newCompanyName = developer.company.name;
        if (
          companies.find((element) => element.name == newCompanyName) ==
          undefined
        ) {
          newCompanyName = null;
          alert("Firma ne postoji.");
        }
      }
    }

    var newType = null;

    while (newType == null) {
      newType = prompt(
        "Unesite novi tip developera (frontend, backend, fullstack)."
      )
        .trim()
        .toLowerCase();
      if (newType == "") newType = developer.job;
      switch (newType) {
        case "frontend":
          newType = type.FRONTEND;
          break;
        case "backend":
          newType = type.BACKEND;
          break;
        case "fullstack":
          newType = type.FULLSTACK;
          break;
        default:
          newType = null;
          break;
      }
    }

    var newLanguageName = null;

    while (newLanguageName != "") {
      newLanguageName = prompt(
        "Unesite nove jezike koje developer poznaje (ostaviti prazno za prekid)"
      ).trim();
      if (newLanguageName != "") {
        var newLanguage = {
          name: newLanguageName,
        };

        if (
          developer.languages.find((element) => element == newLanguage) ==
          undefined
        )
          developer.languages.push(newLanguage);

        if (languages.find((element) => element == newLanguage) == undefined)
          languages.push(newLanguage);
      }
    }

    var newCompany = companies.find(
      (element) => element.name == newCompanyName
    );

    developer.name = newName;
    developer.job = newJob;
    developer.type = newType;

    removeDeveloperFromCompany(developer, companies);

    developer.company = newCompany;

    addDeveloperToCompany(developer, companies);

    developers.sort();
  } else {
    alert("Developer ne postoji.");
  }
}

function removeDeveloper(developers, companies) {
  var developerName = prompt("Unesite ime developera kojeg želite ukloniti.");

  var developer = developers.find((element) => element.name == developerName);

  if (developer != undefined && confirmDelete()) {
    developers = developers.filter(function (value, index, array) {
      return value != developer;
    });
    removeDeveloperFromCompany(developer, companies);
  }
}
