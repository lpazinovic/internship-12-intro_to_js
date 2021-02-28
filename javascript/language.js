function inputLanguage(languages) {
  var languageName = prompt("Unesite ime jezika.").trim();
  if (languageName == "") return;

  var language = {
    name: languageName,
  };

  languages.push(language);
  languages.sort();
}

function removeLanguage(languages, developers) {
  var languageName = prompt("Unesite ime jezika.").trim();
  if ((languageName = "")) return;

  var language = languages.find((element) => element.name == languageName);

  if (language != undefined && confirmDelete()) {
    languages = languages.filter(function (value, index, arr) {
      return value != language;
    });

    var developersToRemove = developers.filter(
      (element) => element.language == language
    );
    for (let developer of developersToRemove) {
      developer.languages = developer.languages.filter(function (
        value,
        index,
        arr
      ) {
        return value != language;
      });
    }
  } else {
    alert("Brisanje otkazano.");
  }
}

function readLanguages(languages) {
  for (language of languages) {
    alert(`${language.name}`);
  }
}
