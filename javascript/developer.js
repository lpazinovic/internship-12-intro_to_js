function inputDeveloper() {
  var devName = prompt("Unesite puno ime developera.");
  if (devName == "") return;
  devName = devName.trim().replace(/\s+/g, " ").toLowerCase();
  const devNameArray = devName.split(" ");
  for (let i = 0; i < devNameArray.length; i++) {
    devNameArray[i] =
      devNameArray[i][0].toUpperCase() + devNameArray[i].substr(1);
  }
  devName = devNameArray.join(" ");

  const job = {
    EMPLOYED: "radi u firmi",
    UNEMPLOYED: "nezaposlen",
    FREELANCER: "freelancer",
  };

  var devJob = null;

  while (devJob == null) {
    devJob = prompt(
      "Unesite radni odnos developera (nezaposlen, freelancer, radi u firmi)."
    ).trim();
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
    devCompanyName = prompt("Unesite ime firme.");
    if (companyName == "") return;
  }

  const type = {
    FRONTEND: "frontend",
    BACKEND: "backend",
    FULLSTACK: "fullstack",
  };

  var devType = null;

  while (devType == null) {
    devType = prompt(
      "Unesite tip developera (frontend, backend, fullstack)."
    ).trim();
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
      "Unesite jezik kojeg developer poznaje (ostaviti prazno za prekid)"
    ).trim();
    if (devLanguage != "") devLanguages.push(devLanguage);
  }

  var developer = {
    name: devName,
    job: devJob,
    companyName: devCompanyName,
    type: devType,
    languages: devLanguages,
  };

  return developer;
}
