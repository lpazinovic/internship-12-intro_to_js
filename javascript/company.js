function inputCompany(){
    companyName = prompt("Unesite ime firme").trim();
    if (companyName == "") return;

    var company = {
        name: companyName,
    }

    return company;
}