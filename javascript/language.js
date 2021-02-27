function inputLanguage(){
    languageName = prompt("Unesite ime jezika.").trim();
    if (languageName == "") return;

    var language = {
        name: languageName,
    }

    return language;
}