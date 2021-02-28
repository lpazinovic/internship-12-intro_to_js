function confirmDelete() {
  var choice = confirm("Potvriditi brisanje?");
  return choice;
}

function printDeveloper(developer) {
  var devInfo = "";
  if (developer.company != null)
    devInfo = `${developer.id}: ${developer.name}: ${developer.job} : ${developer.company.name} -- ${developer.type}; poznaje:`;
  else
    devInfo = `${developer.id}: ${developer.name}: ${developer.job} -- ${developer.type}; poznaje:`;

  for (const language of developer.languages) {
    devInfo += ` ${language.name}`;
  }

  alert(devInfo);
}
